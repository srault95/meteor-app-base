# Plugins A etudier

https://atmospherejs.com/zimme/iron-router-auth


## flash-messages

* https://github.com/camilosw/flash-messages
* https://atmospherejs.com/mrt/flash-messages
* https://github.com/JamesLefrere/meteor-flash-messages-semantic-ui

**Installation:**

    $ meteor add jameslefrere:flash-messages-semantic-ui

**Configuration:**

    FlashMessages.configure({
        autoHide: true,
        hideDelay: 5000,
        autoScroll: true
    });

**Usage:**

    {{> flashMessages}}

    FlashMessages.sendWarning("Message");
    FlashMessages.sendError("Message");
    FlashMessages.sendSuccess("Message");
    FlashMessages.sendInfo("Message");

    FlashMessages.sendInfo(["Message 1", "Message 2", "Message 3"]);

    FlashMessages.clear();

    FlashMessages.sendWarning("Message", { autoHide: false });
    FlashMessages.sendError("Message", { hideDelay: 2000 });
    FlashMessages.sendSuccess("Message", { autoHide: true, hideDelay: 8000 });


## Graphique HighCharts

* https://github.com/MaazAli/Meteor-HighCharts
* http://highcharts-demo.meteor.com/
* https://github.com/jhuenges/highcharts-demo
* https://github.com/MaazAli/highcharts-gauge
* https://github.com/MaazAli/highcharts-3d

**Installation:**

    $ meteor add maazalik:highcharts

**Template:**

    // myTempmlate.html
    {{> highchartsHelper chartId="test" chartWidth="100%" charHeight="100%" chartObject=topGenresChart}}

**Scripts::**

    // myTemplate.js
    Template.myTemplate.topGenresChart = function() {
        return {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: this.username + "'s top genres"
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        },
                        connectorColor: 'silver'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'genre',
                data: [
                    ['Adventure',   45.0],
                    ['Action',       26.8],
                    ['Ecchi',   12.8],
                    ['Comedy',    8.5],
                    ['Yuri',     6.2]
                ]
            }]
        };
    };


## s-alert

**Flash message**

* https://atmospherejs.com/juliancwirko/s-alert
* http://s-alert.meteor.com/
* http://s-alert-demo.meteor.com/
* https://github.com/juliancwirko/meteor-s-alert/


- utilise une collection null: sAlert.collection

	$ meteor add juliancwirko:s-alert

	effets:
		scale - meteor add juliancwirko:s-alert-scale
		slide - meteor add juliancwirko:s-alert-slide
		genie - meteor add juliancwirko:s-alert-genie
		jelly - meteor add juliancwirko:s-alert-jelly
		flip - meteor add juliancwirko:s-alert-flip
		bouncyflip - meteor add juliancwirko:s-alert-bouncyflip

		stackslide - meteor add juliancwirko:s-alert-stackslide
			essai

	positions
		top-left
		bottom-left
		top-right (default)
		bottom-right
		top (full width)
		bottom (full width)

	<body>
		{{> sAlert}}
	</body>

	# client:
	Meteor.startup(function () {
		sAlert.config({
			effect: 'stackslide',
			position: 'top',
			timeout: 5000,
			html: false,
			onRouteClose: true,
			stack: true,
			offset: 0
		});
	});

	sAlert.error('Your message', configOverwrite);

