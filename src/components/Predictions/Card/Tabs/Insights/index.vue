<script lang="ts" setup>
import ItemComponent from './Item.vue'
import ChartComponent from './Chart.vue'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})

const INSIGHTS_COLORS = ['#76E664', '#FFBD14', '#FF5A00']
</script>

<template>
  <div class="flex flex-row items-center gap-4 md:gap-7">
    <div>
      <ChartComponent :content="content" :colors="INSIGHTS_COLORS" />
    </div>
    <div class="w-full grid grid-flow-row grid-rows-3 gap-2">
      <ItemComponent
        v-for="(value, name, index) in content"
        :key="index"
        :name="name"
        :value="value"
        :color="INSIGHTS_COLORS[index]"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
