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
    <div class="login">
        <p class="Hello">Вход в аккаунт:</p>
        <input type="text" v-model="dataget.username" placeholder="Введите имя">
        <input type="text" v-model="dataget.password" placeholder="Введите пароль">
        <button  @click="logincheck">Войти</button>
        {{ errormsg }}
    </div>
</template>

<style scoped>
.Hello{
    font-size: 22px;
    font-weight: 500;
}
button{
    font-size: 18px;
    font-family: 'JetBrains_Mono';
    color: black;
    font-weight: 600;
    min-width: 240px;
    border-radius: 6px;
    min-height: 40px;
    background-color: aliceblue;
    cursor: pointer;
    transition: 0.7s;
}
button:hover{
    color: aliceblue;
    background-color: black;
}
input{
    font-size: 18px;
    font-family: 'JetBrains_Mono';
    border-radius: 7px;
    background-color: aliceblue;
    color: black;
    min-width: 240px;
    min-height: 40px;
}
.login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1400px;
    color: black;
    font-family: 'JetBrains_Mono';
    padding: 7px;
    gap: 10px;
    border: solid 2px black;
    border-radius: 15px;
    height: 845px;
    background-color: aliceblue;
}

</style>