<template>
    <div class=" bg-app-veryDarkGrey p-4 flex flex-row flex-nowrap">
        <span class=" text-app-grey">STRENGTH</span>
        <span class=" text-app-almostWhite ml-auto">{{ strengthText }}</span>
        <div class="flex flex-row flex-nowrap gap-2 ml-4">
            <div :class="['border-app-almostWhite border-2 w-[calc(10rem/16)] aspect-[10/28]', 
            (strength.id >= strengthKey) && strengthColor]"
                v-for="strengthKey in [0, 1, 2, 3]" :key="s"></div>
        </div>
    </div>
</template>
<script>
import { passwordStrength } from 'check-password-strength'
export default {
    props: {
        password: String
    },
    computed: {
        strength() {
            return passwordStrength(this.password)
        },
        strengthText() {
            switch (this.strength.id) {
                case 0:
                    return 'TOO WEAK!'
                case 1:
                    return 'WEAK'
                case 2:
                    return 'MEDIUM'
                case 3:
                    return 'STRONG'
            }
        },
        strengthColor() {
            switch (this.strength.id) {
                case 0:
                    return 'bg-app-red border-0'
                case 1:
                    return 'bg-app-orange border-0'
                case 2:
                    return 'bg-app-yellow border-0'
                case 3:
                    return 'bg-app-nenoGreen border-0'
            }
        }
    }
}
</script>