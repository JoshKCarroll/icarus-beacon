/*jslint browser: true*/
/*global Tangram, gui */

map = (function () {
    /*** Map ***/

    var map = L.map('map');

    var layer = Tangram.leafletLayer({
        scene: 'scene.yaml',
    });

    layer.addTo(map);

    map.attributionControl.remove();
    map.zoomControl.remove();

    return map;

}());

function interval(func, wait, times){
    var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try{
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    throw e.toString();
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
};

function repeat_load() {
    interval(function() { 
        //alert(map.layer)
        map.eachLayer(function (layer) {
            layers = layer.scene.config.layers
            if(layers.roads.draw.lines.color == 'blue') {
                layers.roads.draw.lines.color = 'green';
            } else {
                layers.roads.draw.lines.color = 'blue';
            }
            layer.scene.updateConfig();
        });
    }, 3000);  
}
