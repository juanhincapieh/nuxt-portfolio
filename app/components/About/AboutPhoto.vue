<template>
    <img
        ref="image"
        :src="currentSrc"
        :alt="alt"
        width="600"
        height="800"
        class="aspect-3/4 w-full rounded-3xl object-cover ring-1 ring-white/10"
        @error="useFallback"
    >
</template>

<script setup lang="ts">
import type { AboutPhoto } from '~/types/about';

const props = defineProps<AboutPhoto>();

const image = useTemplateRef<HTMLImageElement>('image');
const currentSrc = ref(props.src);

function useFallback() {
    if (currentSrc.value !== props.fallbackSrc) currentSrc.value = props.fallbackSrc;
}

// The image may have failed before hydration attached @error; check once mounted.
onMounted(() => {
    const element = image.value;
    if (element?.complete && element.naturalWidth === 0) useFallback();
});
</script>
