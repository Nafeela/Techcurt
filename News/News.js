// $(function() {

//     var newHash      = "",
//         $mainContent = $("#main-content"),
//         $pageWrap    = $("#page"),
//         baseHeight   = 0,
//         $el;
        
//     $pageWrap.height($pageWrap.height());
//     baseHeight = $pageWrap.height() - $mainContent.height();
    
//     $("div").delegate("a", "click", function() {
//         window.location.hash = $(this).attr("href");
//         return false;
//     });
    
//     $(window).bind('hashchange', function(){
    
//         newHash = window.location.hash.substring(1);
//         console.log(newHash)
//         if (newHash) {
//             $mainContent
//                 .find("#data")
//                 .fadeOut(200, function() {
//                     $mainContent.hide().load(newHash + " #data", function() {
//                         $mainContent.fadeIn(200, function() {
//                             $pageWrap.animate({
//                                 height: baseHeight + $mainContent.height() + "px"
//                             });
//                         });
                       
//                     });
//                 });
//         };
        
//     });
    
//     $(window).trigger('hashchange');

// });
$(document).ready(function() {
   
//     $('div').on('click',(e)=>{
//         e.preventDefault();
    
// var x = document.getElementById("header");
// var y = document.getElementById("footer");

// if (x.style.display === "none") {
// x.style.display = "block";

// x.style.top="0px"

// } 
// else {
// x.style.display = "none";
// }
// if (y.style.display === "none") {
// y.style.display = "block";
// y.style.bottom="0px"
// } else {
// y.style.display = "none";
// }        

//     });
	//////////////////////// detect scroll top or down
   
         var last_scroll_top = 0;
        $(window).on('scroll', function() {
            scroll_top = $(this).scrollTop();
            
            if(last_scroll_top<scroll_top ) {
               
             
   document.getElementById("header").style.top = "-50px";
   document.getElementById('footer').style.bottom="0"
   } else {
document.getElementById("header").style.top = "0px";
document.getElementById('footer').style.bottom="-50px"
}
            last_scroll_top = scroll_top;
        });

	
}); 
function myFunction() {
var x = document.getElementById("header");
var y = document.getElementById("footer");

if (x.style.display === "none") {
x.style.display = "block";

x.style.top="0px"

} 
else {
x.style.display = "none";
}
if (y.style.display === "none") {
y.style.display = "block";
y.style.bottom="0px"
} else {
y.style.display = "none";
}
}


rest=()=>{
    $('input[type=checkbox]').prop('checked', false);
  };

  