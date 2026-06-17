import { reactive, ref, computed, nextTick } from "vue"
import ExcelJS from 'exceljs'
import html2pdf from 'html2pdf.js';
import VueApexCharts from "vue3-apexcharts";

const chartinstance = ref<InstanceType<typeof VueApexCharts> | null>(null)

interface main_metrics {
    quarter: Metrics, 
    month: Metrics, 
    week: Metrics, 
    day: Metrics
}

interface depart {
    dep_name: string, 
    main_metrics: main_metrics
}

interface manags {
    manager_name: string, 
    main_metrics: main_metrics
}

class Metrics {
    constructor(public revenue: number,public earnings: number,public clients: number, public conversion: number) {}
}

class Offers {
    constructor(public offerid: number, public date: string, public offername: string, public manager: string, public status: string, public total: number){}
}

class Transactions {
    constructor(public id: number, public name: string, public cost:number, public date: string, public status: string) {}
}

const departments = ref<depart[]>([
    {
        dep_name:'Отдел 1',
        main_metrics:{
            quarter: new Metrics(1, 2, 3, 4),
            month:new Metrics(4, 5, 6, 7),
            week:new Metrics(8, 9, 10, 11),
            day:new Metrics(12, 13, 14, 15),
        },
    },
    {
        dep_name:'Отдел 2',
        main_metrics:{
            quarter:new Metrics(16, 17, 18, 19),
            month:new Metrics(20, 21, 22, 23),
            week:new Metrics(24, 25, 26, 27),
            day:new Metrics(28,29,30,31),
        },
    },
    {
        dep_name:'Отдел 3',
        main_metrics:{
            quarter:new Metrics(32,33,34,35),
            month:new Metrics(36,37,38,39),
            week:new Metrics(40,41,42,43),
            day:new Metrics(44,45,46,47),
        },
    }
])

const managers = ref<manags[]>([
    {
        manager_name:'Менеджер 1',
        main_metrics:{
            quarter:new Metrics(48,49,50,60),
            month:new Metrics(61,62,63,64),
            week:new Metrics(65,66,67,68),
            day:new Metrics(69,70,71,72),
        },
    },
    {
        manager_name:'Менеджер 2',
        main_metrics:{
            quarter:new Metrics(73,74,75,76),
            month:new Metrics(77,78,79,80),
            week:new Metrics(81,82,83,84),
            day:new Metrics(85,86,87,88),
        },
    },
    {
        manager_name:'Менеджер 3',
        main_metrics:{
            quarter:new Metrics(89,90,91,92),
            month:new Metrics(93,94,95,96),
            week:new Metrics(97,98,99,100),
            day:new Metrics(101,102,103,104),
        },
    }
])

const totalCompanyMetrics = ref<Metrics>()

function filterby(period: keyof main_metrics, man_dep: string){
    const entity : (manags|depart)[] = [...departments.value, ...managers.value]
    if(man_dep != ''){
        const meter: (manags|depart) | undefined = entity.find((ent : manags|depart)=>(ent as manags).manager_name == man_dep || (ent as depart).dep_name == man_dep)
        if (meter){totalCompanyMetrics.value = meter.main_metrics[period]}
    } else {
        totalCompanyMetrics.value = entity.reduce((acc: {revenue: number, earnings: number, clients: number, conversion: number}, entity) => {
        const metrics = entity.main_metrics[period]
        acc.revenue += metrics.revenue
        acc.earnings += metrics.earnings
        acc.clients += metrics.clients
        acc.conversion += metrics.conversion
        return acc
    }, { revenue: 0, earnings: 0, clients: 0, conversion: 0 })
    }
}

const formatNumbers = (number : number | undefined) => {
        if (number){
        return number.toLocaleString('ru-RU')
        }
}

const diagram = reactive({
    colors: { wholesale: 'blue', retail: 'red', service: 'green' },
    data: { wholesale: 20, retail: 60, service: 20 },

    get style() {
        const { wholesale, retail, service } = this.data;
        const total = wholesale + retail + service;

        return {
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: `conic-gradient(
                ${this.colors.wholesale} ${wholesale}%, 
                ${this.colors.retail} ${wholesale}% ${wholesale + retail}%, 
                ${this.colors.service} ${wholesale + retail}% ${total}%
            )`
        };
    }
});

