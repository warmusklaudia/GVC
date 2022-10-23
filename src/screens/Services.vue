<template>
  <main class="flex flex-col w-screen min-h-screen">
    <header class="flex flex-col md:flex-row items-center m-3 md:justify-between md:m-6 lg:mx-12">
      <router-link to="/home">
              <Logo class="w-32 md:w-36 lg:w-40"/>
      </router-link>
      <Nav/>
    </header>
    <section class="md:flex md:justify-between items-center">
      <div class="w-full m-3 flex flex-col items-center md:m-10 md:flex-row md:justify-evenly">
        <div class="w-64 sm:w-1/3 md:w-1/4 h-[400px] lg:h-[450px] 2xl:h-[500px] shadow-lg rounded-md flex flex-col">
          <div class="rounded-md">
            <img class="p-4 w-full h-28 lg:h-32 object-cover" src="/mechanica.jpg" alt="Photo of tools">
          </div>
          <h1 class="text-center font-alpha text-alpha pb-3">Car repair and diagnostic</h1>
          <ul class="list-inside mx-6 lg:mx-10 text-sm md:text-base">
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Engine repairs
            </li>
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Oil service
            </li>
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Tire change
            </li>
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Clutch
            </li>
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Brakes
            </li>
            <li class="flex items-center font-beta pb-6">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Suspension
            </li>
          </ul>
          <div class=" flex gap-2 text-beta w-full h-full justify-center items-end pb-6">
            <Star fill="#D24A43"/>
            <Star fill="#D24A43"/>
            <Star fill="#D24A43"/>
          </div>
        </div>
        <div class="w-64  sm:w-1/3 md:w-1/4 h-[400px] lg:h-[450px] 2xl:h-[500px] shadow-lg rounded-md flex flex-col">
          <div class="rounded-md">
            <img class="p-4 w-full h-28 lg:h-32 object-cover" src="/chiptuning.jpg" alt="Photo of automotive chart">
          </div>
          <h1 class="text-center font-alpha text-alpha pb-3">Chiptuning</h1>
          <ul class="list-inside mx-6 lg:mx-10 text-sm md:text-base">
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Increase the power
            </li>
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Power check on dynamometer
            </li>
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Individual modifications
            </li>
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Gearbox modifications
            </li>
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Coding
            </li>
          </ul>
          <div class=" flex gap-2 text-beta w-full h-full justify-center items-end pb-6">
            <Star fill="#D24A43"/>
            <Star fill="#D24A43"/>
            <Star fill="#D24A43"/>
          </div>
        </div>
        <div class="w-64  sm:w-1/3 md:w-1/4 h-[400px] lg:h-[450px] 2xl:h-[500px] shadow-lg rounded-md flex flex-col">
          <div class="rounded-md">
            <img class="p-4 w-full h-28 lg:h-32 object-cover" src="/welding.jpg" alt="Photo of a welder">
          </div>
          <h1 class="text-center font-alpha text-alpha pb-3">Welding</h1>
          <ul class="list-inside mx-6 lg:mx-10 text-sm md:text-base">
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Stainless steel exhausts
            </li>
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Air intakes
            </li>
            <li class="flex items-center font-beta pb-1">
              <div class="w-2 h-2 bg-beta rounded-full mr-3"></div>
              Installation of intercoolers
            </li>
          </ul>
          <div class="flex gap-2 text-beta w-full h-full justify-center items-end m-auto pb-6">
            <Star fill="#D24A43"/>
            <Star fill="#D24A43"/>
            <Star fill="#D24A43"/>
          </div>
        </div>
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
import { Star } from 'lucide-vue-next';

  </script>
  