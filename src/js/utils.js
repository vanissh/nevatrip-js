export const modifyTime = (time, ms) => {

    const timeToGMT = `${time + 3}`

    const toLocale = (time) => 
        `${new Date(time).getHours()}:${new Date(time).getMinutes().toString().padStart(2, '0')}`
    
    return ms ? 
        toLocale(time) :
        [`${new Date(timeToGMT).getTime()}`, toLocale(timeToGMT)]
        
}