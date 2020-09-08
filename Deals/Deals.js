
$(document).ready(function() {
    
//     var newHash      = "",
//     $mainContent = $("main"),
//     $pageWrap    = $("#page"),
//     baseHeight   = 0,
//     $el;
    
// $pageWrap.height($pageWrap.height());
// baseHeight = $pageWrap.height() - $mainContent.height();
// $("#footer").delegate("a", "click", function() {
//     window.location.hash = $(this).attr("href");
    
//     return false;
// });
// $(window).bind('hashchange', function(e){
//     e.preventDefault();
//     newHash = window.location.hash.substring(1);
//     console.log(newHash);
//     if (newHash) {
//         $mainContent
//             .find("#main")
//             .fadeOut(200, function() {
//                 $mainContent.hide().load(newHash+ " #main", function() {
//                     $mainContent.fadeIn(200, function() {
//                         $pageWrap.animate({
//                             height: baseHeight + $mainContent.height() + "px"
//                         });
                       
//                     });
                   
//                 });
//             });
//     };
    
// });

// $(window).trigger('hashchange');
    // $('#footer a').on('click',()=>{
    //     fetch('../search.html')
    //     .then(data=>{
    //         return data.text()
    //     })
    //     .then(dataJs=>{
    //         document.getElementById('main').innerHTML=dataJs
    //     })
    // })

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

//     })
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

// $(document).ready(()=>{
//     fetch('/js/header.html')
//     .then(data=>{
//         return data.text();
//     })
//     .then(dataJson=>{
//         document.getElementById('headerID').innerHTML=dataJson;
//     })
//     fetch('/js/footers.html')
//     .then(data=>{
//         return data.text()
//     })
//     .then(dataJSon=>{
//         document.getElementById('footer').innerHTML=dataJSon;
//     })
//     // fetch('/filter.html')
//     // .then(data=>{
//     //     return data.text()})
//     //     .then(dataJs=>{
//     //         document.getElementById('filter').innerHTML=dataJs
//     //     })

// })

//// Filter Section
// let checkbox = document.getElementById('cb');
// var svg = document.getElementById('checkbox');

// svg.addEventListener('click', () => {
//     if(checkbox.checked)
//         svg.classList.add('reverse')
//     else 
//         svg.classList.remove('reverse')
// })

rest=()=>{
    $('input[type=checkbox]').prop('checked', false);
  };