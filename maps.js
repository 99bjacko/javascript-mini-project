async function initMap() {
    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
      "marker",
    );
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: -28.024, lng: 140.887 },
      mapId: "DEMO_MAP_ID",
    });
    
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.      
    var markers = locations.map(function(location, i){
      return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
      });
    });
  
    // Add a marker clusterer to manage the markers.
    const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
  }
  
  const locations = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
  ];
  
  initMap();