document.querySelector(".hamburger").addEventListener("click", () => {
  let nav = document.querySelector("nav");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});
