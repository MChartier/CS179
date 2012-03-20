<!DOCTYPE html>
<!--
company.php
CS179 - Team Bongo

This page displays information about a particular company.
The PHP script fills in the company's name in the header and places
the company's unique ID number in the page div as a meta value.
This is helpful because it allows us to directly handle a POST request.

After the page has been generated and handed to the client, 
Javascript is used to asynchronously load the content for each tab.
This is desirable because it allows us to reload content dynamically
if the user makes any changes or load content just-in-time when he or she
switches tabs.

-->

<?
  require_once("includes/common.php");
?>

<!DOCTYPE html>
<html>
  <head>
    <title><? print $_POST["companyname"]; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <!-- CSS STYLESHEETS -->
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.0.1/jquery.mobile-1.0.1.min.css" />
    <link rel="stylesheet" type="text/css" href="http://dev.jtsage.com/cdn/simpledialog/latest/jquery.mobile.simpledialog.min.css" />
    <link rel="stylesheet" href="stylesheets/menu.css" />
    <link rel="stylesheet" href="stylesheets/skeleton.css" />

    <!-- JAVASCRIPT -->
    <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script src="http://code.jquery.com/mobile/1.0.1/jquery.mobile-1.0.1.min.js"></script>
    <script type="text/javascript" src="http://dev.jtsage.com/cdn/simpledialog/latest/jquery.mobile.simpledialog2.min.js"></script>
    <script type="text/javascript" src="scripts/skeleton.js"></script>
  </head>

  <body>
    <div data-role="page" id="company" data-companyid="
    <?
      print $_POST["companyid"];
    ?>
    ">
      <div data-role="header" data-id="header" class="menu" id="header">
        <div data-role="navbar" class="menu" id="companymenubar">
	  <ul id="companymenu">
	    <li><a href="#" id="infobutton" class="mainlevel1"
		   data-icon="custom" data-theme="d">Info</a></li>
	    <li><a href="#" id="reviewsbutton" class="mainlevel1"
		   data-icon="custom" data-theme="d">Reviews</a></li>
	    <li><a href="#" id="contactsbutton" class="mainlevel1"
		   data-icon="custom" data-theme="d">Contacts</a></li>
	    <li><a href="#" id="interviewsbutton" class="mainlevel1"
		   data-icon="custom" data-theme="d">Interviews</a></li>
	  </ul>
	</div> <!-- /navbar -->
      </div> <!-- /header -->

      <!-- MAIN PAGE CONTENT -->
      <div data-role="content" id="companycontent">
	<div class="companypagecontent" id="infocontent">
          Company information will go here.
	</div>
	<div class="companypagecontent" id="reviewscontent">
	</div>
	<div class="companypagecontent" id="contactscontent">
	</div>
	<div class="companypagecontent" id="interviewscontent">
	</div>
      </div>

      <!-- MAIN PAGE FOOTER -->
      <div id="companyfooter">
        <div data-role="navbar" class="menu">
	  <div id="footermenu">
	    <div><a href="#" class="contentbutton bottom-left" data-icon="custom" data-theme="c"></a></div>
	    <div><a href="#" class="homebutton bottom-right" data-icon="custom" data-theme="c"></a></div>
	  </div>
	</div>
      </div> <!-- /footer -->
    </div> <!-- /page -->
  </body>
</html>
