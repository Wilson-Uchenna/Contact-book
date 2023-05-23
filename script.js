
function saveContact(name) {
let Regex = /[^\W|\S|0-9]/;
let myName = name.split("");
let emptyArray = []
for (let i = 0; i <= myName; i++) {
    if (myName[i] === Regex) {
        emptyArray.push(i)
    }
}
return emptyArray.join("")
}
saveContact(document.getElementById("fname"));