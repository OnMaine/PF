<script setup lang="ts">
import Coundown from '@components/Base/Coundown.vue'
import BackBtn from '@components/Base/BackBtn.vue'

const props = defineProps({
  roundNumber: {
    type: Number,
    required: true,
    default: 1,
  },
})
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
    <div class="w-full flex flex-row justify-between gap-10">
      <h1 class="text-[20px] leading-[27px] uppercase">Round {{ roundNumber }}</h1>
      <BackBtn class="lg:hidden" />
    </div>

    <div class="flex flex-row justify-between items-center gap-10 w-full">
      <div class="hidden md:flex flex-col justify-start items-start gap-[8px]">
        <h2 class="text-[20px] leading-[27px] font-bold">Countdown</h2>
        <p class="text-[11px] leading-[15px] text-custom-gray">Don’t miss!</p>
      </div>

      <Coundown />
    </div>
  </div>
</template>

<style scoped></style>
