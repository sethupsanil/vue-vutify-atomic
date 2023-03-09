<template>
  <v-textarea
    :rules="rules"
    v-bind="$attrs"
    :label="label"
    :variant="variant"
    :type="type"
    :placeholder="placeholder"
    :hint="hint"
    :color="color"
    :readonly="readonly"
    :disabled="disabled"
    :density="density"
    :prefix="prefix"
    :suffix="suffix"
    :value="modelValue"
    v-model="value"
    :direction="direction"
  ></v-textarea>
</template>

<script setup lang="ts">
import { InputDensity, InputVariant, INPUT_DENSITY, INPUT_VARIANTS } from '@/enums/InputEnum'
import { InputDirection, INPUT_DIRECTION } from '@/enums/TextAreaEnum'
import { defineProps, computed, ref, watch, PropType } from 'vue'
const value = ref('')
const props = defineProps({
  label: String,
  variant: {
    type: String as PropType<InputVariant>,
    required: false,
    validator: (value: string) => Object.prototype.hasOwnProperty.call(INPUT_VARIANTS, value)
  },
  direction: {
    type: String as PropType<InputDirection>,
    required: false,
    validator: (value: string) => Object.prototype.hasOwnProperty.call(INPUT_DIRECTION, value)
  },
  hint: String,
  type: String,
  placeholder: String,
  rules: [],
  readonly: Boolean,
  color: String,
  suffix: String,
  prefix: String,
  density: {
    type: String as PropType<InputDensity>,
    validator: (value: string) => Object.prototype.hasOwnProperty.call(INPUT_DENSITY, value)
  },
  disabled: Boolean,

  modelValue: { type: String }
})
</script>

<style scoped></style>
