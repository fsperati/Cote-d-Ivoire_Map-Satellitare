var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});

        var lyr_GoogelSatellite_0 = new ol.layer.Tile({
            'title': 'GoogelSatellite_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });var format_RESEAU_ROUTIER_WEB_1 = new ol.format.GeoJSON();
var features_RESEAU_ROUTIER_WEB_1 = format_RESEAU_ROUTIER_WEB_1.readFeatures(json_RESEAU_ROUTIER_WEB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESEAU_ROUTIER_WEB_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RESEAU_ROUTIER_WEB_1.addFeatures(features_RESEAU_ROUTIER_WEB_1);var lyr_RESEAU_ROUTIER_WEB_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESEAU_ROUTIER_WEB_1, 
                style: style_RESEAU_ROUTIER_WEB_1,
    title: 'RESEAU_ROUTIER_WEB<br />\
    <img src="styles/legend/RESEAU_ROUTIER_WEB_1_0.png" /> Bitume<br />\
    <img src="styles/legend/RESEAU_ROUTIER_WEB_1_1.png" /> Non bitumée<br />'
        });var format_Mission4_Entretien_classique_2 = new ol.format.GeoJSON();
var features_Mission4_Entretien_classique_2 = format_Mission4_Entretien_classique_2.readFeatures(json_Mission4_Entretien_classique_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mission4_Entretien_classique_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mission4_Entretien_classique_2.addFeatures(features_Mission4_Entretien_classique_2);var lyr_Mission4_Entretien_classique_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mission4_Entretien_classique_2, 
                style: style_Mission4_Entretien_classique_2,
                title: '<img src="styles/legend/Mission4_Entretien_classique_2.png" /> Mission4_Entretien_classique'
            });var format_Ville_F_3 = new ol.format.GeoJSON();
var features_Ville_F_3 = format_Ville_F_3.readFeatures(json_Ville_F_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ville_F_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ville_F_3.addFeatures(features_Ville_F_3);var lyr_Ville_F_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ville_F_3, 
                style: style_Ville_F_3,
                title: '<img src="styles/legend/Ville_F_3.png" /> Ville_F'
            });var format_Ville_D_4 = new ol.format.GeoJSON();
var features_Ville_D_4 = format_Ville_D_4.readFeatures(json_Ville_D_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ville_D_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ville_D_4.addFeatures(features_Ville_D_4);var lyr_Ville_D_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ville_D_4, 
                style: style_Ville_D_4,
                title: '<img src="styles/legend/Ville_D_4.png" /> Ville_D'
            });var format_coles_5 = new ol.format.GeoJSON();
var features_coles_5 = format_coles_5.readFeatures(json_coles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coles_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_coles_5.addFeatures(features_coles_5);var lyr_coles_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coles_5, 
                style: style_coles_5,
                title: '<img src="styles/legend/coles_5.png" /> Écoles'
            });var format_Centredesant_6 = new ol.format.GeoJSON();
var features_Centredesant_6 = format_Centredesant_6.readFeatures(json_Centredesant_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centredesant_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Centredesant_6.addFeatures(features_Centredesant_6);var lyr_Centredesant_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centredesant_6, 
                style: style_Centredesant_6,
                title: '<img src="styles/legend/Centredesant_6.png" /> Centre de santé'
            });var format_Centresreligieux_7 = new ol.format.GeoJSON();
var features_Centresreligieux_7 = format_Centresreligieux_7.readFeatures(json_Centresreligieux_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centresreligieux_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Centresreligieux_7.addFeatures(features_Centresreligieux_7);var lyr_Centresreligieux_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centresreligieux_7, 
                style: style_Centresreligieux_7,
                title: '<img src="styles/legend/Centresreligieux_7.png" /> Centres religieux'
            });

