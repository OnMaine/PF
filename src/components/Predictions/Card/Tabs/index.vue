<script setup lang="ts">
import InsightsIcon from '@/assets/icons/ins.svg'
import StatsIcon from '@/assets/icons/stats.svg'
import SocerIcon from '@/assets/icons/soccer-ball.svg'

import { defineAsyncComponent, onMounted } from 'vue'
import { initTabs } from 'flowbite'

const AsyncInsightsComponent = defineAsyncComponent(() => import('./Insights/index.vue'))
const AsyncStatsComponent = defineAsyncComponent(() => import('./Stats/index.vue'))
const AsyncGamesComponent = defineAsyncComponent(() => import('./Games/index.vue'))

import { type PropType } from 'vue'
import { Game } from '@/types/index'

const props = defineProps({
  game: {
    type: Object as PropType<Game>,
    required: true,
  },
})

const { insights, stats, last_games, id: game_id, teams } = props.game

const tabs = [
  {
    id: 'insights',
    label: 'Insights',
    icon: InsightsIcon,
    content: insights,
    component: AsyncInsightsComponent,
  },
  { id: 'stats', label: 'Stats', icon: StatsIcon, content: stats, component: AsyncStatsComponent },
  {
    id: 'games',
    label: 'Last 5 Games',
    icon: SocerIcon,
    content: last_games,
    component: AsyncGamesComponent,
  },
]

onMounted(() => {
  initTabs()
})
</script>

<template>
  <div class="px-2 md:px-[15px] lg:px-[30px] pt-[15px] pb-[20px] h-full bg-secondary">
    <div class="mb-2 md:mb-4 border-b-2 border-[#2A2D30]">
      <ul
        class="flex flex-wrap gap-5 md:gap-7 -mb-px"
        :id="game_id + '_default-tab'"
        :data-tabs-toggle="'#' + game_id + '_default-tab-content'"
        data-tabs-active-classes="text-white border-white border-b-2"
        role="tablist"
      >
        <li
          v-for="({ icon, id, label }, index) in tabs"
          :key="index + '_' + game_id"
          class="me-2"
          role="presentation"
        >
          <button
            class="flex flex-row items-center gap-2 pb-[10px] md:pb-[14px]"
            :id="id + '_tab_' + game_id"
            :data-tabs-target="'#' + id + '_' + game_id"
            type="button"
            role="tab"
            :aria-controls="id + '_' + game_id"
            aria-selected="false"
          >
            <component :is="icon" class="inline-block" />
            <span class="text-[12px] leading-[15px]">{{ label }}</span>
          </button>
        </li>
      </ul>
    </div>
    <div :id="game_id + '_default-tab-content'">
      <div
        v-for="({ content, component, id }, index) in tabs"
        :key="index + '_' + game_id"
        class="hidden mt-4 md:mt-6 h-full"
        :id="id + '_' + game_id"
        role="tabpanel"
        :aria-labelledby="id + '_tab_' + game_id"
      >
        <component :is="component" :content="content" :id="game_id" :game="game" />
      </div>
    </div>
  </div>
</template>
