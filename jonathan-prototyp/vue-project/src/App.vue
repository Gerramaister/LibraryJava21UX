<template>
  <input v-model="alias" placeholder="Author" >

  Rating:
  <input type="radio" value="1" v-model="rating">1
  <input type="radio" value="2" v-model="rating">2
  <input type="radio" value="3" v-model="rating">3
  <input type="radio" value="4" v-model="rating">4
  <input type="radio" value="5" v-model="rating">5

  <textarea name="text-for-review" cols="30" rows="10" v-model="textReview" placeholder="Free text" > {{textReview}} </textarea>
  
  
  <input type="button" value="Post!" @click="postNewReview"/>
  
  <Review 
    v-for="review in reviews"
    :alias="review.alias"
    :rating="review.rating"
    :textReview="review.textReview"
  ></Review>
</template>

<script>
import Review from './components/Review.vue'

export default{
  components: { Review },
  data(){
    return {
      reviews: [],
      alias: '',
      rating: '',
      textReview: '',
      
    }
  },
  methods: {
    postNewReview(){
      this.reviews.push( {alias: this.alias, rating: this.rating, textReview: this.textReview})
      
    }
  }
}
</script>

<style>
</style>
