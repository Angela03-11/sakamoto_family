function showSection(id,button){

let sections=document.querySelectorAll(".section");

sections.forEach(section=>{

section.classList.add("hidden");

});

document.getElementById(id).classList.remove("hidden");

let buttons=document.querySelectorAll(".nav");

buttons.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

if(id==="memories"){
    animateChapters();
}

}

function openChapter(id){

    // Itago lahat ng sections
    let sections = document.querySelectorAll(".section");

    sections.forEach(section=>{
        section.classList.add("hidden");
    });

    // Ipakita lang ang napiling chapter
    document.getElementById(id).classList.remove("hidden");

}

function openLightbox(image){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightboxImage").src=image.src;

document.getElementById("lightboxCaption").innerHTML=image.alt;

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

closeLightbox();

}

});


function enterSite() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("mainSite").style.display = "block";
}





function checkPassword(){

    const pass = document.getElementById("password").value;

    if(pass === "05172026"){

        document.getElementById("messageModal").classList.add("hidden");

        showSection(
            "messages",
            document.querySelectorAll(".nav")[3]
        );

        document.getElementById("messagesContent").classList.remove("hidden");

    }else{

        document.getElementById("errorPopup").classList.remove("hidden");

    }

}


function animateChapters(){

    const chapters=document.querySelectorAll("#memories .chapter");

    chapters.forEach((chapter,index)=>{

        chapter.classList.remove("show");

        setTimeout(()=>{

            chapter.classList.add("show");

        },index*90);

    });

}

window.addEventListener("load", () => {

    animateChapters();

    setInterval(createPetal,500);

});


function backToArchive(){

    document.getElementById("lockScreen").style.display="none";

    showSection(
        "memories",
        document.querySelector(".nav")
    );

}


/* ========================= */
/* FLOATING PETALS */
/* ========================= */

const petals = ["🌸","🌺","💮"];

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = petals[Math.floor(Math.random()*petals.length)];

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration = (8 + Math.random()*5) + "s";

    petal.style.fontSize = (18 + Math.random()*15) + "px";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    },13000);

}



function openEnvelope(){

    document
    .getElementById("envelopeView")
    .classList.add("hidden");

    document
    .getElementById("letterView")
    .classList.remove("hidden");

}


function showPassword(){

    document.getElementById("letterView").classList.add("hidden");

    document.getElementById("passwordView").classList.remove("hidden");

}


function openMessages(){

    document
    .getElementById("messageModal")
    .classList.remove("hidden");

}


function togglePassword(){

    const input = document.getElementById("password");

    if(input.type === "password"){
        input.type = "text";
    }else{
        input.type = "password";
    }

}



function closeMessages(){

    // Isara ang modal
    document.getElementById("messageModal")
        .classList.add("hidden");

    // I-reset ang flow para sa susunod na bukas
    document.getElementById("envelopeView")
        .classList.remove("hidden");

    document.getElementById("letterView")
        .classList.add("hidden");

    document.getElementById("passwordView")
        .classList.add("hidden");

    document.getElementById("password").value = "";

    // Bumalik sa Memories
    showSection(
        "memories",
        document.querySelectorAll(".nav")[0]
    );

}



function closeError(){

    document.getElementById("errorPopup").classList.add("hidden");

    document.getElementById("password").value="";

    document.getElementById("password").focus();

}