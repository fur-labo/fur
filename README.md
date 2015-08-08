fur
=====

Quick generator for log, banner, favicon, etc...

<!-- Badge start -->

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![dependencies][my_gemnasium_badge_url]][my_gemnasium_url]
[![npm version][my_npm_budge_url]][my_npm_url]
[![Gratipay][my_gratipay_budge_url]][my_gratipay_url]

<!-- Badge end -->


<!-- Banner start -->

<a href="https://github.com/okunishinishi/node-fur#readme"><img style="height:128px;" src="docs/assets/images/fur-banner.png" height="128"/></a>

<!-- Banner end -->

<!-- Concept start -->

```javascript
// Generate favicon with command options.
$ fur favicon "my-favicon.png" --color a --font g --text 'f' --style 'rounded'
```



<!-- Concept end -->



<!-- Table start -->

Table of Contents
-----
- [Getting started](#02-howto)
    - [Requirements](#02-howto-requirements)
    - [Installation](#02-howto-installation)
    - [Available Commands](#02-howto-available--commands)
    - [Programmatic API](#02-howto-programmatic--a-p-i)
- [Generating Logo Banner](#03-banners)
    - [Banner Examples](#03-banners-banner--examples)
    - [Banner Usage](#03-banners-banner--usage)
- [Generating Favicon](#04-favicons)
    - [Favicon Examples](#04-favicons-favicon--examples)
    - [Favicon Usage](#04-favicons-favicon--usage)
- [License](#10-license)
- [About this project](#11-project)
    - [Author](#11-project-author)
    - [Donation](#11-project-donation)

<!-- Table end -->


<!-- Sections start -->

<a name="02-howto"></a>
Getting started
------

<a name="02-howto-requirements"></a>
### Requirements

+ [node.js&gt;=0.10.3][nodejs_url]
+ [phantomjs](http://phantomjs.org/)

<a name="02-howto-installation"></a>
### Installation

fur is available as an [npm][npm_url] package.

```bash
# Install fur as a global module.
$ npm install fur -g
```

Or you can install it without `-g` option and use [Programmatic API](#programmatic-api).
For more details, see tutorial section "[01 - Installing fur][01_installing_fur_url]".


<a name="available commands" />
<a name="02-howto-available--commands"></a>
### Available Commands

```bash
$ fur -h

  Usage: fur [options] [command]


  Commands:

    banner [options] <filename>      Generate a banner.
    favicon [options] <filename>     Generate a favicon.
    identicion [options] <filename>  Generate a identicon.

  Options:

    -h, --help     output usage information
    -V, --version  output the version number


```

<a name="programmatic-api" />
<a name="02-howto-programmatic--a-p-i"></a>
### Programmatic API

fur provides programmatic API which enables you to execute fur commands from Node.js program.

```javascript
var fur = require('fur');
fur.banner('my-banner.svg', {
    "text": "coz",
    "color": "o",
    "font": "aa",
    "style": "plain",
    "format": "svg"
}, function (err) {
});
```
<a name="03-banners"></a>
Generating Logo Banner
------------------

<a name="03-banners-banner--examples"></a>
### Banner Examples

| Image | Command |
| ----- | ------- |
| <img src="./docs/examples/images/example-fur-banner.png" height="40" style="height:40px;" /> | ` $ fur banner --text="FUR" --color="e" --font="bt" --style="default" --format="png"  ` |
| <img src="./docs/examples/images/example-coz-banner.png" height="40" style="height:40px;" /> | ` $ fur banner --text="coz" --color="o" --font="aa" --style="plain" --format="png"  ` |
| <img src="./docs/examples/images/example-apeman-banner.png" height="40" style="height:40px;" /> | ` $ fur banner --text="apeman" --color="ad" --font="dj" --style="default" --format="png"  ` |
| <img src="./docs/examples/images/example-apeman-scaffold-banner.png" height="40" style="height:40px;" /> | ` $ fur banner --text="apeman-scaffold" --color="ad" --font="dj" --style="bordered" --format="png"  ` |


<a name="03-banners-banner--usage"></a>
### Banner Usage

```bash
$ fur banner -h


  Usage: banner [options] <filename>

  Generate a banner.

  Options:

    -h, --help                 output usage information
    -c, --color <color>        Color expression string or color theme name.
    -H, --height <height>      Banner height.
    -f, --font <font>          Font file name or font theme name.
    -F, --fontsize <fontsize>  Size of font.
    -o, --format <format>      File format. 'svg' or 'png'.
    -s, --style <style>        Banner style.
    -t, --text <text>          Banner text.
    -W, --width <width>        Banner width.


```



<a name="04-favicons"></a>
Generating Favicon
------------------

<a name="04-favicons-favicon--examples"></a>
### Favicon Examples

| Image | Command |
| ----- | ------- |
| <img src="./docs/examples/images/example-f-favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon --text="F" --color="e" --font="bt" --style="default" --format="png"  ` |
| <img src="./docs/examples/images/example-c-favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon --text="c" --color="o" --font="aa" --style="plain" --format="png"  ` |
| <img src="./docs/examples/images/example-ap-favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon --text="ap" --color="ad" --font="dj" --style="circle" --format="png"  ` |
| <img src="./docs/examples/images/example-aps-favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon --text="aps" --color="ad" --font="dj" --style="bordered" --format="png"  ` |


<a name="04-favicons-favicon--usage"></a>
### Favicon Usage

```bash
$ fur favicon -h


  Usage: favicon [options] <filename>

  Generate a favicon.

  Options:

    -h, --help                 output usage information
    -c, --color <color>        Color expression string or color theme name.
    -f, --font <font>          Font file name or font theme name.
    -F, --fontsize <fontSize>  Size of font.
    -o, --format <format>      File format. 'svg' or 'png'.
    -S, --size <size>          Favicon size.
    -s, --style <style>        Favicon style.
    -t, --text <text>          Favicon text.


```



<a name="10-license"></a>
License
-------
This software is released under the [MIT License][my_license_url].

<a name="11-project"></a>
About this project
--------

[![Bitdeli Badge][my_bitdeli_badge_url]][bitdeli_url]

<a name="11-project-author"></a>
### Author

+ [Taka Okunishi](http://okunishitaka.com)

<a name="11-project-donation"></a>
### Donation

Support this project and [others by okunishinishi][my_gratipay_url] via [gratipay][my_gratipay_url].

[<img src="https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg" alt="Support via Gratipay"/>][my_gratipay_url]


<!-- Sections end -->


<!-- Links start -->

[nodejs_url]: http://nodejs.org/
[npm_url]: https://www.npmjs.com/
[nvm_url]: https://github.com/creationix/nvm
[bitdeli_url]: https://bitdeli.com/free
[my_bitdeli_badge_url]: https://d2weczhvl823v0.cloudfront.net/okunishinishi/node-fur/trend.png
[my_repo_url]: https://github.com/okunishinishi/node-fur
[my_travis_url]: http://travis-ci.org/okunishinishi/node-fur
[my_travis_badge_url]: http://img.shields.io/travis/okunishinishi/node-fur.svg?style=flat
[my_license_url]: https://github.com/okunishinishi/node-fur/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-fur
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-fur.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-fur.svg?style=flat
[my_apiguide_url]: http://okunishinishi.github.io/node-fur/apiguide/module-fur.html
[my_coverage_url]: http://okunishinishi.github.io/node-fur/coverage/lcov-report
[my_coverage_report_url]: http://okunishinishi.github.io/node-fur/coverage/lcov-report/
[my_gratipay_url]: https://gratipay.com/okunishinishi/
[my_gratipay_budge_url]: http://img.shields.io/gratipay/okunishinishi.svg?style=flat
[my_npm_url]: http://www.npmjs.org/package/fur
[my_npm_budge_url]: http://img.shields.io/npm/v/fur.svg?style=flat
[my_tag_url]: http://github.com/okunishinishi/node-fur/releases/tag/
[my_tag_badge_url]: http://img.shields.io/github/tag/okunishinishi/node-fur.svg?style=flat
[my_gemnasium_url]: http://gemnasium.com/okunishinishi/node-fur
[my_gemnasium_badge_url]: http://img.shields.io/gemnasium/okunishinishi/node-fur.svg?style=flat
[my_inch_badge_url]: http://inch-ci.org/github/okunishinishi/node-fur.svg?branch=master
[my_inch_url]: http://inch-ci.org/github/okunishinishi/node-fur

<!-- Links end-->

<!-- Tutorial urls start -->

[01_installing_fur_url]: https://github.com/okunishinishi/node-coz/blob/master/docs/tutorial/01%20-%20Installing%20fur.md

<!-- Tutorial urls end -->
