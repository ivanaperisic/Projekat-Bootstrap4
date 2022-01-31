$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-topp");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $("#logo").attr('src','slide/slika1.png', $(this).scrollTop() > $nav.height());
      $("#logo").attr('src','slide/slika11.png', $(this).scrollTop() <= $nav.height());
    });
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".letters");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
  
  $.get('https://api.github.com/repos/7-2018/7-2018.github.io/languages',function(data){
    var max = parseInt(data.CSS + data.HTML + data.JavaScript);
    var css = ((data.HTML/max) * 100).toFixed(1);
    var html = ((data.CSS/max) * 100).toFixed(1);
    var js = ((data.JavaScript/max) * 100).toFixed(1);
    $("#lcontent").append(`<h2 class="text-center"  style="font-weight: 700; font-size: 2.3rem; font-family:'Nunito' sans-serif; margin-top: 24px;">HTML 5</h2>
    </div>`)
    $("#lcontent").append(`<div class="progress w-50 mx-auto my-4">
    <div class="progress-bar" role="progressbar" style="width: ${css}%; background-color:#563d7c;" aria-valuenow="${css}" aria-valuemin="0" aria-valuemax="100">${css}%</div>
  </div>`)
  $("#lcontent").append(`<h2 class="text-center"  style="font-weight: 700; font-size: 2.3rem; font-family:'Nunito' sans-serif; margin-top: 24px;">CSS 3</h2>
  </div>`)
  $("#lcontent").append(`<div class="progress w-50 mx-auto my-4">
  <div class="progress-bar" role="progressbar" style="width: ${html}%; background-color:#563d7c;" aria-valuenow="${html}" aria-valuemin="0" aria-valuemax="100">${html}%</div>
</div>`)
$("#lcontent").append(`<h2 class="text-center"  style="font-weight: 700; font-size: 2.3rem; font-family:'Nunito' sans-serif; margin-top: 24px;">JavaScript</h2>
</div>`)
$("#lcontent").append(`<div class="progress w-50 mx-auto my-4">
<div class="progress-bar" role="progressbar" style="width: ${js}%; background-color:#563d7c;" aria-valuenow="${js}" aria-valuemin="0" aria-valuemax="100">${js}%</div>
</div>`)
  })
})
/* FUNKCIJA ZA COPY */
function copyToClipboard() {
  var text = document.getElementById("linkcopy").innerText;
  console.log(text);
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });

}
function copyToClipboard1() {
  var text = document.getElementById("linkcopy1").innerText;
  console.log(text);
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
function copyToClipboard2() {
  var text = document.getElementById("linkcopy2").innerText;
  console.log(text);
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
var carousel = $(".carousel"),
    items = $(".item"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
    items.css({
    "-webkit-transform": "rotateY("+(-currdeg)+"deg)",
    "-moz-transform": "rotateY("+(-currdeg)+"deg)",
    "-o-transform": "rotateY("+(-currdeg)+"deg)",
    "transform": "rotateY("+(-currdeg)+"deg)"
  });
}

//prikaz koda komponenata

$("#alertscode").click(function(){
  $("#alertsdiv").css("opacity","1");
  $("#alertsdiv").css("transition","opacity 1s");
})

//SCROOL BAR
$(document).on("scroll", function(){
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;
  
  $(".progresss").css("width", progress + "%");
})
//stars rating



