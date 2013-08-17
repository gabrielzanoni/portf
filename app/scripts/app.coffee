'use strict'

# Declare app level module which depends on filters, and services
App = angular.module('app', [
  'app.controllers'
  'app.directives'
  'app.filters'
  'app.services'
  'partials'
])

App.config([
  '$routeProvider'
  '$locationProvider'

($routeProvider, $locationProvider, config) ->

  $routeProvider
    .when('/profile', {templateUrl: '/partials/profile.html'})
    .when('/skills', {templateUrl: '/partials/skills.html'})
    .when('/work', {templateUrl: '/partials/work.html'})

    # Catch all
    .otherwise({redirectTo: '/profile'})

  # Without server side support html5 must be disabled.
  $locationProvider.html5Mode(false)
])