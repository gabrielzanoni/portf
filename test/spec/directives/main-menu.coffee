'use strict'

describe 'Directive: mainMenu', () ->
  beforeEach module 'mobileApp'

  element = {}

  it 'should make hidden element visible', inject ($rootScope, $compile) ->
    element = angular.element '<main-menu></main-menu>'
    element = $compile(element) $rootScope
    expect(element.text()).toBe 'this is the mainMenu directive'
