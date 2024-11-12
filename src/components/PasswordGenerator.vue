<template>
    <div class="flex flex-col">
        <div class=" text-app-grey text-center">Password Generator</div>
        <div>
            <!-- result -->
            <Result :password />

            <div>
                <!-- input -->
                <Input />
            </div>
        </div>
    </div>
</template>
<script>
import Result from './_PasswordGenerator/Result.vue'
import Input from './_PasswordGenerator/Input.vue'
export default{
    components: {
        Result,
        Input
    },
    data() {
        return {
            password: null
        }
    },  
}
</script>