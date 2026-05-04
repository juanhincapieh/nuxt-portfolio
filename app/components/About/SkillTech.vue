<template>
    <div class="relative group max-w-[61px]">
        <div class="flex flex-col items-center align-middle">
            <div class="max-w-32 max-h-32 overflow-hidden shrink-0">
                <img :src="props.logo" alt="Logo Tech" loading="lazy" class="w-full h-full object-cover rounded-lg">
            </div>
        </div>
        <div class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {{ props.label }}
        </div>
    </div>
</template>

<script setup lang="ts">
export interface SkillTechProps {
    logo: string | undefined
    label: string | null
}

const props = defineProps<SkillTechProps>()
</script>