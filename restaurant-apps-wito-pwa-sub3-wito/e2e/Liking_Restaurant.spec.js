const assert = require('assert');

Feature('Liking Restaurant');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.wait(5);
});

Scenario('liking one movie', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.main-content__not__found');

  I.amOnPage('/');
  I.waitForElement('.post-item__title a', 3);
  I.seeElement('.post-item__title a');
  const firstFilm = locate('.post-item__title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.post-item', 3);
  I.seeElement('.post-item');
  const likedFilmTitle = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('unliking one movie', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.main-content__not__found');

  I.amOnPage('/');
  I.waitForElement('.post-item__title a', 3);
  I.seeElement('.post-item__title a');
  const firstFilm = locate('.post-item__title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.post-item', 3);
  I.seeElement('.post-item');
  const likedFilmTitle = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);

  I.click('.post-item__title a');
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(5);
  I.see('Tidak ada restaurant untuk ditampilkan', '.main-content__not__found');
});
