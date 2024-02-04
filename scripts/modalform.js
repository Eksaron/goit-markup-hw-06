'use strict';
{
    // let herobutton = document.querySelector("#hero-button");
    // console.log(herobutton);
    //document.querySelector()
    //let divCollection = document.querySelectorAll('div');

    let modalWindow_Btn_Open = document.getElementById('hero-button');
    console.log(modalWindow_Btn_Open);
    modalWindow_Btn_Open.addEventListener('click', function () {
        // ModalWindow_Open();
        ModalWindow_Toggle();
    });

    let modalWindow_Btn_Close = document.getElementById('modal-window-close');
    modalWindow_Btn_Close.addEventListener('click', function () {
        // ModalWindow_Close();
        ModalWindow_Toggle();
    });
    function ModalWindow_Toggle() {
        let modalForm = document.querySelector('#modal-form');
        modalForm.classList.toggle('active');
    }

    // function ModalWindow_Open() {
    //     let modalForm = document.querySelector('#modal-form');
    //     modalForm.classList.remove('is-hidden');
    //     modalForm.classList.add('is-open');
    //}
    // }
    // function ModalWindow_Close() {
    //     let modalForm = document.querySelector('#modal-form');
    //     modalForm.classList.remove('is-open');
    //     modalForm.classList.add('is-hidden');
    // }



    // let modalWindow_Send_Btn = document.getElementById('modal-form-send-button');
    // modalWindow_Send_Btn.addEventListener('click', function () {
    // ModalWindow_Send();
    // });
    // function ModalWindow_Send() {
    //     console.log('Send.click()');
    //     // console.log(event);
    //     // console.log(event.Target);
    // }
}