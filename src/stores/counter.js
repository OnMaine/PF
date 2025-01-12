import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const tiebreakerCounter = ref(0);
  const isSubmittedPrediction = ref(false);
  const roundDate = ref('2025-02-19 10:03:00')

  const updateTiebreakerCounter = (value) => {
    tiebreakerCounter.value = value
  }

  const setSubmittedPrediction = (value) => {
    isSubmittedPrediction.value = value
  }

  return { tiebreakerCounter, updateTiebreakerCounter, isSubmittedPrediction, setSubmittedPrediction, roundDate }
})
