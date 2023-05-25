const errorMessage = document.getElementById("demo1")
const inputField = document.getElementById("inputfield")
function validContact() {
    let inputValue = inputField.value;
    // const str1 = inputValue.split(",");
      //for (let i = 0; i < inputValue.length; i++) {
        if (!isNaN(inputValue)) {
            errorMessage.textContent = "Please input Desired Value";
        } else if((/[a-z](?=[^a-z])/).test(inputValue)) {
            errorMessage.textContent = "Please input Desired Value";
        } else {
            errorMessage.textContent ="";
        }
    //}
}