<script setup>
import { reactive, ref } from 'vue';
import useUsers from '../composables/useUsers';
const users = useUsers()

const dataget = reactive({
    username:'',
    password:''
})

const errormsg = ref('')

function logincheck(){
    errormsg.value = ''
    let user = users.userlist.value.find((user)=>user.username===dataget.username)
    let isvalid = true

    if(!user){
        isvalid = false
    }

    if(!user?.password===dataget.password){
        isvalid = false
    }

    if(isvalid){
        users.currentAccount.value = user
    } else {
        errormsg.value = 'Неправильный логин или пароль'
    }
}
</script>

<template>
    <div>
        Вход в аккаунт:
        <input type="text" v-model="dataget.username" placeholder="Введите имя">
        <input type="text" v-model="dataget.password" placeholder="Введите пароль">
        <button @click="logincheck">Войти</button>
        {{ errormsg }}
    </div>
</template>

<style scoped>

</style>