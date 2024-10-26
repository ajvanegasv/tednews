<script lang="ts" setup>
import type { Playlist } from '../../../interfaces/playlists';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { format } from '@formkit/tempo';

const { playlists } = defineProps<{
    playlists: Playlist[]
}>()


</script>

<template>
  <Carousel :items-to-show="1">
    <Slide v-for="video in playlists" :key="video.id">
      <div class="sm:container p-1 min-h-80">
        <div class="flex justify-between mb-1">
          <p class="font-ted text-ted-green text-xs">By Ted news</p>
          <p class="font-ted text-ted-green text-xs">
            {{ format(video.contentDetails.videoPublishedAt, "medium") }}
          </p>
        </div>
        <div class="w-[20.3125rem] h-0 border-ted-green border-[1.6px] mb-[1.5rem]">
        <p class="font-ted text-ted-green text-lg">
          {{ video.snippet.title }}
        </p>
        <div class="w-[20.3125rem] h-0 border-ted-green border-[1.6px] mb-[1.5rem]"></div>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

