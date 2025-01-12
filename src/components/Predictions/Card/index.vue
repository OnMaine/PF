<script setup lang="ts">
import type { PropType } from 'vue'

import CardHeader from './CardHeader.vue'
import CardScore from './CardScore.vue'
import CardTabs from './Tabs/index.vue'

import { Game } from '@/types/index'

const props = defineProps({
  game: {
    type: Object as PropType<Game>,
    required: true,
  },
})

const { date, tournament_name } = props.game
</script>

<template>
  <div class="flex flex-col rounded-[7px] overflow-hidden">
    <div
      class="flex flex-col justify-between items-start gap-[16px] md:gap-6 px-[6px] pt-[9px] pb-[20px] md:px-3 md:pt-3 md:pb-6 bg-tertiary"
    >
      <CardHeader :name="tournament_name" :date="date" />

      <CardScore :game="game" />
    </div>
    <div>
      <CardTabs :game="game" />
    </div>
  </div>
</template>
