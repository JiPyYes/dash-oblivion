import { ref } from "vue"

interface ulist {
    username: string
    password: string
}

const userlist = ref<ulist[]>([{
    username:'',
    password:''
}])

const currentAccount = ref<ulist>(userlist.value[0])

export default function useUsers(){
    return {userlist,currentAccount}
}