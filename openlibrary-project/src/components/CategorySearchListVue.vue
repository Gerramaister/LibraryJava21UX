<template>
  <div class="container">
      <div class="col" id="TopBox">
          <h4>Bottom Text</h4>
      </div>
    <div class="row justify-content-center gx-2">
      <div class="col-5">
          <div>
            <h4>Hello</h4>
            <p>
                Hej
            </p>
        </div>
      </div>
      <div class="col-5">
        <div>
            <h4>Hello</h4>
            <p>
                Hej
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>