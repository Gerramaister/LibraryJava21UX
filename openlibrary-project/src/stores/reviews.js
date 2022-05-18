import { defineStore } from 'pinia'

export const useReviewsStore = defineStore({
  id: 'reviews',
  state: () => ({
    reviews: [
      {
        username: "Kalle",
        comments:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quas deleniti nihil vel aut praesentium dolore blanditiis illum voluptas consequuntur delectus excepturi atque harum, sint magnam repellat modi eaque nisi.",
        imgSrc: "https://picsum.photos/200",
      },
      {
        username: "Bosse",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, illo?",
        imgSrc: "https://picsum.photos/201",
      },
      {
        username: "Nisse",
        comments:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a distinctio, molestias culpa eius tempora ea obcaecati, officia magnam rerum harum?",
        imgSrc: "https://picsum.photos/202",
      },
    ]
  }),
  actions: {
    addReview(username, comments, imgSrc) {
      if (imgSrc && imgSrc !== "") {
        this.reviews.push({ username, comments, imgSrc })
      }
      else {
        let rand = Math.round(Math.random() * 300)
        let src = `https://picsum.photos/${rand}`
        this.reviews.push({ username, comments, imgSrc: src })
      }
    }
  }
})
