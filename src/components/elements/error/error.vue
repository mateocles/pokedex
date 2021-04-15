<template>
  <div class="container">
    <div class="contend">
      <div class="contend-btn">
        <h1 class="title">{{ msg }}</h1>
        <p class="sub-title">You look lost on your journey!</p>
      </div>
      <div class="contend-btn">
        <b-button pill variant="danger" class="button" @click="pokedex()"
          >Go back home</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error",
  props: {
    msg: String,
  },

  methods: {
    pokedex() {
      this.$router.push({ path: "/" }).catch(() => {});
    },
  },
};
</script>

<style scoped>
.contend-btn {
  text-align: center;
}
.button {
  width: 155px;
  height: 44px;
  left: 499px;
  top: 243px;
  background: #f22539;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
}
.button:hover {
  width: 155px;
  height: 44px;
  left: 499px;
  top: 243px;
  background: #c00e20;
  border-radius: 60px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
}
.title {
  height: 43px;
  left: 291px;
  top: 135px;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  align-items: center;
  text-align: center;
}
.sub-title {
  left: 30px;
  top: 479px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #5e5e5e;
}
</style>
