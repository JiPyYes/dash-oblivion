<script setup lang="ts">
import { computed, reactive } from 'vue';
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

function main_filter(date: 'квартал'| 'месяц' | 'неделя'){
    switch (date) {
        case '\u043A\u0432\u0430\u0440\u0442\u0430\u043B':
            chart_main_stat.series = [
                { name: 'Выручка', data: [30, 40, 35] },
                { name: 'Расходы', data: [20, 25, 20] },
            ]
            chart_main_stat.chartOptions = {
                chart: { toolbar: { show: false } },
                stroke: { width: 3 },
                colors: ['#2E93fA', '#FF4560'],
                xaxis: { categories: ['1 месяц', '2 месяц', '3 месяц'] },
            }
            break;

        case '\u043C\u0435\u0441\u044F\u0446':
            chart_main_stat.series = [
                { name: 'Выручка', data: [30, 40, 35, 50] },
                { name: 'Расходы', data: [20, 25, 20, 30] },
            ]
            chart_main_stat.chartOptions = {
                chart: { toolbar: { show: false } },
                stroke: { width: 3 },
                colors: ['#2E93fA', '#FF4560'],
                xaxis: { categories: ['1 неделя', '2 неделя', '3 неделя', '4 неделя'] },
            }
            break;

        case '\u043D\u0435\u0434\u0435\u043B\u044F':
            chart_main_stat.series = [
                { name: 'Выручка', data: [30, 40, 35, 35] },
                { name: 'Расходы', data: [20, 25, 20, 35] },
            ]
            chart_main_stat.chartOptions = {
                chart: { toolbar: { show: false } },
                stroke: { width: 3 },
                colors: ['#2E93fA', '#FF4560'],
                xaxis: { categories: ['Понедельник', 'Среда', 'Пятница', 'Воскресенье'] },
            }
            break;
    }
}

function earnings_filter(date: 'квартал'| 'месяц' | 'неделя'){
    switch (date) {
        case '\u043A\u0432\u0430\u0440\u0442\u0430\u043B':
            chart_earnings.series = [
                { name: 'Выручка', data: [30, 40, 35] },
                { name: 'Прибыль', data: [20, 25, 20] },
            ]
            chart_earnings.chartOptions = {
                chart: { toolbar: { show: false } },
                stroke: { width: 3 },
                colors: ['#2E93fA', '#00E396'],
                xaxis: { categories: ['1 месяц', '2 месяц', '3 месяц'] },
            }
            break;

        case '\u043C\u0435\u0441\u044F\u0446':
            chart_earnings.series = [
                { name: 'Выручка', data: [30, 40, 35, 50] },
                { name: 'Прибыль', data: [20, 25, 20, 30] },
            ]
            chart_earnings.chartOptions = {
                chart: { toolbar: { show: false } },
                stroke: { width: 3 },
                colors: ['#2E93fA', '#00E396'],
                xaxis: { categories: ['1 неделя', '2 неделя', '3 неделя', '4 неделя'] },
            }
            break;

        case '\u043D\u0435\u0434\u0435\u043B\u044F':
            chart_earnings.series = [
                { name: 'Выручка', data: [30, 40, 35, 15] },
                { name: 'Прибыль', data: [20, 25, 20, 64] },
            ]
            chart_earnings.chartOptions = {
                chart: { toolbar: { show: false } },
                stroke: { width: 3 },
                colors: ['#2E93fA', '#00E396'],
                xaxis: { categories: ['Понедельник', 'Среда', 'Пятница', 'Воскресенье'] },
            }
            break;   
    }
}

function dynamics_filter(date: 'квартал'| 'месяц' | 'неделя'){
    switch (date) {
        case '\u043A\u0432\u0430\u0440\u0442\u0430\u043B':
            chart_dynamics_spends.series = [
                { name: 'Расходы', data: [20, 25, 20] },
            ]
            chart_dynamics_spends.chartOptions = {
                chart: { toolbar: { show: false } },
                stroke: { width: 3 },
                colors: [ '#FF4560'],
                xaxis: { categories: ['1 месяц', '2 месяц', '3 месяц'] },
            }
            break;

        case '\u043C\u0435\u0441\u044F\u0446':
            chart_dynamics_spends.series = [
                { name: 'Расходы', data: [20, 25, 20, 30] },
            ]
            chart_dynamics_spends.chartOptions = {
                chart: { toolbar: { show: false } },
                stroke: { width: 3 },
                colors: ['#FF4560'],
                xaxis: { categories: ['1 неделя', '2 неделя', '3 неделя', '4 неделя'] },
            }
            break;

        case '\u043D\u0435\u0434\u0435\u043B\u044F':
            chart_dynamics_spends.series = [
                { name: 'Расходы', data: [20, 25, 20, 50] },
            ]
            chart_dynamics_spends.chartOptions = {
                chart: { toolbar: { show: false } },
                stroke: { width: 3 },
                colors: ['#FF4560'],
                xaxis: { categories: ['Понедельник', 'Среда', 'Пятница', 'Воскресенье'] },
            }
            break;
    }
}

const table_data = reactive({
    transaction_name: '',
    status: ''
})

const table_filter = computed(()=>{
    return udata.transaction.value.filter((item)=>{
        const match_name = table_data.transaction_name ? item.name.toLowerCase().includes(table_data.transaction_name.toLowerCase()) : true
        const match_status = table_data.status ? item?.status === table_data.status : true

        return match_name && match_status
    })
})
</script>

