ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:27700").setExtent([458228.263395, 321819.274089, 466628.263395, 337146.205195]);
var wms_layers = [];

var format_AllotmentBedrockPolygon_0 = new ol.format.GeoJSON();
var features_AllotmentBedrockPolygon_0 = format_AllotmentBedrockPolygon_0.readFeatures(json_AllotmentBedrockPolygon_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_AllotmentBedrockPolygon_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllotmentBedrockPolygon_0.addFeatures(features_AllotmentBedrockPolygon_0);
var lyr_AllotmentBedrockPolygon_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllotmentBedrockPolygon_0, 
                style: style_AllotmentBedrockPolygon_0,
                popuplayertitle: 'AllotmentBedrockPolygon',
                interactive: true,
    title: 'AllotmentBedrockPolygon<br />\
    <img src="styles/legend/AllotmentBedrockPolygon_0_0.png" /> Barnby Member - Mudstone<br />\
    <img src="styles/legend/AllotmentBedrockPolygon_0_1.png" /> Barnstone Member - Mudstone and limestone, interbedded<br />\
    <img src="styles/legend/AllotmentBedrockPolygon_0_2.png" /> Cotham Member - Mudstone<br />\
    <img src="styles/legend/AllotmentBedrockPolygon_0_3.png" /> Westbury Formation -Mudstone<br />\
    <img src="styles/legend/AllotmentBedrockPolygon_0_4.png" /> Blue Anchor Formation - Mudstone<br />\
    <img src="styles/legend/AllotmentBedrockPolygon_0_5.png" /> Branscombe Mudstone - Mudstone<br />' });
var format_AllotmentSuperficialPolygon_1 = new ol.format.GeoJSON();
var features_AllotmentSuperficialPolygon_1 = format_AllotmentSuperficialPolygon_1.readFeatures(json_AllotmentSuperficialPolygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_AllotmentSuperficialPolygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllotmentSuperficialPolygon_1.addFeatures(features_AllotmentSuperficialPolygon_1);
var lyr_AllotmentSuperficialPolygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllotmentSuperficialPolygon_1, 
                style: style_AllotmentSuperficialPolygon_1,
                popuplayertitle: 'AllotmentSuperficialPolygon',
                interactive: true,
    title: 'AllotmentSuperficialPolygon<br />\
    <img src="styles/legend/AllotmentSuperficialPolygon_1_0.png" /> ALV-XCZSV<br />\
    <img src="styles/legend/AllotmentSuperficialPolygon_1_1.png" /> GFDMP-XSV<br />\
    <img src="styles/legend/AllotmentSuperficialPolygon_1_2.png" /> HEAD-XCZSV<br />\
    <img src="styles/legend/AllotmentSuperficialPolygon_1_3.png" /> ODT-DMTN<br />\
    <img src="styles/legend/AllotmentSuperficialPolygon_1_4.png" /> ODTL-DMTN<br />\
    <img src="styles/legend/AllotmentSuperficialPolygon_1_5.png" /> THT-DMTN<br />\
    <img src="styles/legend/AllotmentSuperficialPolygon_1_6.png" /> TILL-DMTN<br />' });
var format_AllotmentBedrockLine_2 = new ol.format.GeoJSON();
var features_AllotmentBedrockLine_2 = format_AllotmentBedrockLine_2.readFeatures(json_AllotmentBedrockLine_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_AllotmentBedrockLine_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllotmentBedrockLine_2.addFeatures(features_AllotmentBedrockLine_2);
var lyr_AllotmentBedrockLine_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllotmentBedrockLine_2, 
                style: style_AllotmentBedrockLine_2,
                popuplayertitle: 'AllotmentBedrockLine',
                interactive: true,
    title: 'AllotmentBedrockLine<br />\
    <img src="styles/legend/AllotmentBedrockLine_2_0.png" /> Border<br />\
    <img src="styles/legend/AllotmentBedrockLine_2_1.png" /> Fault, inferred<br />\
    <img src="styles/legend/AllotmentBedrockLine_2_2.png" /> Bedrock boundary<br />' });
var format_AllotmentSuperficialBoundary_3 = new ol.format.GeoJSON();
var features_AllotmentSuperficialBoundary_3 = format_AllotmentSuperficialBoundary_3.readFeatures(json_AllotmentSuperficialBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_AllotmentSuperficialBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllotmentSuperficialBoundary_3.addFeatures(features_AllotmentSuperficialBoundary_3);
var lyr_AllotmentSuperficialBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllotmentSuperficialBoundary_3, 
                style: style_AllotmentSuperficialBoundary_3,
                popuplayertitle: 'AllotmentSuperficialBoundary',
                interactive: true,
    title: 'AllotmentSuperficialBoundary<br />\
    <img src="styles/legend/AllotmentSuperficialBoundary_3_0.png" /> Border<br />\
    <img src="styles/legend/AllotmentSuperficialBoundary_3_1.png" /> Superficial boundary<br />' });

