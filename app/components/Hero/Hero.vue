<template>
    <section class="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
        <div class="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
            <HeroStatus
                v-if="currentRole"
                v-bind="currentRole"
                class="motion-safe:animate-fade-up"
            />

            <HeroHeading
                :name="PROFILE.name"
                :roles="PROFILE.roles"
                class="motion-safe:animate-fade-up animation-delay-100"
            />

            <p class="max-w-xl text-lg text-muted sm:text-xl motion-safe:animate-fade-up animation-delay-200">
                {{ PROFILE.tagline }}
            </p>

            <div class="flex flex-wrap items-center justify-center gap-6 lg:justify-start motion-safe:animate-fade-up animation-delay-300">
                <HeroActions />
                <span class="hidden h-10 w-px bg-white/20 sm:block" aria-hidden="true" />
                <SocialLinks :socials="PROFILE.socials" />
            </div>

            <HeroStats
                :stats="stats"
                class="w-full border-t border-white/10 pt-8 motion-safe:animate-fade-up animation-delay-400"
            />
        </div>

        <HeroPortrait
            v-bind="PROFILE.portrait"
            class="order-first lg:order-last motion-safe:animate-fade-in animation-delay-200"
        />
    </section>
</template>

<script setup lang="ts">
import { PROFILE } from '~/data/profile';

const currentRole = getCurrentRole();
const stats = getProfileStats();
</script>
