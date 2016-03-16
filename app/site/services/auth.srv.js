app.service('authSrv', authService);

function authService($state,api){
	//dependencies
	this.api = api;
	this.$state = $state;
	ctrl.api = api;
    ctrl.password = password;
    ctrl.email = email;
};

// authSrv.prototype.login = function() {
// 	if (ctrl.email == "admin@blog.com" && ctrl.password =="brainstation"){
// 		ctrl.$state.go('/admin');
// 		else .alert("username/password incorrect");
// 	}
// };