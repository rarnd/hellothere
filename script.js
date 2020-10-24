var myName = window.prompt("Hey sister! Siapanih, sebutin dong nama kamu :)");
var days = window.prompt("Apa kabar?");
var box = window.prompt("Mau ngasih liat kalian sesuatu nichhh wkwkwk. Klik aja tombol ok nya");

let myHeading = document.querySelector('h1');
//function setUserName() {
    // let myName = name;
    //if (!myName || myName === null) {
    //    setUserName();
    //} else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Oyyyyyyy ' + myName + ' whatsup';
    //}
//}

// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Window seat is cool, ' + storedName;
// }
