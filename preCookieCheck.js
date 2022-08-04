const numbers = [1, 2, 3, 4, 5];
const numbersCookie = numbers;

let txt = "";
numbers.forEach(createList);
document.getElementById("list").innerHTML = txt;


function createList(value, index, array) {
  txt += "<label for='check" + value + "'>" + value + " </label>" + "<input type='checkbox' id='check" + value + "'><br>"; 
}

numbersCookie.forEach(createCookie);


function createCookie(value, index, array) {
var checkBox = document.querySelector("input[id=check"+value+"]");
checkBox.addEventListener('change', function() {
  if (checkBox.checked == true) {
    // console.log("Checkbox is checked.." + value);
    document.cookie = "check" + value + "=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;";
  } else {
    document.cookie = "check" + value + "=true; expires=Fri, 31 Dec 2013 23:59:59 GMT; path=/;";
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