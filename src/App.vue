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
    {{ users.currentAccount.value?.username }}
<RouterLink :to="{name: 'login'}">login</RouterLink>
<RouterLink :to="{name: 'review'}">review</RouterLink>
<RouterLink :to="{name: 'clients'}">clients</RouterLink>
<RouterLink :to="{name: 'sales'}">sales</RouterLink>
<RouterLink :to="{name: 'finances'}">finances</RouterLink>
фильтры
<select v-model="filtering.period">
    <option value="quarter">Квартал</option>
    <option value="month">Месяц</option>
    <option value="week">Неделя</option>
    <option value="day">День</option>
</select>
<select v-model="filtering.man_dep">
    <option value="">-</option>
    <option value="Менеджер 1">Менеджер 1</option>
    <option value="Менеджер 2">Менеджер 2</option>
    <option value="Менеджер 3">Менеджер 3</option>
    <option value="Отдел 1">Отдел 1</option>
    <option value="Отдел 2">Отдел 2</option>
    <option value="Отдел 3">Отдел 3</option>
</select>
<button @click="udata.filterby(filtering.period, filtering.man_dep)">Применить фильтр</button>
<button @click="udata.toPDF">Экспорт в PDF</button>
<button @click="udata.toXLSX">Экспорт в XLSX</button>
<RouterView></RouterView>
<button @click="logout" v-if="users.currentAccount.value != ''">logout</button>
</template>

<style scoped>

</style>