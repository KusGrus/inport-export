import moment from 'moment'

export function calculateSumOfNumbers(numbers, field = null) {
    return field ? numbers.reduce((acc, item) => acc + +item[field], 0) : numbers.reduce((acc, item) => acc + item, 0)
}

export function getFormattedTime(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}
