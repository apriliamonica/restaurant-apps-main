
/* eslint-disable no-undef */
Feature('Liking Restoran');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restoran', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});