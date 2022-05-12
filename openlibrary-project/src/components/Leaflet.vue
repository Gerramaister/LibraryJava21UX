<template>
<div class="pt-2">
  <l-map ref="map" v-model:zoom="zoom" :center="center" style="height:45vh">
      <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"></l-tile-layer>
       <l-marker :lat-lng="center">
        <l-tooltip :options="{ permanent: true}">
          Du är här!
        </l-tooltip>
      </l-marker>
           <l-marker :lat-lng="library">
        <l-tooltip :options="{ permanent: true}">
          Älvstrandens bibliotek
        </l-tooltip>
      </l-marker>
  </l-map>
  </div>
</template>

<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LTileLayer, LMarker, LTooltip, } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LGeoJson,
    LTileLayer,
    LMarker,
    LTooltip,
  },
  data() {
    return {
      library: [57.70506, 11.937764],
      center: [57.70525, 11.935717],
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