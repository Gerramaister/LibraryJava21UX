<template>
  <div class="container-fluid">
    <div class="whole">
      <BigBox image="url('/src/assets/Images/Alla.svg" genreName="All kategorier" />
    </div>
    <div class="whole">
      <DoubleSmallBox image="url('/src/assets/Images/Deckare.svg"  image2="url('/src/assets/Images/Barn.svg" genreName="Deckare" genreName2="Barn"/>
    </div>
    <div class="whole">
      <DoubleSmallBox image="url('/src/assets/Images/Romans.svg"  image2="url('/src/assets/Images/TrueCrime.svg" genreName="Romans" genreName2="True Crime"/>
    </div>
    <div class="whole">
      <BigBox image="url('/src/assets/Images/FeelGood.svg" genreName="Fiction" />
    </div>
    <div class="whole">
      <BigBox image="url('/src/assets/Images/HetaTitlar.svg" genreName="Heta Titlar" />
    </div>
    <div class="whole">
      <DoubleSmallBox image="url('/src/assets/Images/Klassiker.svg"  image2="url('/src/assets/Images/Fakta.svg" genreName="Klassiker" genreName2="Fakta"/>
    </div>
  </div>
</template>

<script>
import BigBox from "../components/BigBox.vue";
import DoubleSmallBox from "../components/DoubleSmallBox.vue";

export default {
  components: { BigBox, DoubleSmallBox },
};
</script>

<style scoped>
.whole{
  justify-content: space-between;
  align-content: center;
  margin-top: 25px;
  margin-bottom: 1rem;
  text-decoration: none;
}
</style>