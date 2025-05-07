const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close-btn");
const consentForm = document.querySelector("#consent-form");
const modalText = document.querySelector(".modal-text");
const declineBtn = document.querySelector("#decline");
const modalChoiceBtns = document.querySelector(".modal-choice-btns");
setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

declineBtn.addEventListener("mouseenter", () => {
  modalChoiceBtns.classList.toggle("modal-choice-btns-reverse");
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 폼에서 submit 을 하면 새로고침이 되는걸 방지
  const consentFormData = new FormData(consentForm);
  const name = consentFormData.get("fullName");
  //  const email= consentFormData.get("email");
  modalText.innerHTML = `<div class="modal-inner-loading">
                    <img src="images/loading.svg" class="loading">
                    <p id="upload-text">Uploading your data to the dark web...</p>
                    </div>`;
  setTimeout(() => {
    const uploadText = document.querySelector("#upload-text");
    uploadText.innerText = "Making the sale...";
  }, 1500);
  setTimeout(() => {
    const modalInner = document.querySelector(".modal-inner");
    modalInner.innerHTML = `<h2>고맙습니다.${name}님</h2>
                          <p>개인정보를 모두 팔아넘겼습니다.</p>
                          <div class="idiot-gif"><img src="images/pirate.gif"></div>`;
    modalClose.disabled = false;
  }, 3000);
});
