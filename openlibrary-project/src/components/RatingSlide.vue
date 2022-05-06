<template>
  <div class="slide-rating">

    <label for="customRange2" class="form-label start-end">{{ start }}</label>
    <label for="customRange2" class="form-label start-end">{{ end }}</label>
    <input type="range" class="form-range slider" min="0" max="5" id="customRange2" />
  </div>
</template>

<script>

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
  props: ["start", "end"],
};
</script>

<style scoped>
.slide-rating {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.start-end {
  padding: 0rem 1rem 0rem 1rem;
  font-weight: bold;
  font-size: 1.1em;
  margin: 1em 0em 0.2em 0em;
}
.slider {
  margin: 0.3em 3.1em 1em 3.1em;
  padding: 0.2em;
}
</style>
