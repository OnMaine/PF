<script setup lang="ts">
import Counter from '@components/Base/Counter.vue'
import { useCounterStore } from '@/stores/counter'

const { updateTiebreakerCounter } = useCounterStore()
</script>

<template>
  <div
    class="flex flex-col md:flex-row flex-wrap justify-between items-center w-full px-[25px] md:px-[35px] py-[25px] md:py-[30px] md:pr-[40px] gap-4 bg-[#0D0D0D] rounded-[7px]"
  >
    <div class="flex flex-col gap-3 max-w-[240px]">
      <h2 class="text-[18px] leading-[24px] font-bold text-white">Tiebreaker Question</h2>

      <p class="text-[10px] leading-[15px] text-custom-grey">
        Which minute do you think the first goal will be scored in any of the six matches?
      </p>
    </div>

    <Counter
      :type="'rows'"
      :limits="{ min: 0, max: 90 }"
      @update:counterValue="updateTiebreakerCounter"
    />
  </div>
</template>

<style></style>
