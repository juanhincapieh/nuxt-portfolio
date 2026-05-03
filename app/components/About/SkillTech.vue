<template>
    <div class="relative group bg-white/10 backdrop-blur-2xl border-white border rounded-2xl hover:border-purple-500 hover:bg-purple-500/10 transition-colors max-w-20">
        <div class="flex flex-col items-center align-middle">
            <div class="max-w-32 max-h-32 overflow-hidden shrink-0 p-2">
                <img :src="props.logo" alt="Logo Tech" class="w-full h-full object-cover rounded-lg">
            </div>
        </div>
        <div class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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