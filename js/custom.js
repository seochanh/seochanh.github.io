// $("[data-tag]").click((e) => {
//   currentTag = e.target.dataset.tag;
//   filterByTagName(currentTag);
// })

// function filterByTagName(tagName) {
//   $('.hidden').removeClass('hidden');
//   $('.o-grid__post').each((index, elem) => {
//     if (!elem.hasAttribute(`data-${tagName}`)) {
//       $(elem).addClass('hidden');
//     }
//   });
//   $(`.tag`).removeClass('selected');
//   $(`.tag[data-tag=${tagName}]`).addClass('selected');
// }


$(function(){
  $('.c-tags > a').each(function() {
    let tagUrl = $(this).attr('href') + '/'
    console.log(tagUrl);

    if (window.location.pathname == tagUrl) {
      $(this).addClass('selected');
    }
  });
});

