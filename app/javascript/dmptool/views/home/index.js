/* eslint-env browser */ // This allows us to reference 'window' below
$(() => {
  // Rotate through the news items every 8 seconds
  const articles = $('#home-news-array').val();
  if (articles) {
    const news = JSON.parse(`${articles.replace(/\\"/g, '"').replace(/\\'/g, '\'')}`);
    const updateNews = (item) => {
      const text = $('#home-news-link');
      const sr = ' <em class="sr-only">(new window)</em>';
      text.hide();
      text.html(`<a href="${news[item].link}" target="_blank">${news[item].title}${sr}</a>`);
      text.fadeIn(100);
    };
    const startNewsTimer = (item) => {
      setTimeout(() => {
        updateNews(item);
        startNewsTimer((item >= news.length - 1) ? 0 : item + 1);
      }, 8000);
    };
    updateNews(0);
    startNewsTimer(1);
  }

  $('#get-started-options a').click((e) => {
    $(e.target).closest('.modal').modal('hide');
  });
});
