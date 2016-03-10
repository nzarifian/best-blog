'use strict';

var app = angular.module('blogApp',[
  'ui.router',
  ]);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/main');

  $stateProvider
    .state ('main', {
      url:'/main',
      templateUrl: 'site/partials/main-home.html',
      controller: 'BlogCtrl as ctrl',
      resolve:{
      	blogs: function(BlogSrv){
          return BlogSrv.getEntries();
        }
      }
    });
    
    // .state ('entry', {
    //   url:'/:id',
    //   templateUrl:'/site/partials/main-entries.html',
    //   controller: 'ShopCtrl as ctrl',
    //   resolve:{
    //     shops: function(shopSrv,$stateParams){
    //       return shopSrv.getOne($stateParams.shopId);
    //     }
    //   }
    // })

});