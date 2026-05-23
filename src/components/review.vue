<script setup>
import VueApexCharts from 'vue3-apexcharts';
import useData from '../composables/useData';
import { reactive, ref } from 'vue';
const data = useData()
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
</script>

<template>
<div class="main_metrics">
    <div class="revenue">
        Выручка
        {{ data.main_metrics_module.revenue }}
        руб.
    </div>
    <div class="earnings">
        Прибыль
        {{ data.main_metrics_module.earnings }}
        руб.
    </div>
    <div class="clients">
        Клиенты
        {{ data.main_metrics_module.clients }}
        чел.
    </div>
    <div class="conversion">
        Конверсия
        {{ data.main_metrics_module.conversion }}
        чел.
    </div>

    <div class="diagramm">
        Распределение выручки по направлениям бизнеса
        <div :style="data.diagramm_style"></div>
        <div :style="{'--c1':data.color_bank.color1,
            '--c2':data.color_bank.color2,
            '--c3':data.color_bank.color3
        }">
            <div>
                <div class="square color1"></div>
                {{ data.diagramm_distribution.wholesale }}% опт
            </div>
            <div>
                <div class="square color2"></div>
                {{ data.diagramm_distribution.retail }}% розница
            </div>
            <div>
                <div class="square color3"></div>
                {{ data.diagramm_distribution.service }}% услуги
            </div>
        </div>
    </div>
    <div>
        <VueApexCharts type="line" :options="chartOptions" :series="series" height="350"></VueApexCharts>
        <button @click="ばか('month')">Месяц</button>
        <button @click="ばか('квартал')">Квартал</button>
        <button @click="ばか('年')">Год</button>
    </div>
</div>
</template>

<style scoped>
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