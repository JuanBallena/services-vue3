<template>
  <section class="g-accounting-loading">
    <section class="g-accounting-loading__container">
      <aside
        v-for="(image, index) in images"
        :key="index"
      >
        <img
          :src="image.src"
          :alt="image.alt"
        >
      </aside>
    </section>
  </section>
</template>

<script lang="ts" setup>

const images = [
  {
    src: require('@/assets/svg/svg-1.svg'),
    alt: 'image 1'
  },
  {
    src: require('@/assets/svg/svg-2.svg'),
    alt: 'image 2'
  },
  {
    src: require('@/assets/svg/svg-3.svg'),
    alt: 'image 3'
  },
  {
    src: require('@/assets/svg/svg-4.svg'),
    alt: 'image 4'
  },
  {
    src: require('@/assets/svg/svg-5.svg'),
    alt: 'image 5'
  },
  {
    src: require('@/assets/images/accounting-card.png'),
    alt: 'image 6'
  },
  {
    src: require('@/assets/svg/svg-7.svg'),
    alt: 'image 7'
  },
  {
    src: require('@/assets/svg/svg-8.svg'),
    alt: 'image 8'
  },
  {
    src: require('@/assets/svg/svg-9.svg'),
    alt: 'image 9'
  },
  {
    src: require('@/assets/svg/svg-10.svg'),
    alt: 'image 10'
  },
  {
    src: require('@/assets/svg/svg-11.svg'),
    alt: 'image 11'
  }
]
</script>
