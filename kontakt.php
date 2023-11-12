<?php 
if(isset($_POST['submit'])){
    $to = "seppl1.1990@freenet.de"; // this is your Email address
    $from = $_POST['e-mail']; // this is the sender's Email address
    $name = $_POST['Name'];
    $message = $name . " " . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>

<!DOCTYPE html>
<html lang="de">
    
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="Sebastian Lieg">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="desctiption" content="Kontakt aufnehmen mit schönheit.pur">
        <title>Kontakt | schoenheit.pur | Farb- und Stilberatung</title>
        <!-- icon soll noch geändert werden -->
        <link rel="icon" href ="img/blume.png" type="image/x-icon">
        <link rel="stylesheet" href="css/fonts.css">
        <link rel="stylesheet" href="css/style.css">
        <script defer src="js/main.js"></script>

        
    </head>
    <body>
        <header>
            <div id="parallax-1">  
                <div class="parallax-container-1">
                   <div class="parallax">
                      <img src="img/background_3375x3375.png" alt="Background" title="background" width="3375" height="3375">
                   </div>
                </div>
            </div>

            <div class="navbar_ext">
                <nav>
                    <ul>
                        <!-- Link muss noch geändert werden zu "/schoenheit-pur/"?-->
                        <li><a href="/website-schoenheit.pur/">zurück</a></li>
                    </ul>
                </nav>
            </div>
            <div class="body2">
                <div class="container">
                    <h1>Kontakt aufnehmen</h1>
                </div>
            </div>
            <!-- <div class="image1">
                <figure>
                    <div class="image2">
                        <img src="img/phone.jpg" alt="Telefon" title="Rufen Sie an" width="1280" height="853"> -->
                        <!-- <figcaption>
                            Kontaktaufnahme
                        </figcaption> -->
                    <!-- </div>    
                </figure>
            </div> -->
        </header>
        <main>

            <div class="body2">
        
                <div class="container">
                    <h2>Kontaktformular</h2>
                    
                    <form method="POST" action="webform.php" id="ismForm"> <!--method="POST"  action="https://httpbin.org/get" action="https://formsubmit.co/seppl1.1990@freenet.de"-->
                        <fieldset>
                            <legend>persönliche Angaben</legend>
                            <p>
                                <div class="row">
                                    <div class="col-25">
                                        <label for="name">Name:</label>
                                    </div>
                                    <div class="col-75">
                                        <input type="text" name="Name" id="name" placeholder="dein Name" autocomplete="off">
                                    </div>
                                </div>
                            </p>
                            <div style="display: none; visibility: hidden;">
                                <div class="row">
                                    <div class="col-25">
                                        <label for="jobtitle"></label>
                                    </div>
                                    <div class="col-75">
                                        <input type="text" name="Jobtitel" id="jobtitle" placeholder="dein Jobtitel" autocomplete="off" >
                                    </div>
                                </div>
                            </div>
                            <p>
                                <div class="row">
                                    <div class="col-25">
                                        <label for="email">E-mail: *</label>
                                    </div>
                                    <div class="col-75">
                                    <input type="email" name="e-mail" id="email" placeholder="deine E-mail Adresse" autocomplete="off" required>
                                    </div>
                                </div>
                            </p>
                            <p>
                                <div class="row">
                                    <div class="col-25">
                                        <label for="phonenumber">Telefonnummer:</label>
                                    </div>
                                    <div class="col-75">
                                    <input type="text" name="Telefonnummer" id="phonenumber" placeholder="deine Telefonummer" autocomplete="off">
                                    </div>
                                </div>
                            </p>

                            <p>
                                <div class="row">
                                    <div class="col-25">
                                        <label for="message">deine Nachricht:</label>
                                    </div>
                                    <div class="col-75">
                                        <textarea type="text" name="Nachricht" id="message" cols="30" rows="10"
                                        placeholder="schreibe hier deine Nachricht"></textarea>
                                    </div>
                                </div>
                            </p>
                            <p><strong>Hinweis:</strong> Felder mit * müssen ausgefüllt werden.</p>
                            <p>Deine Angaben werden nur zur Beantwortung deiner Anfrage verwendet.</p>
                            <p>Weitere Informationen findest du in unserer <a href="datenschutz.html">Datenschutzerklärung.</p>

                            <p>
                                <!-- <input type="hidden" name="_next" value="https:http://127.0.0.1:5500/danke-für-deine-nachricht.html"> -->
                            </p>
                        <!-- <button class="absenden" type="submit">Absenden</button> 
                                               -->
                        <button id="absenden" class="absenden" disabled></button> <!--onclick="sendData()"-->
                        
                        <!-- <p id="timeLeft">Time Left: 10 seconds</p> -->
                        <!-- <input class="absenden" type="submit" id="absenden" disabled="disabled" /> -->
                        <!-- <button class="absenden" type="reset">Reset</button> -->
                    </fieldset>

                    </form>
                </div>
                <br>
                <br>
                <div class="container">
                    <h2>meine Anschrift</h2>
                    <address>
                       Bahnhofstraße 999<br>
                        Wangen im Allgäu
                        <br><br>
                        Phone: <a href="tel:+5555555555">555-555-5555</a>
                    </address>
                </div>
                <br>
                <hr>
            </div>
        </main>
        <footer>
            <div class="body2">
               <p>Copyright &copy; schönheit.pur
               &nbsp;I&nbsp;
               <a href="impressum.html">Impressum</a>
               &nbsp;I&nbsp;
               <a href="datenschutz.html">Datenschutz</a></p>
            </div>
         </footer>

       </body>

</html>