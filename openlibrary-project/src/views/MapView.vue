<template>
  <Leaflet />
  <div class="contactcontainer">
    <div class="headerx">Älvstrandens Bibliotek</div>
    <div class="d-flex adresscontainer">
      <div class="p-2">
        <div class="adress"> Diagonalen 6, <br>417 56 Göteborg</div>
      </div>
      <div class="totalphone ml-auto p-2">
        <svg class="svgphone" width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M5.18058 14.5341C8.75521 22.6422 15.1162 29.0884 23.0237 32.5813L23.0487 32.5924L24.5763 33.3016C26.5216 34.2044 28.808 33.5632 30.0552 31.7651L32.604 28.0907C32.7596 27.8662 32.7195 27.5541 32.5126 27.3803L28.0632 23.6411C27.842 23.4552 27.5167 23.4985 27.3475 23.7364L25.6158 26.1705C25.1952 26.7617 24.4357 26.9671 23.7922 26.6637C17.8794 23.8764 13.1279 18.927 10.4521 12.7678C10.1609 12.0975 10.3581 11.3063 10.9256 10.8682L13.2623 9.06434C13.4906 8.88808 13.5322 8.54927 13.3538 8.31886L9.76367 3.68335C9.59682 3.46791 9.29732 3.42606 9.08186 3.58809L5.53527 6.25508C3.7977 7.56172 3.18578 9.96349 4.07271 11.9957L5.17939 14.5314C5.17979 14.5323 5.18018 14.5332 5.18058 14.5341ZM21.8399 35.4528C13.2478 31.6536 6.33712 24.6473 2.45303 15.8354L2.45069 15.8301L1.34168 13.289C-0.136518 9.90201 0.883338 5.89907 3.7793 3.72134L7.32589 1.05434C8.83413 -0.0798425 10.9306 0.213084 12.0986 1.72119L15.6887 6.3567C16.9378 7.96956 16.6468 10.3412 15.0485 11.575L13.7095 12.6087C15.9713 17.1804 19.5561 20.9145 23.9449 23.2706L24.9372 21.8757C26.1217 20.2108 28.3985 19.9078 29.9468 21.2089L34.3963 24.9481C35.8445 26.1651 36.1254 28.3498 35.0356 29.9209L32.4869 33.5953C30.4082 36.5921 26.5975 37.6608 23.3554 36.1561L21.8399 35.4528Z"
            fill="black" />
        </svg>
        <p class="telenumber">031-12345</p>
      </div>
    </div>



    <table class="openinghours">
      <tr>
        <th>ÖPPETTIDER</th>
      </tr>
      <tr>
        <td>MÅN - FRE</td>
        <td>08 - 18</td>
      </tr>
      <tr>
        <td>LÖR</td>
        <td>14 - 18</td>
      </tr>
      <tr>
        <td>SÖN</td>
        <td>10 - 15</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Leaflet from "../components/Leaflet.vue";
export default {
  components: {
    Leaflet,
  },
};
</script>

<style scoped>
.openinghours {
  justify-content: space-between;
  padding: 3px;
}

.adresscontainer {
  justify-content: space-between;
}

.headerx {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  padding-top: 10px;
}

.adress {
  font-family: 'Nunito Sans';
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;
  color: #5E778C;
  white-space: pre;
  margin-top: 0.5em;
}

th {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 1500;
  font-size: 14px;
  line-height: 130%;
}

td {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  padding: 0.3em;
}

.svgphone {
  margin-left: 1.1em;
}

.contactcontainer{
  margin-top: 0.5em;
}
</style>
