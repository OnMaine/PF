<script setup lang="ts">
import PredictionCard from './Card/index.vue'

import type { PropType } from 'vue'
import { Game } from '@/types/index'

const props = defineProps({
  games: {
    type: Array as PropType<Game[]>,
    required: true,
  },
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
    <PredictionCard v-for="game in games" :key="game.id" :game="game" />
  </div>
</template>
