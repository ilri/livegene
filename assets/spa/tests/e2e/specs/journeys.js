module.exports = {
  'test_homepage': function(browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('div.body', 2000)
      .end();
  },

  'test_route_awarded_budget': function(browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('nav.navbar', 5000)
      .click('button.navbar-toggler')
      .click('li:nth-of-type(1) > a > button')
      .assert.urlContains(`/awardedbudget`)
      .end();
  },

  'test_route_staff_roles': function(browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('nav.navbar', 5000)
      .click('button.navbar-toggler')
      .click('li:nth-of-type(2) > a > button')
      .assert.urlContains(`/staffroles`)
      .end();
  },

  'test_route_project_timelines': function(browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('nav.navbar', 5000)
      .click('button.navbar-toggler')
      .click('li:nth-of-type(3) > a > button')
      .assert.urlContains(`/timelines`)
      .end();
  },

  'test_route_world_map': function(browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('nav.navbar', 5000)
      .click('button.navbar-toggler')
      .click('li:nth-of-type(4) > a > button')
      .assert.urlContains(`/worldmap`)
      .end();
  },
};
