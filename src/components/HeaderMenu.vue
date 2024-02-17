<template>
    <div class="relative">
        <div class="text-black flex items-center h-full" @click="toggleIcon">
            <svg class="w-[2rem] m-0 mx-2 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="currentColor" stroke-width=".6"
                fill="rgba(0,0,0,0)" stroke-linecap="round" style="cursor: pointer">
                <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                    <animate dur="0.2s" attributeName="d"
                        values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze"
                        begin="start.begin" />
                    <animate dur="0.2s" attributeName="d"
                        values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze"
                        begin="reverse.begin" />
                </path>
                <rect width="10" height="10" stroke="none">
                    <animate dur="2s" id="reverse" attributeName="width" begin="click" />
                </rect>
                <rect width="10" height="10" stroke="none">
                    <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
                    <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
                </rect>
            </svg>
        </div>
        <div class="absolute top-[48px]">
            <div class="relative">
                <div 
                    class="absolute w-screen z-10 bg-periodic-paper transition-height duration-500 ease-in-out" 
                    :class="{'h-0': !showMenu, 'h-12': showMenu}"
                >
                </div>
                <div 
                    class="absolute w-screen z-[9] bg-black opacity-30 transition-height duration-500 ease-in-out"
                    :class="{'h-screen': showMenu, 'h-0': !showMenu}"
                >
        
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect, onUnmounted } from 'vue';

const showMenu = ref<boolean>(false);

const toggleIcon = () => {
    showMenu.value = !showMenu.value;
};

onMounted(() => {
  watchEffect(() => {
    document.body.style.overflowY = showMenu.value ? 'hidden' : '';
  });
});

onUnmounted(() => {
  document.body.style.overflowY = '';
});

</script>

<style>

</style>