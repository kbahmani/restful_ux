can.Model("App.UserModel", {
	findAll : 'GET /users',
	create  : 'POST /users',
	destroy : 'DELETE /users/{id}'
},{});