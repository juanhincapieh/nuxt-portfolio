<template>
    <div class="flex gap-6">
        <div class="flex flex-col items-center">
            <div class="w-3 h-3 rounded-full bg-purple-500 mt-2 shrink-0" />
            <div class="w-px flex-1 bg-white/20" />
        </div>

        <div class="pb-10 w-full">
            <!-- Company -->
            <span class="text-white font-semibold text-2xl">{{ props.company }}</span>

            <!-- Roles -->
            <div v-for="role in props.roles" :key="role.role" class="mt-4">
                <div class="flex flex-col gap-1">
                    <span class="text-white font-semibold">{{ role.role }}</span>
                    <div class="flex flex-row gap-2">
                        <Badge :size="'md'" :variant="'outline'" :hue="255">
                            {{ role.location }}
                        </Badge>
                        <Badge :size="'md'" :variant="'outline'" :hue="230">
                            {{ role.startDate }} - {{ role.endDate }}
                        </Badge>
                    </div>
                </div>
     
                <p class="text-white/60 mt-1 text-sm leading-relaxed">{{ role.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// UIKit
import { Badge } from '@/components/UIKit/Badge';

export interface ExperienceItemProps {
    company: string
    roles: Role[]
}

export interface Role {
    role: string
    location: string
    startDate: string
    endDate: string
    description: string
}

const props = defineProps<ExperienceItemProps>()
</script>