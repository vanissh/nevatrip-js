const {getRelevantData, createSelect, changeContent, showSecondSelector, setValue, getResult} = require('./functions')
const {userData, data} = require('./data')

document.addEventListener('change', e => {
    if(e.target.closest('#route')){
        showSecondSelector(e.target.value)
        userData.route = e.target.value
    }

    if(e.target.closest('.ABA-first-time')){
        changeContent(e.target.value, '.ABA-second-time', data[0].time)
        setValue(e.target.value, 0)
    }

    if(e.target.closest('.ABA-second-time')){
        setValue(0, e.target.value)
    }

    if(e.target.closest('.AB-time')){
        setValue(e.target.value, e.target.value)
    }

    if(e.target.closest('.BA-time')){
        setValue(e.target.value, e.target.value)
    }
})


document.addEventListener('input', e => {
    if(e.target.closest('.num')){
        //запрет на ввод символов, кроме цифр
        e.target.value = e.target.value.replace(/[^0-9]/g, "")
        userData.tickets = e.target.value
    }
})

document.addEventListener('click', e => {
    if(e.target.closest('.button')){
        getResult()
    }
})

//для каждого селектора устанавливается значение по умолчанию
//у пользователя изначально установлены первые значения селекторов
document.addEventListener('DOMContentLoaded', e => {
    const mainSelectorValue = document.getElementById('route').value
    userData.route = mainSelectorValue
    showSecondSelector(mainSelectorValue)
})