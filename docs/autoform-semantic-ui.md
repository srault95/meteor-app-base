# semantic-ui - autoform et autres composants

**Template Semantic-ui pour le package aldeed:autoform.**

* https://atmospherejs.com/fabienb4/autoform-semantic-ui
* https://github.com/fabienb4/meteor-autoform-semantic-ui

### Installation

Dépendances: templating, underscore, aldeed:autoform

```
$ meteor add semantic:ui-css
$ meteor add fabienb4:autoform-semantic-ui
$ meteor add fabienb4:semantic-ui-components
```

**Configuration globale:**

```javascript

//client/startup.js
Meteor.startup(function() {
    AutoForm.setDefaultTemplate("semanticUI");
});

```

**Configuration par formulaire:**

```
{{#autoForm collection="Items" id="itemsInsertForm" type="insert" template="semanticUI"}}
...
{{/autoForm}}
```

### Usage

**Champs select** - http://semantic-ui.com/collections/form.html#basic-select

```
{{> afQuickField name="items" type="basic-select" options=items}}

```

```javascript
// Template helpers:
Template.main.helpers({
    items: [
      { value: "1", label: "Item 1" },
      { value: "2", label: "Item 2" }
    ];
});
```

## semantic-ui-components

* https://atmospherejs.com/fabienb4/semantic-ui-components
* https://github.com/fabienb4/meteor-semantic-ui-components/

### ConnectionLost

    Router.configure({
      loadingTemplate: "Loading",
      onBeforeAction: function() {
        if (! Meteor.status().connected) {
          this.render("ConnectionLost");
        } else {
          this.next();
        }
      }
    });

### progressBar

Exemples avec des variables Reactive (maxValue & currentValue)

    // Small inverted progress bar
    {{> progressBar classNames="small inverted" current=currentValue total=maxValue}}

    // Progress bar that changes color when completed
    {{> progressBar current=currentValue total=maxValue completeClass="green"}}

    // Progress bar with style when low (useful for countdown)
    {{> progressBar current=currentValue total=maxValue styleLowBar=true low=20 veryLow=10}}

    // Progress bar with ratio display
    {{> progressBar current=currentValue total=maxValue showRatio=true}}

    // Progress bar with percent display
    {{> progressBar current=currentValue total=maxValue showPercent=true}}

    // Colored progress bar with label display
    {{> progressBar classNames="labeled green" label="Capacity" current=currentValue total=maxValue}}

    // Colored progress bar with label & ratio display
    {{> progressBar label="Capacity" current=currentValue total=maxValue showRatio=true}}

### searchInput

    {{> searchInput}}

    // With ID
    {{> searchInput id="searchName"}}

    // With placeholder
    {{> searchInput placeholder="Search..."}}

### selectDropdown

    // Simple
    items = [
      { value: "1", label: "Item 1" },
      { value: "2", label: "Item 2" }
    ];

    // With icons/flags
    items = [
      { value: "1", label: "Item 1", icon: "file text icon" },
      { value: "2", label: "Item 2", icon: "bz flag" }
    ];

    // Groups with headers
    items = [
      {
        itemGroup: "Group one",
        items: [
          { value: "1", label: "Item 1" },
          { value: "2", label: "Item 2" }
        ]
      },
      {
        itemGroup: "Group two",
        items: [
          { value: "3", label: "Item 3" },
          { value: "4", label: "Item 4" }
        ]
      }
    ]

    // Simple
    {{> selectDropdown items=items label="Items" name="items"}}

    // With a custom placeholder
    {{> selectDropdown items=items label="Items" name="items" placeholder="Select an item"}}

    // Required select
    {{> selectDropdown items=items label="Items" name="items" required=true}}

    // Searchable select
    {{> selectDropdown items=items label="Items" name="items" search=true}}

    // Searchable select with full text search
    {{> selectDropdown items=items label="Items" name="items" fullTextSearch=true}}

### Reversing animation

    <i class="reversing magnet icon"></i>