const diagram_spends = reactive({
    colors: { wholesale: 'blue', retail: 'red', service: 'green' },
    data: { wholesale: 20, retail: 60, service: 20 },

    get style() {
        const { wholesale, retail, service } = this.data;
        const total = wholesale + retail + service;

        return {
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: `conic-gradient(
                ${this.colors.wholesale} ${wholesale}%, 
                ${this.colors.retail} ${wholesale}% ${wholesale + retail}%, 
                ${this.colors.service} ${wholesale + retail}% ${total}%
            )`
        };
    }
});

const diagram_earnings = reactive({
    colors: { wholesale: 'blue', retail: 'red', service: 'green' },
    data: { wholesale: 20, retail: 60, service: 20 },

    get style() {
        const { wholesale, retail, service } = this.data;
        const total = wholesale + retail + service;

        return {
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: `conic-gradient(
                ${this.colors.wholesale} ${wholesale}%, 
                ${this.colors.retail} ${wholesale}% ${wholesale + retail}%, 
                ${this.colors.service} ${wholesale + retail}% ${total}%
            )`
        };
    }
});

const offers = ref([
    new Offers(1,'01.05.2018','Сделка 1','Иван','Завершена', 1000000),
    new Offers(2, '21.12.2019', 'Сделка 2', 'Антон', 'Отклонена', 0),
    new Offers(3, '06.05.2026', 'Сделка 3', 'Василий', 'В процессе', 0),
])

filterby('quarter', '')

const logAction = async(action: string) =>{
    await new Promise<void>((resolve) => {
            setTimeout(() => {
                    console.log(`Действие ${action} сохранено`)
                    resolve()
            }, 1000);
    })
}

const toPDF = async () => {
    const element = document.getElementById('pdf-content'); // Убедитесь, что это ID всего дашборда
    if (!element) return;

    const originalStyle = element.style.cssText;
    element.style.overflow = 'visible';
    element.style.maxHeight = 'none';

    const opt = {
        margin: 5,
        filename: 'report.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            // Секрет «полного» захвата:
            windowWidth: element.scrollWidth,  // Захватываем всю ширину контента
            windowHeight: element.scrollHeight, // Захватываем всю высоту контента
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: { unit: 'mm', format: 'a3', orientation: 'landscape' }
    } as const;

    await html2pdf().set(opt).from(element).save();

    element.style.cssText = originalStyle;
};

const toXLSX = async() => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Отчет по продажам');

    sheet.columns = [
        { header: 'Номер сделки', key: 'offerid', width: 15 },
        { header: 'Дата', key: 'date', width: 15 },
        { header: 'Название сделки', key: 'offername', width: 20 },
        { header: 'Менеджер', key: 'manager', width: 15 },
        { header: 'Статус', key: 'status', width: 15 },
        { header: 'Прибыль', key: 'total', width: 15 }
    ];

    for (let index = 0; index < offers.value.length; index++) {
        const element = offers.value[index];
        sheet.addRow(element);
    }

    const chart = chartinstance.value?.chart
    
    let imgURI : string | undefined

    if (chart){
    const result = await chart.dataURI()
        if ('imgURI' in result){
        imgURI = result.imgURI}
    }

    const imageId = workbook.addImage({
        base64: imgURI, 
        extension: 'png',
    });

    sheet.addImage(imageId, {
        tl: { col: 0, row: offers.value.length + 2 }, 
        ext: { width: 1458, height: 318 }
    });

    const buffer = await workbook.xlsx.writeBuffer();
    
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'report.xlsx';
    anchor.click();
    logAction('Загрузка в XLSX')
}

const filtering = reactive<{period: ('quarter' | 'month' | 'week' | 'day'), man_dep: string}>({
    period:'quarter',
    man_dep:''
})

const transaction = ref([
    new Transactions(1, 'Транзакция 1', 12345, '10.05.2025', 'Завершена'),
    new Transactions(2, 'Транзакция 2', 45678, '15.12.2025', 'Отклонена'),
    new Transactions(3, 'Транзакция 3', 43126, '29.01.2026', 'В процессе'),
])

export default function useData(){
    return{totalCompanyMetrics,diagram, diagram_spends, diagram_earnings, offers,filterby, toPDF, toXLSX, chartinstance, formatNumbers, filtering, transaction}
}