module.exports = function () {
	return function (posts, search) {
		if(!search){
			return posts
		} else {
			var toReturn = [];
			posts.forEach(function(post){
				if( post.title.indexOf(search) > -1 || post.body.indexOf(search) > -1 ){
					toReturn.push(post);
				}
			})
			return toReturn
		}
	}
}