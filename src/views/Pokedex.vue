<template>
  <div class="contend">
    <component :is="componentName" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Loading from "@/components/elements/loading/Loading.vue";
import ListPokemons from "@/components/list/ListPokemons.vue";
export default {
  name: "Pokedex",
  components: {
    Loading,
    ListPokemons,
  },
  data() {
    return {
      componentName: "Loading",
    };
  },
  computed: {
    ...mapGetters("Pokemons", ["loading", "success"]),
  },
  mounted() {
    this.$store.dispatch("Pokemons/getPokemons");
    setTimeout(
      function () {
        if (!this.loading.getItems && this.success.getItems) {
          this.componentName = "ListPokemons";
        }
      }.bind(this),
      2000
    );
  },
};
</script>
<style scoped>
.contend {
  overflow-x: hidden;
}
</style>
