<!DOCTYPE html> 
<!--
    index.php
    CS179 - Team Bongo

    This is the main page of our interface.

  -->

<html> 
  <head> 
    <title>Skeleton</title> 
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
    <script src="scripts/arbor-v0.92/lib/arbor.js"></script>
    <script src="scripts/skeleton.js"></script>
    <script src="scripts/graph.js"></script>
  </head> 

  <body> 
    <!-- MAIN PAGE ------------------------------------------------------------>
    <? include("main.html"); ?>

    <!-- CAREER PAGE ---------------------------------------------------------->
    <? include("career.html"); ?>

    <!-- COMPANY PAGE --------------------------------------------------------->
    <? include("company.html"); ?>

  </body>
</html>
