<template>
    <component
        :is="to ? NuxtLink : 'button'"
        :to="to"
        :type="to ? undefined : type"
        :class="[
            'flex items-center gap-2 justify-center transition-colors duration-200 hover:cursor-pointer',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
            '[&_svg]:transition-transform [&_svg]:duration-200',
            SIZE_CLASSES[size],
            VARIANT_CLASSES[variant],
        ]"
    >
        <span v-if="$slots.default">
            <slot />
        </span>
        <component
            :is="icon"
            v-if="icon"
            :class="ICON_SIZE_CLASSES[size]"
            aria-hidden="true"
        />
    </component>
</template>

<script setup lang="ts">
import type { ButtonProps, ButtonSize, ButtonVariant } from './types';

withDefaults(defineProps<ButtonProps>(), {
    size: 'md',
    variant: 'default',
    icon: null,
    to: undefined,
    type: 'button',
});

const NuxtLink = resolveComponent('NuxtLink');

const SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: 'py-1 px-3 rounded-lg text-sm',
    md: 'min-w-[118px] h-8 px-3 py-5 text-sm font-normal rounded-lg whitespace-nowrap',
    // 48px tall: lines up with the round social icons.
    lg: 'h-12 px-5 text-sm rounded-lg whitespace-nowrap',
};

const ICON_SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: 'size-3',
    md: 'size-4',
    lg: 'size-4',
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
    default: 'bg-black text-white hover:bg-gray-900',
    outline: 'border-[0.5px] border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900',
    accent: 'bg-accent font-semibold text-on-accent hover:bg-accent-hover',
    ghost: 'border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10',
};
</script>
