module.exports = function($http){
	return {
		getPosts () {
			return $http.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.data)
		},
		createPost (post) {
			return $http.post('https://jsonplaceholder.typicode.com/posts')
			.then(response => response)
		}
	}
}