lyr_AllotmentBedrockPolygon_0.setVisible(true);lyr_AllotmentSuperficialPolygon_1.setVisible(true);lyr_AllotmentBedrockLine_2.setVisible(true);lyr_AllotmentSuperficialBoundary_3.setVisible(true);
var layersList = [lyr_AllotmentBedrockPolygon_0,lyr_AllotmentSuperficialPolygon_1,lyr_AllotmentBedrockLine_2,lyr_AllotmentSuperficialBoundary_3];
lyr_AllotmentBedrockPolygon_0.set('fieldAliases', {'FID': 'FID', 'LEX_RCS': 'LEX_RCS', 'LEX': 'LEX', 'LEX_RCS_D': 'LEX_RCS_D', 'MAX_TIME_D': 'MAX_TIME_D', 'MIN_TIME_D': 'MIN_TIME_D', 'SHEET': 'SHEET', 'FURTHER_IN': 'FURTHER_IN', 'MAX_PERIOD': 'MAX_PERIOD', 'MIN_PERIOD': 'MIN_PERIOD', 'ENVIRONMEN': 'ENVIRONMEN', });
lyr_AllotmentSuperficialPolygon_1.set('fieldAliases', {'FID': 'FID', 'LEX-RCS': 'LEX-RCS', 'LEX': 'LEX', 'LEX_RCS_D': 'LEX_RCS_D', 'MAX_TIME_D': 'MAX_TIME_D', 'SHEET': 'SHEET', 'FURTHER_IN': 'FURTHER_IN', 'MAX_PERIOD': 'MAX_PERIOD', 'SETTING_D': 'SETTING_D', 'SETTINGPLU': 'SETTINGPLU', 'ENVIRONMEN': 'ENVIRONMEN', 'Legend': 'Legend', });
lyr_AllotmentBedrockLine_2.set('fieldAliases', {'id': 'id', 'LineType': 'LineType', });
lyr_AllotmentSuperficialBoundary_3.set('fieldAliases', {'id': 'id', 'LineType': 'LineType', });
lyr_AllotmentBedrockPolygon_0.set('fieldImages', {'FID': 'Hidden', 'LEX_RCS': 'TextEdit', 'LEX': 'TextEdit', 'LEX_RCS_D': 'TextEdit', 'MAX_TIME_D': 'TextEdit', 'MIN_TIME_D': 'TextEdit', 'SHEET': 'TextEdit', 'FURTHER_IN': 'TextEdit', 'MAX_PERIOD': 'TextEdit', 'MIN_PERIOD': 'TextEdit', 'ENVIRONMEN': 'TextEdit', });
lyr_AllotmentSuperficialPolygon_1.set('fieldImages', {'FID': 'Hidden', 'LEX-RCS': 'TextEdit', 'LEX': 'TextEdit', 'LEX_RCS_D': 'TextEdit', 'MAX_TIME_D': 'TextEdit', 'SHEET': 'TextEdit', 'FURTHER_IN': 'TextEdit', 'MAX_PERIOD': 'TextEdit', 'SETTING_D': 'TextEdit', 'SETTINGPLU': 'TextEdit', 'ENVIRONMEN': 'TextEdit', 'Legend': 'TextEdit', });
lyr_AllotmentBedrockLine_2.set('fieldImages', {'id': 'Hidden', 'LineType': 'Classification', });
lyr_AllotmentSuperficialBoundary_3.set('fieldImages', {'id': 'Hidden', 'LineType': 'Classification', });
lyr_AllotmentBedrockPolygon_0.set('fieldLabels', {'LEX_RCS': 'inline label - always visible', 'LEX': 'no label', 'LEX_RCS_D': 'inline label - always visible', 'MAX_TIME_D': 'inline label - always visible', 'MIN_TIME_D': 'inline label - always visible', 'SHEET': 'inline label - always visible', 'FURTHER_IN': 'inline label - always visible', 'MAX_PERIOD': 'inline label - always visible', 'MIN_PERIOD': 'inline label - always visible', 'ENVIRONMEN': 'inline label - always visible', });
lyr_AllotmentSuperficialPolygon_1.set('fieldLabels', {'LEX-RCS': 'inline label - always visible', 'LEX': 'inline label - always visible', 'LEX_RCS_D': 'inline label - always visible', 'MAX_TIME_D': 'inline label - always visible', 'SHEET': 'inline label - always visible', 'FURTHER_IN': 'inline label - always visible', 'MAX_PERIOD': 'inline label - always visible', 'SETTING_D': 'inline label - always visible', 'SETTINGPLU': 'inline label - always visible', 'ENVIRONMEN': 'inline label - always visible', 'Legend': 'inline label - always visible', });
lyr_AllotmentBedrockLine_2.set('fieldLabels', {'LineType': 'inline label - visible with data', });
lyr_AllotmentSuperficialBoundary_3.set('fieldLabels', {'LineType': 'inline label - always visible', });
lyr_AllotmentSuperficialBoundary_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});