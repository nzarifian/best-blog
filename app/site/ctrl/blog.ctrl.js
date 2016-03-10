app.controller('BlogCtrl', BlogCtrl);



function BlogCtrl($state,api,blogs,BlogSrv){
	// dependencies
	this.api=api;
	this.state = $state;
	this.blogPosts = blogs;
	this.BlogSrv= BlogSrv;
	console.log(this.blogPosts);


}


BlogCtrl.prototype.addEntry = function(){
	var ctrl = this;

	var payload = {
		title:ctrl.title,
		image:ctrl.image,
		author: ctrl.author,
		content:ctrl.content,
		tags:ctrl.tags
	}
	console.log(payload);

	this.BlogSrv.addEntry(payload).then(function(res){
		ctrl.getEntries();
	})
}

BlogCtrl.prototype.getEntries = function(){
	var ctrl = this;

	this.BlogSrv.getEntries().then(function(res){
		ctrl.blogPosts = res;
	});
}

BlogCtrl.prototype.delete = function(){
	var ctrl = this;
	ctrl.BlogSrv.delete(ctrl.entry, ctrl.entry._id);
}

