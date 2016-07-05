<?php
if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])):
        //your site secret key
        $secret = '6LfsUCQTAAAAAJm0JeG6LG6Uh7xf6neoxcqCiyn4';
        //get verify response data
        $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
        $responseData = json_decode($verifyResponse);
        if($responseData->success):

            $empfaenger = "mish.ushakov@gmail.com";
            $betreff = "New Message from mishushakov.com!";
            $from = "From: ".$_POST['name']."<".$_POST['email'].">\n";
            $from .= "Reply-To:".$_POST['email']."\n";
            $from .= "Content-Type: text/html\n";
            $text = $_POST['message'];

            mail($empfaenger, $betreff, $text, $from);
            $result = 'E-Mail sent, thank you!';
        else:
            $result = 'Robot verification failed, please try again.';
        endif;
    else:
        $result = 'Please click on the reCAPTCHA box.';
    endif;

?>


<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Developer MishUshakov - mishushakov.com</title>
	<meta name="description" content="MishUshakov - Android, Web Developer of today">
    <meta name="keywords" content="MishUshakov, mish, github, developer, android, web, marketing, material design, polymer" />
    <!-- Mobile Stuff -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="msapplication-tap-highlight" content="no">

        <!-- Chrome on Android -->
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="application-name" content="Developer MishUshakov">
        <link rel="icon" sizes="192x192" href="img/photo.jpg">

        <!-- Safari on iOS -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="Developer MishUshakov">
        <link rel="apple-touch-icon" href="img/photo.jpg">

        <!-- Windows 8 -->
        <meta name="msapplication-TileImage" content="img/photo.jpg">
        <meta name="msapplication-TileColor" content="#000312">

        <script src='https://www.google.com/recaptcha/api.js'></script>
        <meta name="theme-color" content="#000312">
    
        <script src="https://use.fontawesome.com/6ac98b555f.js"></script>

        <link rel="stylesheet" href="css/minified.css">
        <link rel="shortcut icon" href="favicon.ico">
	
  <!-- Mobile-friendly viewport -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

  <!-- Optional theme -->
    <link rel="stylesheet" href="https://bootswatch.com/paper/bootstrap.min.css">

    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        
   <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script> 
	
    <script src="js/parallax.js"></script>
    
</head>
<body style="background-color:#e3e3e3;">

<div id="mu" class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-menubuilder"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span>
                
                <span class="icon-bar"></span>
            </button>
        
        <div class="navbar-header"><a class="navbar-brand" href="#about">MU</a>
        
        </div>
        <div class="collapse navbar-collapse navbar-menubuilder">
            <ul class="nav navbar-nav navbar-left">
                <li><a href="#about">About</a>
                </li>
                <li><a href="#skills">Skills</a>
                </li>
                <li><a href="#projects">Projects</a>
                </li>
                <li><a href="#contact">Contact</a>
                </li>
                <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Connect<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="https://new.vk.com/mishushakov"><i class="fa fa-vk" aria-hidden="true" style="margin-right:5px;"></i> VK</a></li>
            <li><a href="https://www.youtube.com/channel/UCVJLpLXf2GzpzMI7yzgi9aQ"><i class="fa fa-youtube" aria-hidden="true" style="margin-right:5px;"></i> YouTube</a></li>
            <li><a href="https://github.com/mishushakov"><i class="fa fa-github" aria-hidden="true" style="margin-right:5px;"></i> GitHub</a></li>
            <li><a href="https://plus.google.com/u/0/+MishUshakovITMU/"><i class="fa fa-google" aria-hidden="true" style="margin-right:5px;"></i>Google+</a></li>
            <li><a href="http://codepen.io/mishushakov/"><i class="fa fa-codepen" aria-hidden="true" style="margin-right:5px;"></i> Codepen</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#contact"><i class="fa fa-envelope-o " aria-hidden="true" style="margin-right:5px;"></i> Write E-Mail</a></li>
          </ul>
        </li>
            </ul>
        </div>
    </div>
</div>
	                <a name="about"></a>

    <div class="parallax-window" data-parallax="scroll" data-image-src="img/bg.jpg"></div>
    
    <div class="container">
    
    <a href="#" class="thumbnail">
      <img src="img/photo.jpg" alt="IT's me!" class="photo">
    </a>
 
    <div class="panel panel-default" id="panel">
    
  <div class="panel-heading">
    <h3 class="panel-title">Mikhail (MishUshakov) Ushakov</h3>
  </div>
  <div class="panel-body">
    Mikhail "MishUshakov" Ushakov born 07.04.2001 in Moscow, now he lives in Germany for 3 years,he is WEB and Android developer since 2011,so he started his little hobby with simple programms written in BASIC and PHP,right now i "speak": JAVA,XML,HTML,CSS,Python
      
       <a name="skills"></a>
      
  </div>