<template>
<div class="finances">
    <div class="First-Row">
        <div class="main_stat">
            <p>Основная статистика</p>
            <VueApexCharts ref='' type="line" :options="chart_main_stat.chartOptions" :series="chart_main_stat.series" height="250" width="650"></VueApexCharts>
            <div>
                <button class="button" @click="main_filter('квартал')">Квартал</button>
                <button class="button" @click="main_filter('месяц')">Месяц</button>
                <button class="button" @click="main_filter('неделя')">Неделя</button>
            </div>
        </div>
        
        <div class="dynamics_earnings">
            <p>Динамика чистой прибыли</p>
            <VueApexCharts ref='' type="line" :options="chart_earnings.chartOptions" :series="chart_earnings.series" height="250" width="650"></VueApexCharts>
            <div>
                <button class="button" @click="earnings_filter('квартал')">Квартал</button>
                <button class="button" @click="earnings_filter('месяц')">Месяц</button>
                <button class="button" @click="earnings_filter('неделя')">Неделя</button>
            </div>
        </div>
    </div>
    <div class="Second-Row">
        <div class="SR-1">
            <div class="dynamics_spends">
                <p>Динамика расходов</p>
                <VueApexCharts ref='' type="line" :options="chart_dynamics_spends.chartOptions" :series="chart_dynamics_spends.series" height="250" width="500"></VueApexCharts>
            <button class="button" @click="dynamics_filter('квартал')">Квартал</button>
            <button class="button" @click="dynamics_filter('месяц')">Месяц</button>
            <button class="button" @click="dynamics_filter('неделя')">Неделя</button>
            </div>
        </div>
        
        <div class="SR-2">
            <div class="diagramm">
                    <p class="GloryToTheOrangeJesus">Структура выручки</p>

                    <div class="circlePoz">
                        <div :style="udata.diagram_earnings.style"></div>
                    <div class="diadgrammR" :style="{'--c7':udata.diagram_earnings.colors.wholesale,
                            '--c8':udata.diagram_earnings.colors.retail,
                            '--c9':udata.diagram_earnings.colors.service
                        }">
                        <div class="diadgrammR">
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
                    <p class="GloryToTheOrangeJesus">Структура расходов</p>

                    <div class="circlePoz">
                        <div :style="udata.diagram_spends.style"></div>
                    <div class="diadgrammR" :style="{'--c4':udata.diagram_spends.colors.wholesale,
                            '--c5':udata.diagram_spends.colors.retail,
                            '--c6':udata.diagram_spends.colors.service
                        }">
                        <div class="diadgrammR">
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
    </div>
    <div class="Third-Row">
        <div class="table">
            <div class="header_cont">
                <div class="element">ID транзакции</div>
                <div class="element">Имя транзакции</div>
                <div class="element">Стоимость транзакции</div>
                <div class="element">Дата транзакции</div>
                <div class="element">Статус транзакции</div>
            </div>
            <div class="container" v-for="transaction in table_filter">
                <div class="element">{{ transaction.id }}</div>
                <div class="element">{{ transaction.name }}</div>
                <div class="element">{{ udata.formatNumbers(transaction.cost) }} Руб.</div>
                <div class="element">{{ transaction.date }}</div>
                <div class="element">{{ transaction.status }}</div>
            </div>
        </div>
    </div>
    <div>
            <input type="text" v-model="table_data.transaction_name">
            <select v-model="table_data.status">
                <option value="">Статус</option>
                <option value="Завершена">Завершена</option>
                <option value="Отклонена">Отклонена</option>
                <option value="В процессе">В процессе</option>
            </select>
    </div>
</div>
</template>
<style scoped>
.button{
    font-size: 14px;
    font-family: 'JetBrains_Mono';
    color: black;
    font-weight: 600;
    min-width: 100px;
    border-radius: 10px;
    margin-right: 5px;
    min-height: 30px;
    background-color: aliceblue;
    cursor: pointer;
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
    margin-left: 10px;
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
.GloryToTheOrangeJesus{
    text-align: center;
    margin-right: 50px;
    font-size: 18px;
}
.Third-Row{
    display: flex;
    justify-content: center;
    height: 300px;
}
.diadgrammR{
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    gap: 25px;
    max-width: 300px;
}
.SR-2{
    color: black;
    display: flex;
    justify-content: space-around;
    flex-direction: row; 
    border-radius: 10px;
    border: solid 2px black;
    min-width: 820px;
    max-height: 420px;     
}
.SR-1{
    color: black;
    display: flex;
    flex-direction: column; 
    padding: 20px;
    font-size: 18px;
    border-radius: 10px;
    border: solid 2px black;
    max-width: 600px;
    max-height: 420px;    
}
.Second-Row{
    border-radius: 10px;
    padding: 10px;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    min-height: 380px;
}
.First-Row{
    font-size: 18px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    min-height: 380px;
    justify-content: space-between;
}
.finances{
    display: flex;
    flex-direction: column;
    width: 1430px;
    color: black;
    font-family: 'JetBrains_Mono';
    padding: 7px;
    border: solid 2px black;
    border-radius: 15px;
    height: 1000px;
    background-color: aliceblue;
}
.table{
    display: flex;
    align-content: center;
    margin-top: 15px;
    flex-direction: column;
    width: 1390px;
    color: black;
}
.main_stat{
    color: black;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    border: solid 2px black;
    max-width: 640px;
    max-height: 500px;
}
.dynamics_earnings{
    max-width: 500px;
    max-height: 300px;
    color: aliceblue;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    border: solid 2px black;
    max-width: 640px;
    max-height: 500px;
}
.dynamics_spends{
    max-width: 500px;
    max-height: 300px;
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
    border: 1px solid black;
    height: 25px;
    width: 800px;
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