<template>
    <div class="flex items-center justify-between">
        <div class=" font-bold text-app-almostWhite">Character Length</div>
        <div class=" text-app-heading-m text-app-nenoGreen">{{ length }}</div>
    </div>
    <input type="range" min="1" max="20" v-model="length" class="w-full" step="1" />

    <label class="daisy-label cursor-pointer">
        <input type="checkbox" checked="checked" class="daisy-checkbox daisy-checkbox-accent" />
        <span class=" text-app-almostWhite font-bold">Include Uppercase Letters</span>

    </label>


</template>
<script>
export default {
    data() {
        return {
            length: 10
        }
    }
}
</script>