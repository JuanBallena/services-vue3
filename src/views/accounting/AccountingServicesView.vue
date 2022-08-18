<template>
  <AccountingLoading v-if="loading" />

  <section v-else>
    <section ref="headerRef">
      <AccountingHeader
        :links="links"
        @click-link="goToSection($event)"
      />
    </section>

    <section class="g-accounting-services">
      <section class="g-accounting-services__circle-rotative">
        <section class="m-circle-rotative">
          <section class="m-circle-rotative__circle">
            <section
              v-for="(element, index) of elementsOfCircle"
              :key="index"
              class="m-circle-rotative__element"
            >
              <img
                :src="element.src"
                :alt="element.alt"
              >
            </section>
          </section>
        </section>
      </section>
    </section>

    <section
      ref="aboutUsRef"
      class="g-accounting-services__about-us"
    >
      <p>Quiénes somos</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque maiores hic repellat reprehenderit deserunt laudantium voluptatibus voluptatem quasi sint pariatur, error eius expedita. Architecto ipsum consectetur nam magnam suscipit.</p>
    </section>

    <section
      ref="servicesRef"
      class="g-accounting-services__services area"
    >
      <ul class="circles">
        <p>Servicios</p>
        <div>
          <aside
            v-for="(serviceCard, index) in servicesCard"
            :key="index"
            class="m-service-card"
          >
            <section class="m-service-card__svg">
              <section class="m-service-card__circle">
                <component
                  :is="serviceCard.svg"
                  :class="serviceCard.className"
                />
              </section>
            </section>

            <p class="m-service-card__text">
              {{ serviceCard.text }}
            </p>
            <p class="m-service-card__description">
              {{ serviceCard.description }}
            </p>
          </aside>
        </div>

        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </section>

    <section
      ref="suggestionsRef"
      class="g-accounting-services__suggestions"
    >
      <p>
        Sugerencias
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, veritatis obcaecati at dolores inventore tempora minima sunt quidem minus vitae nesciunt voluptatum porro quaerat, iste accusamus. Vitae sint nostrum ipsum.
        Quas vel qui, quis porro accusantium cupiditate autem, perferendis repudiandae quo ad, esse ab inventore voluptas nemo quia? Aut dolorem harum dolores numquam sint error fugiat eum, nulla dicta quam.
        Magnam corporis laudantium perspiciatis eos nostrum dolore doloremque ratione corrupti qui minima illo, sed assumenda doloribus voluptatum voluptates, animi provident aspernatur et ex quos laboriosam ipsam iure voluptate. Unde, quod!
        Fuga possimus quo earum provident tempore, nulla unde voluptates voluptatibus consectetur doloribus laudantium in cum enim sint ad omnis dolorem assumenda aperiam atque, iste culpa nobis quaerat totam! Placeat, voluptatibus.
        Quae corporis illo modi optio veniam blanditiis repudiandae. Itaque numquam optio temporibus aperiam nisi dolorem atque eos repellat nemo, illum aliquid doloribus, voluptates fugiat rerum voluptate debitis quidem fuga explicabo.

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum reiciendis quis corrupti iure neque, qui esse aliquam quas minima explicabo. Id, exercitationem minima ad harum fuga voluptas neque veritatis velit?
        Veritatis hic illum et ullam ipsum quo nulla sed deserunt, excepturi perspiciatis cupiditate libero id repellat voluptatibus? Eos itaque nam nobis suscipit minus, architecto laudantium nihil in corporis, debitis iusto.
        Ipsum cumque nobis dicta laboriosam magnam enim id. Odio quibusdam nihil modi quisquam maiores, at mollitia vel delectus commodi tempora porro odit ipsum consequatur sapiente illum pariatur voluptas veniam natus.
        Nobis quibusdam, aperiam laborum libero iusto quasi doloremque modi ipsa voluptatem sapiente unde porro optio nisi dolores ut enim, quidem consequuntur eveniet. Ullam dolore, neque fuga accusamus molestiae numquam doloremque!
        Totam culpa impedit quo non nostrum aliquid mollitia facilis minus, repellat officia a possimus aspernatur nesciunt quae ad dicta pariatur optio voluptatum atque eaque quos dolore corrupti inventore modi. Atque.
      </p>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue'
import AccountingLoading from './AccountingLoading.vue'
import AccountingHeader from './AccountingHeader.vue'
import SvgEye from '@/svg/SvgEye.vue'
import SvgPencil from '@/svg/SvgPencil.vue'

const loading: Ref<boolean> = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 4000)

  setTimeout(() => {
    if (headerRef.value != null) {
      const headerHTML = headerRef.value as HTMLElement
      const header = headerHTML.children[0].children[0] as HTMLElement
      headerHeight.value = header.offsetHeight
    }
  }, 5000)
})

interface Link {
  text: string,
  refName: string,
  active: boolean
}

const aboutUsLink = {
  text: 'Quiénes somos',
  refName: 'aboutUsRef',
  active: true
}
const servicesLink = {
  text: 'Servicios',
  refName: 'aboutRef',
  active: false
}

