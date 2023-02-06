const select = document.querySelector("#color-select");
const collection1 = document.getElementsByClassName("mainheader");
const collection2 = document.getElementsByClassName("li");
const collection3 = document.getElementsByClassName("menu");
const navbar = document.querySelector(".navbar");
const frame = document.querySelector(".frame");
const mainmenuframe = document.querySelector(".mainmenuframe");
const body = document.body;
const setBackgroundColor = (color) => {
    body.style.backgroundColor = color;
    mainmenuframe.style.backgroundColor = color;
    for (let i = 0; i < collection1.length; i++) {
        collection1[i].style.backgroundColor = color;}
    for (let i = 0; i < collection2.length; i++) {
        collection2[i].style.backgroundColor = color;}
    for (let i = 0; i < collection3.length; i++) {
        collection3[i].style.backgroundColor = color;}};
const setNavbarFrameBackgroundColor = (color) => {
    navbar.style.backgroundColor = color;
    frame.style.backgroundColor = color;};
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    select.value = "#505050";
    setNavbarFrameBackgroundColor("#CCD1D1");}
else {select.value = "#00aeef";
    setNavbarFrameBackgroundColor("white");}
setBackgroundColor(select.value);
select.addEventListener("change", function() {
    const selectedColor = select.options[select.selectedIndex].value;
    setBackgroundColor(selectedColor);
    setNavbarFrameBackgroundColor(selectedColor === "#505050" ? "#CCD1D1" : "white");});


//  #37393E discord açık
//  #2F3136 discord orta
//  #002225 discord koyu

//const select = document.querySelector("#color-select");
// const collection1 = document.getElementsByClassName("mainheader");
// const collection2 = document.getElementsByClassName("li");
// const collection3 = document.getElementsByClassName("menu");
//
// // Sistemin temasını oku ve ona göre değiştir
// if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     select.value = "#505050";
//     document.querySelector(".navbar").style.backgroundColor = "#CCD1D1";
//     document.querySelector(".frame").style.backgroundColor = "#CCD1D1"}
// else {
//     select.value = "#00aeef";
//     document.querySelector(".navbar").style.backgroundColor = "white";
//     document.querySelector(".frame").style.backgroundColor = "white";}
//
// document.body.style.backgroundColor = select.value;
// document.querySelector(".mainmenuframe").style.backgroundColor = select.value;
//
//
// for (let i = 0; i < collection1.length; i++) {
//     collection1[i].style.backgroundColor = select.value;
// }
//
// for (let i = 0; i < collection2.length; i++) {
//     collection2[i].style.backgroundColor = select.value;
// }
//
// for (let i = 0; i < collection3.length; i++) {
//     collection3[i].style.backgroundColor = select.value;
// }
//
//
//
// // Checkbox a göre değiştir
// select.addEventListener("change", function() {
//     document.body.style.backgroundColor = select.value;
//     document.querySelector(".mainmenuframe").style.backgroundColor = select.value;
//     const colorSelect = document.getElementById("color-select");
//     const selectedColor = colorSelect.options[colorSelect.selectedIndex].value;
//     if (selectedColor === "#505050") {
//         document.querySelector(".navbar").style.backgroundColor = "#CCD1D1";
//         document.querySelector(".frame").style.backgroundColor = "#CCD1D1";}
//     else{
//         document.querySelector(".navbar").style.backgroundColor = "white";
//         document.querySelector(".frame").style.backgroundColor = "white";}
//
//
//     for (let i = 0; i < collection1.length; i++) {
//         collection1[i].style.backgroundColor = select.value;
//     }
//
//     for (let i = 0; i < collection2.length; i++) {
//         collection2[i].style.backgroundColor = select.value;
//     }
//
//     for (let i = 0; i < collection3.length; i++) {
//         collection3[i].style.backgroundColor = select.value;
//     }
// });