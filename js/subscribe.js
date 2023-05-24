$(document).ready(function() {
    $("#subscribe-button").click(function() {
      var email = $("#email-input").val();
      var isEmailValid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (isEmailValid.test(email) === false)
      {
        alert("Введите корректный email");
      }
      else
      {
        alert("Спасибо за подписку!!!");
      }
    })
});