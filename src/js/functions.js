const {modifyTime} = require('./utils')
const { AB, ABA, BA, selectorStyle, resultClassName } = require('./consts')
const { data, userData } = require('./data')

//получаем время для селекторов без пересечения и в нужном формате
export const getRelevantData = (value, startValue = 0) => {
    let route = data.filter(item => item.id === value)[0].route
    let values = Object.values(route)

    values = values.map(item => modifyTime(item))
    values = values.filter(item => item[0] >= startValue)
    
    return values
}


export const createSelect = (value, className) => {
    const values = getRelevantData(value)

    const select = document.createElement('select')
    select.className = className + selectorStyle
    select.id = 'time'
    select.innerHTML = values.map((item, i) => 
        `<option ${i === 0 ? 'selected': ''} value=${+item[0]}>${item[1]}</option>`
    )
    return select
}

//удаление пересечений из второго селектора
export const changeContent = (value, selector, time) => {
    const select = document.querySelector(selector)
    const offset = time * 60000

    //получаем минимальное значение, с которого может начинаться второй селектор
    const startValue = +value + +offset

    const values = getRelevantData(BA, startValue)

    select.innerHTML = values.map((item, i) => 
        `<option ${i === 0 ? 'selected': ''} value=${+item[0]}>${item[1]}</option>`
    )
    setValue(0, select.value)
    
}

//создание селекторов для времени по выбранному пути
export const showSecondSelector = (value) => {
    const timeBlock = document.querySelector('.calc-time-block')
    timeBlock.innerHTML = ''

    let select1, select2

    if (value === AB || value === BA){
        select1 = createSelect(value, value + '-time')
        setValue(select1.value, select1.value)
        timeBlock.append(select1)
    }

    if (value === ABA) {

        select1 = createSelect(AB, 'ABA-first-time')
        setValue(select1.value)
        select2 = createSelect(BA, 'ABA-second-time')

        timeBlock.append(select1)
        timeBlock.append(select2)
        changeContent(select1.value, '.ABA-second-time', data[0].time)
    }
}

//сохранение значений пользователя
export const setValue = (start, finish) => {
    const offset = data[0].time * 60000
    userData.startTimeStamp = !!start ? +start : userData.startTimeStamp
    userData.finishTimeStamp = !!finish ? +finish + offset : userData.finishTimeStamp
}

export const getResult = () => {
    const result = document.querySelector('.calc-result')
    result.innerHTML = ''

    const timestamp = +userData.finishTimeStamp - +userData.startTimeStamp
    const price = data.filter(item => item.id === userData.route)[0].cost
    const total = userData.tickets * price
    const name = data.filter(item => item.id === userData.route)[0].name
    const start = modifyTime(+userData.startTimeStamp, true)
    const finish = modifyTime(+userData.finishTimeStamp, true)
    const time = `${new Date(timestamp).getUTCHours()} ч ${new Date(timestamp).getMinutes()} минут`

    const info = document.createElement('div')
    info.classList.add(resultClassName)
    info.innerHTML = `
        <p class='mb-1 font-light text-gray-500'>
            Вы выбрали ${userData.tickets} билетов по маршруту ${name} стоимостью ${total}р.
        </p>
        <p class='mb-1 font-light text-gray-500'>
            Это путешествие займет у вас ${time}.
        </p>
        <p class='mb-1 font-light text-gray-500'>
            Теплоход отправляется в ${start}, а прибудет в ${finish}
        </p>`

    result.append(info)
}