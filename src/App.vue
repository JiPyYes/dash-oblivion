<script setup>
import useUsers from './composables/useUsers';
const users = useUsers()
</script>

<template>
    {{ users.currentAccount.value?.username }}
<RouterLink :to="{name: 'login'}">login</RouterLink>
<RouterLink :to="{name: 'review'}">review</RouterLink>
<RouterLink :to="{name: 'clients'}">clients</RouterLink>
<RouterLink :to="{name: 'sales'}">sales</RouterLink>
<RouterLink :to="{name: 'finances'}">finances</RouterLink>

<RouterView></RouterView>
<button @click="users.logout" v-if="users.currentAccount.value != ''">logout</button>
</template>

<style scoped>

</style>