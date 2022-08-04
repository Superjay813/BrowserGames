const subTitlesBefore = ["arrays", "functions", "Algebra", "DOM", "Cookies"];
const subTitles = subTitlesBefore.map(topic => topic.toLowerCase());

let list = "";
subTitles.forEach(createList);
document.getElementById("list").innerHTML = list;

function createList(value, index, array) {
    list += "<div><input type='checkbox' id='check" + value + "'><a href='" + value + ".html'>" + "<label id='subTitle'>" + value + " </label><a/>" + "</div>"; 
}



subTitles.forEach(createCookie);
function createCookie(value, index, array) {
var checkBox = document.getElementById("check" + value);
checkBox.addEventListener('change', function() {
  if (checkBox.checked == true) {
    // console.log("Checkbox is checked.." + value);
    document.cookie = "check" + value + "=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;";
    console.log(value);
  } else {
    // Delete cookie
    document.cookie = "check" + value + "=true; expires=Fri, 31 Dec 2013 23:59:59 GMT; path=/;";
  }
});
}



subTitles.forEach(readCookie);
function readCookie(value, index, array) {
    var checkBox = document.getElementById("check" + value);
    let stringCookie = document.cookie;
    let boolValue = stringCookie.includes(value);
    if (boolValue == true) {
        checkBox.checked = true;
    } else {
        checkBox.checked = false;
    }
}