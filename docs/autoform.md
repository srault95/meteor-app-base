# AutoForm

* [sources](https://github.com/aldeed/meteor-autoform)

	# Non documenté - ajout au helpers list:
	AutoForm.addHooks(null, {
	  onSuccess: function(operation, result, template) {
		Router.go('DomainList');
	  }
	});

	# On commence par déclarer les hooks et ensuite on les définit un par un
    AutoForm.addHooks(['admin_insert', 'admin_update', 'adminNewUser', 'adminUpdateUser', 'adminSendResetPasswordEmail', 'adminChangePassword'], {
      beginSubmit: function() {
        return $('.btn-primary').addClass('disabled');
      },
      endSubmit: function() {
        return $('.btn-primary').removeClass('disabled');
      },
      onError: function(formType, error) {
        return AdminDashboard.alertFailure(error.message);
      }
    });

    AutoForm.hooks({
      admin_insert: {
        onSubmit: function(insertDoc, updateDoc, currentDoc) {
          var hook;
          hook = this;
          Meteor.call('adminInsertDoc', insertDoc, Session.get('admin_collection_name'), function(e, r) {
            if (e) {
              return hook.done(e);
            } else {
              return adminCallback('onInsert', [Session.get('admin_collection_name', insertDoc, updateDoc, currentDoc)], function(collection) {
                return hook.done(null, collection);
              });
            }
          });
          return false;
        },
        onSuccess: function(formType, collection) {
          AdminDashboard.alertSuccess('Successfully created');
          return Router.go("/admin/" + collection);
        }
      },
      admin_update: {
        onSubmit: function(insertDoc, updateDoc, currentDoc) {
          var hook;
          hook = this;
          Meteor.call('adminUpdateDoc', updateDoc, Session.get('admin_collection_name'), Session.get('admin_id'), function(e, r) {
            if (e) {
              return hook.done(e);
            } else {
              return adminCallback('onUpdate', [Session.get('admin_collection_name', insertDoc, updateDoc, currentDoc)], function(collection) {
                return hook.done(null, collection);
              });
            }
          });
          return false;
        },
        onSuccess: function(formType, collection) {
          AdminDashboard.alertSuccess('Successfully updated');
          return Router.go("/admin/" + collection);
        }
      },
      adminNewUser: {
        onSuccess: function(formType, result) {
          AdminDashboard.alertSuccess('Created user');
          return Router.go('/admin/Users');
        }
      },
      adminUpdateUser: {
        onSubmit: function(insertDoc, updateDoc, currentDoc) {
          Meteor.call('adminUpdateUser', updateDoc, Session.get('admin_id'), this.done);
          return false;
        },
        onSuccess: function(formType, result) {
          AdminDashboard.alertSuccess('Updated user');
          return Router.go('/admin/Users');
        }
      },
      adminSendResetPasswordEmail: {
        onSuccess: function(formType, result) {
          return AdminDashboard.alertSuccess('Email sent');
        }
      },
      adminChangePassword: {
        onSuccess: function(operation, result, template) {
          return AdminDashboard.alertSuccess('Password reset');
        }
      }
    });