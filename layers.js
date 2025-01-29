var wms_layers = [];

var format_1940_0 = new ol.format.GeoJSON();
var features_1940_0 = format_1940_0.readFeatures(json_1940_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1940_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1940_0.addFeatures(features_1940_0);
var lyr_1940_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1940_0, 
                style: style_1940_0,
                popuplayertitle: '1940',
                interactive: false,
                title: '<img src="styles/legend/1940_0.png" /> 1940'
            });

lyr_1940_0.setVisible(true);
var layersList = [lyr_1940_0];
lyr_1940_0.set('fieldAliases', {'Id': 'Id', 'NoteType': 'NoteType', 'Name': 'Name', 'Notes': 'Notes', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_1940_0.set('fieldImages', {'Id': 'TextEdit', 'NoteType': 'TextEdit', 'Name': 'TextEdit', 'Notes': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_1940_0.set('fieldLabels', {'Id': 'no label', 'NoteType': 'no label', 'Name': 'no label', 'Notes': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_1940_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});