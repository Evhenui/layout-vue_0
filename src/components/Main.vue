<template>
  <main class="main">
    <EasyToUse/>
    <LatestBLog/>
    <LatestReviews/>
    <Newsletter/>
  </main>
</template>

<script>
import EasyToUse from './componentsMain/EasyToUse.vue';
import LatestBLog from './componentsMain/LatestBLog.vue';
import LatestReviews from './componentsMain/LatestReviews.vue';
import Newsletter from './componentsMain/Newsletter.vue';

export default {
  name: "Main",
  components: {
    EasyToUse, LatestBLog, LatestReviews, Newsletter
  }
};
</script>

<style lang="scss">
.main {
  padding: 160px 0 0 0;
  max-width: 1440px;
  margin: 0 auto 100px auto;
  
}
</style>
