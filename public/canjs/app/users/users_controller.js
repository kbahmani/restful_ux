can.Control("App.UsersCtrl",{},
{
	init: function(element) { 
		this.container = this.element;
		this.element.html(can.view('../app/users/ejs/user_layout.ejs'));
		this.init_user_list();
	},
	init_user_list: function(){
		var panel = this.element.find('.user_list');
		var User = App.UserModel;
		User.findAll( {}, function( list ) {
			for(var i=0;i<list.length;i++){
				var html = can.view('../app/users/ejs/user_row.ejs', {data: list[i]});
				panel.append(html);
			}
		});
	},
	'.add_user_btn click': function(ui, event){
		var panel = this.element.find('.user_list');
		var User = App.UserModel;
		var form = ui.parent();
		var name = form.find('.first_name input').val();
		var family = form.find('.last_name input').val();
		var email = form.find('.email input').val();
		var user = new User( { name: name, family: family, email: email } );
		form.find('.first_name input').val('');
		form.find('.last_name input').val('');
		form.find('.email input').val('');
		user.save(function( user ) {
			var html = can.view('../app/users/ejs/user_row.ejs', {data: user});
			panel.append(html);
		});
	},
	'.ur_delete click': function(ui, event){
		var user_row = ui.parent();
		var user = user_row.data('model');
		user.destroy(function( user ) {
		   user_row.remove();
		});
	},
	'.ur_edit click': function(ui, event){
		var user_row = ui.parent();
		var user = user_row.data('model');
		user_row.after(can.view('../app/users/ejs/user_form.ejs', {mode: 'edit', data: user}));
		user_row.remove();
	}
});