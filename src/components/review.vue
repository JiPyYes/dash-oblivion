<script setup>
import useData from '../composables/useData';
const data = useData()
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