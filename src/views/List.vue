<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="w-full mx-2">
    <div class="border-b">
      <div class="flex justify-between">
        <div class="flex items-center">
          <Icon icon="uil:arrow-left" class="text-3xl font-extrabold" />
        </div>
        <div class="relative">
          <input
            type="search"
            placeholder="Search Lists"
            class="outline-none border h-10 w-[200px] rounded-full pl-10 bg-[#423838]"
          />
          <Icon
            icon="mingcute:search-line"
            class="absolute top-0 mx-4 mt-3 text-white"
          />
        </div>
        <div class="flex items-center">
          <Icon
            icon="material-symbols:list-alt-add-outline"
            class="text-xl font-bold"
          />
        </div>
        <div class="flex items-center">
          <Icon icon="solar:menu-dots-bold" class="text-xl font-bold" />
        </div>
      </div>
      <div class="py-7">
        <h1>
          Nothing to see here --yet pin your favourate list to access them
          quickly
        </h1>
      </div>
    </div>
    <!-- Discover new lsite -->
    <div>
      <h1 class="text-xl py-2">Discover new Lists</h1>
    </div>
  </div>
</template>
