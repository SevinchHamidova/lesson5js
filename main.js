var elForm = document.querySelector(".js-find-number");
var elInput = elForm.querySelector(".js-find-number");
var elResult = document.querySelector(".js-result");
var elAttamptCount = document.querySelector(".js-attempt-count");
var attempt = 6;
elAttamptCount.textContent = `Urinishlar soni ${attempt} ta`;
var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
elForm.addEventListener("submit", function(evt){

  evt.preventDefault();

  var inputValue = Number(elInput.value);

  attempt--;

  elAttamptCount.textContent = `Urinishlar soni ${attempt} ta`;
  if(inputValue > randomNumber) {
     elResult.textContent = "Siz kiritgan raqamingiz ehtiyor raqamdan katta !";
  }else if(inputValue < randomNumber) {
    elResult.textContent = "Siz kiritgan raqamingiz ehtiyor raqamdan kichik !";
  } else {
    elResult.textContent = "Topdingiz !!!";
  }

  if(attempt == 0){
    elAttamptCount.textContent = `Urinishlar soni tugadi !`;

    elInput.setAttribute("disabled", true);
    alert("Urinishlar soni tugadi!");

  }
})