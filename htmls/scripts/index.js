var countDispHead = 1;

$(".collaps-custome").click(function () {
  $(".slidebar-custome").css("display", "block");
});
$(".close-slidernav").click(function () {
  $(".slidebar-custome").css("display", "none");
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

var countclick = 0;

$(".dropdown").click(function () {
  countclick++;

  if (countclick % 2 == 1) {
    $(".svvv").css("rotate", "180deg");

    $(".dropdown").css("border-bottom-right-radius", "0");
    $(".dropdown").css("border-bottom-left-radius", "0");

    $(".dropbtn").css("border-bottom-right-radius", "0");
    $(".dropbtn").css("border-bottom-left-radius", "0");
  } else if (countclick % 2 == 0) {
    $(".svvv").css("rotate", "0deg");

    $(".dropdown").css("border-bottom-right-radius", "25px");
    $(".dropdown").css("border-bottom-left-radius", "25px");

    $(".dropbtn").css("border-bottom-right-radius", "25px");
    $(".dropbtn").css("border-bottom-left-radius", "25px");
  }
});
$(".dropbtn").click(function () {
  if (countclick % 2 == 1) {
    $(".svvv").css("rotate", "180deg");

    $(".dropdown").css("border-bottom-right-radius", "0");
    $(".dropdown").css("border-bottom-left-radius", "0");

    $(".dropbtn").css("border-bottom-right-radius", "0");
    $(".dropbtn").css("border-bottom-left-radius", "0");
  } else if (countclick % 2 == 0) {
    $(".svvv").css("rotate", "0deg");

    $(".dropdown").css("border-bottom-right-radius", "25px");
    $(".dropdown").css("border-bottom-left-radius", "25px");
    $(".dropbtn").css("border-bottom-right-radius", "25px");
    $(".dropbtn").css("border-bottom-left-radius", "25px");
  }
});


function myFunctioncheck() {
  document.getElementById("background-page-content-id1").classList.add("dark");
  if (document.getElementById("darklight").checked == true) {
    localStorage.setItem("dark-mode", "true");
    document.getElementById("navbar-custom-id").style.background = "#282d67";
    document.getElementById("itemNav1").style.color = "white";
    document.getElementById("itemNav2").style.color = "white";
    document.getElementById("itemNav3").style.color = "white";
    document.getElementById("itemNav4").style.color = "white";
    document.getElementById("fa-home-id").style.color = "white";
    document.getElementById("fa-bars-id").style.color = "white";
    document.getElementById("text-first1").style.color = "white";
    document.getElementById("text-first2").style.color = "white";
    document.getElementById("text-first3").style.color = "white";
    document.getElementById("show-website-id").style.color = "white";
  } else if (document.getElementById("darklight").checked == false) {
    localStorage.setItem("dark-mode", "false");
    document
      .getElementById("background-page-content-id1")
      .classList.remove("dark");
    document.getElementById("navbar-custom-id").style.background = "#8cd7f8";
    document.getElementById("itemNav1").style.color = "#282d67";
    document.getElementById("itemNav2").style.color = "#282d67";
    document.getElementById("itemNav3").style.color = "#282d67";
    document.getElementById("itemNav4").style.color = "#282d67";
    document.getElementById("fa-home-id").style.color = "#282d67";
    document.getElementById("fa-bars-id").style.color = "#282d67";
    document.getElementById("show-website-id").style.color = "#282d67";

    document.getElementById("text-first1").style.color = "#282d67";
    document.getElementById("text-first2").style.color = "#282d67";
    document.getElementById("text-first3").style.color = "#282d67";
    document.getElementById("show-website-id").style.backgroundImage =
      "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 99.99%, rgba(255, 255, 255, 0.5) 100%, rgba(255, 255, 255, 0.25) 100%)";
  }
}
