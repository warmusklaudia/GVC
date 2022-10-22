<template>
  <main class="flex flex-col w-screen min-h-screen">
    <header class="flex flex-col md:flex-row items-center m-3 md:justify-between md:m-6 lg:mx-12">
      <router-link to="/home">
              <Logo class="w-32 md:w-36 lg:w-40"/>
      </router-link>
      <Nav/>
    </header>
    <section class="md:flex md:justify-between items-center">
      <div class="w-full">
        <div class="w-1/4 h-72 shadow-lg"></div>
        <div></div>
        <div></div>
      </div>
    </section>

      <footer class=" m-3 mt-auto md:m-6 md:mt-auto" >
        <div class="flex flex-col items-center md:flex-row justify-between text-xs md:text-sm text-neutral-500 font-beta">
        <p class="">Garage VanCuba © 2022</p>
        <a class="hover:text-neutral-900" href="https://www.klaudiawarmus.be">Website by KWS</a>
        <p>BTW BE0747 689 856</p>
        </div>
      </footer>
  </main>

  </template>
  
  <script setup lang="ts">
import Logo from '../components/Logo.vue';
import Nav from '../components/Nav.vue';

  </script>
  