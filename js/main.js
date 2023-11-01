function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }




const parallax = document.getElementById("parallax-1");

window.addEventListener('scroll', function () {
    let offset = this.window.pageYOffset;

    elements.forEach((element) => {
    let offset = (element.offsetTop - (window.pageYOffset)) * 0.8
    element.style.backgroundPositionY = `${offset}px`;
    });
});






    // elements.forEach((element) => {
    //   let offset = (element.offsetTop - (window.pageYOffset)) * 0.8
    //   element.style.backgroundPositionY = `${offset}px`;
    // });