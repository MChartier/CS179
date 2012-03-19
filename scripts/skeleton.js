function openSearch() {
  openMain();
  $("#searchbar").show();
}

function hideSearch() {
  $("#searchbar").hide();
}

function openMore() {
  openMain();
  $("#moremenu").slideToggle("fast");
}

function hideMore() {
  $("#moremenu").slideUp("fast");
}

function openHelp() {
  hideSearch();
  $(".pagecontent").hide();
  $("#helpcontent").show();
}

function openMain() {
  $.mobile.changePage($("#main"));
  $(".pagecontent").hide();
  $("#searchbar").hide();
  $("#maincontent").show();

  $(".homebutton").removeClass("ui-btn-active");
}

function openInfo() {
  $(".careerpagecontent").hide();
  $("#infocontent").show();
}

function openXP() {
  $(".careerpagecontent").hide();
  $("#XPcontent").show();
}

function openFavorites() {
  $(".careerpagecontent").hide();
  $("#favoritescontent").show();
}

function openHistory() {
  $(".careerpagecontent").hide();
  $("#historycontent").show();
}

$('#main').live('pageinit', function(event) {
  // hide content we don't need to see yet
  $("#moremenu").hide();
  $("#helpcontent").hide();
  hideSearch();

  // set up event handlers
  $(".mainlevel1").not("#morebutton").click(hideMore);
  $("#morebutton").click(openMore);
  $("#helpbutton").click(openHelp);
  $(".homebutton").click(openMain);
  $("#searchbutton").click(openSearch);

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

  // set up handlers for dialog boxes in more menu
  $(document).delegate('#graphbutton', 'click', function() {
    $('<div>').simpledialog2({
      mode: 'blank',
      headerText: 'Some Stuff',
      headerClose: true,
      blankContent : "<p>Options for how to view the graph will go here.</p>"
    })
  });

  $(document).delegate('#recsbutton', 'click', function() {
    $('<div>').simpledialog2({
      mode: 'blank',
      headerText: 'Some Stuff',
      headerClose: true,
      blankContent : "<p>Recommendations will go here.</p>"
    })
  });

  $(document).delegate('#filterbutton', 'click', function() {
    $('<div>').simpledialog2({
      mode: 'blank',
      headerText: 'Some Stuff',
      headerClose: true,
      blankContent : "<p>Options for how to filter the graph will go here.</p>"
    })
  });

});

$('#career').live('pageinit', function(event) {
  openInfo();

  // set up event handlers
  $("#infobutton").click(openInfo);
  $("#xpbutton").click(openXP);
  $("#favoritesbutton").click(openFavorites);
  $("#historybutton").click(openHistory);

  $(".homebutton").click(openMain);

  // position navigational elements
  var header = $("#careerheader");
  var footer = $("#footer");
  var contentpages = $(".careerpagecontent");

  header.css("z-index", "1");
  contentpages.css("position", "absolute");
  contentpages.css("top", "64px");
  footer.css("z-index", "1");
  footer.css("position", "absolute");
  footer.css("bottom", "0");
});