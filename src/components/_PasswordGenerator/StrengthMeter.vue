<template>
 <div class=" bg-app-veryDarkGrey p-4">
    <span class=" text-app-grey">STRENGTH</span>
    <span>{{ strengthText }}</span>
    <div :class="['',strengthColor]"
    v-for="(n,i) in 4" :key="i"
    ></div>
 </div>
</template>
<script>
import {passwordStrength} from 'check-password-strength'
export default{
    props:{
        password: String
    },
    computed:{
        strength(){
            return passwordStrength(this.password)
        },
        strengthText(){
            switch(this.strength.id){
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
        strengthColor(){
            switch(this.strength.id){
                case 0:
                    return 'bg-app-red'
                case 1:
                    return 'bg-app-orange'
                case 2:
                    return 'bg-app-yellow'
                case 3:
                    return 'bg-app-nenoGreen'
            }
        }
    }
}
</script>