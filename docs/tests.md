# Tests Meteor

## TinyTest

**Tutorials:**

* https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.md


**Exemple:**

    meteor create helloworld
    cd helloworld
    meteor add tinytest
    meteor

    # Dans un autre terminal
    meteor test-packages


## velocity

* [velocity](http://velocity.meteor.com/)

    $ git clone https://github.com/meteor-velocity/velocity-examples.git
    $ cd velocity-examples/leaderboard-cucumber
    $ meteor

## mocha - (40 022 installations)

* [Atmosphere](https://atmospherejs.com/mike/mocha)
* [Sources](https://github.com/mad-eye/meteor-mocha-web/)
* [Framework mochajs](http://mochajs.org/)

**Installation:**

    meteor add mike:mocha

**Usage:**

    meteor --test --release velocity:METEOR@1.1.0.2_2

## cucumber

* [Atmosphere](https://atmospherejs.com/xolvio/cucumber)
* [Sources](https://github.com/xolvio/meteor-cucumber/)

**Installation:**

    meteor add xolvio:cucumber

**Packages ajoutés:**

    amplify                           added, version 1.0.0
    coffeescript                      added, version 1.0.6
    package-version-parser            added, version 3.0.3
    practicalmeteor:chai              added, version 1.9.2_3
    practicalmeteor:loglevel          added, version 1.1.0_3
    sanjo:long-running-child-process  added, version 1.1.1
    sanjo:meteor-files-helpers        added, version 1.1.0_6
    sanjo:meteor-version              added, version 1.0.0
    velocity:chokidar                 added, version 1.0.1_1
    velocity:core                     added, version 0.6.5
    velocity:html-reporter            added, version 0.6.2
    velocity:meteor-internals         added, version 1.1.0_7
    velocity:shim                     added, version 0.1.0
    xolvio:cucumber                   added, version 0.9.2

## Jasmine

https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/writing.unit.tests.with.jasmine.md
