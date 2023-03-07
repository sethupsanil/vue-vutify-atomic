<template>
  <v-btn :class="classes" :color="color" :variant="variant" @click="$emit('click')">
    <slot></slot>
  </v-btn>
</template>
<script setup lang="ts">
import { BUTTON_VARIANTS ,ButtonVariant} from '@/enums/ButtonVariants'
import type { PropType } from 'vue'


const props = defineProps({
  variant: {
    type: String as PropType<ButtonVariant> ,
    required: false,
    default: '',
    // eslint-disable-next-line no-prototype-builtins
    validator: (value: string) =>  BUTTON_VARIANTS.hasOwnProperty(value)
  },
  disabled: { type: Boolean, required: false },
  color: { type: String },
  classes:{type:String}
})


</script>
