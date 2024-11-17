/* eslint-disable no-undef */
const assert =require('assert');
Feature('Add Review Restoran');

Before(({ I }) => {
  I.amOnPage('/');
});


Scenario('Add review resto', async ({ I }) => {

  I.seeElement('.review-item .list-info h3 a');
  const firstResto = locate('.list-info h3 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  const likedRestoTitle = await I.grabTextFrom('.list-info h3 a');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});