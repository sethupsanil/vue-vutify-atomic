<script setup lang="ts">
import { ref } from 'vue'
import CheckboxAtom from './components/atoms/CheckboxAtom.vue'

const clickHandler = (event: MouseEvent) => {
  console.log(event)
}

const username = ref<string>('')
const password = ref<string>('')
// VCheckbox
</script>

<template>
  <v-card>
    <v-container >
      <v-row>
        <v-col cols="12">
          <CheckboxAtom></CheckboxAtom>
          sfg
        </v-col>
        

      </v-row>
    
    </v-container>
  </v-card>


  <RouterView />
</template>

<style scoped></style>
