<script setup>
import Prediction from '@components/Predictions/index.vue'
import Header from '@components/Predictions/Header/index.vue'
import Footer from '@components/Predictions/Footer/index.vue'

import fakeData from '@/dataBase/fake-data'

const defaultRound = 18
</script>

<template>
  <div class="container flex flex-col py-7 md:py-14 gap-y-5 md:gap-y-9">
    <header>
      <Header :round-number="defaultRound" />
    </header>

    <main>
      <Prediction :games="fakeData" />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
