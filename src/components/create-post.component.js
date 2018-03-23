module.exports = {
	templateUrl: './components/create-post.template.html',
	controller (postsService) {

		const initialSubmitButtonValue = "Create!";
		
		this.$onInit = () => {
			this.post = {id: 0}
			this.submitButtonValue = initialSubmitButtonValue;
		}

		this.createPost = (isValid, form, post) => {
			if (isValid) {
				this.submitButtonValue = "Submitting...";

				var self = this;
				postsService.createPost(post)
				.then(response => {
					if (response.status === 201) {
						var newpost = angular.copy(post);
						self.addNewPost({newpost:newpost})
						resetForm(form, self);
					}
				})
				.catch(err => {
					resetForm(form, self);
					console.error(err);
				})
			}
		}

		function resetForm (form, ctrl) {
			form.$setPristine();
		    form.$setUntouched();
			ctrl.post.title = '';
			ctrl.post.body = '';
			ctrl.post.id--;
			ctrl.submitButtonValue = initialSubmitButtonValue;
		}

	},
	bindings: {
		addNewPost: '&'
	}
}