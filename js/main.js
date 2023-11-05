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
    
    // let offset = this.window.pageYOffset;
    // elements.forEach((element) => {
    // let offset = (element.offsetTop - (window.pageYOffset)) * 0.8
    // element.style.backgroundPositionY = `${offset}px`;
    // });


  
});


const requestUrl  = 'https://formsubmit.co/seppl1.1990@freenet.de'
 function sendData() {

   let formBody = [
     'anrede' + encodeURIComponent(document.getElementById('anrede').value),
     'vorname' + encodeURIComponent(document.getElementById('vorname').value),
     'nachname' + encodeURIComponent(document.getElementById('nachname').value),
     'jobtitel' + encodeURIComponent(document.getElementById('jobtitel').value),
     'email' + encodeURIComponent(document.getElementById('email').value),
     'message' + encodeURIComponent(document.getElementById('message').value),
   ].join('&')
   let xhr = new XMLHttpRequest()
   // statt GET mit POST ersetzen?
   xhr.open('POST', requestUrl)
   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
   xhr.onload = function (){
     if (xhr.status === 200){
       // zur "Danke"-Seite
       window.location = 'danke-für-deine-nachricht.html'
       return
     }
     alert('An error occurred')
   }
   xhr.send(formBody)
 }


//  Senden-Button erst nach 10 Sekunden erlauben
// window.onload=function() {
//    setTimeout(function(){
//      document.getElementById('absenden').disabled = null;
//    },10000);
//  }

//  var countdownNum = 10;
//  window.onload=function() {
//    incTimer();
//    function incTimer(){
//      setTimeout (function(){
//        if(countdownNum != 0){
//          countdownNum--;
//          document.getElementById('timeLeft').innerHTML = 'Time left: ' + countdownNum + ' seconds';
//          incTimer();
//        } else {
//          document.getElementById('absenden').disabled = null;
//          document.getElementById('timeLeft').innerHTML = 'Ready!';
//        }
//      },1000);
//    }
//  }


// window.onload=function() {
//   var button = document.getElementById("absenden");
//   button.addEventListener("click",submit);
//   button.addEventListener("click",disableS);

//   function disableS(){
//     button.disabled = true;
//     setTimeout(function(){ button.disabled = false; }, 3000);
//   }

//   function submit(){
//   }
// }
