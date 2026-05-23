import { ref } from "vue"

const currentAccount = ref('admin')

const userlist = ref([{
    username:'admin',
    password:'admin'
}])

export default function useUsers(){
    return {userlist,currentAccount}
}