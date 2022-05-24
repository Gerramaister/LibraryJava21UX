<template>
  <div class="container">
    <!-- Button to Open the Modal -->
    <button type="button" class="rounded-circle btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#myModal">
      <svg
        width="18"
        height="26"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 7.75C9.41421 7.75 9.75 8.08579 9.75 8.5V13.5C9.75 13.9142 9.41421 14.25 9 14.25C8.58579 14.25 8.25 13.9142 8.25 13.5V8.5C8.25 8.08579 8.58579 7.75 9 7.75Z"
          fill="black"
        />
        <path
          d="M9 6C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5C8 5.55228 8.44772 6 9 6Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.25 9C0.25 4.16751 4.16751 0.25 9 0.25C13.8325 0.25 17.75 4.16751 17.75 9C17.75 13.8325 13.8325 17.75 9 17.75C4.16751 17.75 0.25 13.8325 0.25 9ZM9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75Z"
          fill="black"
        />
      </svg>
    </button>

    <!-- The Modal -->
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">OpenLibrary Java-UX 21</h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <p style="font-weight: bold">
              Read-y med Openlibrary api<br />
              Version 1.0
            </p>
            <p>
              Programmerare : Oliver Jensen, Oskar Johansson, Robert Moiseyev,
              Jonathan Geard
            </p>
            <br />
            <p>
              UX Designers : Felicia Borssén, Kamran Kalantari, Linda Tilly,
              Maria Eng, Anita Saher Raoofi, Nova Lindberg
            </p>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.rounded circle {
    padding: 0px;
}
.container {
  float: right;
  padding-top: 7px;
}
</style>