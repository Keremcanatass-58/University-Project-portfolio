document.addEventListener("DOMContentLoaded", function () {
    const skillContainers = document.querySelectorAll(".skill-container");
  
    skillContainers.forEach((container) => {
      container.addEventListener("click", function () {
        const skill = this.getAttribute("data-skill");
        showPopup(skill);
      });
    });
  });
  
  function showPopup(skill) {
    const popup = document.getElementById(`popup-${skill}`);
    if (popup) {
      popup.style.display = "flex";
    }
  }
  
  function closePopup(skill) {
    const popup = document.getElementById(`popup-${skill}`);
    if (popup) {
      popup.style.display = "none";
    }
  }
  
  const closeBtns = document.querySelectorAll(".close-btn");
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      const skill = this.closest(".popup").getAttribute("id").replace("popup-", "");
      closePopup(skill);
      event.stopPropagation();  
    });
  });
  
  window.onclick = function (event) {
    const popups = document.querySelectorAll(".popup");
    popups.forEach((popup) => {
     
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  };
  