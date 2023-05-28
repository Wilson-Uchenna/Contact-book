const errorMessage = document.getElementById("demo1")
const inputField = document.getElementById("inputfield")
function validContact() {
    let inputValue = inputField.value;
           // const str1 = inputValue.split(",");
        // for (let i = 0; i < str1.length; i++) {
        if ((/^[A-Z]/).test(inputValue) && (/inputValue(?=[a-z])/)) {
            errorMessage.textContent = "";
        } //else if() {
            //errorMessage.textContent = "Please input Desired Value";
    /*}*/ else  if (/inputValue(?=(\d))/) {
            errorMessage.textContent = "Please input Desired Value";
         }
     return errorMessage
}