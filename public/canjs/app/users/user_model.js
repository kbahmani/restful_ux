can.Model("App.UserModel", {
	findAll : 'GET /users',
	create  : 'POST /users',
	update  : 'PUT /users/{id}',
	destroy : 'DELETE /users/{id}'
},{});