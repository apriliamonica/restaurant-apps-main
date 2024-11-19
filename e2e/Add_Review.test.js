/* eslint-disable no-undef */
const assert = require('assert');
Feature('Add review Restoran');


Scenario('add restoran new review', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.list .list-info h3 a');
  const firstResto = locate('.list-info h3 a').first();
  I.click(firstResto);
  I.wait(1);

  I.waitForElement(
    '.riview-resto .riview-container #restoForm'
  );
  I.wait(2);
  I.seeElement('#restoForm .nama-review #nama');
  I.click('#restoForm .nama-review #nama');
  I.clearField('#restoForm .nama-review #nama');
  I.wait(2);
  I.fillField('#restoForm .nama-review #nama', 'Ahmad');

  I.seeElement('#restoForm .review-text #review');
  I.click('#restoForm .review-text #review');
  I.clearField('#restoForm .review-text #review');
  I.fillField('#restoForm .review-text #review', 'sangat enak');

  I.seeElement('#restoForm #FormSubmit');
  I.click('#restoForm #FormSubmit');
  I.wait(2);

  I.waitForElement('.review-list .review-item');
  I.seeElement('.review-list .review-item');
  const addReviewName = await I.grabTextFrom(locate('.review-list .review-item h4').last());
  const addReviewTitle = await I.grabTextFrom(locate('.review-list .review-item .review-title').last());
  assert.strictEqual(addReviewName, 'Ahmad');
  assert.strictEqual(addReviewTitle, 'sangat enak');
});