<template>
  <main class="flex flex-col w-screen min-h-screen">
    <header class="flex flex-col md:flex-row items-center m-3 md:justify-between md:m-6">
      <Logo class="w-32 md:w-36 lg:w-40"/>
      <Nav/>
    </header>
    <section class="md:flex md:justify-between items-center">
      <div class="m-6 md:m-12 lg:pl-10">
        <h1 class=" font-alpha text-2xl md:text-3xl lg:text-4xl text-alpha">Why Garage VanCuba?</h1>
      <p class="text-lg leading-8 md:text-xl md:leading-10 lg:text-2xl text-alpha max-w-md pt-6 lg:leading-[50px]">
        I offer the best service and guarantee the best quality. I'll take care of your car like it's mine.
My customers' cars comes first.
      </p>
      </div>
      <div class="flex justify-end">
        <img class="max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl" src="../../public/home-car.jpeg" alt="">
      </div>


    </section>

      <footer class=" m-3 mt-auto md:m-6 md:mt-auto" >
        <div class="flex flex-col items-center md:flex-row justify-between text-xs md:text-sm text-neutral-500 font-beta">
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
  