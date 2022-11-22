<template>
  <main class="flex flex-col w-screen min-h-screen">
    <header
      class="flex flex-col md:flex-row items-center m-2 md:justify-between md:m-6 lg:mx-12"
    >
      <router-link to="/home">
        <Logo class="w-30 md:w-36 lg:w-40" />
      </router-link>
      <Nav />
    </header>
    <section class="pt-4 md:pt-0">
      <div class="flex flex-col md:flex-row justify-evenly items-center">
        <div>
          <p
            class="font-alpha text-center tracking-widest text-alpha text-2xl md:text-3xl lg:text-4xl underline decoration-beta pb-6 md:pb-8 lg:pb-10"
          >
            Jakub Zbierski
          </p>
          <div class="flex flex-col gap-2">
            <div class="flex items-center">
              <div
                class="flex justify-center items-center text-white bg-alpha w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full"
              >
                <Phone class="w-5 md:w-6 lg:w-7 h-full" />
              </div>
              <p class="font-beta pl-3 lg:text-xl">+32 (0)491 98 47 25</p>
            </div>
            <div class="flex items-center">
              <div
                class="flex justify-center items-center text-white bg-alpha w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full"
              >
                <Mail class="w-5 md:w-6 lg:w-7 h-full" />
              </div>
              <p class="font-beta pl-3 lg:text-xl">garage.vancuba@gmail.com</p>
            </div>
            <div class="flex items-center">
              <div
                class="flex justify-center items-center text-white bg-alpha w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full"
              >
                <MapPin class="w-5 md:w-6 lg:w-7 h-full" />
              </div>
              <div>
                <p class="font-beta pl-3 lg:text-xl">Bruggestraat 253</p>
                <p class="font-beta pl-3 lg:text-xl">8770 Ingelmunster</p>
              </div>
            </div>
            <div class="flex items-center">
              <div
                class="flex justify-center items-center text-white bg-alpha w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full"
              >
                <Building2 class="w-5 md:w-6 lg:w-7 h-full" />
              </div>
              <p class="font-beta pl-3 lg:text-xl">BTW BE 0747 689 856</p>
            </div>
          </div>
        </div>
        <MapView
          class="my-6 w-64 h-80 md:my-0 md:w-1/3 md:h-[400px] lg:h-[450px] rounded-md"
        />
      </div>
    </section>

    <footer class="m-3 mt-auto md:m-6 md:mt-auto">
      <div
        class="flex flex-col items-center md:flex-row justify-between text-xs md:text-sm text-neutral-500 font-beta"
      >
        <p class="">Garage VanCuba © 2022</p>
        <a class="hover:text-neutral-900" href="https://www.klaudiawarmus.be"
          >Website by KWS</a
        >
        <p>BTW BE0747 689 856</p>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import Logo from '../components/Logo.vue'
import Nav from '../components/Nav.vue'
import { Phone, Mail, MapPin, Building2 } from 'lucide-vue-next'
import MapView from '../components/MapView.vue'
</script>
