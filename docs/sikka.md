# sikka

* [Sources](https://github.com/meteorhacks/sikka)
* [Atmosphere](https://atmospherejs.com/meteorhacks/sikka)
* [Documentation](https://meteorhacks.com/introducing-sikka-a-firewall-for-meteor-apps)


* [Google ReCaptcha](https://www.google.com/recaptcha/intro/index.html)

- Fonctionnalités
  - Firewall app - anti ddos
  - Configurable par variables d'environnement
  - Limitation request par ip
  - Captcha
  - Gère la récupération de l'ip réelle derrière un proxy comme Nginx

## Installation

    meteor add meteorhacks:sikka

**Packages ajoutés:**

    chuangbo:cookie      added, version 1.1.0
    meteorhacks:meteorx  added, version 1.3.1
    meteorhacks:picker   added, version 1.0.2
    meteorhacks:sikka    added, version 1.0.1


## Configuration par l'environnement

    env: SIKKA_PER_IP_MAX_RPS
    settings: sikka.rateLimits.perIp
    default: 20

    env: SIKKA_BLOCK_IP_FOR_MILLIS
    settings: sikka.times.blockIpFor
    default: 120000

    SIKKA_CAPTCHA_SITE_KEY
    sikka.captcha.siteKey

    SIKKA_CAPTCHA_SECRET
    sikka.captcha.secret

    SIKKA_PER_HUMAN_MAX_RPS
    sikka.times.blockIpFor
    IP Rate Limit

    SIKKA_HUMAN_LIVES_UPTO_MILLIS
    sikka.times.humanLivesUpto
    3600000

## Configuration par settings.json

    {
      "sikka": {
           "captcha": {
               "siteKey": "your_new_site_key",
               "secret":  "your_new_secret_key"
           }
      }
    }

