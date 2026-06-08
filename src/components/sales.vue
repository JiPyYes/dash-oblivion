<script setup lang="ts">
import { reactive, ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

const diagram_plan = reactive({
    colors: { plan: 'red', fact: '#00000000'},
    data: { plan: 82, fact: 18},

    get style() {
        const { plan, fact} = this.data;

        return {
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: `conic-gradient(
                ${this.colors.plan} ${plan}%, 
                ${this.colors.fact} ${plan}% ${plan + fact}%
            )`
        };
    }
});

const chart_plan = reactive({
    series:[
        { name: 'Выручка', data: [20, 25, 20] },
        { name: 'Новые сделки', data: [20, 25, 20] },
        ],
    chartOptions:{
        chart: { toolbar: { show: false } },
        stroke: { width: 3 },
        colors: ['#FF4560', '#ABCDFF'],
        xaxis: { categories: ['1 месяц', '2 месяц', '3 месяц'] },
    }
})

interface sales {
    total: number,
    average_check: number,
    active_trades: number,
    current_growth: number
}

const sales_info = reactive<sales>({
    total: 12450000,
    average_check: 850000,
    active_trades:215,
    current_growth: 10
})
</script>

<template>
<div v-for="item in sales_info">
    {{ item }}
</div>
<VueApexCharts ref='' type="line" :options="chart_plan.chartOptions" :series="chart_plan.series" height="250" width="500"></VueApexCharts>
<div class="diagramm">
                <div class="circlePoz">
                    <div :style="diagram_plan.style" class="diag">Выполнение плана:{{ diagram_plan.data.plan }}%</div> 
            </div>
            </div>  
</template>

<style scoped>
.diag{
    text-align: center;
}
</style>