function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// damit parallax-effect auch auf smartphones richtig dargestellt wird:
const parallax = document.getElementById("parallax-1");
window.addEventListener('scroll', function () {
    // let offset = this.window.pageYOffset;
    // elements.forEach((element) => {
    // let offset = (element.offsetTop - (window.pageYOffset)) * 0.8
    // element.style.backgroundPositionY = `${offset}px`;
    // });
});


//  Kontaktformular: Senden-Button erst nach 10 Sekunden erlauben
setTimeout (function(){
  document.getElementById('absenden').disabled = null;
},10000);

var countdownNum = 10;
incTimer();

function incTimer(){
setTimeout (function(){
  if(countdownNum != 0){
    countdownNum--;
    document.getElementById('absenden').innerHTML = countdownNum ;
    incTimer();
  } else {
      document.getElementById('absenden').innerHTML = 'Absenden';
  }
},1000);
}



//Kontaktformular: Datenverarbeitung bzw. übermittlung an Server

    // absenden.addEventListener("click", function(event) {  
    //   event.preventDefault();

    //   let Name = document.getElementById("name");
    //   console.log(Name.value);

    //   let Jobtitel = document.getElementById("jobtitle");
    //   console.log(Jobtitel.value);

    //   let email = document.getElementById("email");
    //   console.log(email.value);

    //   let Telefonnummer = document.getElementById("phonenumber");
    //   console.log(Telefonnummer.value);

    //   let Nachricht = document.getElementById("message");
    //   console.log(Nachricht.value);
    //         //  console.log(event);

    //   let data = {
    //     Name: Name.value,
    //     email: email.value,
    //     Telefonnummer: Telefonnummer.value,
    //     Nachricht: Nachricht.value
    //   };

    //   let url = "http://localhost:3000/";

    //   let request = new Request(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    //   });

    //   fetch(request)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Antwort vom Server:", data);
    //       //myForm.reset();
    //     })
    //     .catch((error) => {
    //       console.warn(error);
    //     });
    //   });


// Datenübermittlung via email mit hilfe eines email-services

    // const requestUrl  = 'https://formsubmit.co/seppl1.1990@freenet.de'
    //  function sendData() {
    //    let formBody = [
    //      'anrede' + encodeURIComponent(document.getElementById('anrede').value),
    //      'vorname' + encodeURIComponent(document.getElementById('vorname').value),
    //      'nachname' + encodeURIComponent(document.getElementById('nachname').value),
    //      'jobtitel' + encodeURIComponent(document.getElementById('jobtitel').value),
    //      'email' + encodeURIComponent(document.getElementById('email').value),
    //      'message' + encodeURIComponent(document.getElementById('message').value),
    //    ].join('&')
    //    let xhr = new XMLHttpRequest()
    //    // statt GET mit POST ersetzen?
    //    xhr.open('POST', requestUrl)
    //    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    //    xhr.onload = function (){
    //      if (xhr.status === 200){
    //        // zur "Danke"-Seite
    //        window.location = 'danke-für-deine-nachricht.html'
    //        return
    //      }
    //      alert('An error occurred')
    //    }
    //    xhr.send(formBody)
    //  }


