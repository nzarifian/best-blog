// login function

app.controller('AuthCtrl', AuthCtrl);

function AuthCtrl($state, api){
    var ctrl = this;
    ctrl.$state = $state;
    ctrl.api = api;

}    


AuthCtrl.prototype.login = function() {
	var ctrl = this;
	if (ctrl.email == "admin@blog.com" && ctrl.password =="brainstation"){
		ctrl.$state.go('admin');
	} else {
		alert("username/password incorrect");
	}
};

