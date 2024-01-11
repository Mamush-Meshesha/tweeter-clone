<script setup>
import { Icon } from "@iconify/vue";
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
</script>
<template>
  <div>
    <div class="md:w-full h-full overflow-y-scroll">
      <div class="px-5 py-3 border-b flex justify-between items-center">
        <h1 class="md:text-xl text-xl">For you</h1>
        <h1 class="md:text-xl text-xl">Following</h1>
        <Icon icon="uiw:setting-o" class="text-green-500 md:text-3xl text-sm" />
      </div>
      <div class="px-5 py-3 border-b border-lighter flex">
        <div>
          <img
            src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1386604.jpg&fm=jpg"
            alt=""
            class="md:w-12 md:h-12 h-9 w-9 object-cover rounded-full border border-lighter"
          />
        </div>
        <form class="w-full md:px-4 px-3 relative">
          <textarea
            placeholder="what is happening?!"
            class="w-full focus:outline-none text-xl flex md:mt-3"
          ></textarea>
          <h1 class="text-blue pb-3 hidden md:block">Every one can replay</h1>
          <div class="flex items-center">
            <Icon
              icon="material-symbols-light:image-outline"
              class="text-blue text-lg mr-6"
            />
            <Icon
              icon="ri:calendar-schedule-line"
              class="text-blue text-lg mr-6 md:block hidden"
            />
            <Icon icon="carbon:location" class="text-blue text-lg mr-6" />
            <Icon
              icon="ic:baseline-bar-chart"
              class="text-blue text-lg mr-6 md:block hidden"
            />
            <Icon icon="circum:face-meh" class="text-blue text-lg mr-6" />
          </div>
          <button
            class="md:h-10 h-7 px-4 text-white md:font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0"
          >
            Post
          </button>
        </form>
      </div>
      <div class="border-t border-b py-4 flex justify-center items-center">
        <h1 class="text-blue">Show 70 posts</h1>
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
            class="md:w-[600px] w-[250px] rounded-xl"
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
