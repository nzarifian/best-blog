app.service('BlogSrv',BlogService);

function BlogService($state,api){
	//dependencies
	this.api = api;
	this.$state = $state;
	this.blogPosts = {};
	this.blog = [];
}

BlogService.prototype.addEntry = function(entry){
	var _this = this;
	return this.api.request('/entries',entry,'POST').then(function(res){
		console.log(res);
		return res;
	})
}

BlogService.prototype.getEntries = function() {

	console.log('All Entries');
	return this.api.request('/entries', {}, 'GET')
	.then(function(res) {
		console.log(res);
		return res.data;
	});
}

// BlogService.prototype.getOne = function(id){
// 	var _this = this; 
// 	return this.api.request('/api/main/'+id,{},'GET')
// 	.then(function(res){
// 		console.log(res);
// 		return res.data;
// 	})
// }

// BlogService.prototype.updateEntry = function(entry, id){
// 	var _this = this;
// 	this.api.request('/main/'+id,entry,'PUT')
// 	.then(function(res){
// 		console.log(res);
// 		if(res.status === 200){
// 			_this.updateList(entry, id);
// 			_this.$state.go('main');
// 		}
// 	})
// }

BlogService.prototype.delete = function(entry, id){
	var _this = this;
	this.api.request('/main/'+id,entry,'DEL')
	.then(function(res){
		console.log(res);
		if(res.status === 200){
			this.delete(id);
		}
	})
}

BlogService.prototype.removeEntry = function(id){
    for(index in this.entries){
        if(this.entry[index].id == id){
            delete this.entries[index];

        }
    }
}