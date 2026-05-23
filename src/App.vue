<script setup>
import useUsers from './composables/useUsers';
const users = useUsers()
import { router } from './route';
function logout(){
    if (users.currentAccount.value != ''){
        users.currentAccount.value = ''
    }
    router.push({name: 'login'});
}
</script>

<template>
    {{ users.currentAccount.value?.username }}
<RouterLink :to="{name: 'login'}">login</RouterLink>
<RouterLink :to="{name: 'review'}">review</RouterLink>
<RouterLink :to="{name: 'clients'}">clients</RouterLink>
<RouterLink :to="{name: 'sales'}">sales</RouterLink>
<RouterLink :to="{name: 'finances'}">finances</RouterLink>

<RouterView></RouterView>
<button @click="logout" v-if="users.currentAccount.value != ''">logout</button>
</template>

<style scoped>

</style>