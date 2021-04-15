<template>
  <div class="card">
    <div class="row">
      <div class="col">
        <p class="name">{{ item.name }}</p>
      </div>
      <div class="col start">
        <img
          @click.stop="favorite(item.name)"
          v-if="item.favorite"
          src="@/assets/start-active.svg"
          class="img-start"
          alt="arrow"
        />
        <img
          @click.stop="favorite(item.name)"
          v-if="!item.favorite"
          src="@/assets/start-disable.svg"
          class="img-start"
          alt="arrow"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "card",
  props: {
    item: Object,
  },
  methods: {
    ...mapActions("Pokemons", ["addFavorite"]),
    favorite(name) {
      this.addFavorite(name);
    },
  },
};
</script>

<style scoped>
.start {
  text-align: end;
}
.img-start {
  padding-right: 10px;
  padding-top: 7px;
}
.card {
  background: #ffffff;
  border-radius: 5px;
  height: 60px;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.name {
  position: absolute;
  left: 20px;
  top: calc(50% - 26px / 2);
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-top: 2px;

  color: #353535;
}
</style>
