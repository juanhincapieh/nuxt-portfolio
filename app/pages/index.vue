<template>
    <div class="relative min-h-screen">
        <div class="absolute inset-0 z-0 opacity-50">
            <DarkVeil 
                :hue-shift="0"
                :noise-intensity="0"
                :scanline-intensity="0"
                :speed="0.7"
                :scanline-frequency="0"
                :warp-amount="0"
                :resolution-scale="1"
            />
        </div>
        <div class="relative flex flex-col  gap-16 max-w-7xl mx-auto w-full px-6 md:px-12 pt-10 z-10">
            <Navbar />
            <Hero />
        </div>
    </div>
</template>

<script setup lang="ts">
// UIKit
import Navbar from '@/components/Navbar.vue';

// VueBits
import DarkVeil from '@/components/VueBits/Backgrounds/DarkVeil.vue';
</script>