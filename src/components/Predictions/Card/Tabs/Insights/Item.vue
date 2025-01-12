<script lang="ts" setup>
import DotIcon from '@/assets/icons/Dot.svg'
import BarIcon from '@/assets/icons/Bar.svg'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
})
</script>

<template>
  <div
    class="flex flex-row justify-between items-center px-[10px] md:px-[15px] py-[8px] md:py-[10px] bg-[#1B1C1F] rounded-[7px]"
  >
    <div class="flex flex-row items-center gap-2">
      <div class="relative h-full">
        <DotIcon :style="{ color: color }" />
        <div class="absolute -bottom-[10px] md:-bottom-[15px] -left-0 -translate-x-[2px]">
          <BarIcon :style="{ color: color }" />
        </div>
      </div>

      <p
        class="text-[12px] md:text-[14px] leading-[14px] md:leading-5 text-custom-gray transition-all"
        :class="[name === 'draw' ? 'capitalize' : 'uppercase']"
      >
        {{ name }}
      </p>
    </div>

    <div class="text-[12px] leading-[12px] font-bold">{{ value }}%</div>
  </div>
</template>

<style lang="scss" scoped></style>
