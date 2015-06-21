# Solution de gestion des tables

	dynatable
		http://www.dynatable.com/#data-attributes
    tablesorter
        https://github.com/Mottie/tablesorter
    jqxgrid
        http://www.jqwidgets.com/jquery-widgets-demo/demos/jqxgrid/index.htm
    handsontable (excel light)
        http://handsontable.com/
        https://github.com/handsontable/handsontable
        https://github.com/olragon/meteor-handsontable
        https://github.com/sujith3g/meteor-handsontable


## addons - aldeed:tabular - jquery-datatables

- https://atmospherejs.com/aldeed/tabular
- https://github.com/aldeed/meteor-tabular
- http://stackoverflow.com/questions/27875841/meteor-alddedtabular-collection-undefined-error

Pas de dépendances à Bootstrap mais les exemples ne sont qu'avec bootstrap

```sh
$ meteor add aldeed:tabular
```

### Exemple

```js
// lib/tables.js
TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Posts = new Tabular.Table({
  name: "PostList",
  collection: Posts,
  columns: [
    {data: "title", title: "Title"},
    {data: "author", title: "Author"},
    {data: "url", title: "URL"},
    {
      data: "submitted",
      title: "Created",
      render: function (val, type, doc) {
        if (val instanceof Date) {
          return moment(val).calendar();
        } else {
          return "Never";
        }
      }
    },
    {
      tmpl: Meteor.isClient && Template.postCheckOutCell
    }
  ]
});

Template.postCheckOutCell.events({
  'click .check-out': function () {
    console.log(this._id);
    //addBookToCheckoutCart(this._id);
  }
});
```

```
{{!-- client/templates/tables.html --}}

<template name="myTable">
    {{> tabular table=TabularTables.Posts class="table table-striped table-bordered table-condensed"}}
</template>

<template name="postCheckOutCell">
  <button type="button" class="btn btn-xs check-out">Check Out</button>
</template>

```

### Utilisation de dburles:collection-helpers pour tabular

```
    columns: [
      {data: "fullName()", title: "Full Name"},
    ]
    People.helpers({
      fullName: function () {
        return this.firstName + ' ' + this.lastName;
      }
    });
```

### Ajout d'extensions datatables

- Download js et css de l'extension dans client/compatibility


## reactive-table

