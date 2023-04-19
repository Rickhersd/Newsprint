<template>
  <div class="timer">
    {{ formatTime(currentTime) }}
  </div>
</template>

<script lang="ts" setup>

  defineProps<{
    currentTime: number,
  }>() 

  function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes.toString().padStart(1, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

</script>

<style scoped>
.timer {
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 4px;
}
</style>