// login function

app.controller('AuthCtrl', AuthCtrl);

function AuthCtrl($state, api){
    var ctrl = this;
    ctrl.$state = $state;
    ctrl.api = api;
    // ctrl.password;
    // ctrl.email;
    // ctrl.auth_button = 'Continue';


    // if(localStorage.authToken){
    //     ctrl.$state.go('auth');
    }    
}

AuthCtrl.prototype.login = function(first_argument) {
	if (ctrl.email == "admin@blog.com"&& ctrl.password =="brainstation")
};