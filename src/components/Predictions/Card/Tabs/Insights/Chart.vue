<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
})

const FADE_COLORS = ['#26302A', '#312D24', '#312522']

const { colors, content } = props
const values = computed(() => Object.values(content))

const chartOptions = {
  colors: colors,
  chart: {
    height: '100%',
    width: '100%',
    type: 'radialBar',
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      track: {
        background: FADE_COLORS,
      },
      hollow: {
        size: '15%',
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        },
      },
    },
  },
}
</script>

<template>
  <div class="flex flex-row items-center w-[116px] h-[116px]">
    <div class="w-full">
      <apexchart
        type="radialBar"
        height="130"
        width="130"
        :options="chartOptions"
        :series="values"
      ></apexchart>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
