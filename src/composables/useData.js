import { reactive, ref, computed } from "vue"

const departments = ref([
    {
        dep_name:'Отдел 1',
        main_metrics:{
            quarter:{
                revenue:1,
                earnings:2,
                clients:3,
                conversion:4
            },
            month:{
                revenue:5,
                earnings:6,
                clients:7,
                conversion:8
            },
            week:{
                revenue:9,
                earnings:10,
                clients:11,
                conversion:12
            },
            day:{
                revenue:13,
                earnings:14,
                clients:15,
                conversion:16
            },
        },
    },
    {
        dep_name:'Отдел 2',
        main_metrics:{
            quarter:{
                revenue:17,
                earnings:18,
                clients:19,
                conversion:20
            },
            month:{
                revenue:21,
                earnings:22,
                clients:23,
                conversion:24
            },
            week:{
                revenue:25,
                earnings:26,
                clients:27,
                conversion:28
            },
            day:{
                revenue:29,
                earnings:30,
                clients:31,
                conversion:32
            },
        },
    },
    {
        dep_name:'Отдел 3',
        main_metrics:{
            quarter:{
                revenue:34,
                earnings:35,
                clients:36,
                conversion:37
            },
            month:{
                revenue:38,
                earnings:39,
                clients:40,
                conversion:41
            },
            week:{
                revenue:42,
                earnings:43,
                clients:44,
                conversion:45
            },
            day:{
                revenue:46,
                earnings:47,
                clients:48,
                conversion:49
            },
        },
    }
])

const managers = ref([
    {
        manager_name:'Менеджер 1',
        main_metrics:{
            quarter:{
                revenue:50,
                earnings:51,
                clients:52,
                conversion:53
            },
            month:{
                revenue:54,
                earnings:55,
                clients:56,
                conversion:57
            },
            week:{
                revenue:58,
                earnings:59,
                clients:60,
                conversion:61
            },
            day:{
                revenue:62,
                earnings:63,
                clients:64,
                conversion:65
            },
        },
    },
    {
        manager_name:'Менеджер 2',
        main_metrics:{
            quarter:{
                revenue:66,
                earnings:67,
                clients:68,
                conversion:69
            },
            month:{
                revenue:70,
                earnings:71,
                clients:72,
                conversion:73
            },
            week:{
                revenue:74,
                earnings:75,
                clients:76,
                conversion:77
            },
            day:{
                revenue:78,
                earnings:79,
                clients:80,
                conversion:81
            },
        },
    },
    {
        manager_name:'Менеджер 3',
        main_metrics:{
            quarter:{
                revenue:82,
                earnings:83,
                clients:84,
                conversion:85
            },
            month:{
                revenue:86,
                earnings:87,
                clients:88,
                conversion:89
            },
            week:{
                revenue:90,
                earnings:91,
                clients:92,
                conversion:93
            },
            day:{
                revenue:94,
                earnings:95,
                clients:96,
                conversion:97
            },
        },
    }
])
const totalCompanyMetrics = ref()

function filterby(period, man_dep){
    const entity = [...departments.value, ...managers.value]
    if(man_dep != ''){
        const meter = entity.find((ent)=>ent.manager_name == man_dep || ent.dep_name == man_dep)
        totalCompanyMetrics.value = meter.main_metrics[period]
    } else {
        totalCompanyMetrics.value = entity.reduce((acc, entity) => {
        const metrics = entity.main_metrics[period]
        acc.revenue += metrics.revenue
        acc.earnings += metrics.earnings
        acc.clients += metrics.clients
        acc.conversion += metrics.conversion
        return acc
    }, { revenue: 0, earnings: 0, clients: 0, conversion: 0 })
    }
}

const color_bank = reactive({
    color1: 'blue',
    color2: 'red',
    color3: 'green'
})

const diagramm_distribution = reactive({
        wholesale:20,
        retail:60,
        service:20
    })

const diagramm_style = reactive({
        width:'250px',
        height:'250px',
        borderRadius:'50%',
        background: `conic-gradient(${color_bank.color1} ${diagramm_distribution.wholesale}%, ${color_bank.color2} ${diagramm_distribution.wholesale}% ${diagramm_distribution.wholesale + diagramm_distribution.retail}%, ${color_bank.color3} ${diagramm_distribution.wholesale + diagramm_distribution.retail}% ${diagramm_distribution.wholesale + diagramm_distribution.retail + diagramm_distribution.service}%)`
})

const offers = ref([{
    offerid: 1,
    date: '01.05.2018',
    offername: 'Сделка 1',
    manager: 'Иван',
    status: 'Завершена',
    total: 1000000
    },
    {
    offerid: 2,
    date: '21.12.2019',
    offername: 'Сделка 2',
    manager: 'Антон',
    status: 'Отклонена',
    total: 0
    },
    {
    offerid: 3,
    date: '06.05.2026',
    offername: 'Сделка 3',
    manager: 'Василий',
    status: 'В процессе',
    total: 0
    }
])

filterby('quarter', '')

export default function useData(){
    return{totalCompanyMetrics,diagramm_distribution, diagramm_style, color_bank, offers,filterby}
}