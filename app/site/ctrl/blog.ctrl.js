app.controller('BlogCtrl', BlogCtrl);



function BlogCtrl($state,api,blogs,BlogSrv){
	var ctrl = this
	// dependencies
	ctrl.api=api;
	ctrl.state = $state;
	ctrl.blogPosts = blogs;
	ctrl.BlogSrv= BlogSrv;
	console.log(this.blogPosts);
	ctrl.curPage = 0;
	ctrl.entriesPerPage = 12;
	ctrl.numPages = Math.ceil(ctrl.blogPosts.length / ctrl.entriesPerPage);


}

BlogCtrl.prototype.toBlog = function(id) {
	var ctrl = this;
	ctrl.state.go('main.entry',{id:id});


};

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

BlogCtrl.prototype.updateEntry = function(entry){
	var ctrl = this;
	ctrl.state.go('main.update',{id:entry._id})
	// ctrl.BlogSrv.updateEntry(ctrl.id);
}

BlogCtrl.prototype.delete = function(id){
	var ctrl = this;
	ctrl.BlogSrv.delete(id)
	.then(function(res){
		ctrl.getEntries();
	});
}

