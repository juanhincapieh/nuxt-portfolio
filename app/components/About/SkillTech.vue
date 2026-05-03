<template>
    <div class="bg-white/10 backdrop-blur-2xl border-white border rounded-2xl hover:border-purple-500 hover:bg-purple-500/10 transition-colors max-w-20">
        <div class="flex flex-col items-center align-middle">
            <div class="max-w-32 max-h-32 overflow-hidden shrink-0 p-2">
                <img :src="props.logo" alt="Logo Tech" class="w-full h-full object-cover rounded-lg">
            </div>
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