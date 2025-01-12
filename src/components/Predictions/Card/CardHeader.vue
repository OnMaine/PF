<script setup lang="ts">
import ClockIcon from '@/assets/icons/clock.svg'
import BallIcon from '@/assets/icons/ball.svg'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="flex flex-row justify-between items-center w-full bg-secondary rounded-[7px] p-[12px] md:p-4"
  >
    <div class="flex flex-row justify-between items-center gap-2">
      <BallIcon />
      <p class="text-[9px] md:text-xs leading-[15px] md:leading-5 text-white">
        {{ name }}
      </p>
    </div>

    <div class="flex flex-row justify-between items-center gap-1">
      <ClockIcon />
      <p class="text-xs leading-5 text-custom-grey">
        {{ date }}
      </p>
    </div>
  </div>
</template>
