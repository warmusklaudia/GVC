<template>
  <main class="flex flex-col w-screen min-h-screen">
    <header
      class="flex flex-col md:flex-row items-center m-3 md:justify-between md:m-6 lg:mx-12"
    >
      <router-link to="/home">
        <Logo class="w-32 md:w-36 lg:w-40" />
      </router-link>
      <Nav />
    </header>
    <section>
      <div
        class="px-3 flex flex-col items-center md:flex-row md:justify-evenly m-6 md:m-12 lg:pl-10"
      >
        <img
          class="max-w-xs lg:max-w-md rounded-md shadow-lg"
          src="/jakub.jpg"
          alt="Photo of Jakub"
        />
        <div class="pt-6 md:pt-0 md:pl-6">
          <h1
            class="tracking-wide md:tracking-widest font-alpha text-md md:text-lg lg:text-xl text-alpha font-bold"
          >
          {{$t('about.petrolhead.title')}}
          </h1>
          <p
            class="font-beta leading-8 md:leading-8 lg:text-lg max-w-sm lg:max-w-md pt-6 lg:leading-10"
          >
          {{$t('about.petrolhead.text')}}
          </p>
        </div>
      </div>
      <div
        class="px-3 flex flex-col items-center md:flex-row-reverse md:justify-evenly m-6 md:m-12 lg:pl-10"
      >
        <img
          class="max-w-xs lg:max-w-md rounded-md shadow-lg"
          src="/audis4.jpg"
          alt="Photo of Audi S4"
        />
        <div class="pt-6 md:pt-0">
          <h1
            class="tracking-wide md:tracking-widest font-alpha text-md md:text-lg lg:text-xl text-alpha font-bold"
          >
          {{$t('about.s4.title')}}
          </h1>
          <p
            class="font-beta leading-8 md:leading-8 lg:text-lg max-w-sm lg:max-w-md pt-6 lg:leading-10"
          >
          {{$t('about.petrolhead.text')}}
          </p>
        </div>
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
</script>
