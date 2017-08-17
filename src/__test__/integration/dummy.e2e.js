'use strict'

describe('home', function () {
  it('see a dummy thing', function () {
    browser.url('/login')
    browser.waitForExist('#dummy')
  })
})
