/*jslint browser: true*/
/*global Tangram, gui */

map = (function () {
    /*** Map ***/

    var map = L.map('map');

    var layer = Tangram.leafletLayer({
        scene: 'scene.yaml',
    });

    layer.addTo(map);

    map.setView([40.7864, -119.2065], 13.8);

    return map;

}());

function repeat_load() {
    setInterval(function() { 
        //alert(map.layer)
        map.eachLayer(function (layer) {
            layers = layer.scene.config.layers
            //if(layers.icarus.visible) {
            //    layers.roads.draw.lines.color = 'blue';
            //    layers.icarus.visible = false;
            //} else {
            //    layers.roads.draw.lines.color = 'green';
            //    layers.icarus.visible = true;
            //}
            layer.scene.updateConfig();
            //layer.scene.updateConfig( { rebuild: true } );
            //alert(layer.scene.config.styles.icarus.texture);
        });
        //document.body.map.layer.scene.setDataSource(
        //    'icarus', {type: 'GeoJSON', url: 'icarus.json'})
    }, 3000);  
}
