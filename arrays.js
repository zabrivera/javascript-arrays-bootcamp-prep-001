var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(arr, el){
  let newArray = [el, ...arr]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(arr, el){
  arr.unshift(el)
  return arr
}

function addElementToEndOfArray(arr, el){
  let newArray = [...arr, el]
  return newArray
}

function destructivelyAddElementToEndOfArray(arr, el){
  arr.push(el)
  return arr
}

function accessElementInArray(arr, i){
  return arr[i]
}

function removeElementFromBeginningOfArray(arr){
  let newArray = arr.slice(1)
  return newArray
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromEndOfArray(arr){
  newArray = arr.slice(0, arr.length - 1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}
