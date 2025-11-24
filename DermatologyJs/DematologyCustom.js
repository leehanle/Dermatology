$(function () {
  $(".Our .textUl li").on("click", function () {
    let a = $(this).index();
    $(".Our .textUl .line").removeClass("ab");
    $(".Our .textUl .line").eq(a).addClass("ab");
    $(".Our .imgBox div").removeClass("cd");
    $(".Our .imgBox div").eq(a).addClass("cd");
  });
  $(".content div").on("mouseenter", function () {
    $(this).css({ transform: "scale(1.2)" });
  });
  $(".content div").on("mouseleave", function () {
    $(this).css({ transform: "scale(1)" });
  });
});
