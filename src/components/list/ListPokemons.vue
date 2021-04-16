<template>
  <div>
    <div>
    <div class="row justify-content-md-center">
      <div class="col-6">
        <div class="form-group has-search">
          <span class="form-control-feedback">
            <img src="@/assets/lupa.svg" alt="arrow" />
          </span>
          <input
            type="text"
            class="form-control input"
            v-model="searchInput"
            placeholder="Search"
          />
        </div>
      </div>
      </div>
    </div>
    <div v-if="searchPokemons.length > 0" class="contend-page">
      <div class="row justify-content-md-center">
        <div class="col-6">
          <div v-for="(data, i) in searchPokemons" :key="i">
            <Card :item="data" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <div v-else class="contend-page"><Error msg="Uh-oh!" /></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Card from "@/components/elements/card/card.vue";
import Footer from "@/components/elements/footer/footer.vue";

import Error from "@/components/elements/error/error.vue";
export default {
  name: "ListPokemons",
  components: {
    Card,
    Footer,
    Error,
  },
  data() {
    return {
      searchInput: "",
    };
  },
  computed: {
    ...mapGetters("Pokemons", ["items", "allPokemons", "favoritePokemons"]),
    searchPokemons() {
      if (this.searchInput.length > 3) {
        return this.searchPokemon(this.items, this.searchInput);
      }
      if (this.allPokemons) {
        return this.items;
      }
      if (this.favoritePokemons) {
        return this.searchFavoritePokemon(this.items);
      }
      return this.items;
    },
  },
  methods: {
    searchFavoritePokemon(arrayToSearch) {
      return arrayToSearch.filter(function (item) {
        if (item.favorite === true) {
          return item;
        }
      });
    },
    searchPokemon(arrayToSearch, value) {
      return arrayToSearch.filter(function (item) {
        return item.name.toUpperCase().includes(value.toUpperCase());
      });
    },
  },
};
</script>
<style scoped>
.form-group {
  padding-top: 35px;
}
.contend-page {
  padding-top: 40px;
  padding-bottom: 80px;
}
.input {
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding-left: 38px;
}
.icon {
  width: 18px;
  height: 18px;
  left: 15px;
  top: calc(50% - 18px / 2);
}
.has-search .form-control-feedback {
  position: absolute;
  left: 15px;
  z-index: 2;
  display: block;
  width: 2.375rem;
  line-height: 2.375rem;
  pointer-events: none;
  color: #bfbfbf;
  padding-top: 5px;
  padding-left: 15px;
}
</style>
