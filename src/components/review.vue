<script setup>
import VueApexCharts from 'vue3-apexcharts';
import useData from '../composables/useData';
import { reactive, ref,onMounted } from 'vue';
import { computed } from 'vue';
import { watch } from 'vue';
const udata = useData()
const series = ref([
  { name: 'Выручка', data: [30, 40, 35, 50] },
  { name: 'Расходы', data: [20, 25, 20, 30] },
  { name: 'Прибыль', data: [10, 15, 15, 20] }
]);

const chartOptions = ref({
  chart: { toolbar: { show: false } },
  stroke: { width: 3 },
  colors: ['#2E93fA', '#FF4560', '#00E396'],
  xaxis: { categories: ['1 неделя', '2 неделя', '3 неделя', '4 неделя'] },
})

const mychartinstance = ref(null)

const MetricsWarningColors = reactive({
    revenue: {backgroundColor : 'red'},
    earnings: {backgroundColor: 'red'},
    clients: {backgroundColor: 'red'},
    conversion: {backgroundColor: 'red'} 
})

function MetricsWarning(period){
    if (period === 'quarter'){
        if(udata.totalCompanyMetrics.value.revenue >= 100){
            MetricsWarningColors.revenue.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.revenue >= 50) {
            MetricsWarningColors.revenue.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.revenue.backgroundColor = 'red'
        }
        if(udata.totalCompanyMetrics.value.revenue >= 100){
            MetricsWarningColors.revenue.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.revenue >= 50) {
            MetricsWarningColors.revenue.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.revenue.backgroundColor = 'red'
        }
        if(udata.totalCompanyMetrics.value.revenue >= 100){
            MetricsWarningColors.revenue.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.revenue >= 50) {
            MetricsWarningColors.revenue.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.revenue.backgroundColor = 'red'
        }
        if(udata.totalCompanyMetrics.value.revenue >= 100){
            MetricsWarningColors.revenue.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.revenue >= 50) {
            MetricsWarningColors.revenue.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.revenue.backgroundColor = 'red'
        }
   }
   if (period === 'month'){
        if(udata.totalCompanyMetrics.value.earnings >= 100){
            MetricsWarningColors.earnings.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.earnings >= 50) {
            MetricsWarningColors.earnings.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.earnings.backgroundColor = 'red'
        }
        if(udata.totalCompanyMetrics.value.earnings >= 100){
            MetricsWarningColors.earnings.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.earnings >= 50) {
            MetricsWarningColors.earnings.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.earnings.backgroundColor = 'red'
        }
        if(udata.totalCompanyMetrics.value.earnings >= 100){
            MetricsWarningColors.earnings.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.earnings >= 50) {
            MetricsWarningColors.earnings.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.earnings.backgroundColor = 'red'
        }
        if(udata.totalCompanyMetrics.value.earnings >= 100){
            MetricsWarningColors.earnings.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.earnings >= 50) {
            MetricsWarningColors.earnings.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.earnings.backgroundColor = 'red'
        }
   }
   if (period === 'week'){
        if(udata.totalCompanyMetrics.value.clients >= 100){
            MetricsWarningColors.clients.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.clients >= 50) {
            MetricsWarningColors.clients.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.clients.backgroundColor = 'red'
        }
        if(udata.totalCompanyMetrics.value.clients >= 100){
            MetricsWarningColors.clients.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.clients >= 50) {
            MetricsWarningColors.clients.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.clients.backgroundColor = 'red'
        }
        if(udata.totalCompanyMetrics.value.clients >= 100){
            MetricsWarningColors.clients.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.clients >= 50) {
            MetricsWarningColors.clients.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.clients.backgroundColor = 'red'
        }
        if(udata.totalCompanyMetrics.value.clients >= 100){
            MetricsWarningColors.clients.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.clients >= 50) {
            MetricsWarningColors.clients.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.clients.backgroundColor = 'red'
        }
   }
   if (period === 'day'){
        if(udata.totalCompanyMetrics.value.conversion >= 100){
            MetricsWarningColors.conversion.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.conversion >= 50) {
            MetricsWarningColors.conversion.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.conversion.backgroundColor = 'red'
        }
        if(udata.totalCompanyMetrics.value.conversion >= 100){
            MetricsWarningColors.conversion.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.conversion >= 50) {
            MetricsWarningColors.conversion.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.conversion.backgroundColor = 'red'
        }
        if(udata.totalCompanyMetrics.value.conversion >= 100){
            MetricsWarningColors.conversion.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.conversion >= 50) {
            MetricsWarningColors.conversion.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.conversion.backgroundColor = 'red'
        }
        if(udata.totalCompanyMetrics.value.conversion >= 100){
            MetricsWarningColors.conversion.backgroundColor = 'green'
        } else if (udata.totalCompanyMetrics.value.conversion >= 50) {
            MetricsWarningColors.conversion.backgroundColor = 'yellow'
        } else {
            MetricsWarningColors.conversion.backgroundColor = 'red'
        }
   }
}

