export const formatDate = (date: Date) => {
    let day = date.getDay().toString()
    let month = date.getMonth().toString()
    let year = date.getFullYear()
    if (date.getDay() < 10) day = '0' + date.getDay()
    if (date.getMonth() < 10) month = '0' + date.getMonth()
    return `${day}.${month}.${year}`
}

export function timestampToDate(ts: any) {
    let d = new Date();
    d.setTime(ts);
    return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
}

