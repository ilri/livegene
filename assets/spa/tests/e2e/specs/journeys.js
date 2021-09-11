module.exports = {
  test_homepage(browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('div.body', 2000)
      .end();
  },

  test_navigation(browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('nav.navbar', 15000)
      .click('button.navbar-toggler')
      .waitForElementVisible('ul.navbar-nav', 15000)
      .click('li:nth-of-type(1) > a > button')
      .assert.urlContains('/awardedbudget')
      .click('button.navbar-toggler')
      .waitForElementVisible('ul.navbar-nav', 15000)
      .click('li:nth-of-type(2) > a > button')
      .assert.urlContains('/staffroles')
      .click('button.navbar-toggler')
      .waitForElementVisible('ul.navbar-nav', 15000)
      .click('li:nth-of-type(3) > a > button')
      .assert.urlContains('/timelines')
      .click('button.navbar-toggler')
      .waitForElementVisible('ul.navbar-nav', 15000)
      .click('li:nth-of-type(4) > a > button')
      .assert.urlContains('/worldmap')
      .end();
  },

  test_staff_roles_children_routes(browser) {
    browser
      .url('http://localhost:8000/#/staffroles')
      .assert.urlContains('/diagram')
      .assert.elementPresent('svg')
      .waitForElementVisible('ul.nav-pills', 15000)
      .useXpath()
      .click('//*[contains(text(),"Heatmap")]')
      .assert.urlContains('/heatmap')
      .useCss()
      .assert.elementPresent('table')
      .end();
  }
};
