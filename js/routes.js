angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('proSettle', {
    url: '/page1',
    templateUrl: 'templates/proSettle.html',
    controller: 'proSettleCtrl'
  })

  .state('signUp', {
    url: '/page2',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('dashBoard', {
    url: '/page3',
    templateUrl: 'templates/dashBoard.html',
    controller: 'dashBoardCtrl'
  })

  .state('selectCase', {
    url: '/page4',
    templateUrl: 'templates/selectCase.html',
    controller: 'selectCaseCtrl'
  })

  .state('caseDetails', {
    url: '/page5',
    templateUrl: 'templates/caseDetails.html',
    controller: 'caseDetailsCtrl'
  })

  .state('newCase', {
    url: '/page6',
    templateUrl: 'templates/newCase.html',
    controller: 'newCaseCtrl'
  })

  .state('forgotPassword', {
    url: '/page7',
    templateUrl: 'templates/forgotPassword.html',
    controller: 'forgotPasswordCtrl'
  })

  .state('notifications', {
    url: '/page8',
    templateUrl: 'templates/notifications.html',
    controller: 'notificationsCtrl'
  })

  .state('myAccount', {
    url: '/page9',
    templateUrl: 'templates/myAccount.html',
    controller: 'myAccountCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});