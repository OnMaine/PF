<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
})

const { color } = props

const classes = computed(() => {
  return {
    'bg-custom-yellow text-black hover:border-white': color === 'yellow',
    'bg-secondary text-white hover:border-custom-yellow': color === 'black',
  }
})
</script>

<template>
  <button
    type="button"
    :class="classes"
    class="py-[12px] px-[30px] rounded-[7px] text-[14px] leading-[20px] font-manrope font-weight-600 border border-transparent transition-all duration-200"
  >
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scoped></style>
