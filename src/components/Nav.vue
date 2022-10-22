<template>
    <nav>
        <ul
        class="flex gap-3 md:gap-6 font-alpha md:text-lg lg:text-xl text-alpha">
        <li>
            <router-link class="" to="/home" v-slot="{isActive}"
                :active-class="'font-bold'">
                <p v-if="!isActive" class="">Home</p>
                <p v-else class="absolute">Home</p>
                <p v-if="isActive" class="p-[2px] opacity-25">Home</p>
            </router-link>
        </li>
        <li>
            <router-link class="" to="/services" v-slot="{isActive}"
                :active-class="'font-bold'">
                <p v-if="!isActive" class="">Services</p>
                <p v-else class="absolute">Services</p>
                <p v-if="isActive" class="p-[2px] opacity-25">Services</p>
            </router-link>
        </li>
        <li>
            <router-link class="" to="/about" v-slot="{isActive}"
                :active-class="'font-bold'">
                <p v-if="!isActive" class="">About me</p>
                <p v-else class="absolute">About me</p>
                <p v-if="isActive" class="p-[2px] opacity-25">About me</p>
            </router-link>
        </li>
        <li>
            <router-link class="" to="/contact" v-slot="{isActive}"
                :active-class="'font-bold'">
                <p v-if="!isActive" class="">Contact</p>
                <p v-else class="absolute">Contact</p>
                <p v-if="isActive" class="p-[2px] opacity-25">Contact</p>
            </router-link>
        </li>
    </ul>
    </nav>

</template>