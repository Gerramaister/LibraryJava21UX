<template>
  <CreateImages ref="createImages"/>
  <div class="container" ref="bookrow">
      <div class="col" id="TopBox">
          <h4>All Tags</h4>
      </div>
    <div class="row justify-content-center gx-2" v-for="i in genres" v-bind:key="i.id">
      <div class="col-5">
          <div>
            <h4 @click="ClickMe(i.genre)">{{i.genre}}</h4>
        </div>
      </div>
      <div class="col-5">
        <div>
            <h4 @click="ClickMe(i.genre2)">{{i.genre2}}</h4>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import CreateImages from "../components/CreateImages.vue";
export default {
  data() {
    return ({

      genres: [
        {genre: "Horror", genre2: "Love"},
        {genre: "Sci-fi", genre2: "Fiction"},
        {genre: "King", genre2: "Religious"},
        {genre: "Celebrity", genre2: "Nationalist"},
      ]
    })
  },
  methods: {
    ClickMe : function(value) {
      this.$refs.createImages.create_images(this.$refs.bookrow, value.toLowerCase(), '');
    }
  },
  components: {CreateImages},
};
</script>

<style>
.container div
{
    padding-top: 15px;
    
}
.col-5 div
{
    text-align: center;
    width: 100%;    
    padding: 15px;
    border: solid 2px black;
}
#TopBox
{
    width: 83%;
    margin-top: 150px;
    margin-left: 30px;
    text-align: center;
    padding: 15px;
    border:solid 2px black
}
.container img
{
    margin: 10px;
  width: 90px;
}
</style>