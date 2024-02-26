var wms_layers = [];

var format_StoraVattenriketrundan_0 = new ol.format.GeoJSON();
var features_StoraVattenriketrundan_0 = format_StoraVattenriketrundan_0.readFeatures(json_StoraVattenriketrundan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StoraVattenriketrundan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StoraVattenriketrundan_0.addFeatures(features_StoraVattenriketrundan_0);
var lyr_StoraVattenriketrundan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StoraVattenriketrundan_0, 
                style: style_StoraVattenriketrundan_0,
                popuplayertitle: "Stora Vattenriketrundan",
                interactive: true,
                title: '<img src="styles/legend/StoraVattenriketrundan_0.png" /> Stora Vattenriketrundan'
            });
var format_Linnerundan_1 = new ol.format.GeoJSON();
var features_Linnerundan_1 = format_Linnerundan_1.readFeatures(json_Linnerundan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linnerundan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linnerundan_1.addFeatures(features_Linnerundan_1);
var lyr_Linnerundan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Linnerundan_1, 
                style: style_Linnerundan_1,
                popuplayertitle: "Linnerundan",
                interactive: true,
                title: '<img src="styles/legend/Linnerundan_1.png" /> Linnerundan'
            });
var format_Skneleden_2 = new ol.format.GeoJSON();
var features_Skneleden_2 = format_Skneleden_2.readFeatures(json_Skneleden_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Skneleden_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skneleden_2.addFeatures(features_Skneleden_2);
var lyr_Skneleden_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Skneleden_2, 
                style: style_Skneleden_2,
                popuplayertitle: "Skåneleden",
                interactive: true,
                title: '<img src="styles/legend/Skneleden_2.png" /> Skåneleden'
            });

        var lyr_CartoLight_3 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_besksplatser_4 = new ol.format.GeoJSON();
var features_besksplatser_4 = format_besksplatser_4.readFeatures(json_besksplatser_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_besksplatser_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_besksplatser_4.addFeatures(features_besksplatser_4);
var lyr_besksplatser_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_besksplatser_4, 
                style: style_besksplatser_4,
                popuplayertitle: "besöksplatser",
                interactive: true,
                title: '<img src="styles/legend/besksplatser_4.png" /> besöksplatser'
            });
var format_KVBR_polygon_5 = new ol.format.GeoJSON();
var features_KVBR_polygon_5 = format_KVBR_polygon_5.readFeatures(json_KVBR_polygon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KVBR_polygon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KVBR_polygon_5.addFeatures(features_KVBR_polygon_5);
var lyr_KVBR_polygon_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KVBR_polygon_5, 
                style: style_KVBR_polygon_5,
                popuplayertitle: "KVBR_polygon",
                interactive: true,
                title: '<img src="styles/legend/KVBR_polygon_5.png" /> KVBR_polygon'
            });
var format_recreation_6 = new ol.format.GeoJSON();
var features_recreation_6 = format_recreation_6.readFeatures(json_recreation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_recreation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_recreation_6.addFeatures(features_recreation_6);
var lyr_recreation_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_recreation_6, 
                style: style_recreation_6,
                popuplayertitle: "recreation",
                interactive: true,
                title: '<img src="styles/legend/recreation_6.png" /> recreation'
            });
var group_Leder = new ol.layer.Group({
                                layers: [lyr_StoraVattenriketrundan_0,lyr_Linnerundan_1,lyr_Skneleden_2,],
                                title: "Leder"});

