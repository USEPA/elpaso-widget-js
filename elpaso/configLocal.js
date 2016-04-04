define(
[],
function() {
  var _config = {

  	 "viewobject" : {
          "gstreet": { "desc": "Google Street View", "baseurl": "https://map11.epa.gov/myem/efmap/googlestreetview.html?", "width": 404, "height": 340, "top": 50, "left": 300, "pid": 0, "visible": true, "linkurl": "" }       
          , "birdeye": { "desc": "Bing Maps Bird's Eye", "baseurl": "https://map11.epa.gov/myem/efmap/bingbirdeye.html?", "width": 404, "height": 340, "top": 420, "left": 720, "pid": 1, "visible": false, "linkurl": "" }
          , "bingimage": { "desc": "Bing Maps Aerial", "baseurl": "https://map11.epa.gov/myem/efmap/bingimage.html?", "width": 410, "height": 340, "top": 420, "left": 300, "pid": 2, "visible": false, "linkurl": "" }
          , "esriimage": { "desc": "ESRI Imagery", "baseurl": "https://map11.epa.gov/myem/efmap/esriimage.html?", "width": 410, "height": 340, "top": 50, "left": 1140, "pid": 3, "visible": false, "linkurl": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer" }
          , "esri3d": { "desc": "ESRI 3D", "baseurl": "https://map11.epa.gov/myem/efmap/esri3d.html?", "width": 410, "height": 340, "top": 50, "left": 1140, "pid": 4, "visible": false, "linkurl": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer" }
          , "usgsimage1m": { "desc": "USGS Imagery 1-meter", "baseurl": "https://map11.epa.gov/myem/efmap/usgsimage.html?itype=image1m&", "width": 410, "height": 340, "top": 50, "left": 1140, "pid": 5, "visible": false, "linkurl": "https://raster.nationalmap.gov/arcgis/rest/services/Orthoimagery/USGS_EROS_Ortho_NAIP/ImageServer" }
          , "usgsimag1ft": { "desc": "USGS Imagery 1-foot", "baseurl": "https://map11.epa.gov/myem/efmap/usgsimage.html?itype=image1ft&", "width": 410, "height": 340, "top": 50, "left": 1140, "pid": 6, "visible": false, "linkurl": "https://raster.nationalmap.gov/arcgis/rest/services/Orthoimagery/USGS_EROS_Ortho_1Foot/ImageServer" }
      }

};
return _config;
  
});

