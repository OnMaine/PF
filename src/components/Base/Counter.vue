<script setup lang="ts">
import ArrowIcon from '@/assets/icons/arrow-circle.svg'
import { ref, defineProps, computed, defineEmits } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
const { updateTiebreakerCounter } = counterStore
const { isSubmittedPrediction } = storeToRefs(counterStore)

const props = defineProps({
  type: {
    type: String,
    default: 'cols',
  },
  limits: {
    type: Object,
    default: () => ({ min: 0, max: 20 }),
  },
})

const { min: minVal, max: maxVal } = props.limits
const currentVal = ref(0)

const emits = defineEmits(['update:counterValue'])

const counterStyles = computed(
  () =>
    ({
      rows: 'flex-row items-center justify-between gap-7 text-[56px] leading-[76px]',
      cols: 'flex-col items-center text-[42px] md:text-[56px] leading-[57px] md:leading-[76px]',
    })[props.type],
)

const isDisabled = computed(() => {
  return isSubmittedPrediction.value
})

const updateCounterValue = (value: number) => {
  currentVal.value = value
  emits('update:counterValue', currentVal.value)
}
</script>

<template>
  <div @dblclick.prevent class="flex" :class="counterStyles">
    <button
      :class="[{ disabled: currentVal === maxVal }, { hidden: isDisabled }]"
      @click="updateCounterValue(Math.min(maxVal, currentVal + 1))"
    >
      <ArrowIcon class="transform rotate-180" />
    </button>

    <div>
      {{ currentVal }}
    </div>

    <button
      :class="[{ disabled: currentVal === minVal }, { hidden: isDisabled }]"
      @click="updateCounterValue(Math.max(minVal, currentVal - 1))"
    >
      <ArrowIcon />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.disabled {
  @apply cursor-not-allowed opacity-50;
}
</style>
