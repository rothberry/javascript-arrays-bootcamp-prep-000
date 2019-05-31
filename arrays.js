var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array = [1]
  element = 'foo'
  return [element, ...array]
}

function addElementToEndOfArray(array, element) {
  array = [1]
  element = 'foo'
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [1]
  element = 'foo'
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array,element) {
  array = [1]
  element = 'foo'
  array.push(element)
  return array
}

function removeElementFromBeginningOfArray(array, element) {
  array = [1]
  element = 'foo'
  array.shift(element)
}

function removeElementFromEndOfArray(array, element) {
  array = [1]
  element = 'foo'
  array.pop(element)
}
