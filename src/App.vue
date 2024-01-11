<script setup>
import { Icon } from "@iconify/vue";
import { RouterView } from "vue-router";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const tabs = [
  { icon: "material-symbols-light:home-outline", name: "Home", id: "" },
  { icon: "mingcute:search-line", name: "Explore", id: "explore" },
  {
    icon: "iconamoon:notification-thin",
    name: "Notifications",
    id: "notification",
  },
  {
    icon: "material-symbols-light:mail-outline",
    name: "Messages",
    id: "message",
  },
  { icon: "fluent:document-one-page-20-regular", name: "Lists", id: "list" },
  { icon: "iconamoon:bookmark-thin", name: "Bookmarks", id: "bookmark" },
  { icon: "bi:people", name: "Communities", id: "community" },
  { icon: "icon-park-outline:people", name: "Profile", id: "profile" },
  { icon: "mingcute:more-3-line", name: "more", id: "more" },
];

const tredings = [
  {
    top: "Trading in Addis Ababa",
    title: "News on Addis Ababa",
    bottom: "Treading By: Customers",
  },
  {
    top: "Trading in Addis Ababa",
    title: "News on Addis Ababa",
    bottom: "Treading By: Customers",
  },
  {
    top: "Trading in Addis Ababa",
    title: "News on Addis Ababa",
    bottom: "Treading By: Customers",
  },
  {
    top: "Trading in Addis Ababa",
    title: "News on Addis Ababa",
    bottom: "Treading By: Customers",
  },
  {
    top: "Trading in Addis Ababa",
    title: "News on Addis Ababa",
    bottom: "Treading By: Customers",
  },
  {
    top: "Trading in Addis Ababa",
    title: "News on Addis Ababa",
    bottom: "Treading By: Customers",
  },
  {
    top: "Trading in Addis Ababa",
    title: "News on Addis Ababa",
    bottom: "Treading By: Customers",
  },
];

const friends = [
  {
    src: "https://pics.craiyon.com/2023-07-03/7402d9cff83443a5899b64f83e9823f5.webp",
    name: "",
    handle: "@bete",
  },
  {
    src: "https://i.pinimg.com/736x/63/46/f2/6346f272f047e8b6e9fed61769a263ea.jpg",
    name: "",
    handle: "@bete",
  },
  {
    src: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1386604.jpg&fm=jpg",
    name: "",
    handle: "@bete",
  },
];

const route = useRoute();
// routes
const tabRoutes = computed(() => {
  const routes = {};
  tabs.forEach((tab) => {
    routes[tab.id] = `${tab.id}`;
  });
  return routes;
});

const id = ref("");

const dropsown = ref(false);
</script>

