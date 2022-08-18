<template>
  <header class="g-accounting-header">
    <nav class="g-accounting-header__nav">
      <section class="g-accounting-header__logo">
        <SvgAccountingLogo class="svg-logo--primary" />
      </section>
      <ul class="g-accounting-header__links">
        <li
          v-for="(link, index) in reactiveLinks"
          :key="index"
        >
          <a @click="goToSection(link.refName)">{{ link.text }}</a>
        </li>
        <li>
          <ButtonComponent
            rounded
            background="primary"
          >
            Regístrate
          </ButtonComponent>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, defineEmits, reactive } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import SvgAccountingLogo from '@/svg/SvgAccountingLogo.vue'

interface Link {
  text: string,
  refName: string,
  active: boolean
}

interface Props {
  links: Link[]
}

const props = withDefaults(defineProps<Props>(), {
  links: () => []
})

const emit = defineEmits<{
  (e: 'click-link', refName: string): void
}>()

const reactiveLinks = reactive(props.links)

function goToSection (refName: string): void {
  emit('click-link', refName)
}

// function goToStart (): void {
//   emit('click-logo')
// }
</script>
