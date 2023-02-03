    const select = document.querySelector("#color-select");
    const collection1 = document.getElementsByClassName("mainheader");
    const collection2 = document.getElementsByClassName("li");
    const collection3 = document.getElementsByClassName("menu");

    // Sistemin temasını oku ve ona göre değiştir
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    select.value = "#505050";}
    else {
    select.value = "#00aeef";}

    document.body.style.backgroundColor = select.value;
    document.querySelector(".mainmenuframe").style.backgroundColor = select.value;

        for (let i = 0; i < collection1.length; i++) {
        collection1[i].style.backgroundColor = select.value;
        }

        for (let i = 0; i < collection2.length; i++) {
            collection2[i].style.backgroundColor = select.value;
        }

        for (let i = 0; i < collection3.length; i++) {
            collection3[i].style.backgroundColor = select.value;
        }



    // Checkbox a göre değiştir
    select.addEventListener("change", function() {
    document.body.style.backgroundColor = select.value;
    document.querySelector(".mainmenuframe").style.backgroundColor = select.value;
        //document.querySelector(".navbar").style.backgroundColor = select.value;
        //document.querySelector(".frame").style.backgroundColor = select.value;

        for (let i = 0; i < collection1.length; i++) {
            collection1[i].style.backgroundColor = select.value;
        }

        for (let i = 0; i < collection2.length; i++) {
            collection2[i].style.backgroundColor = select.value;
        }

        for (let i = 0; i < collection3.length; i++) {
            collection3[i].style.backgroundColor = select.value;
        }
});
