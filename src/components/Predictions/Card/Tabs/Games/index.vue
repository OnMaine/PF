<script lang="ts" setup>
import GameItem from './Item.vue'

import { type PropType } from 'vue'
import { Game } from '@/types/index'

const props = defineProps({
  game: {
    type: Object as PropType<Game>,
    required: true,
  },
})

const { last_games, teams } = props.game
</script>

<template>
  <div class="flex flex-col gap-1 md:gap-2">
    <GameItem
      v-for="(item, index) in last_games"
      :key="index"
      :game="item"
      :teams="teams"
      :idx="index"
    />
  </div>
</template>

<style lang="scss" scoped></style>