lyr_GoogelSatellite_0.setVisible(true);lyr_RESEAU_ROUTIER_WEB_1.setVisible(true);lyr_Mission4_Entretien_classique_2.setVisible(true);lyr_Ville_F_3.setVisible(true);lyr_Ville_D_4.setVisible(true);lyr_coles_5.setVisible(true);lyr_Centredesant_6.setVisible(true);lyr_Centresreligieux_7.setVisible(true);
var layersList = [baseLayer,lyr_GoogelSatellite_0,lyr_RESEAU_ROUTIER_WEB_1,lyr_Mission4_Entretien_classique_2,lyr_Ville_F_3,lyr_Ville_D_4,lyr_coles_5,lyr_Centredesant_6,lyr_Centresreligieux_7];
lyr_RESEAU_ROUTIER_WEB_1.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'NOM': 'NOM', 'NATURE': 'NATURE', 'ETAT_1': 'ETAT_1', 'PAYS': 'PAYS', 'AUTEUR': 'AUTEUR', 'DATE_DE_CR': 'DATE_DE_CR', });
lyr_Mission4_Entretien_classique_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'regions': 'regions', 'DEBUT': 'DEBUT', 'FIN_1': 'FIN_1', 'Departemen': 'Departemen', 'DISTRICT': 'DISTRICT', 'OBSERVATIO': 'OBSERVATIO', 'Shape_Leng': 'Shape_Leng', 'longueur': 'longueur', 'x': 'x', 'y': 'y', 'x_fin': 'x_fin', 'y_fin': 'y_fin', });
lyr_Ville_F_3.set('fieldAliases', {'x_fin': 'x_fin', 'y_fin': 'y_fin', 'OBJECTID': 'OBJECTID', 'regions': 'regions', 'FIN_1': 'FIN_1', 'Departemen': 'Departemen', 'DISTRICT': 'DISTRICT', 'OBSERVATIO': 'OBSERVATIO', 'Lengh': 'Lengh', 'longueur': 'longueur', });
lyr_Ville_D_4.set('fieldAliases', {'x': 'x', 'y': 'y', 'OBJECTID': 'OBJECTID', 'regions': 'regions', 'DEBUT': 'DEBUT', 'Departemen': 'Departemen', 'DISTRICT': 'DISTRICT', 'OBSERVATIO': 'OBSERVATIO', 'Shape': 'Shape', 'longueur': 'longueur', });
lyr_coles_5.set('fieldAliases', {'Lat': 'Lat', 'Lon': 'Lon', 'Écoles': 'Écoles', });
lyr_Centredesant_6.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', 'changese_3': 'changese_3', 'operator_t': 'operator_t', });
lyr_Centresreligieux_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ISO3': 'ISO3', 'ADM0_NAME': 'ADM0_NAME', 'NAME': 'NAME', 'TYPE': 'TYPE', 'CITY': 'CITY', 'SPA_ACC': 'SPA_ACC', 'SOURCE_DT': 'SOURCE_DT', 'SOURCE': 'SOURCE', 'SOURCE2_DT': 'SOURCE2_DT', 'SOURCE2': 'SOURCE2', 'GLOBALID': 'GLOBALID', });
lyr_RESEAU_ROUTIER_WEB_1.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'NOM': 'TextEdit', 'NATURE': 'TextEdit', 'ETAT_1': 'TextEdit', 'PAYS': 'TextEdit', 'AUTEUR': 'TextEdit', 'DATE_DE_CR': 'TextEdit', });
lyr_Mission4_Entretien_classique_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'regions': 'TextEdit', 'DEBUT': 'TextEdit', 'FIN_1': 'TextEdit', 'Departemen': 'TextEdit', 'DISTRICT': 'TextEdit', 'OBSERVATIO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'longueur': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'x_fin': 'TextEdit', 'y_fin': 'TextEdit', });
lyr_Ville_F_3.set('fieldImages', {'x_fin': 'TextEdit', 'y_fin': 'TextEdit', 'OBJECTID': 'TextEdit', 'regions': 'TextEdit', 'FIN_1': 'TextEdit', 'Departemen': 'TextEdit', 'DISTRICT': 'TextEdit', 'OBSERVATIO': 'TextEdit', 'Lengh': 'TextEdit', 'longueur': 'TextEdit', });
lyr_Ville_D_4.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'OBJECTID': 'TextEdit', 'regions': 'TextEdit', 'DEBUT': 'TextEdit', 'Departemen': 'TextEdit', 'DISTRICT': 'TextEdit', 'OBSERVATIO': 'TextEdit', 'Shape': 'TextEdit', 'longueur': 'TextEdit', });
lyr_coles_5.set('fieldImages', {'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Écoles': 'TextEdit', });
lyr_Centredesant_6.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', 'changese_3': 'TextEdit', 'operator_t': 'TextEdit', });
lyr_Centresreligieux_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'ISO3': 'TextEdit', 'ADM0_NAME': 'TextEdit', 'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'CITY': 'TextEdit', 'SPA_ACC': 'TextEdit', 'SOURCE_DT': 'TextEdit', 'SOURCE': 'TextEdit', 'SOURCE2_DT': 'TextEdit', 'SOURCE2': 'TextEdit', 'GLOBALID': 'TextEdit', });
lyr_RESEAU_ROUTIER_WEB_1.set('fieldLabels', {'FNODE_': 'inline label', 'TNODE_': 'inline label', 'LPOLY_': 'inline label', 'RPOLY_': 'inline label', 'LENGTH': 'inline label', 'NOM': 'inline label', 'NATURE': 'inline label', 'ETAT_1': 'inline label', 'PAYS': 'inline label', 'AUTEUR': 'inline label', 'DATE_DE_CR': 'inline label', });
lyr_Mission4_Entretien_classique_2.set('fieldLabels', {'OBJECTID': 'inline label', 'regions': 'inline label', 'DEBUT': 'inline label', 'FIN_1': 'inline label', 'Departemen': 'inline label', 'DISTRICT': 'no label', 'OBSERVATIO': 'inline label', 'Shape_Leng': 'inline label', 'longueur': 'inline label', 'x': 'inline label', 'y': 'inline label', 'x_fin': 'no label', 'y_fin': 'no label', });
lyr_Ville_F_3.set('fieldLabels', {'x_fin': 'inline label', 'y_fin': 'inline label', 'OBJECTID': 'header label', 'regions': 'inline label', 'FIN_1': 'inline label', 'Departemen': 'inline label', 'DISTRICT': 'inline label', 'OBSERVATIO': 'inline label', 'Lengh': 'inline label', 'longueur': 'inline label', });
lyr_Ville_D_4.set('fieldLabels', {'x': 'inline label', 'y': 'inline label', 'OBJECTID': 'inline label', 'regions': 'inline label', 'DEBUT': 'inline label', 'Departemen': 'inline label', 'DISTRICT': 'inline label', 'OBSERVATIO': 'inline label', 'Shape': 'inline label', 'longueur': 'inline label', });
lyr_coles_5.set('fieldLabels', {'Lat': 'inline label', 'Lon': 'inline label', 'Écoles': 'inline label', });
lyr_Centredesant_6.set('fieldLabels', {'amenity': 'inline label', 'name': 'inline label', 'changese_3': 'inline label', 'operator_t': 'inline label', });
lyr_Centresreligieux_7.set('fieldLabels', {'OBJECTID': 'inline label', 'ISO3': 'inline label', 'ADM0_NAME': 'inline label', 'NAME': 'inline label', 'TYPE': 'inline label', 'CITY': 'inline label', 'SPA_ACC': 'inline label', 'SOURCE_DT': 'inline label', 'SOURCE': 'inline label', 'SOURCE2_DT': 'no label', 'SOURCE2': 'inline label', 'GLOBALID': 'inline label', });
lyr_Centresreligieux_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});