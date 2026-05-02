<template>
    <button
        :class="[
            'flex items-center gap-2 justify-center transition-all duration-200 focus:outline-none hover:cursor-pointer',
            sizeClass,
            variantClass,
            customClass
        ]"
        @click="$emit('click', $event)"
    >
        <span v-if="$slots.default">
            <slot />
        </span>
        <component
            v-if="props.icon && props.icon !== 'none'"
            :is="props.icon"
            :class="iconSizeClass"
        />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonProps } from './types';

const props = withDefaults(defineProps<ButtonProps>(), {
    size: 'md',
    variant: 'default',
    icon: null,
    class: '',
});

const emit = defineEmits(['click'])

const iconSizeClass = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'w-3 h-3'
        case 'md':
            return 'w-5 h-5'
        case 'lg':
            return 'w-7 h-7'
        default:
            return 'w-7 h-7'
    }
})

const sizeClass = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'py-1 px-3 rounded-lg text-sm'
        case 'md':
            return 'min-w-[118px] h-8 px-3 py-5 text-md font-normal rounded-lg whitespace-nowrap'
        case 'lg':
            return 'px-7 py-4 text-xl rounded-lg'
        default:
            return 'min-w-[118px] h-8 px-3 py-4 text-sm font-normal rounded-lg whitespace-nowrap'
    }
})

const variantClass = computed(() => {
    switch (props.variant) {
        case 'outline':
            return 'border-[0.5px] border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors'
        default:
            return 'bg-black text-white hover:bg-gray-900 hover:text-white transition-colors'
    }
})

const customClass = computed(() => props.class || '')
</script>