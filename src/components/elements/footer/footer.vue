<template>
  <div class="contend fixed-bottom">
    <div class="row">
      <div class="col all">
        <b-button
          pill
          variant="danger"
          id="all"
          :class="allPokemons ? 'button-active' : 'button-disable'"
          @click="seachAllPokemons()"
        >
          <span> <img src="@/assets/all.svg" class="icon" alt="arrow" /></span>
          All</b-button
        >
      </div>

      <div class="col">
        <b-button
          pill
          variant="danger"
          :class="favoritePokemons ? 'button-active' : 'button-disable'"
          @click="seachfavoritePokemons()"
        >
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
import { mapGetters } from "vuex";
export default {
  name: "Filter",
  computed: {
    ...mapGetters("Pokemons", ["allPokemons", "favoritePokemons"]),
  },
  methods: {
    seachfavoritePokemons() {
      this.$store.dispatch("Pokemons/searchFavoritePokemons");
    },
    seachAllPokemons() {
      this.$store.dispatch("Pokemons/searchAllPokemons");
    },
  },
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
.button-active {
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
.button-disable {
  width: 275px;
  height: 44px;
  left: 25.26%;
  right: 50.87%;
  top: calc(50% - 44px / 2);
  background: #bfbfbf;
  font-size: 20px;
  border-radius: 60px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  border: 0px;
}
</style>
