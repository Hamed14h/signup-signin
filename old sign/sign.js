document.addEventListener("DOMContentLoaded", () => {
  const loginform = document.querySelector("#login");
  const CreatAccount = document.querySelector("#CreatAccount");

  document.querySelector("#linkLogin").addEventListener("click", () => {
    loginform.classList.remove("form-hidden");
    CreatAccount.classList.add("form-hidden");
  });
  document.querySelector("#linkCreatAccount").addEventListener("click", (e) => {
    e.preventDefault();
    loginform.classList.add("form-hidden");
    CreatAccount.classList.remove("form-hidden");
  });
});
