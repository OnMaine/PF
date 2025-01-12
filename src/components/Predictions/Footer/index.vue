<script setup lang="ts">
import Question from './Question.vue'
import SubmittedPopUp from '@components/popUps/Submitted.vue'
import BtnComponent from '@components/Base/Btn.vue'
import { useTemplateRef } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
const { setSubmittedPrediction } = counterStore
const { isSubmittedPrediction } = storeToRefs(counterStore)

const submittedModal = useTemplateRef<{ showModal: () => void }>('SubmittedModal')

const submitPredictions = () => {
  setSubmittedPrediction(true)

  if (submittedModal.value) {
    submittedModal.value.showModal()
  }
}
</script>

<template>
  <div>
    <div class="flex flex-col md:flex-row justify-between md:items-center gap-6 lg:gap-16">
      <Question />

      <div v-if="!isSubmittedPrediction" class="flex flex-col gap-4">
        <h3 class="text-[11px] leading-4 text-custom-gray">
          After you submit your predictions, it can’t be undone
        </h3>
        <div class="flex flex-row justify-start md:justify-between items-center gap-3">
          <BtnComponent :color="'black'">Cancel</BtnComponent>
          <BtnComponent :color="'yellow'" @click="submitPredictions">Submit</BtnComponent>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade" mode="out-in">
        <SubmittedPopUp ref="SubmittedModal" />
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
