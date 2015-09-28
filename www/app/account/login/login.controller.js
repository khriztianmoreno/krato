(function () {
	'use strict';
	angular.module('kratoApp')
		.controller('loginController', loginController);

	loginController.$inject = ['$scope', '$state', '$localStorage', '$firebaseObject','Auth', 'FURL', 'Utils'];

	function loginController ($scope, $state, $localStorage, $firebaseObject, Auth, FURL, Utils) {
		var ref = new Firebase(FURL);
		var userkey = "";
		$scope.signIn = function (user) {
			console.log("Enviado");
			if (angular.isDefined(user)) {
				Utils.show();
				Auth.login(user)
					.then(function (authData) {
					//console.log("id del usuario:" + JSON.stringify(authData));

					ref.child('profile').orderByChild("id").equalTo(authData.uid).on("child_added", function (snapshot) {
						console.log(snapshot.key());
						userkey = snapshot.key();
						var obj = $firebaseObject(ref.child('profile').child(userkey));

						obj.$loaded().then(function (data) {
							//console.log(data === obj); // true
							//console.log(obj.email);
							var userSession = {
								fullname: obj.fullName,
								gravatar: obj.gravatar,
								email: obj.email,
								userkey: userkey
							}
							$localStorage.user = userSession;
							$localStorage.userkey = userkey;

							Utils.hide();
							$state.go('app.home');
							console.log("Starter page", "Home");

						})
						.catch (function (error) {
							console.error("Error:", error);
						});
					});

				}, function (err) {
					Utils.hide();
					Utils.errMessage(err);
				});
			}
		};
	};

})();