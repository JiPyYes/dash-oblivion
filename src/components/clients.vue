<script setup lang="ts">
import { reactive } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
interface Clients {
    clients: number,
    active_cl: number,
    average_pay: number,
    month_growth: number
}

const clients_data = reactive<Clients>({
    clients: 14250,
    active_cl: 9801,
    average_pay:1350,
    month_growth:12
})

const chart_average_check = reactive({
    series:[
        { name: 'Средний чек', data: [20, 25, 20] }],
    chartOptions:{
        chart: { toolbar: { show: false } },
        stroke: { width: 3 },
        colors: ['#FF4560'],
        xaxis: { categories: ['1 месяц', '2 месяц', '3 месяц'] },
    }
})

const chart_new_clients = reactive({
    series:[
        { name: 'Новые клиенты', data: [20, 25, 20] }],
    chartOptions:{
        chart: { toolbar: { show: false } },
        stroke: { width: 3 },
        colors: ['#FF4560'],
        xaxis: { categories: ['1 месяц', '2 месяц', '3 месяц'] },
    }
})
</script>

<template>
<div class="clients">
    <div class="FirstRow">Клиенты</div>
    <div class="SecondRow">
        <div class="DataBlock">
            <p>Всего клиентов</p>
            <div class="AlignText">{{ clients_data.clients }}</div>
        </div>
        <div class="DataBlock">
            <p>Активные клиенты</p>
            <div class="AlignText">{{ clients_data.active_cl }}</div>
        </div>
        <div class="DataBlock">
            <p>Средний чек за прошлый месяц</p>
            <div class="AlignText">${{ clients_data.average_pay }}</div>
        </div>
        <div class="DataBlock">
            <p>Текущий месячный рост</p>
            <div class="AlignText">{{ clients_data.month_growth }}%</div>
        </div>
    </div>
    <div class="ThirdRow">       
        <div class="Cl-Graphic">
            <p style="font-size: 20px;">СРЕДНИЙ ЧЕК НА ПОЛЬЗОВАТЕЛЯ (ДИНАМИКА)</p>
            <p>Тенденция средних трат на клиента</p>
            <VueApexCharts ref='' type="line" :options="chart_average_check.chartOptions" :series="chart_average_check.series" height="350" width="500"></VueApexCharts>
        </div>
        <div class="Cl-Graphic">
            <p style="font-size: 20px;">КОЛИЧЕСТВО НОВЫХ ПОЛЬЗОВАТЕЛЕЙ (В МЕСЯЦ)</p>
            <p>Тенденция новых регистраций</p>
            <VueApexCharts ref='' type="line" :options="chart_new_clients.chartOptions" :series="chart_new_clients.series" height="350" width="500"></VueApexCharts>
        </div>
    </div>     
</div>
</template>

<style scoped>
.Cl-Graphic{
    border: 3px solid black;
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
}
.ThirdRow{
    display: flex;
    justify-content: space-evenly;
    height: fit-content;
    padding-top: 25px;
    min-width:1400px ;
}
.AlignText{
    display: flex;
    font-weight: 700;
    font-size: 22px;
    justify-content: center;
}
.DataBlock{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    align-content: center;
    padding: 7px;
    border: 3px solid black;
    border-radius: 8px;

}
.FirstRow{
    display: flex;
    justify-content: center;
    min-width:1300px ;
    height: fit-content;
    font-size: 25px;
    font-weight: 500;
    padding: 10px;
    border-bottom: 5px solid black;
    border-radius: 1px;
    margin-bottom: 10px;
}
.SecondRow{
    display: flex;
    justify-content: space-around;
    height: fit-content;
    min-width:1400px ;
    padding-top: 25px;
    padding-bottom: 25px;
}
.clients{
    display: flex;
    flex-direction: column;
    width: 1400px;
    color: black;
    font-family: 'JetBrains_Mono';
    padding: 7px;
    border: solid 2px black;
    border-radius: 15px;
    height: 845px;
    background-color: aliceblue;
}
</style>
