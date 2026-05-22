import { ref } from "vue"

const currentAccount = ref('')

const userlist = ref([{
    username:'admin',
    password:'admin'
}])

function logout(){
    if (currentAccount != ''){
        currentAccount.value = ''
    }
}

export default function useUsers(){
    return {userlist,currentAccount,logout}
}