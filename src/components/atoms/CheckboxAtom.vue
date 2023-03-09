<template>
  <v-checkbox :label="label" :readonly="readonly" :color="color" :disabled="disabled"></v-checkbox>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  label: String,
  readonly: Boolean,
  color: String,
  disabled: Boolean
})
</script>
