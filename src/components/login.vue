<script setup lang="ts">
import { reactive, ref } from 'vue';
import useUsers from '../composables/useUsers';
const users = useUsers()

interface User {
    username: string
    password: string
}

const dataget = reactive<User>({
    username:'',
    password:''
})

const errormsg = ref<string>('')

function logincheck(){
    errormsg.value = ''
    let user: User | undefined = users.userlist.value.find((user: User)=>user.username===dataget.username)

    if(user && user?.password === dataget.password){
        users.currentAccount.value = user
    } else errormsg.value = 'Неправильный логин или пароль'
}
</script>

<template>
    <div class="main">
        Вход в аккаунт:
        <input type="text" v-model="dataget.username" placeholder="Введите имя">
        <input type="text" v-model="dataget.password" placeholder="Введите пароль">
        <button @click="logincheck">Войти</button>
        {{ errormsg }}
    </div>
</template>

<style scoped>
.main{
    max-height: 500px;
}
</style>