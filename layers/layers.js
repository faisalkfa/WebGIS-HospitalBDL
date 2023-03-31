var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_3 = format_ADMINISTRASIKECAMATAN_AR_50K_3.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_3);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_3,
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_0.png" /> BUMIWARAS<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_1.png" /> ENGGAL<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_2.png" /> KEDAMAIAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_3.png" /> KEDATON<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_4.png" /> KEMILING<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_5.png" /> LABUHANRATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_6.png" /> PANJANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_7.png" /> RAJABASA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_8.png" /> SUKABUMI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_9.png" /> SUKARAME<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_10.png" /> TANJUNGBINTANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_11.png" /> TANJUNGKARANG BARAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_12.png" /> TANJUNGKARANG PUSAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_13.png" /> TANJUNGKARANG TIMUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_14.png" /> TANJUNGSENANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_15.png" /> TELUKBETUNG BARAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_16.png" /> TELUKBETUNG SELATAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_17.png" /> TELUKBETUNG TIMUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_18.png" /> TELUKBETUNG UTARA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_19.png" /> WAYHALIM<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_20.png" /> LANGKAPURA<br />'
        });
var format_JALAN_LN_50K_4 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_4 = format_JALAN_LN_50K_4.readFeatures(json_JALAN_LN_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_4.addFeatures(features_JALAN_LN_50K_4);
var lyr_JALAN_LN_50K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_4, 
                style: style_JALAN_LN_50K_4,
                interactive: false,
    title: 'JALAN_LN_50K<br />\
    <img src="styles/legend/JALAN_LN_50K_4_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JALAN_LN_50K_4_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JALAN_LN_50K_4_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/JALAN_LN_50K_4_3.png" /> Jalan Lokal<br />'
        });
var format_RUMAHSAKIT_PT_50K_5 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_5 = format_RUMAHSAKIT_PT_50K_5.readFeatures(json_RUMAHSAKIT_PT_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_5.addFeatures(features_RUMAHSAKIT_PT_50K_5);
var lyr_RUMAHSAKIT_PT_50K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAHSAKIT_PT_50K_5, 
                style: style_RUMAHSAKIT_PT_50K_5,
                interactive: true,
    title: 'RUMAHSAKIT_PT_50K<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_0.png" /> Balai Pengobatan Lanal Lampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_1.png" /> Kantor PMI Bandarlampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_2.png" /> Kantor PMI Lampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_3.png" /> Pelayanan dan Rehabilitasi Sosial Penyandang Cacat<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_4.png" /> Pusat Kesehatan Hewan Bandarlampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_5.png" /> Rumah Sakit Advent Bandarlampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_6.png" /> Rumah Sakit Assyifa Bandarlampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_7.png" /> Rumah Sakit Bersalin Anugerah Medika Lampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_8.png" /> Rumah Sakit Bersalin Xaverius Bandarlampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_9.png" /> Rumah Sakit Bhayangkari Polda Lampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_10.png" /> Rumah Sakit Bumiwaras<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_11.png" /> Rumah Sakit Dwi Laras Bandarlampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_12.png" /> Rumah Sakit Graha Husada Tanjungagungraya<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_13.png" /> Rumah Sakit Ibu dan Anak Betik Hati<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_14.png" /> Rumah Sakit Ibu dan Anak Mutiara Putri<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_15.png" /> Rumah Sakit Ibu dan Anak Restu Bunda<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_16.png" /> Rumah Sakit Ibu dan Anak Santa Anna Bandarlampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_17.png" /> Rumah Sakit Ibu dan Anak Sinta Langkapura<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_18.png" /> Rumah Sakit Imanuel Bandarlampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_19.png" /> Rumah Sakit Tingkat IV Bandarlampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_20.png" /> Rumah Sakit Umum Daerah Abdul Moeloek Lampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_21.png" /> Rumah Sakit Umum Daerah Dr A Dadi Tjokrodipo Bandarlampung<br />\
    <img src="styles/legend/RUMAHSAKIT_PT_50K_5_22.png" /> Rumah Sakit Urip Sumoharjo<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_3.setVisible(true);lyr_JALAN_LN_50K_4.setVisible(true);lyr_RUMAHSAKIT_PT_50K_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_GoogleMaps_2,lyr_ADMINISTRASIKECAMATAN_AR_50K_3,lyr_JALAN_LN_50K_4,lyr_RUMAHSAKIT_PT_50K_5];
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JALAN_LN_50K_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RUMAHSAKIT_PT_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'KOORDINAT': 'KOORDINAT', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JALAN_LN_50K_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_RUMAHSAKIT_PT_50K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', 'KOORDINAT': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'inline label', 'WIADKK': 'no label', 'WADMPR': 'inline label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_JALAN_LN_50K_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_RUMAHSAKIT_PT_50K_5.set('fieldLabels', {'NAMOBJ': 'inline label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'inline label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'KOORDINAT': 'inline label', });
lyr_RUMAHSAKIT_PT_50K_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});