/* eslint-disable no-undef */
const assert =require('assert');
Feature('Unliking Restoran');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.see('', '.restoran');
});

Scenario('liking one resto and than unlike', async ({ I }) => {
  I.see('', '.restoran');
  I.amOnPage('/');


  I.seeElement('.list .list-info h3 a');
  const firstResto = locate('.list-info h3 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list .list-info h3 a');
  const likedRestoTitle = await I.grabTextFrom('.list-info h3 a');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});