<script setup lang="ts">
const props = defineProps({
  stats: {
    type: Object,
    required: true,
  },
})

const { w, d, l, name } = props.stats
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="text-[13px] md:text-[17px]">Team: {{ name }}</div>

    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1 text-[13px] md:text-[15px] text-gray-300">
        <div>Wins:{{ w }}</div>
        <div>Draws:{{ d }}</div>
        <div>Looses:{{ l }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
