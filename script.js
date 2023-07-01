const errorMessage = document.getElementById("demo1");
const inputField = document.getElementById("inputfield");
const link = document.getElementById("link");
const myForm = document.getElementById("form");

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
  const trimValue = inputValue.trim();
  const inputValueReturn = trimValue.replace(/([A-Z])/g, ' $1').trim();
  return inputValueReturn;
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
    if (phoneValue.length < 8) {
      errorMessage2.textContent = "Not enough Numbers"
    }
    errorMessage2.textContent = "";
    const phoneValueReturn= phoneValue.trim();
    return phoneValueReturn;
  }
  const inputPhone2 = document.getElementById("number2")
function validWork() {
    let phoneValue2 = inputPhone2.value;
    if (/\s+/g.test(phoneValue2)) {
      phoneValue2 = phoneValue2.replace(/\s+/g, "");
    }
  
    if (/[^0-9]/.test(phoneValue2)) {
      errorMessage2.textContent = "Please input a value with numbers.";
      return;
    }
    if (phoneValue2.length < 8) {
      errorMessage2.textContent = "Not enough Numbers"
    }
    errorMessage2.textContent = "";
    const phoneValue2Return= phoneValue2.trim();
    return phoneValue2Return;
  }
  const Address = document.getElementById("Address");
  const lastAddress = document.getElementById('last-address');

  function validAddress() {
    let addressValue = Address.value;
    if (/[a-z](?=\d)/ig.test(addressValue)) {
      lastAddress.textContent = 'Address not recognnized!!!';
      return;
    }
    lastAddress.textContent = '';
    const addressValueReturn = addressValue.trim()
    return addressValueReturn;
  }

  function emptyblank(event) {
    event.preventDefault();
    const inputValueReturn = validContact();
    const phoneValueReturn = validPhone();
    const phoneValue2Return = validWork();
    const addressValueReturn = validAddress();
    if (inputValueReturn === "" || phoneValueReturn === "" || phoneValue2Return === "") {
      errorMessage.textContent = "Name!!!";
      errorMessage2.textContent = "Please input a Number";
    } else {
      localStorage.setItem('name', inputValueReturn);
      localStorage.setItem('phone', phoneValueReturn);
      localStorage.setItem('work', phoneValue2Return);
      localStorage.setItem('address', addressValueReturn);
      window.location.href = "saved.html";
    }
  }
  link.addEventListener('click', emptyblank);
  
/////////////////// for saved.html