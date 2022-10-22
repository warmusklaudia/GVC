<template>
  <main class="flex flex-col w-screen min-h-screen">
    <header class="flex justify-between items-center m-6">
      <Logo class="w-40"/>
      <Nav/>
    </header>
        <footer class="mt-auto m-6" >
          <div class="flex justify-between text-sm text-neutral-500">
          <p class="">Garage VanCuba © 2022</p>
          <a href="https://www.klaudiawarmus.be">Website by KWS</a>
          <p>BTW BE0747 689 856</p>
          </div>
        </footer>
  </main>

  </template>
  <script setup lang="ts">
  import Logo from '../components/Logo.vue';
import Nav from '../components/Nav.vue';

  
  </script>
  