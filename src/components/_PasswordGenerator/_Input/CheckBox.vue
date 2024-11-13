<template>
    <label class="flex flex-row flex-nowrap gap-4">
        <div class="grid grid-cols-1 grid-rows-1 items-center">
            <div :class="['w-[calc(20rem/16)] aspect-square border border-app-almostWhite col-span-full row-span-full',
            computedChecked && 'bg-app-nenoGreen flex justify-center items-center']
            ">
            <img src="/src/assets/images/icon-check.svg" alt="" v-if="computedChecked">
            </div>
            <input type="checkbox" v-model="computedChecked" class=" row-span-full col-span-full opacity-0 z-10" />
        </div>
        <span class="font-bold text-app-almostWhite">{{ label }}</span>
    </label>
</template>

<script>
import { computed } from 'vue';

export default {
    emits: ['update:checked'],
    props: {
        checked: Boolean,
        label: String
    },
    computed: {
        computedChecked: {
            get() {
                return this.checked
            },
            set(value) {
                this.$emit('update:checked', value)
            }
        }
    }
}
</script>