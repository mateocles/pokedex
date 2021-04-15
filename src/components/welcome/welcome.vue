<template>
  <div class="container">
    <div class="contend">
      <div class="logo">
        <img src="@/assets/pikachu.svg" alt="arrow" />
      </div>
      <div>
        <h1 class="title">{{ msg }}</h1>
        <p class="sub-title">
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </p>
      </div>
      <div class="contend-btn">
        <b-button pill variant="danger" class="button" @click="pokedex()"
          >Get started</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome",
  props: {
    msg: String,
  },

  methods: {
    pokedex() {
      this.$router.push({ path: "/pokedex" }).catch(() => {});
    },
  },
};
</script>

<style scoped>
.contend-btn {
  text-align: center;
}
.button {
  width: 131px;
  height: 44px;
  background: #f22539;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
}
.button:hover {
  width: 131px;
  height: 44px;
  background: #c00e20;
  border-radius: 60px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
}
.title {
  left: 65px;
  top: 418px;
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contend {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.logo {
  padding-bottom: 20px;
  text-align: center;
}
</style>
