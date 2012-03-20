// Main page -------------------------------------------------------------------

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

// Career page -----------------------------------------------------------------

function openCareerInfo() {
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

// Company pages ---------------------------------------------------------------

// 'opening' a company means creating a page for said company in the DOM
// and then navigating to it
function openCompany(companyId) {
  // get company page
  var companyPage = $("#company");

  // load company-specific content...
  
  // redirect to company page
  $.mobile.changePage(companyPage);
}

// 'closing' a company means cleaning up that company's page in the DOM
// This will help to prevent the document object model from getting overly 
// large and slowing things down.
function closeCompany(companyId) {
  getCompanyPage(companyId).remove();
}

function openCompanyInfo() {
  $(".companypagecontent").hide();
  $("#companyinfocontent").show();
}

function openCompanyReviews() {
  $(".companypagecontent").hide();
  $("#companyreviewscontent").show();
}

function openCompanyContacts() {
  $(".companypagecontent").hide();
  $("#companycontactscontent").show();
}

function openCompanyInterviews() {
  $(".companypagecontent").hide();
  $("#companyinterviewscontent").show();
}

// Page load script ------------------------------------------------------------

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
  openCareerInfo();

  // set up event handlers
  $("#infobutton").click(openCareerInfo);
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

$('#company').live('pageinit', function(event) {
  openCompanyInfo();

  // set up event handlers
  $("#companyinfobutton").click(openCompanyInfo);
  $("#companyreviewsbutton").click(openCompanyReviews);
  $("#companycontactsbutton").click(openCompanyContacts);
  $("#companyinterviewsbutton").click(openCompanyInterviews);

  $(".homebutton").click(openMain);

  // position navigational elements
  // var header = $("#companyheader");
  // var footer = $("#companyfooter");
  // var contentpages = $(".companypagecontent");

  // header.css("z-index", "1");
  // contentpages.css("position", "absolute");
  // contentpages.css("top", "64px");
  // footer.css("z-index", "1");
  // footer.css("position", "absolute");
  // footer.css("bottom", "0");
});