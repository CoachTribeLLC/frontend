<template>
  <div
    class="p-container lg:p-0 flex min-h-screen items-center text-center gradient-sm"
  >
    <!-- Left side -->
    <div
      class="hidden-till-lg px-8 flex items-center justify-center bg-custom-gradient"
    >
      <div
        class="text-2xl flex flex-col shadow-md py-10 px-6 quote-text-color rounded-3xl border bg-white bg-opacity-30"
      >
        <img src="/open-quotes.svg" class="h-5 w-5 self-start" />
        <p class="font-veryCursive">
          {{ quotes[Math.floor(Math.random() * quotes.length)] }}
        </p>
        <img src="/close-quotes.svg" class="h-5 w-5 self-end" />
      </div>
    </div>

    <!-- Right Side  -->
    <div class="flex flex-col items-center w-full">
      <div
        class="flex flex-col items-center justify-center w-full max-w-[400px]"
      >
        <div class="flex items-center justify-center">
          <img src="/Logo.svg" alt="logo" class="h-[150px] w-auto" />
        </div>
        <h1 class="font-medium text-2xl tracking-widest mb-4 leading-8">
          Welcome Back
        </h1>

        <CustomTextField
          placeholder="Ex. hello@gmail.com"
          label="Email"
          type="email"
          class="text-left"
        />

        <CustomTextField
          placeholder="Enter your password"
          label="Password"
          type="password"
          class="text-left"
          rightIcon="/open-eye.svg"
        />

        <div class="w-full text-right underline cursor-pointer mb-5">
          Forgot Password
        </div>

        <button
          class="w-full border-none rounded-lg py-2 text-center text-white bg-blue_button mb-4 hover:shadow-sm hover:shadow-black hover:border-none active:bg-blue_button_active"
        >
          Continue
        </button>

        <p class="text-center font-light">or continue with</p>
        <div class="flex items-center justify-center gap-x-4 my-4 w-full">
          <OtherSignIn class="w-1/2" />
          <OtherSignIn class="w-1/2" />
        </div>
        <p class="font-light">
          New to Coach Tribe?
          <span class="font-normal cursor-pointer">Sign Up</span>
        </p>
      </div>
      <footer>
        <p class="font-light text-center text-xs mt-8">
          {{ year }}<span> &copy;</span>Coach Tribe. All rights reserved
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getUTCFullYear();

//list of Quotes
const quotes: string[] = [
  "You have every tool you need to create the life you want.",
];
</script>

<style scoped>
.hidden-till-lg {
  display: none;
}
@media (min-width: 1023px) {
  /* Styles for screens smaller than the lg breakpoint (max-width 1023px) */
  .hidden-till-lg {
    display: flex;
    width: 100%;
    min-height: 100vh;
  }
}

@media (max-width: 1023px) {
  .gradient-sm {
    background: linear-gradient(to bottom, white 80%, #ffcc99 100%);
  }
}

.quote-text-color {
  color: hsla(269, 47%, 40%, 0.7);
}

.bg-custom-gradient {
  background: repeating-linear-gradient(135deg, rgba(240, 90, 142, 0.8) 0%, rgba(249,169,104) 30%, rgba(200,200,200, 0.5) 80%, rgba(100,54,149, 0.9) 100%);
}
</style
