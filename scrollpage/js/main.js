const scrollPage = $("#scrollPage");
const nowPage = $("#nowPage");
var index = 0;
canScroll = true;
document.onmousewheel = function(e) {
  if (canScroll) {
    canScroll = false;
    if (e.wheelDelta > 0 && index >= 0) {
      if (index > 0) {
        index--;
      }
      $(scrollPage[0].children[index]).removeClass("active");

      $(scrollPage[0].children[index]).addClass("active");

      index++;
    }
    nowPage.css("margin-top", "-" + index * 72 + "px");
    setTimeout(function() {
      canScroll = true;
    }, 2000);
  }
};