<template>
  <div class="flex container h-screen w-full mx-auto">
    <div
      class="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between"
    >
      <div>
        <button
          class="h-12 w-12 focus:outline-none hover:bg-lightblue text-3xl text-blue"
        >
          <Icon icon="simple-icons:x" />
        </button>
        <div @click="id = tab.id" v-for="tab in tabs" :key="tab.name">
          <RouterLink :to="tabRoutes[tab.id]">
            <button
              :class="`flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${
                id === tab.id ? 'text-blue' : ''
              }`"
            >
              <Icon :icon="tab.icon" class="text-2xl md:mr-4 mr-2" />
              <p class="text-lg font-semibold text-left hidden lg:block">
                {{ tab.name }}
              </p>
            </button>
          </RouterLink>
        </div>
        <div>
          <button
            class="text-white bg-blue hidden md:block h-11 md:w-28 lg:h-auto lg:w-full w-auto hover:bg-darkblue p-3 rounded-full font-semibold focus:outline-none"
          >
            Post
          </button>
          <Icon
            icon="fluent-emoji-high-contrast:feather"
            class="bg-blue h-11 md:hidden w-11 hover:bg-darkblue p-3 rounded-full font-semibold focus:outline-none"
          />
        </div>
      </div>
      <!-- end of side header -->
      <div class="lg:w-full relative">
        <button
          @click="dropsown = true"
          class="flex items-center w-full rounded-full p-2 hover:bg-lightest focus:outline-none"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9C8-39xzUhCAclnl_7dvEBMox_9x86qgy2A_TEcFgg&s"
            alt=""
            class="w-10 h-10 rounded-full object-cover border border-lighter"
          />
          <div class="hidden lg:block ml-4 w-full">
            <p class="text-sm font-bold leading-tight">Mamush</p>
            <p class="text-sm leading-tight">@mam$te</p>
          </div>
          <Icon icon="ep:arrow-down" class="text-2xl hidden lg:block ml-auto" />
        </button>
        <div
          v-if="dropsown === true"
          class="absolute mb-16 bottom-0 left-0 w-64 rounded-lg shodow-md border-2"
        >
          <button
            @click="dropsown = false"
            class="flex items-center w-full p-3 hover:bg-lightest focus:outline-none"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9C8-39xzUhCAclnl_7dvEBMox_9x86qgy2A_TEcFgg&s"
              alt=""
              class="w-10 h-10 rounded-full object-cover border border-lighter"
            />
            <div class="ml-4 w-full">
              <p class="text-sm font-bold leading-tight">Mamush</p>
              <p class="text-sm leading-tight">@mam$te</p>
            </div>
            <Icon
              icon="material-symbols-light:check"
              class="text-blue text-4xl"
            />
          </button>
          <button
            @click="dropsown = false"
            class="w-full text-left p-3 hover:bg-lightest border-t border-lighter"
          >
            Add an Existing Account
          </button>
          <button
            @click="dropsown = false"
            class="w-full text-left p-3 hover:bg-lightest border-t border-lighter"
          >
            log out @mam$te
          </button>
        </div>
      </div>
    </div>
    <!--tweet -->
    <RouterView />
    <!-- treding -->
    <div
      class="w-1/3 h-full relative border-l hidden md:block border-lighter py-2 px-6"
    >
      <input
        type="text"
        placeholder="Search"
        class="rounded-full w-full pl-12 p-2 bg-lighter"
      />
      <Icon
        icon="mingcute:search-line"
        class="absolute left-0 top-0 mt-5 text-black ml-12"
      />
      <div class="w-full rounded-lg bg-lightest p-3">
        <div class="flex items-center justify-between p-3">
          <p class="text-lg font-bold">Trends For You</p>
        </div>
        <button
          v-for="trend in tredings"
          :key="trend.title"
          class="w-full flex justify-between p-3 hover:bg-lighter"
        >
          <div>
            <p class="text-sm text-left leading-tight">
              {{ trend.top }}
            </p>
            <p class="text-sm text-left font-bold leading-tight">
              {{ trend.title }}
            </p>
            <p class="text-sm text-left leading-tight">
              {{ trend.bottom }}
            </p>
          </div>
          <Icon icon="ep:arrow-down" class="text-lg text-dark" />
        </button>
      </div>
      <div class="w-full rounded-lg bg-lightest p-3 my-4">
        <div class="flex items-center justify-between p-3">
          <p class="text-lg font-bold">who to follow</p>
        </div>
        <button
          v-for="friend in friends"
          :key="friend.name"
          class="w-full flex p-3 hover:bg-lighter border-t border-lighter"
        >
          <img
            :src="`${friend.src}`"
            alt=""
            class="w-12 h-12 rounded-full object-cover border border-lighter"
          />
          <div class="hidden lg:block ml-4 w-full">
            <p class="text-sm font-bold leading-tight">
              {{ friend.name }}
            </p>
            <p class="text-sm leading-tight">
              {{ friend.handle }}
            </p>
          </div>
          <button
            class="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue"
          >
            Follow
          </button>
        </button>
      </div>
    </div>
  </div>
</template>
