<template>
    <header>
        <!-- Soft blur behind the bar, so content scrolling under it stays readable -->
        <div
            class="pointer-events-none fixed inset-x-0 top-0 z-30 h-32 bg-neutral-950/80 mask-b-from-70% backdrop-blur-md"
            aria-hidden="true"
        />

        <!-- On mobile, the open menu turns the bar into a full-screen panel -->
        <nav
            aria-label="Main"
            :class="['fixed inset-x-0 top-0 z-50', open && 'max-lg:bottom-0 max-lg:bg-neutral-950']"
            @keydown.esc="open = false"
        >
            <div class="mx-auto mt-6 max-w-7xl px-6 md:px-12">
                <div class="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                    <div class="flex w-full items-center justify-between lg:w-auto">
                        <NuxtLink to="/" class="text-xl font-semibold text-white">juanhincapieh</NuxtLink>
                        <NavbarToggle v-model:open="open" aria-controls="mobile-menu" class="lg:hidden" />
                    </div>

                    <!-- Desktop: centered links + CV button -->
                    <NavbarLinks :items="NAV_ITEMS" class="absolute inset-0 m-auto size-fit max-lg:hidden" />
                    <NavbarCvButton :href="PROFILE.cvUrl" class="max-lg:hidden" />

                    <!-- Mobile: big links + CV button -->
                    <NavbarMobileMenu
                        v-show="open"
                        id="mobile-menu"
                        :items="NAV_ITEMS"
                        :cv-url="PROFILE.cvUrl"
                        class="w-full lg:hidden"
                    />
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { NAV_ITEMS } from '~/data/navigation';
import { PROFILE } from '~/data/profile';

const open = ref(false);

const route = useRoute();
const isDesktop = useMediaQuery('(min-width: 64rem)'); // Tailwind `lg`

// The page behind the open menu shouldn't scroll.
useScrollLock(open);

// Close after navigating, or when the window grows past the mobile layout.
watch(() => route.fullPath, () => {
    open.value = false;
});
watch(isDesktop, (desktop) => {
    if (desktop) open.value = false;
});
</script>
