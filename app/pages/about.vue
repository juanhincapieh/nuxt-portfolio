<template>
    <div class="relative">
        <div class="relative flex flex-col gap-16 max-w-7xl mx-auto mt-12 w-full z-10">
            <Experience />
            <Skills />
        </div>
    </div>
</template>

<script setup lang="ts">
import Experience from '@/components/About/Experience.vue';
import Skills from '@/components/About/Skills.vue';
</script>