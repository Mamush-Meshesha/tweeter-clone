<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const background = ref(
  "https://static.vecteezy.com/system/resources/thumbnails/002/878/172/small_2x/portrait-of-young-asian-girl-wearing-headphones-photo.jpg"
);

const following = [
  {
    src: "https://plus.unsplash.com/premium_photo-1661508557554-e3d96f2fdde5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Elon Musk",
    handle: "@elen",
    time: "40min",
    post: "I believe alien are real, and maybe they are live among us",
    comment: "2000",
    retweet: "450",
    like: "10k",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661508557554-e3d96f2fdde5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Elon Musk",
    handle: "@elen",
    time: "40min",
    post: "I believe alien are real, and maybe they are live among us",
    comment: "2000",
    retweet: "450",
    like: "10k",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661508557554-e3d96f2fdde5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Elon Musk",
    handle: "@elen",
    time: "40min",
    post: "I believe alien are real, and maybe they are live among us",
    comment: "2000",
    retweet: "450",
    like: "10k",
  },
];

const tredings = [
  {
    name: "Tredings in bussiness and finanance",
    title: "$ETH",
    posts: "2.9M posts",
  },
  {
    name: "Tredings in bussiness and finanance",
    title: "$ETH",
    posts: "2.9M posts",
  },
  {
    name: "Tredings in bussiness and finanance",
    title: "$ETH",
    posts: "2.9M posts",
  },
  {
    name: "Tredings in bussiness and finanance",
    title: "$ETH",
    posts: "2.9M posts",
  },
  {
    name: "Tredings in bussiness and finanance",
    title: "$ETH",
    posts: "2.9M posts",
  },
];
</script>
<template>
  <div class="w-full h-full overflow-y-scroll">
    <div class="relative bg-[#a19b9b]">
      <input
        type="search"
        class="h-11 w-full border-b border-t outline-none px-7 rounded-full"
      />

      <Icon
        icon="mingcute:search-line"
        class="text-xl absolute top-0 left-0 mt-3 mx-4"
      />

      <Icon
        icon="ep:setting"
        class="text-xl absolute right-0 top-0 mx-4 mt-3"
      />
    </div>
    <!-- bg -->
    <div class="pb-2 border-b">
      <div
        class="h-56 object-cover pb-4 relative bg-no-repeat bg-cover"
        :style="{ backgroundImage: `url(${background})` }"
      >
        <div class="text-left bottom-0 absolute">
          <h1 class="text-2xl font-bold">CES 2024</h1>
          <div class="flex">
            <P>Technology</P>
            <Icon icon="lucide:dot" class="mt-1" />
            <h1>LIVE</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- treadings -->
    <div class="px-4 py-3">
      <div>
        <h1 class="text-xl">Trends for you</h1>
      </div>
      <div class="lg:w-auto">
        <div
          v-for="trends in tredings"
          :key="trends.name"
          class="py-3 flex justify-between"
        >
          <div>
            <p class="text-sm text-[#585555]">
              {{ trends.name }}
            </p>
            <h1>
              {{ trends.title }}
            </h1>
            <p class="text-sm text-[#585555]">
              {{ trends.posts }}
            </p>
          </div>
          <Icon icon="pepicons-pencil:dots-x" />
        </div>

        <div class="flex items-center">
          <h1 class="text-blue">Show more</h1>
        </div>
      </div>
      <div
        v-for="follow in following"
        :key="follow.name"
        class="md:w-full w-[300px] overflow-x-hidden p-4 border-b hover:bg-lighter flex"
      >
        <div class="flex-none mr-4">
          <div class="md:w-full w-[300px]">
            <div class="flex items-center md:w-full w-[400px]">
              <p class="font-bold">{{ follow.name }}</p>
              <Icon icon="ph:seal-check-fill" class="text-yellow-500" />
              <p class="font-bold ml-2 text-dark">{{ follow.handle }}</p>
              <Icon icon="lucide:dot" />
              <p class="font-bold ml-2 text-dark">{{ follow.time }}</p>
            </div>
            <p class="md:w-auto w-[300px]">
              {{ follow.post }}
            </p>
            <div class="md:flex hidden items-center justify-between w-full">
              <div class="flex items-center"></div>
            </div>
          </div>
          <img
            :src="`${follow.src}`"
            alt=""
            class="md:w-[600px] w-[250px] lg:w-[850px] rounded-xl"
          />
          <div
            class="flex items-center md:w-auto w-[250px] justify-between [y-3] text-sm text-dark"
          >
            <div class="flex items-center gap-1 py-2">
              <Icon icon="iconamoon:comment" class="text-xl" />
              <p>
                {{ follow.comment }}
              </p>
            </div>
            <div class="flex items-center gap-1 py-2">
              <Icon icon="icon-park-outline:like" class="text-xl" />
              <p>
                {{ follow.like }}
              </p>
            </div>
            <div class="flex items-center gap-1 py-2">
              <Icon icon="system-uicons:retweet" class="text-xl" />
              <p>
                {{ follow.retweet }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
