function openMore() {
  $("#moremenu").slideToggle("fast");
}

function hideMore() {
  $("#moremenu").slideUp("fast");
}

function openHelp() {
  $(".pagecontent").hide();
  $("#helpcontent").show();
}

function openMain() {
  $(".pagecontent").hide();
  $("#maincontent").show();
}

$(document).ready(function(event) {
  // hide content we don't need to see yet
  $("#moremenu").hide();
  $("#helpcontent").hide();

  // set up event handlers
  $(".mainlevel1").not("#morebutton").click(hideMore);
  $("#morebutton").click(openMore);
  $("#helpbutton").click(openHelp);
  $("#homebutton").click(openMain);

  // position navigational elements
  var header = $("#header");
  var footer = $("#footer");
  var contentpages = $(".pagecontent");

  header.css("z-index", "1");
  contentpages.css("position", "absolute");
  contentpages.css("top", "64px");
  footer.css("z-index", "1");
  footer.css("position", "absolute");
  footer.css("bottom", "0");

});