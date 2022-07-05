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
    
    // submitButton.addEventListener('click', formSend);

    // async function formSend(e){
    //     e.preventDevault();
    // }


flsFunctions.testWebP();