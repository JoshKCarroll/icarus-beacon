#include <stdio.h>
#include <fcntl.h>
#include <assert.h>
#include <time.h>
#include <sys/time.h>
#include <sys/shm.h>

#include <stdlib.h>
#include <string.h>
#include <termios.h>

#include <curl/curl.h>

#include "context.h"
#include "tangram.h"
#include "platform.h"

#include <iostream>
#include "hud/hud.h"
#include "gps.h"
#include <unistd.h>
Hud m_hud;

#define KEY_ESC      113    // q
#define KEY_ZOOM_IN  45     // - 
#define KEY_ZOOM_OUT 61     // =
#define KEY_UP       119    // w
#define KEY_LEFT     97     // a
#define KEY_RIGHT    115    // s
#define KEY_DOWN     122    // z

struct timeval tv;
unsigned long long timePrev, timeStart; 
static double delta;

static bool bUpdate = true;

//==============================================================================
void setup();
void newFrame();

int main(int argc, char **argv){

    for (int i = 1; i < argc ; i++){
        if ( std::string(argv[i]) == "-m" ){
            // bMouse = true;
            m_hud.setDrawCursor(true);
        }
    }
    
    // Start OpenGL context
    initGL(argc, argv);

    /* Do Curl Init */
    curl_global_init(CURL_GLOBAL_DEFAULT);
    
    // Set background color and clear buffers
    Tangram::initialize();
    Tangram::resize(getWindowWidth(), getWindowHeight());
    
    setup();

    // Start clock
    gettimeofday(&tv, NULL);
    timeStart = timePrev = (unsigned long long)(tv.tv_sec) * 1000 + (unsigned long long)(tv.tv_usec) / 1000;

    bool bGPS = false;
    double minDelta = 1.0;
    while (bUpdate) {
        updateGL();

        processNetworkQueue();

        if (getRenderRequest()) {
            setRenderRequest(false);
            gettimeofday( &tv, NULL);
            timePrev = (unsigned long long)(tv.tv_sec) * 1000 + (unsigned long long)(tv.tv_usec) / 1000;
            newFrame();
            gettimeofday( &tv, NULL);
            unsigned long long timeNow = (unsigned long long)(tv.tv_sec) * 1000 + (unsigned long long)(tv.tv_usec) / 1000;
            delta = ((double)(timeNow - timePrev))*0.001;

            if (delta < minDelta){
                minDelta = delta;
            }
        } else {

            if (!bGPS) {
                float lat = 0.0;
                float lon = 0.0; 
                bGPS = getLocation(&lat,&lon);
            } else {
                usleep(1000000.0*minDelta);
            }
            
        }
    }
    
    Tangram::teardown();
    curl_global_cleanup();
    closeGL();
    return 0;
}

void setup() {
    m_hud.init();
}

void newFrame() {
    // logMsg("New frame (delta %f msec)\n",delta);

    Tangram::update(delta);

    // Render        
    Tangram::render(); 

//    m_hud.draw();

    renderGL();
}

//======================================================================= EVENTS

void onKeyPress(int _key) {
    switch (_key) {
        case KEY_ZOOM_IN:
            Tangram::handlePinchGesture(0.0,0.0,0.5);
            break;
        case KEY_ZOOM_OUT:
            Tangram::handlePinchGesture(0.0,0.0,2.0);
            break;
        case KEY_UP:
            Tangram::handlePanGesture(0.0,0.0,0.0,100.0);
            break;
        case KEY_DOWN:
            Tangram::handlePanGesture(0.0,0.0,0.0,-100.0);
            break;
        case KEY_LEFT:
            Tangram::handlePanGesture(0.0,0.0,100.0,0.0);
            break;
        case KEY_RIGHT:
            Tangram::handlePanGesture(0.0,0.0,-100.0,0.0);
            break;
        case KEY_ESC:
            bUpdate = false;
            break;
        // default:
            // logMsg(" -> %i\n",_key);
    }
    requestRender();
}

void onMouseMove(float _x, float _y) {
    requestRender();
}

void onMouseClick(float _x, float _y, int _button) {
    m_hud.cursorClick(_x,_y,_button);
    requestRender();
}

void onMouseDrag(float _x, float _y, int _button) {

    if( _button == 1 ){

        if (m_hud.isInUse()){
            m_hud.cursorDrag(_x,_y,_button);
        } else {
            Tangram::handlePanGesture(  _x-getMouseVelX()*1.0, 
                                        _y+getMouseVelY()*1.0, 
                                        _x,
                                        _y);
        }
        
    } else if( _button == 2 ){
        if ( getKeyPressed() == 'r') {
            float scale = -0.05;
            float rot = atan2(getMouseVelY(),getMouseVelX());
            if( _x < getWindowWidth()/2.0 ) {
                scale *= -1.0;
            }
            Tangram::handleRotateGesture(getWindowWidth()/2.0, getWindowHeight()/2.0, rot*scale);
        } else if ( getKeyPressed() == 't') {
            Tangram::handleShoveGesture(getMouseVelY()*0.005);
        } else {
            Tangram::handlePinchGesture(getWindowWidth()/2.0, getWindowHeight()/2.0, 1.0 + getMouseVelY()*0.001);
        }
        
    }
    requestRender();
}

void onMouseRelease(float _x, float _y) {
    m_hud.cursorRelease(_x,_y);
    requestRender();
}

void onViewportResize(int _newWidth, int _newHeight) {
    Tangram::resize(_newWidth,_newHeight);
    requestRender();
}
