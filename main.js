
const taskListGlobal = []

// Button to get data and start the script
const buttonGetData = document.getElementById('displayValue')
buttonGetData.addEventListener('click', getData)

//  current Date -- NEED to be refreshed daily
const todayIs = new Date()
document.getElementById('dateCurrent').innerHTML = todayIs.toDateString()

//  covert date to array of numbers
function dateConvert (date) {
  const splitDate = date.split('-')
  const dateFormat = new Date(splitDate)
  return dateFormat
}
// calculate the dat left
function dayLeft (dateEnd) {
  const msPerDay = 24 * 60 * 60 * 1000
  const dayCal = ((dateEnd.getTime() - todayIs.getTime()) / msPerDay)
  const dayLeft = Math.round(dayCal)
  if (dayLeft === 1) {
    const dayLeftDisplay = `${dayLeft} DAY LEFT !!!`
    document.getElementById('daysLeftOut').innerHTML = dayLeftDisplay
    document.getElementById('daysLeftOut').style.color = 'LightCoral'
  } else if (dayLeft > 1) {
    const dayLeftDisplay = `${dayLeft} days left `
    document.getElementById('daysLeftOut').innerHTML = dayLeftDisplay
    document.getElementById('daysLeftOut').style.color = 'DarkBlue'
  } else {
    const dayLeftDisplay = `LAST day! get it done ! `
    document.getElementById('daysLeftOut').innerHTML = dayLeftDisplay
    document.getElementById('daysLeftOut').style.color = "'red'"
  }
}

function addToListHTML (dateTask) {
  // add data to a list in the HTML
  const ul = document.querySelector('ol')
  const objective = (`${dateTask.task} will start ${dateTask.startDate} and projected to completed ${dateTask.endDate}`)
  const li = document.createElement('li')
  ul.appendChild(li).append(objective)
}

function TaskObj (task, startDate, endDate) {
  this.task = task
  this.startDate = startDate
  this.endDate = endDate
}

// Grab Data from HTML
function getData () {
  // DOM interactions
  const yTask = document.getElementById('currentTask').value
  const startDate = document.getElementById('dateStart').value
  const completedDate = document.getElementById('dateComplete').value

  const createTask = new TaskObj(yTask, startDate, completedDate)
  console.log(createTask)
  // Should create a class?? study to see the difference

  // push to global array, maybe use it for some data analysis
  taskListGlobal.push(createTask)
  addToListHTML(createTask)

  // convert the end date to a date object
  const dateEndConvert = dateConvert(createTask.endDate)
  dayLeft(dateEndConvert)
  console.log(`This is the end date ${dateEndConvert} `)
}
