<template>
  <v-btn
    :class="classes"
    :rounded="props.rounded"
    :color="color"
    :variant="variant"
    :block="block"
    :icon="icon"
    :size="size"
    @click="$emit('click')"
  >
    <slot></slot>
  </v-btn>
</template>
<script setup lang="ts">
import {
  BUTTON_VARIANTS,
  ButtonVariant,
  ButtonRound,
  BUTTON_ROUNDED,
  BUTTON_SIZES,
  ButtonSize
} from '@enum/ButtonEnums'
import type { PropType } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<ButtonVariant>,
    required: false,
    default: BUTTON_VARIANTS.outlined,
    validator: (value: string) => Object.prototype.hasOwnProperty.call(BUTTON_VARIANTS, value)
  },
  rounded: {
    type: String as PropType<ButtonRound>,
    required: false,
    validator: (value: string) => Object.prototype.hasOwnProperty.call(BUTTON_ROUNDED, value)
  },
  size: {
    type: String as PropType<ButtonSize>,
    required: false,
    validator: (value: string) => Object.prototype.hasOwnProperty.call(BUTTON_SIZES, value)
  },
  disabled: { type: Boolean, required: false },
  color: String,
  classes: String,
  block: Boolean,
  icon: String
})
</script>
