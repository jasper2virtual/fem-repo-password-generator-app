<template>
    <div class="flex flex-col gap-4">
        <div class=" text-app-grey text-center">Password Generator</div>
        <div class="flex flex-col gap-4">
            <!-- result -->
            <Result :password />

            <div class=" bg-app-darkGrey p-4 flex flex-col gap-4">
                <!-- input -->
                <Input v-model:length="length" v-model:include-uppercase="includeUppercase"
                    v-model:include-lowercase="includeLowercase" v-model:include-numbers="includeNumbers"
                    v-model:include-symbols="includeSymbols" />

                <!-- strength -->
                <StrengthMeter :password />

                <!-- generate -->
                <button class=" w-full font-bold text-app-darkGrey bg-app-nenoGreen p-4 
                flex flex-row flex-nowrap items-center justify-center gap-4 group
                hover:bg-app-veryDarkGrey hover:text-app-nenoGreen hover:border hover:border-app-nenoGreen
                " @click="generatePassword">GENERATE
                    <img class=" group-hover:hidden" src="/src/assets/images/icon-arrow-right.svg" alt="" />
                    <img class=" hidden group-hover:block" src="/src/assets/images/icon-arrow-right-green.svg" alt="" />
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import Result from './_PasswordGenerator/Result.vue'
import Input from './_PasswordGenerator/Input.vue'
import StrengthMeter from './_PasswordGenerator/StrengthMeter.vue'
import { generate } from 'generate-password-browser'
export default {
    components: {
        Result,
        Input,
        StrengthMeter,
    },
    data() {
        return {
            length: 10,
            includeUppercase: true,
            includeLowercase: true,
            includeNumbers: true,
            includeSymbols: false,
            password: null
        }
    },
    methods: {
        generatePassword() {
            this.password = generate({
                length: this.length,
                numbers: this.includeNumbers,
                symbols: this.includeSymbols,
                uppercase: this.includeUppercase,
                lowercase: this.includeLowercase,
            })
        }
    }
}
</script>