lyr_StoraVattenriketrundan_0.setVisible(true);lyr_Linnerundan_1.setVisible(true);lyr_Skneleden_2.setVisible(true);lyr_CartoLight_3.setVisible(true);lyr_besksplatser_4.setVisible(true);lyr_KVBR_polygon_5.setVisible(true);lyr_recreation_6.setVisible(true);
var layersList = [group_Leder,lyr_CartoLight_3,lyr_besksplatser_4,lyr_KVBR_polygon_5,lyr_recreation_6];
lyr_StoraVattenriketrundan_0.set('fieldAliases', {'id': 'id', });
lyr_Linnerundan_1.set('fieldAliases', {'fid': 'fid', 'objektiden': 'objektiden', 'skapad': 'skapad', 'objekttypn': 'objekttypn', 'objekttyp': 'objekttyp', 'vagutforan': 'vagutforan', 'skoterkorn': 'skoterkorn', 'ruskmarker': 'ruskmarker', 'alternativ': 'alternativ', });
lyr_Skneleden_2.set('fieldAliases', {'fid': 'fid', 'objektiden': 'objektiden', 'skapad': 'skapad', 'objekttypn': 'objekttypn', 'objekttyp': 'objekttyp', 'vagutforan': 'vagutforan', 'skoterkorn': 'skoterkorn', 'ruskmarker': 'ruskmarker', 'alternativ': 'alternativ', 'avfartsvag': 'avfartsvag', 'cirkulatio': 'cirkulatio', 'bro_och_tu': 'bro_och_tu', 'vardvagnum': 'vardvagnum', 'gastvag1nu': 'gastvag1nu', 'gastvag2nu': 'gastvag2nu', 'layer': 'layer', 'path': 'path', });
lyr_besksplatser_4.set('fieldAliases', {'id': 'id', 'places': 'places', 'x': 'x', 'y': 'y', });
lyr_KVBR_polygon_5.set('fieldAliases', {'ORIGINALID': 'ORIGINALID', 'AMNESKOD': 'AMNESKOD', 'NAMN': 'NAMN', 'TILLKDATUM': 'TILLKDATUM', 'ANSVARIG': 'ANSVARIG', 'BESKRIVNIN': 'BESKRIVNIN', 'REF': 'REF', 'OBJTYP': 'OBJTYP', 'ID': 'ID', 'ID1': 'ID1', 'OBJTYPNR': 'OBJTYPNR', });
lyr_recreation_6.set('fieldAliases', {'fid': 'fid', 'elemId': 'elemId', 'responId': 'responId', 'respNumb': 'respNumb', 'popup': 'popup', 'filtered': 'filtered', });
lyr_StoraVattenriketrundan_0.set('fieldImages', {'id': 'TextEdit', });
lyr_Linnerundan_1.set('fieldImages', {'fid': 'TextEdit', 'objektiden': 'TextEdit', 'skapad': 'TextEdit', 'objekttypn': 'TextEdit', 'objekttyp': 'TextEdit', 'vagutforan': 'TextEdit', 'skoterkorn': 'TextEdit', 'ruskmarker': 'TextEdit', 'alternativ': 'TextEdit', });
lyr_Skneleden_2.set('fieldImages', {'fid': 'TextEdit', 'objektiden': 'TextEdit', 'skapad': 'TextEdit', 'objekttypn': 'TextEdit', 'objekttyp': 'TextEdit', 'vagutforan': 'TextEdit', 'skoterkorn': 'TextEdit', 'ruskmarker': 'TextEdit', 'alternativ': 'TextEdit', 'avfartsvag': 'TextEdit', 'cirkulatio': 'TextEdit', 'bro_och_tu': 'TextEdit', 'vardvagnum': 'TextEdit', 'gastvag1nu': 'TextEdit', 'gastvag2nu': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_besksplatser_4.set('fieldImages', {'id': 'Range', 'places': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_KVBR_polygon_5.set('fieldImages', {'ORIGINALID': 'TextEdit', 'AMNESKOD': 'TextEdit', 'NAMN': 'TextEdit', 'TILLKDATUM': 'TextEdit', 'ANSVARIG': 'TextEdit', 'BESKRIVNIN': 'TextEdit', 'REF': 'TextEdit', 'OBJTYP': 'TextEdit', 'ID': 'TextEdit', 'ID1': 'TextEdit', 'OBJTYPNR': 'TextEdit', });
lyr_recreation_6.set('fieldImages', {'fid': 'TextEdit', 'elemId': 'TextEdit', 'responId': 'TextEdit', 'respNumb': 'TextEdit', 'popup': 'TextEdit', 'filtered': 'TextEdit', });
lyr_StoraVattenriketrundan_0.set('fieldLabels', {});
lyr_Linnerundan_1.set('fieldLabels', {});
lyr_Skneleden_2.set('fieldLabels', {});
lyr_besksplatser_4.set('fieldLabels', {'id': 'no label', 'places': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_KVBR_polygon_5.set('fieldLabels', {'ORIGINALID': 'no label', 'AMNESKOD': 'no label', 'NAMN': 'no label', 'TILLKDATUM': 'no label', 'ANSVARIG': 'no label', 'BESKRIVNIN': 'no label', 'REF': 'no label', 'OBJTYP': 'no label', 'ID': 'no label', 'ID1': 'no label', 'OBJTYPNR': 'no label', });
lyr_recreation_6.set('fieldLabels', {'fid': 'no label', 'elemId': 'no label', 'responId': 'no label', 'respNumb': 'no label', 'popup': 'no label', 'filtered': 'no label', });
lyr_recreation_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});