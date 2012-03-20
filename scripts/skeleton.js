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

function removeFavoriteCompany(id){
  //TODO remove favorite from database!!!

  $("li#fav"  + id).remove();
	$("#favoritecompanies").listview("refresh");
}

function removeFavoriteField(id){
  //TODO remove favorite from database!!!

  $("li#favfield"  + id).remove();
	$("#favoritefields").listview("refresh");
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

  
  //populate career page tabs
  
  //experience tab
  //TODO get data for user FROM DATABASE
  experienceList = [{"company":"Aunt Jemima's", "startDate":"06/2011", "endDate":"08/2011", "position":"syrup intern", "id":"3"},{"company":"McDonalds", "startDate":"06/2010", "endDate":"08/2010", "position":"junior burger flipper", "id":"7"}];
  for(i in experienceList){
  	var newItem = $("<li><div>" + experienceList[i].company + "</div></br><div>" + experienceList[i].startDate + "-" + experienceList[i].endDate + "</div></br><div>" + experienceList[i].position + "</div></li>");
		newItem.click(function() {
      //TODO actually open company with correct ID
      openCompany(experienceList[i].id);
		});
    $("#experiencelist").append(newItem);
    $("#experiencelist").listview("refresh");						
  }
  
  //favorites tab
  //TODO get data for user FROM DATABASE
  favoriteCompanies = [{"company":"Aunt Jemima's", "id":"3"},{"company":"McDonalds", "id":"7"},{"company":"Meals on Wheels", "id":"5068"}];
  for(i in favoriteCompanies){
  	var newItem = $("<li id='fav" + favoriteCompanies[i].id + "'><div class='ui-grid-a'><div class='ui-block-a'>" + favoriteCompanies[i].company + "</div><div class='ui-block-b'><div class='right-aligning'><img  onclick='removeFavoriteCompany(" + favoriteCompanies[i].id + ")' class='remove-icon' src='images/remove-icon.png' alt='Remove'/></div></div></div></li>");
		newItem.click(function() {
      //TODO actually open company with correct ID
        openCompany(favoriteCompanies[i].id);
		});
    $("#favoritecompanies").append(newItem);
    $("#favoritecompanies").listview("refresh");						
  }
  
  
  //TODO get data for user FROM DATABASE
  favoriteFields = [{"field":"Food", "id":"3"},{"field":"Bunny Science", "id":"7"},{"field":"Lulz forevah", "id":"5068"}];
  for(i in favoriteFields){
  	var newItem = $("<li id='favfield" + favoriteFields[i].id + "'><div class='ui-grid-a'><div class='ui-block-a'>" + favoriteFields[i].field + "</div><div class='ui-block-b'><div class='right-aligning'><img  onclick='removeFavoriteField(" + favoriteFields[i].id + ")' class='remove-icon' src='images/remove-icon.png' alt='Remove'/></div></div></div></li>");
		newItem.click(function() {
      //TODO not really sure what, though. needs to be discussed
		});
    $("#favoritefields").append(newItem);
    $("#favoritefields").listview("refresh");						
  }


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