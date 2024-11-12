<template>

  <div class="flex flex-col justify-center items-center min-h-screen min-w-[320px] bg-app-veryDarkGrey">
    <div class="container flex flex-col grow p-4">
      <PasswordGenerator />
    </div>
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