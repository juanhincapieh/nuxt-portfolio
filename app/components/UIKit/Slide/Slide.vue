<template>
    <!-- Full-width panel with rounded top corners, to set a section apart from the one above. -->
    <div class="full-bleed rounded-t-4xl border-t border-white/10 bg-neutral-900 shadow-[0_-24px_60px_-30px_rgb(0_0_0/0.8)]">
        <div class="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
            <slot />
        </div>
    </div>
</template>
