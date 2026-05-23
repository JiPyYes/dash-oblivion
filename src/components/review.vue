<script setup>
import VueApexCharts from 'vue3-apexcharts';
import useData from '../composables/useData';
import { reactive, ref } from 'vue';
import { computed } from 'vue';
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
<div class="main_metrics">
    <div class="revenue">
        Выручка
        {{ udata.totalCompanyMetrics.value.revenue }}
        руб.
    </div>
    <div class="earnings">
        Прибыль
        {{ udata.totalCompanyMetrics.value.earnings }}
        руб.
    </div>
    <div class="clients">
        Клиенты
        {{ udata.totalCompanyMetrics.value.clients }}
        чел.
    </div>
    <div class="conversion">
        Конверсия
        {{ udata.totalCompanyMetrics.value.conversion }}
        чел.
    </div>

    <div class="diagramm">
        Распределение выручки по направлениям бизнеса
        <div :style="udata.diagramm_style"></div>
        <div :style="{'--c1':udata.color_bank.color1,
            '--c2':udata.color_bank.color2,
            '--c3':udata.color_bank.color3
        }">
            <div>
                <div class="square color1"></div>
                {{ udata.diagramm_distribution.wholesale }}% опт
            </div>
            <div>
                <div class="square color2"></div>
                {{ udata.diagramm_distribution.retail }}% розница
            </div>
            <div>
                <div class="square color3"></div>
                {{ udata.diagramm_distribution.service }}% услуги
            </div>
        </div>
    </div>
    <div>
        <VueApexCharts type="line" :options="chartOptions" :series="series" height="350"></VueApexCharts>
        <button @click="ばか('month')">Месяц</button>
        <button @click="ばか('квартал')">Квартал</button>
        <button @click="ばか('年')">Год</button>
    </div>
    <div class="table">
        <input type="text" v-model="filters.manager">
        <select v-model="filters.status">
            <option value="">Статус</option>
            <option value="В процессе">В процессе</option>
            <option value="Завершена">Завершена</option>
            <option value="Отклонена">Отклонена</option>
        </select>
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
</template>

<style scoped>
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