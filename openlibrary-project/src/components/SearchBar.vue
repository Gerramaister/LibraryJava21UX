<template>
  <div class="SearchBar">
    <div class="input-group mb-3" @input="ChangeInputValue()">
      <input
        id="myInput"
        type="text"
        class="form-control"
        placeholder="Search..."
        aria-label="Search..."
        aria-describedby="basic-addon2"
      />
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="24"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapStores} from "pinia"
import {useCreateImageStore} from '../stores/CreateImage'
export default {
  data() {
    return {
        inputValue: '',
    };
  },
  //Whenever we change our text that searches we want to send those changes to the store so the store know what to search
  methods: {
    ChangeInputValue() {
        let inputVal = document.getElementById("myInput").value;
        this.inputValue = inputVal;
        this.createImageStore.currentSearch = this.inputValue;
    },
  },
  beforeCreate() {
      this.inputValue = '';
  },
    computed: {
    ...mapStores(useCreateImageStore),
  },
};
</script>

<style scoped>
.SearchBar {
  padding-top: 45px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #f28f38;
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;
}
</style>