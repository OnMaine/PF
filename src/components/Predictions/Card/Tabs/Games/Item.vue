<script setup lang="ts">
const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
  teams: {
    type: Object,
    required: true,
  },
  idx: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div>
    <div class="flex justify-between text-[13px] md:text-[15px] text-gray-300">
      <span>
        {{ idx % 2 === 1 ? teams[0].name : teams[1].name }}
      </span>

      <span>
        {{ game }}
      </span>

      <span> {{ idx % 2 === 0 ? teams[1].name : teams[0].name }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
