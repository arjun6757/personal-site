document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementsByClassName("sidebar")[0];
    const closeSidebar = document.getElementById("close-btn");
    const open = document.getElementById("view-btn");
    const signupButton = document.getElementById("signup-btn");
    const signupFormContainer = document.getElementsByClassName("signup-container")[0];
    const closeformButton = document.getElementById("close-btn-form");
    const closeLoginFormButton = document.getElementById("close-lgin-form");
    const switchToLoginForm = document.getElementById("switch-login");
    const formsignin = document.getElementsByClassName("formsignin")[0];
    const formsignup = document.getElementsByClassName("formsignup")[0];
    const switchToSignUpForm = document.getElementById("switch-signup");

    open.addEventListener('click', () => {
        sidebar.classList.add("active");
        closeSidebar.classList.add("visible");
    })

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove("active");
        closeSidebar.classList.remove("visible");
    });

    
    signupButton.onclick = function () {
        signupFormContainer.style.transform = "translateY(0)";
        sidebar.classList.remove("active");
        closeSidebar.classList.remove("visible");
    }

    closeformButton.onclick = function () {
        signupFormContainer.style.transform = "translateY(-100%)";     
    }

    closeLoginFormButton.onclick = function() {
        signupFormContainer.style.transform = "translateY(-100%)";
    }

    switchToLoginForm.onclick = function() {
        formsignup.style.display = "none";
        formsignin.style.display = "flex";     
    }

    switchToSignUpForm.onclick = function() {
        formsignin.style.display = "none";     
        formsignup.style.display = "flex";
    }
});