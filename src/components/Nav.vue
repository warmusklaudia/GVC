<template>
  <nav>
    <ul
      class="flex gap-2 text-sm md:gap-6 font-alpha md:text-lg lg:text-xl text-alpha"
    >
      <li>
        <router-link
          class=""
          to="/home"
          v-slot="{ isActive }"
          :active-class="'font-bold'"
        >
          <p
            v-if="!isActive"
            class="hover:font-bold tracking-wide md:tracking-widest"
          >
            {{ $t('navigation.home') }}
          </p>
          <p v-else class="absolute tracking-wide md:tracking-widest">
            {{ $t('navigation.home') }}
          </p>
          <p
            v-if="isActive"
            class="p-[2px] opacity-25 tracking-wide md:tracking-widest"
          >
            {{ $t('navigation.home') }}
          </p>
        </router-link>
      </li>
      <li>
        <router-link
          class=""
          to="/services"
          v-slot="{ isActive }"
          :active-class="'font-bold'"
        >
          <p
            v-if="!isActive"
            class="hover:font-bold tracking-wide md:tracking-widest"
          >
            {{ $t('navigation.services') }}
          </p>
          <p v-else class="absolute tracking-wide md:tracking-widest">
            {{ $t('navigation.services') }}
          </p>
          <p
            v-if="isActive"
            class="p-[2px] opacity-25 tracking-wide md:tracking-widest"
          >
            {{ $t('navigation.services') }}
          </p>
        </router-link>
      </li>
      <li>
        <router-link
          class=""
          to="/about"
          v-slot="{ isActive }"
          :active-class="'font-bold'"
        >
          <p
            v-if="!isActive"
            class="hover:font-bold tracking-wide md:tracking-widest"
          >
            {{ $t('navigation.about') }}
          </p>
          <p v-else class="absolute tracking-wide md:tracking-widest">
            {{ $t('navigation.about') }}
          </p>
          <p
            v-if="isActive"
            class="p-[2px] opacity-25 tracking-wide md:tracking-widest"
          >
            {{ $t('navigation.about') }}
          </p>
        </router-link>
      </li>
      <li>
        <router-link
          class=""
          to="/contact"
          v-slot="{ isActive }"
          :active-class="'font-bold'"
        >
          <p
            v-if="!isActive"
            class="hover:font-bold tracking-wide md:tracking-widest"
          >
            {{ $t('navigation.contact') }}
          </p>
          <p v-else class="absolute tracking-wide md:tracking-widest">
            {{ $t('navigation.contact') }}
          </p>
          <p
            v-if="isActive"
            class="p-[2px] opacity-25 tracking-wide md:tracking-widest"
          >
            {{ $t('navigation.contact') }}
          </p>
        </router-link>
      </li>
      <li>
        <label for="language">
          <select
            name="language"
            id="language"
            @change="setLocale"
            :v-model="language"
          >
            <option
              v-for="locale of AVAILABLE_LOCALES"
              :value="locale"
              :selected="locale == lang ? true : false"
            >
              {{ locale }}
            </option>
          </select>
        </label>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { ref } from 'vue'
import useI18n from '../composables/useI18n'

export default {
  setup() {
    const { AVAILABLE_LOCALES, loadLocale, t, lang } = useI18n()
    const language = ref<string>('')
    const setLocale = (event: Event) => {
      const target = event.target as HTMLSelectElement
      loadLocale(target.value)
      language.value = target.value
      console.log(language)
    }
    return {
      AVAILABLE_LOCALES,
      language,
      lang,
      setLocale,
      loadLocale,
      t,
    }
  },
}
</script>
