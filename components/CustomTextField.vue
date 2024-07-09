<template>
  <div class="flex flex-col w-full mb-2">
    <p class="text-sm font-medium">{{ label }}</p>
    <div
      class="flex relative items-center .placeholder-transparent"
    >
      <component
        v-if="leftIcon != undefined"
        :is="leftIcon"
        class="w-5 h-5 absolute ml-3 pointer-events-none"
      />
      <input
        :type="type"
        :placeholder="placeholder"
        :name="label"
        class="border-2 rounded-xl py-2 pl-2 focus:border-beige-dark-green focus:outline-none w-full my-2"
        autocomplete="off"
      />
      <img v-if="rightIcon != undefined" :src=rightIcon class="w-5 h-5 absolute right-3 cursor-pointer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  label: string;
  type: string;
  placeholder?: string;
  leftIcon?: any;
  rightIcon?: any;
}>();
</script>
