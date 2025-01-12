<script setup lang="ts">
import { Countdown } from 'vue3-flip-countdown'

import { useCounterStore } from '@/stores/counter'

const { roundDate } = useCounterStore()
</script>

<template>
  <div class="flex w-full md:w-fit md:justify-end">
    <Countdown
      :countdownSize="'24px'"
      :labelSize="'14px'"
      :mainColor="'#fff'"
      :secondFlipColor="'#fff'"
      labelColor="#727883"
      :deadline="roundDate"
    />
  </div>
</template>

<style scoped>
:deep(.flip-clock) {
  @apply flex flex-row justify-between items-center m-0 w-full;
}

:deep(.flip-clock__piece) {
  @apply !flex flex-col gap-[5px];
}

:deep(.flip-clock__slot) {
  @apply bg-secondary rounded w-[68px] h-[27px] flex justify-center items-center;
}

:deep(.flip-clock__card) {
  @apply bg-secondary rounded;
}

:deep(.flip-clock__card) b {
  @apply w-full;
}

:deep(.flip-clock__card) b::after {
  @apply w-full;
}

:deep(.flip-clock__card) b::before {
  @apply w-full;
}
</style>
