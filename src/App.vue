<script setup lang="ts">
import { ref } from 'vue'
import ButtonAtom from './components/atoms/ButtonAtom.vue';
import InputAtom from './components/atoms/InputAtom.vue';

import { BUTTON_ROUNDED, BUTTON_VARIANTS } from '@/enums/ButtonEnums'
const buttonClickHandler = (event: MouseEvent) => {
  console.log(event)
}

const username = ref<string>('')
const password = ref<string>('')

</script>

<template>
 
  <ButtonAtom  :variant="BUTTON_VARIANTS.elevated">{{ BUTTON_VARIANTS.elevated }}</ButtonAtom>
  <ButtonAtom :variant="BUTTON_VARIANTS.flat">{{ BUTTON_VARIANTS.flat }}</ButtonAtom>
  <ButtonAtom :variant="BUTTON_VARIANTS.outlined">{{ BUTTON_VARIANTS.outlined }}</ButtonAtom>
  <ButtonAtom  :variant="BUTTON_VARIANTS.text">{{ BUTTON_VARIANTS.text }}</ButtonAtom>
  <ButtonAtom
    :rounded="BUTTON_ROUNDED.pill"
    @click="buttonClickHandler"
    :color="'#f00'"
    :block="true"
    >{{ BUTTON_ROUNDED.pill }}</ButtonAtom
  >
  <Button>new</Button>
  <InputAtom  id="username" class="red"  label="Username" v-model="username" @change="$event=>buttonClickHandler" />
  {{ username }}
  <InputAtom
    id="password"
    label="Password"
    type="password"
    v-model="password"
  ></InputAtom>
  <RouterView />
</template>

<style scoped></style>
