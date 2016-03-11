'use strict';

var app = angular.module('blogApp',[
  'ui.router',
  ]);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state ('main', {
      url:'/',
      templateUrl: 'site/partials/main-nav.html',
      controller: 'BlogCtrl as ctrl',
      resolve:{
      	blogs: function(BlogSrv){
          return BlogSrv.getEntries();
        }
      }
    })
    .state ('main.home', {
      url:'home',
      templateUrl: 'site/partials/main-home.html'
    })   
    

    // .state ('main.entry', {
    //   url:'/:id',
    //   templateUrl:'/site/partials/main-entries.html',
    //   controller: 'BlogCtrl as ctrl',
    //   resolve:{
    //     shops: function(BlogSrv,$stateParams){
    //       return BlogSrv.getOne($stateParams.id);
    //     }
    //   }
    // })

    .state ('main.aboutme', {
    url:'aboutme',
    templateUrl:'site/partials/main-aboutme.html',
    controller: 'BlogCtrl as ctrl',
    })

  //   .state ('auth', {
  //   url:'auth',
  //   templateUrl: 'site/partials/admin-login.html',
  //   controller: 'AuthCtrl as ctrl',
  //   resolve:{
  //     blogs: function(BlogSrv){
  //     return BlogSrv.getEntries();
  //     }
  //   }
  // })

    // .state ('admin', {
    // url:'admin',
    // templateUrl: 'site/partials/admin-dash.html',
    // controller: 'AuthCtrl as ctrl',
    // resolve:{
    //  blogs: function(BlogSrv){
    //   return BlogSrv.getEntries();
    //     }
    //   }
    // })

    // .state ('update', {
    //   url:'/update',
    //   templateUrl: 'site/partials/admin-edit.html'
    //   controller: 'BlogCtrl as ctrl'
    //   resolve:{
    //     blogs: function(BlogSrv){
    //       return BlogSrv.updateEntry();
    //     }
    //   }
    // })

});