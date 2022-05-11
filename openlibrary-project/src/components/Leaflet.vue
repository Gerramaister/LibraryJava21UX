<template>
  <l-map ref="map" v-model:zoom="zoom" :center="[57.70525, 11.935717]" style="height:45vh">
      <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"></l-tile-layer>
       <l-marker :lat-lng="[57.70525, 11.935717]">
      </l-marker>
  </l-map>
</template>

<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LGeoJson,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 17,
      geojson: {
        type: "FeatureCollection",
        features: [
          // ...
        ],
      },
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.
      },
    };
  },
  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

    // And now the Leaflet circleMarker function can be used by the options:
    this.geojsonOptions.pointToLayer = (feature, latLng) =>
      circleMarker(latLng, { radius: 8 });
    this.mapIsReady = true;
  },
};
</script>