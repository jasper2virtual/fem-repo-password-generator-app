<template>

  <div class="flex flex-col justify-center items-center min-h-screen min-w-[320px] bg-app-veryDarkGrey">
    <main class=" max-laptop:container laptop:max-w-[540px] w-full flex flex-col justify-center grow p-4">
      <PasswordGenerator />
    </main>
  </div>

</template>

<script>
import PasswordGenerator from './components/PasswordGenerator.vue'
export default {
  components: {
    PasswordGenerator
  }
}
</script>