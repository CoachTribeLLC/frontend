<template>
  <div
    class="border flex items-center justify-center padding-y button-color gap-2 rounded-lg font-normal cursor-pointer button-active button-shadow min-h-10"
  >
    <div class="w-7">
      <img :src="iconPath" alt="" class="w-[40px]"/>
    </div>
    {{ label }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  iconPath: string;
}>();
</script>

<style scoped>
.button-color {
  border: 2px solid hsla(0, 0%, 66%, 0.5);
  background: hsla(0, 0%, 66%, 0.2);
}
.button-shadow:hover {
  box-shadow: 0px 1px 3px 1px hsla(0, 0%, 0%, 0.1);

  box-shadow: 0px 1px 2px 0px hsla(0, 0%, 0%, 0.2);
}

.button-active:active {
  background: hsla(0, 0%, 66%, 0.4);
  border: 2px solid hsla(0, 0%, 66%, 0.5);
}

.padding-y {
  padding-top: 2px;
  padding-bottom: 2px;
}

@media (min-width: 1023px) {
  .padding-y {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}
</style>
