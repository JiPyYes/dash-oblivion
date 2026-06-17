import { ref } from "vue"

interface ulist {
    username: string
    password: string
}

const userlist = ref<ulist[]>([{
    username:'admin',
    password:'admin'
}])

const currentAccount = ref<ulist>({username: '', password: ''})

export default function useUsers(){
    return {userlist,currentAccount}
}
