const select = document.querySelector("#color-select");
    const collection = document.getElementsByClassName("mainheader");
    const collection2 = document.getElementsByClassName("li");
    console.log(collection);

    // Sistemin temasını oku ve ona göre değiştir
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    select.value = "#505050";
} else {
    select.value = "#00aeef";
}

    document.body.style.backgroundColor = select.value;
    document.querySelector(".mainmenuframe").style.backgroundColor = select.value;

    collection[0].style.backgroundColor = select.value;
    collection[1].style.backgroundColor = select.value;
    collection[2].style.backgroundColor = select.value;
    collection[3].style.backgroundColor = select.value;
    collection[4].style.backgroundColor = select.value;

    collection2[0].style.backgroundColor = select.value;
    collection2[1].style.backgroundColor = select.value;
    collection2[2].style.backgroundColor = select.value;
    collection2[3].style.backgroundColor = select.value;
    collection2[4].style.backgroundColor = select.value;



    // Checkbox a göre değiştir
    select.addEventListener("change", function() {
    document.body.style.backgroundColor = select.value;
    document.querySelector(".mainmenuframe").style.backgroundColor = select.value;
        //document.querySelector(".navbar").style.backgroundColor = select.value;
        //document.querySelector(".frame").style.backgroundColor = select.value;

    collection[0].style.backgroundColor = select.value;
    collection[1].style.backgroundColor = select.value;
    collection[2].style.backgroundColor = select.value;
    collection[3].style.backgroundColor = select.value;
    collection[4].style.backgroundColor = select.value;

    collection2[0].style.backgroundColor = select.value;
    collection2[1].style.backgroundColor = select.value;
    collection2[2].style.backgroundColor = select.value;
    collection2[3].style.backgroundColor = select.value;
    collection2[4].style.backgroundColor = select.value;
});
