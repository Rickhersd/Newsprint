<template>
  <button class="sudoku-toolbar__tools-btn" @click="handleRestart">
    <v-icon icon="mdi-restart"></v-icon>
  </button>
</template>

<script setup lang="ts">

const props = defineProps<{
  handleRestart:() => void
}>();

defineProps<>


const emits = defineEmits<{
    (e: 'onEdit', position: PositionType, newValue: number):void
    (e: 'onSelect', rowIndex: number, cellIndex: number ):void
  }>()

</script>

<style scoped></style>