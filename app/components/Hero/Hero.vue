<template>
    <section class="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16 motion-safe:animate-fade-up">
        <div class="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
            <HeroStatus v-if="currentRole" v-bind="currentRole" />

            <HeroHeading :name="PROFILE.name" :roles="PROFILE.roles" />

            <p class="max-w-xl text-lg text-muted sm:text-xl">
                {{ PROFILE.tagline }}
            </p>

            <div class="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <HeroActions />
                <span class="hidden h-10 w-px bg-white/20 sm:block" aria-hidden="true" />
                <SocialLinks :socials="PROFILE.socials" />
            </div>

            <HeroStats :stats="stats" class="w-full border-t border-white/10 pt-8" />
        </div>

        <HeroPortrait v-bind="PROFILE.portrait" class="order-first lg:order-last" />
    </section>
</template>

<script setup lang="ts">
import { PROFILE } from '~/data/profile';

const currentRole = getCurrentRole();
const stats = getProfileStats();
</script>
