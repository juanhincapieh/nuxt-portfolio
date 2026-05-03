<template>
    <Transition name="fade-up">
        <div v-if="visible" class="flex flex-row justify-between">
            <div class="flex flex-col gap-1 max-w-140 -mt-2">
                <span class="text-[150px] font-extrabold text-white">Hi!</span>
                <span class="text-[55px] font-extrabold text-white -mt-14 ml-1">I’m <span class="text-[#C8ABFF]">Juan Hincapie</span></span>
                <span class="ml-1.5 text-2xl font-normal text-[#959595] mt-4">Full Stack Software Engineer with expertise on creating innovative ideas that impact your products and make them out stand over anything.</span>
                <div class="flex flex-row mt-12 ml-2 gap-8 items-center align-middle">
                    <div class="flex flex-row gap-4">
                        <SocialButton
                            :social="'instagram'"
                            :url="'https://instagram.com/juanhincapieh'"
                        />
                        <SocialButton
                            :social="'github'"
                            :url="'https://github.com/juanhincapieh'"
                        />
                        <SocialButton
                            :social="'linkedin'"
                            :url="'https://linkedin.com/in/juanhincapieh'"
                        />
                    </div>
                    <div class="bg-[#959595] h-12 w-0.5"></div>
                    <Button
                        :size="'lg'"
                        :variant="'default'"
                        :icon="ChevronRight"
                        :class="'!bg-[#C8ABFF] !hover:bg-[#AD93DC]font-semibold !text-[#2B2A2C]'"
                        @click="handleClickAboutMe"
                    >
                        About Me
                    </Button>
                </div>
            </div>
            <div class="w-130 h-130 rounded-full overflow-hidden shrink-0 border-4 border-white">
                <img src="/Hero/juan.webp" alt="Juan Hincapie" class="w-full h-full object-cover">
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
// UIKit
import Button from '@/components/UIKit/Button/Button.vue';
import SocialButton from './SocialButton.vue';

// Icons
import { ChevronRight } from '@lucide/vue';
import { ref, onMounted, nextTick } from 'vue';

const visible = ref(false);
onMounted(() => nextTick(() => { visible.value = true; }));

const router = useRouter();

function handleClickAboutMe(): void {
    router.push('/about');
}
</script>

<style scoped>
.fade-up-enter-active {
    transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-up-enter-from {
    opacity: 0;
    transform: translateY(40px);
}
.fade-up-enter-to {
    opacity: 1;
    transform: translateY(0);
}
</style>