"use strict"

import * as flsFunctions from "./modules/functions.js";

import IMask from "imask";

var element = document.getElementById('phone');
    var maskOptions = {
    mask: '+{7} (000)00-00-00',
    lazy:false,
    placeholderChar: ' _ ',
    };
    var mask = IMask(element, maskOptions);
    let closeModal = document.querySelector(".modal__close-btn");
    let form = document.getElementById("form");
    let modal = document.querySelector(".modal");
    let modalContainer = document.querySelector(".main__modal-container");
    let formData = new FormData(form);
    let submitButton = document.getElementById("submitBtn");
    let contact = document.querySelector(".contact__link");
    contact.addEventListener("click", function(){
        modalContainer.classList.add("show");
    });
    closeModal.addEventListener("click", function(){
        modalContainer.classList.remove("show");
    })
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        if(mask.unmaskedValue.length < 10){
            alert("Введите корректный номер");
        }
        else if (document.querySelector(".modal__checkbox").checked == false){
            alert("Отметьте что вы согласны с правилами конфиденциальности")
        }
        else{
            modal.classList.add("modal--sended");
            setTimeout(() => {
                document.querySelector(".success-send").classList.add("success-send--sended");
            }, 500);
            setTimeout(() => {
                document.querySelector(".success-send").classList.remove("success-send--sended");
                modal.classList.remove("modal--sended");
                form.reset();
            }, 2000);
            setTimeout(()=>{
                modalContainer.classList.remove("show");
            }, 1500)
        }
    })
    
    window.onresize = replaceElements;
    let isReplaced = false;

    let headerTop = document.querySelector(".header__top");
    let headerBottom = document.querySelector(".header__bottom");
    function replaceElements(){
        const neededWidth = 992;
        if (document.documentElement.scrollWidth <= neededWidth && isReplaced==false){
            headerTop.append(document.querySelector(".side-info"));
            headerTop.append(document.querySelector(".price"));
            headerTop.append(document.querySelector(".social"));
            isReplaced = true;
        }    
        if (document.documentElement.scrollWidth > neededWidth && isReplaced==true){
            headerBottom.prepend(document.querySelector(".price"));
            headerBottom.prepend(document.querySelector(".side-info"));
            document.querySelector(".contact").before(document.querySelector(".social"));
            isReplaced = false;
        }
}

replaceElements();

let burgerBtn = document.querySelector(".header__burger-menu")
burgerBtn.addEventListener("click", function(){
    burgerBtn.classList.toggle("header__burger-menu--active");
    headerTop.classList.toggle("header__top--active");
})

let plusBtn = document.querySelector(".side-box__top-btn");
plusBtn.addEventListener("click", function(){
    document.querySelector(".side-box").classList.toggle("side-box--active");
    plusBtn.classList.toggle("side-box__top-btn--active");
})

flsFunctions.testWebP();