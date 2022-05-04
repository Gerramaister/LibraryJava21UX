<template>
  <div class="slide-rating">
    <p>{{ start }}</p>
    <p>{{ end }}</p>
    <vue3-slider
      class="slider"
      v-model="value"
      :max="max"
      :color="color"
      :track-color="trackColor"
      :tooltip="tooltip"
    />
  </div>
</template>

<script>
import slider from "vue3-slider";

export default {
  data() {
    return {
      value: 1,
      color: "#000000",
      trackColor: "#F1F6F8",
      tooltip: true,
      max: 5,
    };
  },
  components: {
    "vue3-slider": slider,
  },
  props: ["start", "end"],
};
</script>

<style scoped>
.slide-rating {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
p {
  padding: 0rem 1rem 0rem 1rem;
  font-weight: bold;
  font-size: 1.1em;
  margin: 1em 0em 0.4em 0em;
}
.slider {
  margin: 2.3em 3.1em 1em 3.1em;
  padding: 0.2em;
}
</style>
