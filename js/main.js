//contact form event:
var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      status.classList.add("success");
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
      status.classList.add("error");
    });
}
form.addEventListener("submit", handleSubmit);

var prevScroll = window.pageYOffset;
window.onscroll = function () {
  //navbar event:
  var currentScrollPos = window.pageYOffset;
  if (prevScroll > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScroll = currentScrollPos;

  //top toggle event:
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("goTop").style.opacity = "1";
  } else {
    document.getElementById("goTop").style.opacity = "0";
  }
};
