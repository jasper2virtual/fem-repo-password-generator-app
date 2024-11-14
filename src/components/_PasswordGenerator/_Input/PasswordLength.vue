<template>
    <label for="computed-length" class="flex items-center justify-between">
        <div class=" font-bold text-app-almostWhite">Character Length</div>
        <div class=" text-app-heading-m text-app-nenoGreen">{{ length }}</div>
    </label>

    <div class="grid grid-cols-1 grid-rows-1 group">
        <div class="h-[calc(28rem/16)] flex flex-row flex-nowrap items-center col-span-full row-span-full" ref="slideContainer">
            <div class=" bg-app-nenoGreen h-[calc(8rem/16)]" :style="{ width: greenLightWidth }"></div>
            <div class=" bg-app-almostWhite w-[calc(28rem/16)] aspect-square rounded-full hover:bg-app-veryDarkGrey 
             group-has-[:hover]:bg-app-veryDarkGrey group-has-[:hover]:border-app-nenoGreen group-has-[:hover]:border-2" 
             ref="slideHandle"></div>
            <div class=" bg-app-veryDarkGrey h-[calc(8rem/16)] grow"></div>
        </div>
        <input id="computed-length" name="computed-length" type="range" min="1" :max="maxLength" v-model="computedLength" 
        class="w-full col-span-full row-span-full opacity-0 z-10" />
    </div>

</template>
<script>
export default {
    emits: ['update:length'],
    props: {
        length: Number,
        maxLength: Number
    },
    data() {
        return {
            slideContainerWidth: null,
            slideContainerWidthObserver: null,
            slideHandleWidth: null,
        }
    },
    mounted() {
        this.slideContainerWidthObserver = new ResizeObserver(entries => {
            this.slideContainerWidth = entries[0].contentRect.width
        })
        this.slideContainerWidthObserver.observe(this.$refs.slideContainer)
        this.slideHandleWidth = this.$refs.slideHandle.getBoundingClientRect().width

    },
    computed: {
        computedLength: {
            get() {
                return this.length
            },
            set(value) {
                this.$emit('update:length', parseInt(value))
            }
        },
        greenLightMaxWidth() {
            return this.slideContainerWidth - this.slideHandleWidth
        },
        greenLightWidth() {
            const stepDistance = this.greenLightMaxWidth / (this.maxLength - 1)
            const steps = this.computedLength - 1
            return `${stepDistance * steps}px`
        }

    },

}
</script>