const suggestionsLink = {
  text: 'Sugerencias',
  refName: 'suggestionsRef',
  active: false
}

const links: Ref<Link[]> = ref([])
links.value.push(aboutUsLink)
links.value.push(servicesLink)
links.value.push(suggestionsLink)

const headerRef = ref(null)
const aboutUsRef = ref(null)
const servicesRef = ref(null)
const suggestionsRef = ref(null)
const headerHeight = ref(0)

function goToSection (refName: string): void {
  let ref = null

  if (refName === aboutUsLink.refName) {
    ref = aboutUsRef.value
  }

  if (refName === servicesLink.refName) {
    ref = servicesRef.value
  }

  if (refName === suggestionsLink.refName) {
    ref = suggestionsRef.value
  }

  if (ref != null) {
    const refHtml = ref as HTMLElement
    const top = refHtml.offsetTop - headerHeight.value
    window.scrollTo(0, top)
  }
}

const elementsOfCircle = [
  {
    src: require('@/assets/images/accounting-card.png'),
    alt: 'image 1'
  },
  {
    src: require('@/assets/images/accounting-card.png'),
    alt: 'image 2'
  },
  {
    src: require('@/assets/images/accounting-card.png'),
    alt: 'image 3'
  },
  {
    src: require('@/assets/images/accounting-card.png'),
    alt: 'image 4'
  },
  {
    src: require('@/assets/images/accounting-card.png'),
    alt: 'image 5'
  },
  {
    src: require('@/assets/images/accounting-card.png'),
    alt: 'image 6'
  },
  {
    src: require('@/assets/images/accounting-card.png'),
    alt: 'image 7'
  },
  {
    src: require('@/assets/images/accounting-card.png'),
    alt: 'image 8'
  },
  {
    src: require('@/assets/images/accounting-card.png'),
    alt: 'image 9'
  },
  {
    src: require('@/assets/images/accounting-card.png'),
    alt: 'image 10'
  }
]

const servicesCard = [
  {
    svg: SvgEye,
    className: 'svg-eye--white',
    text: 'Mercadeo',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum reiciendis quis corrupti iure neque, qui esse aliquam quas minima explicabo. Id, exercitationem minima ad harum fuga voluptas neque veritatis velit?'
  },
  {
    svg: SvgPencil,
    className: 'svg-pencil--white',
    text: 'Mercadeo',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum reiciendis quis corrupti iure neque, qui esse aliquam quas minima explicabo. Id, exercitationem minima ad harum fuga voluptas neque veritatis velit?'
  },
  {
    svg: SvgPencil,
    className: 'svg-pencil--white',
    text: 'Mercadeo',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum reiciendis quis corrupti iure neque, qui esse aliquam quas minima explicabo. Id, exercitationem minima ad harum fuga voluptas neque veritatis velit?'
  }
]
</script>

<style scoped>

/* .container {
  position: relative;
  width:100%;
  top:0;
  background-color: #00b4d8;
  overflow: hidden;
  height: 500px;
}
.bubbles {
  position: fixed;
  opacity:0.9;
  z-index:1;
}

@keyframes up {
  100% { transform: translateY(-1000px);}
}

.bubble1 {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 50%;
  box-shadow:  inset -7px -7px 15px rgba(255, 255, 255, 0.3), 5px 5px 3px rgba(0,0,0,0.07);
  overflow:hidden;
  animation: up 2s linear infinite;
  top:600px;
  left:1000px;
}

.bubble1:after {
  content:"";
  position: absolute;
  background-color: rgba(255,255,255,0.4);
  border-radius:50%;
  width:25px;
  height:50px;
  left:15px;
  top:12px;
  transform: rotate(25deg);
  filter: blur(8px);
}

.bubble2 {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 50%;
  box-shadow:  inset -7px -7px 15px rgba(255, 255, 255, 0.3), 5px 5px 3px rgba(0,0,0,0.07);
  overflow:hidden;
  left:800px;
  top: 700px;
  animation: up 16s linear infinite;
}

.bubble2:after {
  content:"";
  position: absolute;
  background-color: rgba(255,255,255,0.6);
  border-radius:50%;
  width:12.5px;
  height:25px;
  left:15px;
  top:7px;
  transform: rotate(25deg);
  filter: blur(8px);
}

.bubble3 {
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 50%;
  box-shadow:  inset -7px -7px 15px rgba(255, 255, 255, 0.3), 5px 5px 3px rgba(0,0,0,0.07);
  overflow:hidden;
  left:1200px;
  top:800px;
  animation: up 5s linear infinite;
}

.bubble3:after {
  content:"";
  position: absolute;
  background-color: rgba(255,255,255,0.4);
  border-radius:50%;
  width:20px;
  height:40px;
  left:15px;
  top:10px;
  transform: rotate(25deg);
  filter: blur(7px);
}  */

.area{
    background: #8b181d;
    background: -webkit-linear-gradient(to left, #8f94fb, #8b181d);
    width: 100%;
    /* height:100vh; */
}

.circles{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 10s linear infinite;
    bottom: -150px;

}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>
