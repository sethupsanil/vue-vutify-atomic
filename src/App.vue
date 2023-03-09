<script setup lang="ts">
import { ref } from 'vue'
// import { VCheckbox } from 'vuetify/lib/components';

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
         
          

          
        </v-col>
        

      </v-row>
    
    </v-container>
  </v-card>


  <RouterView />
</template>

<style scoped></style>
