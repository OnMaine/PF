<script setup lang="ts">
import ArrowIcon from '@/assets/icons/arrow.svg'
</script>

<template>
  <div class="flex flex-row justify-between items-center cursor-pointer gap-3 group w-fit">
    <div class="h-[28px] w-[28px] rounded-[4px] flex justify-center items-center bg-quaternary">
      <ArrowIcon />
    </div>

    <p class="text-[14px] leading-[20px] text-custom-gray group-hover:text-white transition-all">
      Back
    </p>
  </div>
</template>
