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
    <div>
        {{ clients_data.clients }}
    </div>
    <div>
        {{ clients_data.active_cl }}
    </div>
    <div>
        {{ clients_data.average_pay }}
    </div>
    <div>
        {{ clients_data.month_growth }}
    </div>
    <div>
        <VueApexCharts ref='' type="line" :options="chart_average_check.chartOptions" :series="chart_average_check.series" height="250" width="500"></VueApexCharts>
    </div>
    <div>
        <VueApexCharts ref='' type="line" :options="chart_new_clients.chartOptions" :series="chart_new_clients.series" height="250" width="500"></VueApexCharts>
    </div>
</template>

<style scoped>

</style>
