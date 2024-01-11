<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const showAllNotification = ref(true);
const showVerifiedNotification = ref(false);
const showMentionsNotification = ref(false);

const showAll = () => {
  showAllNotification.value = true;
  showMentionsNotification.value = false;
  showMentionsNotification.value = false;
};
const showVerified = () => {
  showVerifiedNotification.value = true;
  showAllNotification.value = false;
};

const showMentions = () => {
  showMentionsNotification.value = true;
  showAllNotification.value = false;
  showVerifiedNotification.value = true;
};
</script>
<template>
  <div class="w-full">
    <div class="relative mx-4 pt-3 border-b">
      <h1 class="font-bold text-xl">Notifications</h1>
      <Icon
        icon="tdesign:setting-1"
        class="right-0 top-0 text-xl absolute mt-3"
      />
      <div class="flex justify-between pt-5 pb-3">
        <button @click="showAll" class="focus:border-b-4 border-sky-600 w-10">
          All
        </button>
        <button
          @click="showVerified"
          class="focus:border-b-4 border-sky-600 w-20"
        >
          Verified
        </button>
        <button class="focus:border-b-4 border-sky-600 w-20">Mentions</button>
      </div>
      <div>
        <!--all buttons -->
        <div v-if="showAllNotification">
          <div class="flex gap-4 items-center border-b border-t pb-5">
            <Icon icon="simple-icons:x" class="text-4xl" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="flex gap-4 items-center border-b pb-5">
            <Icon icon="simple-icons:x" class="text-4xl" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="flex gap-4 items-center border-b pb-5">
            <Icon icon="simple-icons:x" class="text-4xl" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <!-- verified -->
        <div v-if="showVerifiedNotification">
          <h1 class="text-2xl py-4">Nothing to see here -- yet</h1>
        </div>
        <!-- mension -->
        <div v-if="showNotification">
          <h1 class="text-2xl py-4">Nothing to see here -- yet</h1>
        </div>
      </div>
    </div>
  </div>
</template>