* [source](https://github.com/aslagle/reactive-table)
* [demo](http://reactive-table.meteor.com/)
* Références
  * https://github.com/aramk/meteor-collection-table
  * https://atmospherejs.com/ryw/blog

```
var checkBoolean = function (value) {
    var html;
    if (value === true){
      html = '<i class="check teal large square icon"></i>';
    } else {
      html = '<i class="check red large square icon"></i>';
    }
    return new Spacebars.SafeString(html);
}

Template.ListBlacklistIp.events({
  'click .doc-row': function () {
    Session.set("selectedDoc", this._id);
  },
});

Template.ListBlacklistIp.helpers({
  blacklist_ip: function() {
	  return BlacklistIp.find();
  },
  selectedDoc: function () {
    return BlacklistIp.findOne(Session.get("selectedDoc"));
  },
  tableSettings : function () {
    return {
        //collection: BlacklistIp.find(),
        currentPage: Template.instance().currentPage,
        fields: [
          { key: 'value', label: 'Adresse IP', sortable: true },
          { key: 'active', label: 'Active', sortable: true, fn: checkBoolean },
          { key: 'comments', label: 'Description' },
        ],
        showNavigation: 'auto',
        showFilter: true,
        showColumnToggles: true,
        useFontAwesome: true,
        rowClass: function(item) {
          //item = l'objet complet pour cette ligne
          var isSelectedDoc = Session.equals("selectedDoc", item._id);
          if (isSelectedDoc === true){
            return 'doc-row active selected'
          } else {
            return 'doc-row'
          }
        }
    };
  },
});
```

```
<template name="ListBlacklistIp">
	<div class="ui huge grid">
	    <div class="eight wide column">
			<div class="ui top attached teal secondary inverted segment">
		      	<h3 class="ui header">Listes Noire d'adresse IP</h3>
		    </div>
		    <div class="ui attached segment">
			{{> reactiveTable collection=blacklist_ip settings=tableSettings rowsPerPage=5 class="ui unstackable celled striped structured table"}}
			</div>
		</div>
		<div class="four wide column">
			<div class="ui top attached teal inverted segment">
        		<h3 class="ui header">Création ou Edition</h3>
        	</div>
        	<div class="ui attached segment">
				{{#autoForm collection="BlacklistIp" doc=selectedDoc id="editBlacklistIpForm" type=formType class="ui form"}}
					{{> afQuickField name="active" checkboxType="toggle" trueLabel="Actif" falseLabel="Inactif"}}
					{{> afQuickField name="value"}}
					{{> afQuickField name="comments"}}
					<div class="ui buttons">
					  <button type="submit" class="ui submit green button">Valider</button>
					  <div class="or" data-text="ou"></div>
					  <button type="reset" class="ui reset orange button">Réinitialiser</button>
					</div>
				{{/autoForm}}
      		</div><!--//end segment -->

		</div><!--//end four wide -->
	</div>
</template>
```

## filter-collections (BEST ?)

* [atmosphere](https://atmospherejs.com/doctorpangloss/filter-collections)
* [sources](https://github.com/workpop/filter-collections/)
    * Fork de https://github.com/ericchen0121/filter-collections
    * Fork de https://github.com/tsega/filter-collections
    * Fork de https://github.com/julianmontagna/filter-collections
* [demo](http://filtercollections.meteor.com/)
* [sources demo](https://github.com/krishamoud/filter-collections-example)


```sh
$ meteor add ericchen0121:filter-collections
```

```js
People = new Meteor.Collection("people")

// client/filters.js

PeopleFilter = new FilterCollections(People, {
  template: 'peopleList'
  // Other arguments explained later. See Configuration.
});

PeopleFilter = new Meteor.FilterCollections(People, {
  name: 'people-lite',
  template: 'peopleList',
  filters: {
    "name": {
      title: 'Name',
      operator: ['$regex', 'i'],
      condition: '$and',
      searchable: 'required'
    }
  },
});

// server/filters.js
Meteor.FilterCollections.publish(People, {
  name: 'people-full'
});

Meteor.FilterCollections.publish(People, {
  name: 'people-lite'
});

```

```
<table>
  {{#each fcResults}}
  <tr>
    <td>{{alias}}</td>
    <td>{{name}}</td>
    <td>{{mail}}</td>
    <td>{{created_at}}</td>
  </tr>
  {{/each}}
</table>
```

```
<template name="peopleList">
  <div class="row">
    <div class="page-header clearfix">
      <h1>Filter Collections Application Example<br/><small>Click on any of the table headers to change what you are sorting.</small></h1>
    </div>

    <nav class="navbar navbar-inverse" role="navigation">
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search" value="{{fcFilterSearchable.criteria}}" data-fc-search-target="search-box">
          </div>
          <button type="submit" class="btn btn-success fc-search-trigger" data-fc-search-trigger="search-box">Submit</button>
          {{#if fcFilterSearchable.criteria}}<button type="button" class="btn btn-danger fc-search-clear">Reset</button>{{/if}}
        </form>

        <!-- active filters -->
        {{#if fcFilterActive}}
          <div class="navbar-form pull-right">
            {{#each fcFilterActive}}
              <a href="#" class="btn btn-info fc-filter-clear">{{title}}: {{operator}} {{value}}</a>
            {{/each}}
          </div>
        {{/if}}
        <!-- /active filters -->

      </div>
    </nav>

    <div class="table-responsive">
      <table class="table table-striped table-hover table-condensed">
        <tr>
          <th class="fc-sort" data-fc-sort="corporate_group.title">
            Title
            {{#if fcSort.corporate_group.title.desc}}(desc){{/if}}
            {{#if fcSort.corporate_group.title.asc}}(asc){{/if}}
          </th>
          <th class="fc-sort" data-fc-sort="name">
            Name
            {{#if fcSort.name.desc}}(desc){{/if}}
            {{#if fcSort.name.asc}}(asc){{/if}}
          </th>
          <th class="fc-sort" data-fc-sort="group">
            Group
            {{#if fcSort.group.desc}}(desc){{/if}}
            {{#if fcSort.group.asc}}(asc){{/if}}
          </th>
          <th class="fc-sort" data-fc-sort="number">
            Number
            {{#if fcSort.number.desc}}(desc){{/if}}
            {{#if fcSort.number.asc}}(asc){{/if}}
          </th>
          <th class="fc-sort" data-fc-sort="random_number">
            Random Number
            {{#if fcSort.random_number.desc}}(desc){{/if}}
            {{#if fcSort.random_number.asc}}(asc){{/if}}
          </th>
          <th class="fc-sort" data-fc-sort="corporate_group.gender">
            Gender
            {{#if fcSort.corporate_group.gender.desc}}(desc){{/if}}
            {{#if fcSort.corporate_group.gender.asc}}(asc){{/if}}
          </th>
          <th class="fc-sort" data-fc-sort="corporate_group.hobbies">
            Hobbies
            {{#if fcSort.corporate_group.hobbies.desc}}(desc){{/if}}
            {{#if fcSort.corporate_group.hobbies.asc}}(asc){{/if}}
          </th>
        </tr>
        {{#each fcResults}}
        <tr>
          <td>{{corporate_group.title}}</td>
          <td>{{name}}</td>
          <td>{{group}}</td>
          <td>{{number}}</td>
          <td>{{random_number}}</td>
          <td>{{corporate_group.gender}}</td>
          <td>
            {{#each corporate_group.hobbies}}
              {{this}},
            {{/each}}
          </td>
        </tr>
        {{/each}}
      </table>
    </div>
  </div>
  {{#if fcPager.pages}}
  <div class="row">
    <div class="col-md-12 text-center">
      <!-- numbered pager -->
        <ul class="pagination">
          <li><a href="#" class="fc-pager-first">&lt;&lt;</a></li>
          <li><a href="#" class="fc-pager-previous">&lt;</a></li>
          {{#each fcPager.pages}}
            <li class="{{status}}"><a href="#" class="fc-pager-page" data-fc-pager-page="{{page}}">{{page}}</a></li>
          {{/each}}
          <li><a href="#" class="fc-pager-next">&gt;</a></li>
          <li><a href="#" class="fc-pager-last">&gt;&gt;</a></li>
        </ul>
        <!-- /numbered pager -->

        <!-- pager status -->
        <p>
          <strong>{{fcPager.offsetStart}}</strong> to <strong>{{fcPager.offsetEnd}}</strong> of <strong>{{fcPager.totalItems}}</strong> records.
        </p>
        <!-- /pager status -->
    </div>
  </div>
  {{/if}}
</template>
```

### Sorting
### Paginating
### Filtering
### Searching
### Queries
### Callbacks