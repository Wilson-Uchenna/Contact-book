const errorMessage = document.getElementById("demo1");
const inputField = document.getElementById("inputfield");

function validContact() {
    let inputValue = inputField.value;
  const regex = /^[A-Z]/;

  if (!regex.test(inputValue)) {
    errorMessage.textContent = "Please input a value starting with an uppercase letter.";
    return;
  }

  if (/\s+/g.test(inputValue)) {
    inputValue = inputValue.replace(/\s+/g, "");
  }

  if (/[^a-zA-Z]/.test(inputValue)) {
    errorMessage.textContent = "Please input a value without numbers.";
    return;
  }

  errorMessage.textContent = "";
  return inputValue.trim();
}

const inputPhone = document.getElementById("number")
const errorMessage2 = document.getElementById("input")
function validPhone() {
    let phoneValue = inputPhone.value;
    if (/\s+/g.test(phoneValue)) {
      phoneValue = phoneValue.replace(/\s+/g, "");
    }
  
    if (/[^0-9]/.test(phoneValue)) {
      errorMessage2.textContent = "Please input a value with numbers.";
      return;
    }
  
    errorMessage2   .textContent = "";
    return phoneValue.trim();
  }


  const demo = document.getElementById("demo")

  function writePhone() {
    const inputValue = validPhone();
    if (inputValue !== undefined) {
        demo.textContent = inputValue;  
    }
  } 
