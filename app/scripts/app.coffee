'use strict'

# Declare app level module which depends on filters, and services
App = angular.module('app', [
  'app.controllers'
])

App.config([
  '$routeProvider'
  '$locationProvider'

($routeProvider, $locationProvider, config) ->

  $routeProvider
    .when('/profile', {templateUrl: '/views/profile.html'})
    .when('/skills', {templateUrl: '/views/skills.html'})
    .when('/work', {templateUrl: '/views/work.html'})

    # Catch all
    .otherwise({redirectTo: '/profile'})

  # Without server side support html5 must be disabled.
  $locationProvider.html5Mode(false)
])