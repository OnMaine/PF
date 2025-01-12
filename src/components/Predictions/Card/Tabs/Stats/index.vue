<script lang="ts" setup>
import StatsItem from './Item.vue'

import { type PropType } from 'vue'
import { Game } from '@/types/index'

const props = defineProps({
  game: {
    type: Object as PropType<Game>,
    required: true,
  },
})

const { stats } = props.game
</script>

<template>
  <div class="flex flex-row justify-between gap-3">
    <StatsItem v-for="(item, index) in stats" :key="index" :stats="item" />
  </div>
</template>

<style lang="scss" scoped></style>
