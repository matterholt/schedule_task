// Button to get data and start the script
const buttonGetData = document.getElementById('displayValue')
buttonGetData.addEventListener('click', getData )

//current Date -- NEED to be refreshed daily
const todayIs = new Date()
document.getElementById('dateCurrent').innerHTML = todayIs.toDateString();

//covert date to array of numbers
function dateConvert (date){
    const dates = date[1]
    const splitDate = dates.map(x => x.split('-'));
    const dateFormat = splitDate.map(x => new Date(x));
    return dateFormat;
}
// calculate the dat left
function dayLeft (date) {
    const msPerDay = 24*60*60*1000;
    const dayCal = (date[1].getTime() - todayIs.getTime()) / msPerDay;
    const dayLeft = Math.round(dayCal);
    if (dayLeft == 1) {
        const dayLeftDisplay = `${dayLeft} DAY LEFT !!!`
        document.getElementById("daysLeftOut").innerHTML = dayLeftDisplay
        document.getElementById('daysLeftOut').style.color = "LightCoral";
    } else if (dayLeft > 1){
        const dayLeftDisplay = `${dayLeft} days left `
        document.getElementById("daysLeftOut").innerHTML = dayLeftDisplay
        document.getElementById('daysLeftOut').style.color = "DarkBlue";
    }else{
        const dayLeftDisplay = `LAST day get it together ! `
        document.getElementById("daysLeftOut").innerHTML = dayLeftDisplay
        document.getElementById('daysLeftOut').style.color = "red";
    }
}

//WORKING and not used
function addToList (currentTaskData) {
    const y_task = currcurrentTaskData[0]
    const twoDate = currcurrentTaskData[1]
    const startDate = twoDate[0]
    const completedDate = twoDate[1]
    // add data to a list in the HTML
    const ul = document.querySelector("ul")
    const objective = (`The ${y_task} will start ${startDate} and hope to projected to completed ${completedDate}`)
    const li =  document.createElement("li");
    ul.appendChild(li).append(objective)
}

// Grab Data from HTML 
function getData() {
    // array of dates
    const keyDate = []
    const currentTaskData = []
    // DOM interactions
    const y_task = document.getElementById('currentTask').value
    const startDate = document.getElementById('dateStart').value
    const completedDate = document.getElementById('dateComplete').value

    // add Dates to an array
    keyDate.push(startDate,completedDate)
    // add task and date array to an array
    currentTaskData.push(y_task, keyDate )

    // Calculate the date left in Task
    const datesConvert = dateConvert(currentTaskData);
    const dayLeftForTask = dayLeft(datesConvert)
}