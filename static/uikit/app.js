// Invoke Functions Call on Document Loaded
// document.addEventListener("DOMContentLoaded", function () {
//   hljs.highlightAll();
// });

let alertWrapper = document.querySelector(".alert");
let alertClose = document.querySelector(".alert__close");
console.log("alertWarapper", alertWrapper, "alertClose", alertClose);

if (alertClose) {
  console.log("Alert Wrapper Clicked");
  alertClose.addEventListener(
    "click",
    () => (alertWrapper.style.display = "none")
  );
}
