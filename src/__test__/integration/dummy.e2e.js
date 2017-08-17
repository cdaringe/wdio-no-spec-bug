'use strict'

describe('home', function () {
  it('see a dummy thing', function () {
    debugger
    browser.url('/login')
    browser.waitForExist('.App-logo')
  })
})
