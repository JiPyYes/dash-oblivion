<script setup>
import { reactive } from 'vue';
import useData from './composables/useData';
import useUsers from './composables/useUsers';
import { router } from './route';
const users = useUsers()
const udata = useData()
function logout(){
    if (users.currentAccount.value != ''){
        users.currentAccount.value = ''
    }
    router.push({name: 'login'});
}
const filtering = reactive({
    period:'',
    man_dep:''
})
</script>

<template>
<div class="main">
    <div class="header-left">
<div class="ImagesAlign1">
    <img src="/img/person.svg" height="60px" alt="">
    <div class="UserName">{{ users.currentAccount.value?.username }}</div>
</div>
<div class="ImagesAlign2">
    <img src="/img/login.svg" height="40px" alt="">
    <RouterLink :to="{name: 'login'}" >Вход</RouterLink>
</div>

<div class="ImagesAlign2">
    <img src="/img/graph.svg" height="40px" alt="">
<RouterLink :to="{name: 'review'}">Обзор</RouterLink>
</div>
<div class="ImagesAlign2">
    <img src="/img/users.svg" height="35px" alt="">
<RouterLink :to="{name: 'clients'}">Клиенты</RouterLink>
</div>
<div class="ImagesAlign2">
    <img src="/img/coin.svg" height="40px" alt="">
<RouterLink :to="{name: 'sales'}">Продажи</RouterLink>
</div>
<div class="ImagesAlign2">
    <img src="/img/calc.svg" height="40px" alt="">
<RouterLink :to="{name: 'finances'}">Финансы</RouterLink>
</div>
<div class="ImagesAlign3">
    <img src="/img/filter1.svg" height="40px" alt="">Фильтры
    <!-- <img src="/img/more.svg" height="35px" alt=""> -->
</div>
<div class="parentFilter">
    <div class="Filter"> 
        <select v-model="filtering.period">
            <option value="">Выбрать период</option>
            <option value="quarter">Квартал</option>
            <option value="month">Месяц</option>
            <option value="week">Неделя</option>
            <option value="day">День</option>
        </select>
        <select v-model="filtering.man_dep">
            <option value="">Выбрать менеджера</option>
            <option value="Менеджер 1">Менеджер 1</option>
            <option value="Менеджер 2">Менеджер 2</option>
            <option value="Менеджер 3">Менеджер 3</option>
            <option value="Отдел 1">Отдел 1</option>
            <option value="Отдел 2">Отдел 2</option>
            <option value="Отдел 3">Отдел 3</option>
        </select>
    </div>
        <div class="FiltApply">
            <button @click="udata.filterby(filtering.period, filtering.man_dep)">Применить фильтр</button>
        </div>
</div> 
    <div class="exports">
        <button @click="udata.toPDF">Экспорт в PDF</button>
        <button @click="udata.toXLSX">Экспорт в XLSX</button>
    </div>
<button @click="logout" v-if="users.currentAccount.value != ''">Выйти</button>

    </div>
<RouterView></RouterView>
</div>
</template>

<style scoped>
.UserName{
    color: black;
}
.exports{
    display: flex;
    justify-content: space-around;
    min-width: 350px;
    border-bottom: solid 2px black;
}
.FiltApply{
    flex-direction: column;
    justify-content: space-evenly;
    display: flex;
    min-width: 190px;
    padding-left:15px ;
}
.Filter{
    flex-direction: column;
    justify-content: space-evenly;
    display: flex;
    min-width: 80px;
}
.parentFilter{
    display: flex;
    height: 150px;
}
.ImagesAlign1{
    font-family: 'JetBrains_Mono';
    min-width: 350px;
    display: flex;
    font-weight: 550;
    align-items: center;
    border-bottom: solid 2px black;
}
.ImagesAlign2{
    font-weight: 550;
    min-width: 300px;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ImagesAlign3{
    color: black;
    margin: none;
    min-width: 300px;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 550;
    font-size: 25px;
    font-family: 'JetBrains_Mono';
}
.main{
    max-height: 500px;
    display: flex;
    flex-direction: row;
}
a{
    text-decoration: none;
    color: black;
    font-size: 23px;
    font-family: 'JetBrains_Mono';
}
.header-left{
    display: flex;
    margin: 20px;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
    padding: 20px;
    border-radius: 15px;
    min-width: 370px;
    min-height: 800px;
}
button{
    font-size: 15px;
    font-family: 'JetBrains_Mono';
    background-color: black;
    color: aliceblue;
    min-width: 150px;
    border-radius: 10px;
    min-height: 45px;
    cursor: pointer;
    margin-bottom: 10px;
    transition: 0.7s;
}
button:hover{
    background-color: aliceblue;
    color: black;
}
button:active {
  box-shadow: none;
  transform: translate(6px, 3px);
}
select{
    font-size: 15px;
    font-family: 'JetBrains_Mono';
    border-radius: 15px;
    background-color: black;
    color: aliceblue;
    min-width: 150px;
    min-height: 45px;
}
</style>