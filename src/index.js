'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module(
    'hrsBlog',
    ['ngRoute'],
    function($routeProvider) {
        $routeProvider
        	.when('/', {
        		templateUrl: 'home.html',
        		resolve: {
        			posts (postsService) {
        				return postsService.getPosts();
        			}
        		}
        	})
        $routeProvider.otherwise({redirectTo: '/'});
    }
);

app.controller('homeController', require('./home.js'));
app.component('createPost', require('./components/create-post.component.js'))
app.component('headerNav', require('./components/header-nav.component.js'))
app.component('posts', require('./components/posts.component.js'))
app.service('postsService', require('./services/posts.service.js'));
app.filter('postSearch', require('./filters/postSearch.filter.js'))