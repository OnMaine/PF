<script setup lang="ts">
import TShortIcon from '@/assets/icons/tshirt.svg'
import Counter from '@components/Base/Counter.vue'

import { computed, type PropType } from 'vue'
import { Game } from '@/types/index'

const props = defineProps({
  game: {
    type: Object as PropType<Game>,
    required: true,
  },
})

const { teams } = props.game
</script>

<template>
  <div class="w-full h-full grid grid-cols-2 gap-5 md:gap-7 relative">
    <div
      v-for="(team, index) in teams"
      :key="index"
      class="flex flex-row first:justify-end last:justify-start items-center gap-2"
    >
      <div
        class="flex flex-col justify-center items-center gap-3 w-full"
        :class="index === 0 ? 'order-1' : 'order-2'"
      >
        <TShortIcon class="w-[38px] h-[38px]" :style="{ color: teams[index].color }" />

        <div class="text-[12px] md:text-[14px] leading-4 md:leading-[20px] text-white text-center">
          {{ team.name }}
        </div>
      </div>

      <div :class="index === 0 ? 'order-2' : 'order-1'">
        <Counter />
      </div>
    </div>

    <div class="delim">
      <div class="text-[42px] md:text-[56px] leading-[57px] md:leading-[76px]">-</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.delim {
  @apply absolute flex items-center justify-center h-full top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2;

  &:before {
    @apply absolute block w-[1px] h-[45px] -top-0 left-1/2  transform -translate-x-1/2 bg-[#191b1e];
    content: '';
  }

  &:after {
    @apply absolute block w-[1px] h-[40px] -bottom-0 left-1/2  transform -translate-x-1/2 bg-[#191b1e];
    content: '';
  }
}
</style>