</div>
    
    <div class="panel panel-default" id="panel" style="margin-top:1%">
  
  <div class="panel-heading">
    <h3 class="panel-title">Skills</h3>
  </div>
  <div class="panel-body">
<h4>Web (HTML,CSS)</h4>
      <div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">
    80%
  </div>
</div>
      
      <h4>Scripting (JS)</h4>
      <div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%;">
    30%
  </div>
</div>
      
      <h4>Programming (Python, C#)</h4>
      <div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
    90%
  </div>
</div>
      
      <a name="projects"></a>
      
      <h4>Android (JAVA)</h4>
      <div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;">
    40%
  </div>
</div>
      
       
        
      
  </div>
</div>
    
    <div class="panel panel-default" id="panel" style="margin-top:1%">
        
  <div class="panel-heading">
    <h3 class="panel-title">Projects</h3>
  </div>
  <div class="panel-body">
     <div class="list-group">
  
  <a href="http://mishushakov.com/mubot/" class="list-group-item">MUbot Android Edition</a>
  <a href="http://mishushakov.com/mubot/web/" class="list-group-item">MUbot Web Edition</a>
  <a class="list-group-item disabled">MUlti Blog <span class="label label-success">In Developing Process</span></a>
         <a class="list-group-item disabled">
    ITMUsearch <span class="label label-danger">Deprecated</span>
  </a>
    <a class="list-group-item disabled">
    ITMUCMS <span class="label label-danger">Deprecated</span>
  </a>
  
</div>
      
      
  </div>
</div>
           <div class="panel panel-default" id="panel" style="margin-top:1%">
               
               <a name="contact"></a>
               
  <div class="panel-heading">
    <h3 class="panel-title">Contact Form</h3>
  </div>
  <div class="panel-body">

    
      <form class="form-horizontal" method="post" action="index.php">
 
	<div class="form-group">
      <label for="textArea" class="col-lg-2 control-label">Name</label>
      <div class="col-lg-10">
        <input type="text" id="textArea" class="form-control" name="name" maxlength="140" placeholder="First and & Last Name" >

      </div>
    </div>
	
    <div class="form-group">
      <label for="inputEmail" class="col-lg-2 control-label">Email</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" name="email" id="inputEmail" placeholder="Email">

      </div>
    </div>
      
    <div class="form-group">
      <label for="textArea" class="col-lg-2 control-label">Message</label>
      <div class="col-lg-10">
        <textarea class="form-control" rows="3" id="textArea" name="message"></textarea>
        
        <span class="help-block">Don't write shit here , i will find you and...</span>
      </div>
    </div>
      
	 <div class="g-recaptcha" data-sitekey="6LfsUCQTAAAAABQHKP-OG2TC-enB4y97DGbs4QEq"></div>
          <br>
	
          <div class="form-group">
	  <div class="col-sm-10 col-sm-offset-2">
<a style="color:red;"><?php echo $result; ?></a>
	  </div>
	</div>
          
      <div class="form-group">
      <div class="col-lg-10 col-lg-offset-2">
        <button type="reset" class="btn btn-default">Cancel</button>
        <button type="submit" class="btn btn-primary">Send</button>
      </div>
    </div>
      
     </form>
      
  </div>
</div>
    </div>
    
    <br>
    <footer class="footer" style="background-color:#2a2730;">
      <div class="container">
        <p class="text-muted">New website, proudly powered by <a href="http://mishushakov.com">MishUshakov</a></p>
      </div>
    </footer>
    
<script>
$(window).scroll(function() {
        if($(window).scrollTop() > 200) {
            $("#mu.navbar-default").css("background", "linear-gradient(to bottom, rgba(0,0,0,0) 0%, transparent 100%)");
           $("#mu.navbar-default").css("background-color", "#000312");
        } else {
           $("#mu.navbar-default").css("background-color", "transparent");
            $("#mu.navbar-default").css("background", " linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%)");
        }
    });

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
});
    </script>
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-78786318-1', 'auto');
  ga('send', 'pageview');

</script>
    
    
</body>
</html>

