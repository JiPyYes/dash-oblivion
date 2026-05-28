import { reactive, ref, computed } from "vue"
import ExcelJS from 'exceljs'
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import html2pdf from 'html2pdf.js';

const chartinstance = ref(null)

class Metrics {
    constructor(revenue, earnings, clients, conversion) {
        this.revenue = revenue;
        this.earnings = earnings;
        this.clients = clients;
        this.conversion = conversion;
    }
}

class Offers {
    constructor(id, date, ofn, man, status, total){
       this.offerid = id;
       this.date = date;
       this.offername = ofn;
       this.manager = man;
       this.status = status
       this.total = total 
    }
}

const departments = ref([
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

const managers = ref([
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

const totalCompanyMetrics = ref()

function filterby(period, man_dep){
    const entity = [...departments.value, ...managers.value]
    if(man_dep != ''){
        const meter = entity.find((ent)=>ent.manager_name == man_dep || ent.dep_name == man_dep)
        totalCompanyMetrics.value = meter.main_metrics[period]
    } else {
        totalCompanyMetrics.value = entity.reduce((acc, entity) => {
        const metrics = entity.main_metrics[period]
        acc.revenue += metrics.revenue
        acc.earnings += metrics.earnings
        acc.clients += metrics.clients
        acc.conversion += metrics.conversion
        return acc
    }, { revenue: 0, earnings: 0, clients: 0, conversion: 0 })
    }
}

const formatNumbers = (number) => {
        if (number === undefined || number === null) return '0';
        return number.toLocaleString('ru-RU')
    }

const color_bank = reactive({
    color1: 'blue',
    color2: 'red',
    color3: 'green'
})

const diagramm_distribution = reactive({
        wholesale:20,
        retail:60,
        service:20
    })

const diagramm_style = reactive({
        width:'250px',
        height:'250px',
        borderRadius:'50%',
        background: `conic-gradient(${color_bank.color1} ${diagramm_distribution.wholesale}%, ${color_bank.color2} ${diagramm_distribution.wholesale}% ${diagramm_distribution.wholesale + diagramm_distribution.retail}%, ${color_bank.color3} ${diagramm_distribution.wholesale + diagramm_distribution.retail}% ${diagramm_distribution.wholesale + diagramm_distribution.retail + diagramm_distribution.service}%)`
})

const offers = ref([
    new Offers(1,'01.05.2018','Сделка 1','Иван','Завершена', 1000000),
    new Offers(2, '21.12.2019', 'Сделка 2', 'Антон', 'Отклонена', 0),
    new Offers(3, '06.05.2026', 'Сделка 3', 'Василий', 'В процессе', 0),
])

filterby('quarter', '')

const logAction = async(action) =>{
    await new Promise((resolve) => {
            setTimeout(() => {
                    console.log(`Действие ${action} сохранено`)
                    resolve()
            }, 1000);
    })
}


// const toPDF = () => {
//     const element = document.getElementById('report-container');

//     const options = {
//         margin: 5,
//         filename: 'report.pdf',
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { 
//             scale: 2, 
//             useCORS: true,
//             windowWidth: element.scrollWidth,
//             width:950
//         },
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     };

//     html2pdf().set(options).from(element).save();
//     logAction('Загрузка в PDF')
// };

const toPDF = async () => {
    const wrapper = document.createElement('div');
    
    const el1 = document.getElementById('report-container-1').cloneNode(true);
    const el2 = document.getElementById('report-container-2').cloneNode(true);
    
    wrapper.appendChild(el1);
    wrapper.appendChild(el2);
    
    await html2pdf().from(wrapper).save();
    
    await logAction('Экспорт двух элементов в PDF');
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

    const chart = chartinstance.value.chart
    const { imgURI } = await chart.dataURI()

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

const filtering = reactive({
    period:'quarter',
    man_dep:''
})

export default function useData(){
    return{totalCompanyMetrics,diagramm_distribution, diagramm_style, color_bank, offers,filterby, toPDF, toXLSX, chartinstance, formatNumbers, filtering}
}