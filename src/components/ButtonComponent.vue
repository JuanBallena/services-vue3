<template>
  <button
    :type="props.type"
    :class="getClassNames()"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

type ButtonType = 'button' | 'submit'

interface Props {
  background?: string,
  type?: ButtonType,
  small?: boolean,
  rounded?: boolean,
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  background: 'primary',
  type: 'button',
  small: false,
  rounded: false,
  block: false
})

function getClassNames (): string {
  let classNames = `a-btn a-btn--${props.background} `

  if (props.small) {
    classNames += 'a-btn--small '
  }

  if (props.rounded) {
    classNames += 'a-btn--rounded '
  }

  if (props.block) {
    classNames += 'a-btn--block '
  }

  return classNames
}

</script>
