<template>
    <div class="flex flex-col gap-2">
        <p class="text-lg text-muted sm:text-xl">Hi, I'm</p>
        <h1 class="bg-linear-to-br from-white via-white to-accent bg-clip-text pb-2 text-5xl leading-[1.05] font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl xl:text-8xl">
            {{ name }}
        </h1>
        <p class="text-2xl font-semibold sm:text-3xl lg:text-4xl">
            <!-- Typing effect is client-only; the server renders the first role. -->
            <ClientOnly>
                <TextType
                    as="span"
                    :text="roles"
                    :text-colors="['var(--color-accent)']"
                    :typing-speed="60"
                    :pause-duration="2200"
                    cursor-character="_"
                    cursor-class-name="text-accent"
                />
                <template #fallback>
                    <span class="text-accent">{{ roles[0] }}</span>
                </template>
            </ClientOnly>
        </p>
    </div>
</template>

<script setup lang="ts">
// VueBits
import TextType from '~/components/VueBits/TextAnimations/TextType.vue';

defineProps<{
    name: string
    roles: string[]
}>();
</script>
