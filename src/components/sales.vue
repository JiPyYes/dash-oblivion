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
<div class="sales">
    <div class="FirstRow">
        Продажи
    </div>
    <div class="SecondRow">
        <div class="DataBlock">
            <p>Общая выручка</p>
            <div class="AlignText">₽{{ sales_info.total }}</div>
        </div>
        <div class="DataBlock">
            <p>Средний чек сделки</p>
            <div class="AlignText">₽{{ sales_info.average_check }}</div>
        </div>
        <div class="DataBlock">
            <p>Активные сделки</p>
            <div class="AlignText">{{ sales_info.active_trades }}</div>
        </div>
        <div class="DataBlock">
            <p>Текущий рост</p>
            <div class="AlignText">{{ sales_info.current_growth }}%</div>
        </div>                        
    </div>
    <div class="ThirdRow">
        <div class="Cl-Graphic">
            <p style="font-size: 20px;">ДИНАМИКА ВЫРУЧКИ И СДЕЛОК (ПЛАН И ФАКТ)</p>
            <p>Тенденция выручки и сделок(ДИНАМИКА)</p>
            <VueApexCharts ref='' type="line" :options="chart_plan.chartOptions" :series="chart_plan.series" height="350" width="500"></VueApexCharts>
        </div>
        
        <div class="Cl-Graphic">
            <div class="circlePoz">
            <p style="font-size: 20px;">ВЫПОЛНЕНИЕ ПЛАНА ПРОДАЖ</p>
            <p>Текущий статус:</p>
            <p>Выполнение плана:{{ diagram_plan.data.plan }}%</p>
                <div :style="diagram_plan.style" class="diag"></div> 
            </div>
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
    min-width: 400px;
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
.sales{
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
.diag{
    text-align: center;
    justify-self: center;
}
</style>