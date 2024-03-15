let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function calculateRoot() {
  try {
    const number = eval(displayValue);
    if (number < 0) {
      document.getElementById('display').value = 'Error';
    } else {
      const result = Math.sqrt(number);
      document.getElementById('display').value = result;
      displayValue = '';
    }
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function calculateSquare() {
  try {
    const number = eval(displayValue);
    const result = Math.pow(number, 2);
    document.getElementById('display').value = result;
    displayValue = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function calculatePercentage() {
  try {
    const number = eval(displayValue);
    const result = number / 100;
    document.getElementById('display').value = result;
    displayValue = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
