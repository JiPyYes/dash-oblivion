import { reactive } from "vue"

const main_metrics_module = reactive({
    revenue:123456789,
    earnings:123456789,
    clients:123456789,
    conversion:123456789
})

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

export default function useData(){
    return{main_metrics_module,diagramm_distribution, diagramm_style, color_bank}
}