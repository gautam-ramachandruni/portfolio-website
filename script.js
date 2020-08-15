let theme = localStorage.getItem("theme");

if (theme !== null) {
  setTheme(theme);
} else {
  setTheme("light");
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Selected", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "themes/blue.css";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "themes/green.css";
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "themes/purple.css";
  }

  localStorage.setItem("theme", mode);
}

$(document).ready(function () {
  $("#submit-btn").click(function (event) {
    var subject = $("#subject").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (
      !(subject.length >= 2 && subject.length <= 75) ||
      !(
        email.length > 5 &&
        typeof email == "string" &&
        email.indexOf("@") > -1 &&
        email.indexOf(".") > -1
      ) ||
      !(message.length <= 280)
    ) {
      event.preventDefault();
      alert(
        "Oops, make sure:\n- Subject is at least 2 characters and not more than 75.\n- Email is from a proper domain.\n- Message length has not exceeded 280 characters."
      );
    }
  });
});

function readAlert() {
  alert("There's more to come. Stay tuned!");
}
