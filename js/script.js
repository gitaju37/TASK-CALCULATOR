const curDisplay= document.querySelector(".display2")
const prevDisplay = document.querySelector( ".display1" )
const acBtn = document.querySelector( ".btn-ac" )
const delBtn = document.querySelector( ".btn-del" )
const divBtn = document.querySelector( ".btn-div" )
const addBtn = document.querySelector( ".btn-add" )
const subBtn = document.querySelector( ".btn-sub" )
const mulBtn = document.querySelector( ".btn-mul" )
const totBtn = document.querySelector( ".btn-tot" )
const Numbers = document.querySelectorAll( ".number" )
const Result = document.getElementById("#result")

let result = '';
let operation = '';
let previesOperand = '';

function appendToDisplay( value ) {
  document.getElementById( 'result' ).value += value;
}
function clearDisplay() {
  document.getElementById( 'result' ).value = '';
}

function deleteLastChar() {
  let display = document.getElementById( 'result' );
  var displayValue = display.value.toString()

  if ( displayValue.length > 1 ) {
    var splitDisplayValue = displayValue.split( "" )
    splitDisplayValue.pop()

    var joinDisplayValue = splitDisplayValue.join( "" )
    display.value = joinDisplayValue
  } else {
    display.value = '';
  }
}
function calculateResult() {
  try {
    const display = document.getElementById( 'result' );
    display.value = eval( display.value );
  } catch ( e ) {
    display.value = 'Error';
  }
}
