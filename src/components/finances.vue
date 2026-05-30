<script setup>
import { reactive } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import useData from '../composables/useData';

const udata = useData()

const chart_main_stat = reactive({
    series:[
        { name: 'Выручка', data: [30, 40, 35, 50] },
        { name: 'Расходы', data: [20, 25, 20, 30] },
        ],
    chartOptions:{
        chart: { toolbar: { show: false } },
        stroke: { width: 3 },
        colors: ['#2E93fA', '#FF4560'],
        xaxis: { categories: ['1 неделя', '2 неделя', '3 неделя', '4 неделя'] },
    }
})

const chart_earnings = reactive({
    series:[
        { name: 'Выручка', data: [30, 40, 35, 50] },
        { name: 'Прибыль', data: [10, 15, 15, 20] }],
    chartOptions:{
        chart: { toolbar: { show: false } },
        stroke: { width: 3 },
        colors: ['#2E93fA', '#00E396'],
        xaxis: { categories: ['1 неделя', '2 неделя', '3 неделя', '4 неделя'] },
    }
})

const chart_dynamics_spends = reactive({
    series:[
        { name: 'Расходы', data: [20, 25, 20, 30] }],
    chartOptions:{
        chart: { toolbar: { show: false } },
        stroke: { width: 3 },
        colors: ['#FF4560'],
        xaxis: { categories: ['1 неделя', '2 неделя', '3 неделя', '4 неделя'] },
    }
})



</script>

<template>
    <div class="main_stat">
        <VueApexCharts ref='' type="line" :options="chart_main_stat.chartOptions" :series="chart_main_stat.series" height="300" width="100%"></VueApexCharts>
    </div>

    <div class="dynamics_earnings">
        <VueApexCharts ref='' type="line" :options="chart_earnings.chartOptions" :series="chart_earnings.series" height="300" width="100%"></VueApexCharts>
    </div>

    <div class="dynamics_spends">
        <VueApexCharts ref='' type="line" :options="chart_dynamics_spends.chartOptions" :series="chart_dynamics_spends.series" height="300" width="100%"></VueApexCharts>
    </div>

    <div class="structure">
        <div class="diagramm">
                <div class="circlePoz">
                    <div :style="udata.diagram_earnings.style"></div>
                <div class="diadgrammR" :style="{'--c7':udata.diagram_earnings.colors.wholesale,
                        '--c8':udata.diagram_earnings.colors.retail,
                        '--c9':udata.diagram_earnings.colors.service
                    }">
                    <div class="diadgrammR">
                    <p>Распределение выручки по направлениям бизнеса</p>
                        <div class="squareAlign">
                            <div class="square color7"></div>
                            {{ udata.diagram_earnings.data.wholesale }}% опт
                        </div>
                        <div class="squareAlign">
                            <div class="square color8"></div>
                            {{ udata.diagram_earnings.data.retail }}% розница
                        </div>
                        <div class="squareAlign">
                            <div class="square color9"></div>
                            {{ udata.diagram_earnings.data.service }}% услуги
                    </div>
                </div>
                </div>    
            </div>
        </div> 
        <div class="diagramm">
                <div class="circlePoz">
                    <div :style="udata.diagram_spends.style"></div>
                <div class="diadgrammR" :style="{'--c4':udata.diagram_spends.colors.wholesale,
                        '--c5':udata.diagram_spends.colors.retail,
                        '--c6':udata.diagram_spends.colors.service
                    }">
                    <div class="diadgrammR">
                    <p>Распределение выручки по направлениям бизнеса</p>
                        <div class="squareAlign">
                            <div class="square color4"></div>
                            {{ udata.diagram_spends.data.wholesale }}% опт
                        </div>
                        <div class="squareAlign">
                            <div class="square color5"></div>
                            {{ udata.diagram_spends.data.retail }}% розница
                        </div>
                        <div class="squareAlign">
                            <div class="square color6"></div>
                            {{ udata.diagram_spends.data.service }}% услуги
                    </div>
                </div>
                </div>    
            </div>
        </div> 
    </div>

    <div class="table">
        <div class="header_cont">
            <div class="element">ID транзакции</div>
            <div class="element">Имя транзакции</div>
            <div class="element">Стоимость транзакции</div>
            <div class="element">Дата транзакции</div>
            <div class="element">Статус транзакции</div>
        </div>
        <div class="container" v-for="transaction in udata.transaction.value">
            <div class="element">{{ transaction.id }}</div>
            <div class="element">{{ transaction.name }}</div>
            <div class="element">{{ udata.formatNumbers(transaction.cost) }} Руб.</div>
            <div class="element">{{ transaction.date }}</div>
            <div class="element">{{ transaction.status }}</div>
        </div>
    </div>
</template>

<style scoped>
.table{
    display: flex;
    flex-direction: column;
}
.header_cont{
    display: flex;
    flex-direction: row;
    
}
.container{
    display: flex;
    flex-direction: row;
}
.element{
    padding: 5px;
    border: 1px solid white;
    height: 20px;
    width: 200px;
    text-align: center;
}
.square{
    width: 15px;
    height: 15px;
}
.color4{
    background-color: var(--c4);
}
.color5{
    background-color: var(--c5);
}
.color6{
    background-color: var(--c6);
}
.color7{
    background-color: var(--c7);
}
.color8{
    background-color: var(--c8);
}
.color9{
    background-color: var(--c9);
}
</style>