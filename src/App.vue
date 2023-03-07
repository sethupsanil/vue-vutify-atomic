<script setup lang="ts">
import  ButtonAtom  from './components/atoms/ButtonAtom.vue'
import { BUTTON_VARIANTS } from './enums/ButtonVariants';
</script>

<template>
  <button-atom :variant="BUTTON_VARIANTS.elevated">{{BUTTON_VARIANTS.elevated}}</button-atom>
  <button-atom :variant="BUTTON_VARIANTS.flat">{{BUTTON_VARIANTS.flat}}</button-atom>
  <button-atom :variant="BUTTON_VARIANTS.outlined">{{BUTTON_VARIANTS.outlined}}</button-atom>
  <button-atom :variant="BUTTON_VARIANTS.text">{{BUTTON_VARIANTS.text}}</button-atom>
  <button-atom>new</button-atom>
  <ButtonAtom />
  <RouterView />
</template>

<style scoped></style>
