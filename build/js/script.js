const navMain=document.querySelector(".main-header__wrapper"),navToggle=document.querySelector(".main-header__toggle");navToggle.addEventListener("click",(function(){navMain.classList.contains("main-header--closed")?(navMain.classList.remove("main-header--closed"),navMain.classList.add("main-header--opened")):(navMain.classList.add("main-header--closed"),navMain.classList.remove("main-header--opened"))}));