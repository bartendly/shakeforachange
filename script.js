// script.js – Shake for a Change

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".join-form");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        const submitButton = form.querySelector("button[type='submit']");
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
  
        setTimeout(() => {
          submitButton.textContent = "Submitted";
        }, 1500);
      });
    }
  });
  