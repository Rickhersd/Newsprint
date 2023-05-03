<template>
  <div class="timer">
    {{ formatTime(currentTime) }}
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, watchEffect } from 'vue';

  const props = defineProps<{
    initialTime: number,
  }>() 

  const emits = defineEmits<{
    (e: 'onTimer', time: number):void,
  }>()

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  
  const currentTime = ref<number>(props.initialTime);
  let timerId: ReturnType<typeof setInterval>  | null = null;

  const startTimer = () => {
    timerId = setInterval(() => {
      currentTime.value++;
      emits('onTimer', currentTime.value)
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId as ReturnType<typeof setInterval>);
    
  };

  // watchEffect(onInvalidate => {
  //   onInvalidate(() => {
  //     stopTimer();
  //   });
  // });

  onMounted(() => {
    startTimer()
  })

</script>

<style scoped>
.timer {
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 4px;
}
</style>