const numbers = [1, 2, 3, 4, 5];
const numbersCookie = numbers;

let txt = "";
numbers.forEach(myFunction);
document.getElementById("list").innerHTML = txt;


function myFunction(value, index, array) {
  txt += "<label for='check" + value + "'>" + value + " </label>" + "<input type='checkbox' id='check" + value + "'><br>"; 
}

numbersCookie.forEach(myFunction2);


function myFunction2(value, index, array) {
var checkBox = document.querySelector("input[id=check"+value+"]");
checkBox.addEventListener('change', function() {
  if (checkBox.checked == true) {
    console.log("Checkbox is checked.." + value);
  } else {
    console.log("Checkbox " + value + " is not checked..");
  }
});
}






// let username = 'Max Brown';
// // Set a Cookie
// function setCookie(cName, cValue, expDays) {
//         let date = new Date();
//         const expires = "expires=" + "Fri, 31 Dec 9999 23:59:59 GMT";
//         document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
// }
// // Apply setCookie
// function createCookie() {
//     setCookie('question', username, 30);
// }