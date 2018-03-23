'use strict';

module.exports = function($scope) {
	$scope.addNewPost = (post) => {
		$scope.$resolve.posts.unshift(post);
	}
};
