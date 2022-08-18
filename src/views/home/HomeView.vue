<template>
  <header class="g-home-header">
    <nav class="g-home-header__nav">
      <ul class="g-home-header__links">
        <li>
          <a>Inicio</a>
        </li>
      </ul>
    </nav>
  </header>
  <section class="section-1">
    <p>Servicio Contable</p>

    <ButtonComponent
      background="primary"
      rounded
      @click="toAccountingView()"
    >
      Entrar
    </ButtonComponent>
  </section>
  <section>
    <p>Servicio 2</p>
  </section>
  <section>
    <p>Servicio 3</p>
  </section>
  <section>
    <p>Servicio 4</p>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/ButtonComponent.vue'

const router = useRouter()

function toAccountingView (): void {
  router.push({ name: 'AccountingServicesView' })
}
</script>

<style scoped>
section {
  height: 200px;
  padding: 2rem;
  border-bottom: 1px solid black;
}

section p {
  font-size: 20px;
}

section button {
  margin-top: 2rem;
}

.section-1 {
  margin-top: 6.5rem;
}
</style>
