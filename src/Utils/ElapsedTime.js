import * as Time from '../Constants/TimeConstants';

/**
 * Input: A DateTime value in the following format: 
 * Output: Elapsed time since the given DateTime: 
 * Either Number of years, months, days, hours, minutes or seconds
 */
function getElapsedTime(creationDate) {
    let date = new Date(creationDate)
    let now = new Date()
    //timeDiff is converted to seconds from milliseconds
    let timeDiff = parseInt((now-date)/1000)

    let elapsedTime;
    if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_A_YEAR)) > 0)
        return elapsedTime + Time.YEAR_REPRESENTATION

    if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_A_MONTH)) > 0) 
        return elapsedTime + Time.MONTH_REPRESENTATION

    if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_A_DAY)) > 0) 
        return elapsedTime + Time.DAY_REPRESENTATION

    if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_AN_HOUR)) > 0) 
        return elapsedTime + Time.HOURS_REPRESENTATION

    if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_A_MINUTE)) > 0) 
        return elapsedTime + Time.MINUTES_REPRESENTATION

    return elapsedTime + Time.SECONDS_REPRESENTATION
}


/**
     * Instead of updating elapsed time every minute for all posts, we update it based
     * on the elapsed time since the creation of the post that is shown on it. 
     * Thus, elapsed time will be updated as follows:
     * if the elapsed time in less than an hour, it will be updated every minute,
     * if it's greater or equal to an hour but is less than 24 hours, it will be updated every hour
     * if it's greater or equal to 24 hours but is less than 30 days, it will be updated every day
     * if it's greater or equal to 30 days  but is less than 365 days, it will be updated every month
     * otherwise, it will be updated every year.
     * 
     * input: elapsed time since the creation of the post 
     * output: the time interval that will get passed to setInterval in milliseconds.
     */
export function computeTimeInterval(elapsedTime) {
    let interval;
    let suffix = elapsedTime[elapsedTime.length - 1]
    switch (suffix) {
        case Time.YEAR_REPRESENTATION:
            interval = Time.MILLISECONDS_IN_A_YEAR
            break
        case Time.DAY_REPRESENTATION:
            interval = Time.MILLISECONDS_IN_A_DAY
            break
        case Time.HOURS_REPRESENTATION:
            interval = Time.MILLISECONDS_IN_AN_HOUR
            break
        case Time.MINUTES_REPRESENTATION:
            interval = Time.MILLISECONDS_IN_A_MINUTE
            break
        case Time.SECONDS_REPRESENTATION:
            interval = Time.MILLISECONDS_IN_A_MINUTE
            break
        default:
            interval = Time.MILLISECONDS_IN_A_MONTH
            break
    }
    return interval
}

export default getElapsedTime
