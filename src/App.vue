<script setup lang="ts">
import  ButtonAtom  from '@atom/ButtonAtom.vue'
import { BUTTON_ROUNDED, BUTTON_VARIANTS } from '@/enums/ButtonEnums';
</script>

<template>
  <button-atom :variant="BUTTON_VARIANTS.elevated">{{BUTTON_VARIANTS.elevated}}</button-atom>
  <button-atom :variant="BUTTON_VARIANTS.flat">{{BUTTON_VARIANTS.flat}}</button-atom>
  <button-atom :variant="BUTTON_VARIANTS.outlined">{{BUTTON_VARIANTS.outlined}}</button-atom>
  <button-atom :variant="BUTTON_VARIANTS.text">{{BUTTON_VARIANTS.text}}</button-atom>
  <button-atom :rounded="BUTTON_ROUNDED.pill" :color="'#f00'" :block="true">{{BUTTON_ROUNDED.pill}}</button-atom>
  <button-atom>new</button-atom>
  <RouterView />
</template>

<style scoped></style>
