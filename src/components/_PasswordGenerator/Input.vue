<template>
    <div class="flex flex-col gap-4">
        <PasswordLength v-model:length="computedLength" :maxLength="20" />
        <CheckBox v-model:checked="computedIncludeUppercase" label="Include Uppercase Letters" />
        <CheckBox v-model:checked="computedIncludeLowercase" label="Include Lowercase Letters" />
        <CheckBox v-model:checked="computedIncludeNumbers" label="Include Numbers" />
        <CheckBox v-model:checked="computedIncludeSymbols" label="Include Symbols" />
    </div>

</template>
<script>
import PasswordLength from './_Input/PasswordLength.vue'
import CheckBox from './_Input/CheckBox.vue';
export default {
    emits: ['update:length', 'update:includeUppercase', 'update:includeLowercase', 'update:includeNumbers', 'update:includeSymbols'],
    components: {
        PasswordLength,
        CheckBox
    },
    props:{
        length: Number,
        includeUppercase: Boolean,
        includeLowercase: Boolean,
        includeNumbers: Boolean,
        includeSymbols: Boolean
    },
    computed: {
        computedLength: {
            get() {
                return this.length
            },
            set(value) {
                this.$emit('update:length', value)
            }
        },
        computedIncludeUppercase: {
            get() {
                return this.includeUppercase
            },
            set(value) {
                this.$emit('update:includeUppercase', value)
            }
        },
        computedIncludeLowercase: {
            get() {
                return this.includeLowercase
            },
            set(value) {
                this.$emit('update:includeLowercase', value)
            }
        },
        computedIncludeNumbers: {
            get() {
                return this.includeNumbers
            },
            set(value) {
                this.$emit('update:includeNumbers', value)
            }
        },
        computedIncludeSymbols: {
            get() {
                return this.includeSymbols
            },
            set(value) {
                this.$emit('update:includeSymbols', value)
            }
        }
    }
}
</script>