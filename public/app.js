$("button").click(function(e) {
  location.reload();
});
var currentImg = Math.floor(Math.random() * 11);
function changeImg() {
  var img = document.getElementById("divBackgroundImage");
  img.style.backgroundImage =
    "url(/imgs/background_image/" + currentImg + ".jpg)";
}
// $("#divBackgroundImage").select(function () {
//     $("#divBackgroundImage").css("background-Image", "url(/imgs/background_image/" + currentImg + ".jpg)");
// });
changeImg();
