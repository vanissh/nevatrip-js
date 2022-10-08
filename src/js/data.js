const {AB, BA, ABA} = require('./consts')

export const data = [
    {
        id: AB,
        name: 'из A в B',
        route: {
            1: 'August 21, 2021 18:00:00',
            2: 'August 21, 2021 18:30:00',
            3: 'August 21, 2021 18:45:00',
            4: 'August 21, 2021 19:00:00',
            5: 'August 21, 2021 19:15:00',
            6: 'August 21, 2021 21:00:00'
        },
        cost: 700,
        time: 50
    },
    {
        id: BA,
        name: 'из B в A',
        route: {
            1: 'August 21, 2021 18:30:00',
            2: 'August 21, 2021 18:45:00',
            3: 'August 21, 2021 19:00:00',
            4: 'August 21, 2021 19:15:00',
            4: 'August 21, 2021 19:35:00',
            4: 'August 21, 2021 21:50:00',
            6: 'August 21, 2021 21:55:00'
        },
        cost: 700,
        time: 50
    },
    {
        id: ABA,
        name: 'из A в B и обратно',
        cost: 1200,
    },

]

export const userData = {
    route: '',
    tickets: 0,
    startTimeStamp: 0,
    finishTimeStamp: 0
}