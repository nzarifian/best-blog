app.controller('detailsCtrl', detailsCtrl);

function detailsCtrl($stateParams,BlogSrv){
	var ctrl = this;
	ctrl.stateParams = $stateParams;
	ctrl.BlogSrv = BlogSrv;
	ctrl.blog = {};

	if(ctrl.stateParams.id){
		ctrl.BlogSrv.getOne(ctrl.stateParams.id)
		.then(function(data){
			ctrl.blog = data;
		})
	}
}

detailsCtrl.prototype.updateEntry = function(){
	var ctrl = this;
	ctrl.BlogSrv.updateEntry(ctrl.blog, ctrl.blog._id);
}

detailsCtrl.prototype.getEntries = function(){
	var ctrl = this;
	this.BlogSrv.getEntries().then(function(res){
		ctrl.blogPosts = res;
	});
}

