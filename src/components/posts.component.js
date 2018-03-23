module.exports = {
	templateUrl: './components/posts.template.html',
	controller () {
		
		this.$onInit = () => {
		}

	},
	bindings: {
		allposts: '<',
		search: '<'
	}
}