<template>
  <v-switch
    :label="label"
    :color="color"
    :true-value="trueValue"
    :false-value="falseValue"
    v-bind="$attrs"
  ></v-switch>
</template>
<script lang="ts" setup>
const props = defineProps({
  label: String,
  trueValue: String,
  falseValue: String,
  color: String
})
</script>
