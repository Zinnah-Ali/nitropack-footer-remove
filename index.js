$(document).ready(function(){

setTimeout(function(){

     //var tag_new = jQuery("template").eq(38).attr("id");
     var tag_new = $("template").last().attr("id");
     console.log(tag_new);

     //alert(tag_new);
     $("#" + tag_new).css("display", "none");
     $("#" + tag_new).next().next().css("display", "none");
}, 100);

});


