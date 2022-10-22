<template>
    <nav>
        <ul
        class="flex gap-3 md:gap-6 font-alpha md:text-lg lg:text-xl text-alpha">
        <li>
            <router-link class="" to="/home" v-slot="{isActive}"
                :active-class="'font-bold'">
                <p v-if="!isActive" class="hover:font-bold tracking-wide md:tracking-widest ">Home</p>
                <p v-else class="absolute tracking-wide md:tracking-widest ">Home</p>
                <p v-if="isActive" class="p-[2px] opacity-25 tracking-wide md:tracking-widest ">Home</p>
            </router-link>
        </li>
        <li>
            <router-link class="" to="/services" v-slot="{isActive}"
                :active-class="'font-bold'">
                <p v-if="!isActive" class="hover:font-bold tracking-wide md:tracking-widest ">Services</p>
                <p v-else class="absolute tracking-wide md:tracking-widest ">Services</p>
                <p v-if="isActive" class="p-[2px] opacity-25 tracking-wide md:tracking-widest ">Services</p>
            </router-link>
        </li>
        <li>
            <router-link class="" to="/about" v-slot="{isActive}"
                :active-class="'font-bold'">
                <p v-if="!isActive" class="hover:font-bold tracking-wide md:tracking-widest ">About me</p>
                <p v-else class="absolute tracking-wide md:tracking-widest ">About me</p>
                <p v-if="isActive" class="p-[2px] opacity-25 tracking-wide md:tracking-widest ">About me</p>
            </router-link>
        </li>
        <li>
            <router-link class="" to="/contact" v-slot="{isActive}"
                :active-class="'font-bold'">
                <p v-if="!isActive" class="hover:font-bold tracking-wide md:tracking-widest ">Contact</p>
                <p v-else class="absolute tracking-wide md:tracking-widest ">Contact</p>
                <p v-if="isActive" class="p-[2px] opacity-25 tracking-wide md:tracking-widest ">Contact</p>
            </router-link>
        </li>
    </ul>
    </nav>

</template>