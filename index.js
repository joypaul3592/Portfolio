let menu = document.querySelector('#mernu_bars');
let header = document.querySelector('.header_section');
let about = document.querySelector('.about_section');
let home = document.querySelector('.home_section');
let service = document.querySelector('.service_section');
let expr = document.querySelector('.experience_section');
let port = document.querySelector('.portfolio_section');
let cont = document.querySelector('.contact_section');




menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}


about.onclick = () =>{
    header.classList.remove('active');
    menu.classList.remove('fa-times');
}



home.onclick = () =>{
    header.classList.remove('active');
    menu.classList.remove('fa-times');
}




service.onclick = () =>{
    header.classList.remove('active');
    menu.classList.remove('fa-times');
}



expr.onclick = () =>{
    header.classList.remove('active');
    menu.classList.remove('fa-times');
}



port.onclick = () =>{
    header.classList.remove('active');
    menu.classList.remove('fa-times');
}


cont.onclick = () =>{
    header.classList.remove('active');
    menu.classList.remove('fa-times');
}