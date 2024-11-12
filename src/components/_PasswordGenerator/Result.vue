<template>
    <div class=" text-app-heading-m text-app-almostWhite flex items-center bg-app-darkGrey p-4">
        <span class="mr-auto">{{ password }}</span>
        <span v-if="copied" class=" text-app-body-m text-app-nenoGreen">COPIED</span>
        <button :class="[' daisy-btn-ghost ml-2',!password && ' brightness-50 cursor-not-allowed',password && 'hover:brightness-200']"
        :disabled="!password" @click="copyPassword" >
        <img src="/src/assets/images/icon-copy.svg" alt="copy" />
        </button>
    </div>
</template>
<script>
export default {
    props: {
        password: {
            type: String,
            default:null
        }
    },
    methods: {
        copyPassword() {
            navigator.clipboard.writeText(this.password)
            this.copied = true
        }
    },
    data() {
        return {
            copied: false
        }
    },
    watch: {
        password(newVal) {
            this.copied = false
        }
    }
}
</script>