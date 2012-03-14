function openMore() {
  $("#moremenu").slideDown("fast");
}

function hideMore() {
  $("#moremenu").slideUp("fast");
}


$("#main").live('pagecreate', function(event) {
  $("#moremenu").hide();

  $(".mainlevel1").not("#morebutton").click(hideMore);

  $("#morebutton").click(openMore);
});