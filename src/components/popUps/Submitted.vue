<script lang="ts" setup>
import { ref } from 'vue'
import { FwbModal } from 'flowbite-vue'

const isShowModal = ref(false)

function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true

  setTimeout(() => {
    closeModal()
  }, 3000)
}

defineExpose({ showModal, closeModal })
</script>

<template>
  <fwb-modal v-if="isShowModal" size="sm" position="center" @close="closeModal">
    <template #body>
      <div class="text-green-900 text-center text-[20px] leading-[30px] font-bold">
        Your prediction has been submitted. Good luck!
      </div>
    </template>
  </fwb-modal>
</template>

<style lang="scss" scoped></style>
