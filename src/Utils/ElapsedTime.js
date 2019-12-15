import * as Time from '../Constants/TimeConstants';

/**
 * Input: A DateTime value in the following format: 
 * Output: Elapsed time since the given DateTime: 
 * Either Number of years, months, days, hours, minutes or seconds
 */
function getElapsedTime(creationDate, newpost=false) {
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

export default getElapsedTime