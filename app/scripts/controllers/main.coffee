'use strict'

angular.module('app.controllers', [])
  .controller 'MainCtrl', ['$scope', ($scope) ->

    $scope.data = new Date()

    $scope.teste = "MainCtrl"
    $scope.model = {
      openLeft: "closed",
      openRight: "closed"
    }

    $scope.abreProduto = () -> 
      $state.transitionTo('produto', {id: '123'});

    $scope.abreDepartamento = () -> 
      $state.transitionTo('index.departamento', {departamento_id: '2'});

    $scope.abrePerfil = () ->
      $state.transitionTo('perfil');

    $scope.openRightMenu = () ->
      $scope.model.openRight = "open"

    $scope.openLeftMenu = () ->
      $scope.model.openLeft = "open"
  ]
