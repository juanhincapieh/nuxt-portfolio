<template>
  <div class="relative min-h-screen bg-neutral-950">
    <div class="fixed inset-0 z-0 opacity-50">
        <DarkVeil
            :hue-shift="0"
            :noise-intensity="0"
            :scanline-intensity="0"
            :speed="2"
            :scanline-frequency="0"
            :warp-amount="0"
            :resolution-scale="1"
        />
    </div>
    <div class="relative z-10 flex flex-col max-w-7xl mx-auto w-full px-6 md:px-12 pt-4">
        <Navbar />
        <div class="mt-20"></div>
        <NuxtRouteAnnouncer />
        <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
// UIKit
import Navbar from '@/components/Navbar.vue';

// VueBits
import DarkVeil from '@/components/VueBits/Backgrounds/DarkVeil.vue';
</script>