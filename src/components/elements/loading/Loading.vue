<template>
  <div class="container">
    <div class="contend">
      <div class="logo">
        <img src="@/assets/pokeball.svg" class="preload" alt="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
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
.preload {
  animation-name: girar;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes girar {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
