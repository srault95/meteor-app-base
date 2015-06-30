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

## Plugin select2

* https://atmospherejs.com/natestrauser/select2
* https://github.com/nate-strauser/meteor-select2/
* https://atmospherejs.com/zimme/select2-bootstrap3-css
* https://github.com/zimme/meteor-select2-bootstrap3-css/
* [Démo](http://fk.github.io/select2-bootstrap-css/master.html)

```sh
# ATTENTION: version 3.5.1
$ meteor add natestrauser:select2

$ meteor add aldeed:autoform-select2

# ou ajouter dans client/css: https://github.com/t0m/select2-bootstrap-css/blob/bootstrap3/select2-bootstrap.css
$ meteor add zimme:select2-bootstrap3-css
```

Pour avoir la version la plus récente:

```
<head>
<link href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.min.css" rel="stylesheet" />
<script src="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.min.js"></script>
</head>
```

```js
SelectSchema = new SimpleSchema({
  simpleSelect: {
    type: String,
    autoform: {
      options: function () {
        return [
          {label: "2013", value: "2013"},
          {label: "2014", value: "2014"},
          {label: "2015", value: "2015"}
        ];
      }
    }
  },
  select2OneValue: {
    type: String,
    autoform: {
      type: "select2",
      options: function () {
        return [
          {label: "2013", value: "2013"},
          {label: "2014", value: "2014"},
          {label: "2015", value: "2015"}
        ];
      }
    }
  },
  select2MultipleValue: {
    type: [String],
    optional: true,
    autoform: {
      type: "select2",
      options: function () {
        return [
          {label: "2013", value: "2013"},
          {label: "2014", value: "2014"},
          {label: "2015", value: "2015"}
        ];
      },
      afFieldInput: {
        multiple: true
      }
    }
  }
});
```

```
{{> afQuickField name="tags" type="select2" multiple=true}}

{{> afFormGroup name="tags" type="select2" multiple=true}}

{{> afFieldInput name="tags" type="select2" multiple=true}}

{{> afFieldInput name="tags" type="select2" multiple=true select2Options=s2Opts}}

Template.example.helpers({
  s2Opts: function () {
    return {placeholder: 'foo', tags: true};
  }
});
```

## Plugin tagsinput

* http://timschlechter.github.io/bootstrap-tagsinput/examples/

## Plugin selectize

* http://brianreavis.github.io/selectize.js/
* https://atmospherejs.com/jeremy/selectize
* https://github.com/brianreavis/selectize.js

```
```

## aldeed:autoform-bs-button-group-input

* https://atmospherejs.com/aldeed/autoform-bs-button-group-input

```
$ meteor add aldeed:autoform-bs-button-group-input
```

**Fournit les types: select-checkbox et select-radio:**

```
{{> afQuickField name="plans" type="select-radio" template="buttonGroup" value=2 label=false}}
```

## datepicker

* http://bootstrap-datepicker.readthedocs.org

Ne gère que les dates (pas les heures)

```sh
$ meteor add rajit:bootstrap3-datepicker
$ meteor add aldeed:autoform-bs-datepicker
```

```
<link href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.0/css/bootstrap-datepicker3.min.css" rel="stylesheet" />
<script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.0/js/bootstrap-datepicker.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.0/locales/bootstrap-datepicker.fr.min.js"></script>
```

```js
$('.datepicker').datepicker({
    language: 'fr'
});
```

## datetimepicker

* http://eonasdan.github.io/bootstrap-datetimepicker/

Gère les dates et les heures.

```sh
#4.14.30_4
#$ meteor add tsega:bootstrap3-datetimepicker
$ meteor add tsega:bootstrap3-datetimepicker@=3.1.3_3
$ meteor add aldeed:autoform-bs-datetimepicker

# optional
$ meteor add mrt:moment-timezone
```

```js
{
  typeTest: {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  }
}
```

```
{{> afQuickField name="typeTest" type="bootstrap-datetimepicker"}}

{{> afFormGroup name="typeTest" type="bootstrap-datetimepicker"}}

{{> afFieldInput name="typeTest" type="bootstrap-datetimepicker"}}
```

### Time Zone

```
{
  date: {
    type: Date,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker",
        timezoneId: "America/New_York"
      }
    }
  }
}
```

Ou:

```
{{> afFieldInput name="typeTest" type="bootstrap-datetimepicker" timezoneId="America/New_York"}}
```

## daterangepicker

* http://www.daterangepicker.com/
* https://github.com/dangrossman/bootstrap-daterangepicker
* https://atmospherejs.com/gilbertwat/bootstrap3-daterangepicker