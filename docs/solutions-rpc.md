# Solutions RPC

Accès à Meteor depuis l'extérieur

- ZMQ zerorpc / nodejs/python
	http://www.zerorpc.io/
	https://www.npmjs.com/package/zmq
	https://github.com/JustinTulloss/zeromq.node
	http://zguide.zeromq.org/js:_start
	https://www.npmjs.com/package/zerorpc
	http://ianhinsdale.com/code/2013/12/08/communicating-between-nodejs-and-python/
	https://www.npmjs.com/package/stack.io-experimental
	http://stackoverflow.com/questions/21069461/meteor-methods-with-zeromq-req-rep-never-returns-answer
	- Dans mongrey:
		- Serveur mongrey piloté par commandes RPC
		- Mongrey faisant des appels RPC à meteor ?

Eval https://github.com/mizzao/CrowdMapper et https://github.com/HarvardEconCS/turkserver-meteor
	> utilise: https://github.com/mizzao/meteor-partitioner

	# https://turkserver.meteor.com/
	# https://github.com/HarvardEconCS/turkserver-meteor
	# https://github.com/jefftimesten/mturk/tree/master
	meteor create testturkserver
	cd testturkserver
	git clone --recursive https://github.com/HarvardEconCS/turkserver-meteor.git packages/mizzao:turkserver
	meteor add mizzao:turkserver
	vi settings.json
	{
		"turkserver": {
			"adminPassword": "password",
			"hits": {
				"acceptUnknownHits": "true"
			},
			"mturk": {
				"accessKeyId": "",
				"secretAccessKey": ""
			}
		}
	}
	ROOT_URL=https://XXXX MONGO_URL=mongodb://localhost/turkserver meteor -p $IP:$PORT --settings settings.json
	https://XXX/turkserver

	apt-get install -y --no-install-recommends libzmq-dev libevent
	git clone https://github.com/mizzao/CrowdMapper.git
	cd CrowdMapper

	vi settings.json
	HTTP_FORWARDED_COUNT=1 ROOT_URL=https://XXX MONGO_URL=mongodb://localhost/crowdmapper meteor -p $IP:$PORT --settings settings.json --production

	virtualenv venv
	source ./venv/bin/activate
	pip install pyzmq zerorpc munkres
		https://pypi.python.org/pypi/munkres/1.0.7

