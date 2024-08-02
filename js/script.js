$(document).ready(function () {
  $(".profile__nav-item").click(function () {
    // クリックされたタブのdata-target属性の値を取得
    const targetId = $(this).data("target");

    // クリックされたタブに対応するコンテンツを表示し、activeクラスを追加
    $(`#${targetId}`).show().addClass("active");

    // クリックされたタブにactiveクラスを追加
    $(this).addClass("active");
  });
});
