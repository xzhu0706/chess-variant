import * as Time from '../Constants/TimeConstants';

/**
 * Input: A DateTime value in the following format: 
 * Output: Elapsed time since the given DateTime: Either Number of days, hours, minutes or seconds
 */
function getElapsedTime(creationDate) {
    /**
     * 1min = 60s = 
     * 1hour = 60 mins = 3600s
     * 1 day = 24h = 86400s
     */
    let date = new Date(creationDate)
    let now = new Date()
    
    //timeDiff is converted to seconds from milliseconds
    let timeDiff = parseInt((now-date)/1000)
    let elapsedTime;
    if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_A_DAY)) > 0) return elapsedTime + 'd'
    if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_AN_HOUR)) > 0) return elapsedTime + 'h'
    if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_A_MINUTE)) > 0) return elapsedTime + 'm'
    return timeDiff + 's'
}

export default getElapsedTime