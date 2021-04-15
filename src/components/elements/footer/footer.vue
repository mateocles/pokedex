<template>
  <div class="contend fixed-bottom">
    <div class="row">
      <div class="col all">
        <b-button pill variant="danger" id="all" class="button" @click="pokedex()">
          <span> <img src="@/assets/all.svg" class="icon" alt="arrow" /></span>
          All</b-button
        >
      </div>

      <div class="col">
        <b-button pill variant="danger" id="fav" class="button" @click="pokedex()">
          <span>
            <img src="@/assets/favorites.svg" class="icon" alt="arrow"
          /></span>
          Favorites</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
.icon {
  width: 22px;
  padding-bottom: 4px;
}
.contend {
  background: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  height: 80px;
  padding: 20px;
}
.all {
  text-align: end;
}
.button {
  width: 275px;
  height: 44px;
  left: 25.26%;
  right: 50.87%;
  top: calc(50% - 44px / 2);
  background: #f22539;
  border-radius: 60px;

  font-size: 20px;
  line-height: 22px;

  align-items: center;
}
</style>
