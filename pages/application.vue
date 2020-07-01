<template>
<div class="applicationContainer">
    <example class="examplePosition"/>
    <appAchievement />
</div>
</template>

<script>
import appAchievement from "~/components/appAchievement.vue"
import example from "~/components/example.vue"

export default {
  components: {
    appAchievement,
    example
  }
}
</script>

<style>

.examplePosition {
    margin: 10% auto;
}
</style>