watch(udata.totalCompanyMetrics, (newValue)=>{
    if(newValue){
        MetricsWarning(udata.filtering.period)
    }
})

MetricsWarning('quarter')


function ばか(дата){
    switch (дата) {
        case 'month':
            chartOptions.value = {
            ...chartOptions.value,
                xaxis: {
                    ...chartOptions.value.xaxis,
                    categories: ['1 неделя', '2 неделя', '3 неделя', '4 неделя']
                }
            };
            series.value[0].data = [30, 40, 35, 50]
            series.value[1].data = [20, 25, 20, 30]
            series.value[2].data = [10, 15, 15, 20]
            break;
        case 'квартал':
            chartOptions.value = {
            ...chartOptions.value,
                xaxis: {
                    ...chartOptions.value.xaxis,
                    categories: ['1 месяц', '2 месяц', '3 месяц']
                }
            };
            series.value[0].data = [50, 70, 45]
            series.value[1].data = [70, 35, 30]
            series.value[2].data = [10, 60, 20]
            break;
        case '年':
            chartOptions.value = {
            ...chartOptions.value,
                xaxis: {
                    ...chartOptions.value.xaxis,
                    categories: ['1 квартал', '2 квартал', '3 квартал', '4 квартал']
                }
            };
            series.value[0].data = [40, 50, 65, 10]
            series.value[1].data = [50, 65, 10, 30]
            series.value[2].data = [30, 15, 55, 20]
            break;
    }
}

const filters = reactive({
    manager: '',
    status: '',
});

const filteredDeals = computed(() => {
    return udata.offers.value.filter(item => {
        const matchManager = filters.manager ? item.manager.toLowerCase().includes(filters.manager.toLowerCase()) : true
        const matchStatus = filters.status ? item.status === filters.status : true

        return matchManager && matchStatus 
    })
})
</script>

<template>
<div class="review">
    <div class="main_metrics">
        <div class="revenue" :style="MetricsWarningColors.revenue">
            <p>Выручка</p>
            {{ udata.totalCompanyMetrics.value.revenue }}
            <p>рублей</p>
        </div>
        <div class="earnings" :style="MetricsWarningColors.earnings">
            <p>Прибыль</p>
            {{ udata.totalCompanyMetrics.value.earnings }}
            <p>рублей</p>
        </div>
        <div class="clients" :style="MetricsWarningColors.clients">
            <p>Клиенты</p>
            {{ udata.totalCompanyMetrics.value.clients }}
            <p>человек</p>
        </div>
        <div class="conversion" :style  ="MetricsWarningColors.conversion">
            <p>Конверсия</p>
            {{ udata.totalCompanyMetrics.value.conversion }}
            <p>человек</p>
        </div>
    </div>
        <div class="yes">
            <div class="diagramm">
                <div class="circlePoz">
                    <div :style="udata.diagramm_style"></div>
                    <div :style="{'--c1':udata.color_bank.color1,
                        '--c2':udata.color_bank.color2,
                        '--c3':udata.color_bank.color3
                    }">
                    <div class="diadgrammR">
                    <p>Распределение выручки по направлениям бизнеса</p>
                        <div class="squareAlign">
                            <div class="square color1"></div>
                            {{ udata.diagramm_distribution.wholesale }}% опт
                        </div>
                        <div class="squareAlign">
                            <div class="square color2"></div>
                            {{ udata.diagramm_distribution.retail }}% розница
                        </div>
                        <div class="squareAlign">
                            <div class="square color3"></div>
                            {{ udata.diagramm_distribution.service }}% услуги
                    </div>
                </div>
                </div>    
            </div>
        </div>  
        <div>
            <div class="graphs">
                <VueApexCharts ref='mychartinstance' type="line" :options="chartOptions" :series="series" height="300" width="100%" ></VueApexCharts>
                 <div class="btns">
                    <button @click="ばか('month')">Месяц</button>
                    <button @click="ばか('квартал')">Квартал</button>
                    <button @click="ばか('年')">Год</button>                    
                 </div>   
            </div>
         
        </div>    
    </div>
        <div class="tables">
            <div id="report-container">
                <div class="table" id="report-container">
                    <div class="row">
                        <div class="offerelement ofheader">Номер сделки</div>
                        <div class="offerelement ofheader">Дата сделки</div>
                        <div class="offerelement ofheader">Имя сделки</div>
                        <div class="offerelement ofheader">Имя менеджера</div>
                        <div class="offerelement ofheader">Статус сделки</div>
                        <div class="offerelement ofheader">Прибыль со сделки</div>
                    </div>
                    <div class="row" v-for="offer in filteredDeals">
                        <div class="offerelement">{{ offer.offerid }}</div>
                        <div class="offerelement">{{ offer.date }}</div>
                        <div class="offerelement">{{ offer.offername }}</div>
                        <div class="offerelement">{{ offer.manager }}</div>
                        <div class="offerelement">{{ offer.status }}</div>
                        <div class="offerelement">{{ offer.total }} Руб.</div>
                    </div>
                </div>
            </div>
            <div class="reportBtns">
                    <input type="text" v-model="filters.manager">
                <select v-model="filters.status">
                    <option value="">Статус</option>
                    <option value="В процессе">В процессе</option>
                    <option value="Завершена">Завершена</option>
                    <option value="Отклонена">Отклонена</option>
                </select>
            </div>
        </div>
