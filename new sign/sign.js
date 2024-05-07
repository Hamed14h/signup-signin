document.addEventListener("click", function (event) {
  // Check if the click was within a form element
  if (event.target.closest("form")) {
    // If the click was on a form element or inside a form, do nothing
    return;
  }

  const container = document.querySelector(".panels");
  const leftPanel = document.getElementById("login");
  const rightPanel = document.getElementById("register");

  // Toggle the transformation based on the current state
  if (leftPanel.style.transform === "translateX(100%)") {
    leftPanel.style.transform = "translateX(0)";
    rightPanel.style.transform = "translateX(0)";
  } else {
    leftPanel.style.transform = "translateX(100%)";
    rightPanel.style.transform = "translateX(-100%)";
  }
});
