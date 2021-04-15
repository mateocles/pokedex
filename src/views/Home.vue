<template>
  <div class="home">
    <Welcome msg="Welcome to Pokédex" />
  </div>
</template>

<script>
import Welcome from "@/components/welcome/welcome.vue";

export default {
  name: "Home",
  components: {
    Welcome,
  },
};
</script>