</div>
</template>

<style scoped>
.table{
    display: flex;
    flex-direction: column;
    justify-self: center;
    min-width: 1200px;
    min-height: 120px;
}
.circlePoz{
    display: flex;
    min-width: 250px;
    min-height: 335px;
    align-items: center;
}
.reportBtns{
    margin-top: 20px;
    display: flex;
    padding-left: 70px;
    gap: 25px;
    min-height: 50px;
    min-width: 280px;
}
.tables{
    margin-top: 20px;
    max-width: 1400px;
    display: flex;
    align-self: center;
    border-radius: 10px;
    margin-bottom: 10px;
    border: solid 2px black;
    flex-direction: column;
}
.btns{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
button{
    font-size: 15px;
    font-family: 'JetBrains_Mono';
    color: black;
    font-weight: 700;
    min-width: 150px;
    border-radius: 10px;
    min-height: 45px;
    background-color: aliceblue;
    cursor: pointer;
    margin-bottom: 10px;
    transition: 0.7s;
}
button:hover{
    color: aliceblue;
    background-color: black;
}
input{
    font-size: 15px;
    font-family: 'JetBrains_Mono';
    border-radius: 7px;
    background-color: aliceblue;
    color: black;
    max-width: 150px;
    max-height: 40px;
}
select{
    font-size: 15px;
    font-family: 'JetBrains_Mono';
    border-radius: 7px;
    background-color: aliceblue;
    color: black;
    max-width: 150px;
    max-height: 45px;
}
.yes{
    display: flex;
    flex-direction: row;
    gap: 40px;
    height: 400px;
}
.graphs{
    border: solid 2px black;
    border-radius: 10px;
    margin-top: 10px;
    min-height: 340px;
    min-width: 690px;
}
.squareAlign{
    display: flex;
    font-size: 18px;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    width: 233px;
    margin: 5px;
}
.diadgrammR{
    font-size: 17px;
    font-weight: 600;
    min-height: 300px;
    max-width: 440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.diagramm{
    display: flex;
    padding: 15px;
    margin-top: 10px;
    border-radius: 10px;
    border: solid 2px black;
    max-height: 340px;
    max-width: 700px;
    flex-direction: row;    
}
.review{
    display: flex;
    flex-direction: column;
    width: fit-content;
    color: black;
    font-family: 'JetBrains_Mono';
    padding: 7px;
    border: solid 2px black;
    border-radius: 15px;
    height: 870px;
    background-color: aliceblue;
}
.revenue{
    align-items: center;
    justify-content: space-around;
    font-size: 22px;
    font-weight: 600;
    font-family: 'JetBrains_Mono';
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    min-height: 210px;
    min-width: 270px;    
}
.earnings{
    font-family: 'JetBrains_Mono';
    font-size: 22px;
    display: flex;
    font-weight: 600;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    flex-direction: column;
    min-height: 210px;
    min-width: 270px;    
}
.clients{
    font-family: 'JetBrains_Mono';
    font-size: 22px;
    font-weight: 600;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;    
    min-height: 210px;
    min-width: 270px;    
}
.conversion{
    font-family: 'JetBrains_Mono';
    font-size: 22px;
    display: flex;
    font-weight: 600;
    border-radius: 10px;
    justify-content: space-around;
    align-items: center;    
    flex-direction: column;
    min-height: 210px;
    min-width: 270px;    
}
.main_metrics{
    background-color: aliceblue;
    min-height: 210px;
    min-width: 1350px;
    display: flex;
    padding: 15px;
    border-radius: 10px;
    border: solid 2px black;
    justify-content: space-between;
    flex-direction: row;
}
.ofheader{
    text-align: center;
}
.row{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
}
.offerelement{
    border: 1px solid black;
    padding: 5px;
    width: 200px;
}
.square{
    width: 50px;
    height: 50px;
}
.color1{
    background-color: var(--c1);
}
.color2{
    background-color: var(--c2);
}
.color3{
    background-color: var(--c3);
}
</style>