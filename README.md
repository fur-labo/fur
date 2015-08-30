fur
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![Dependency Status][bd_gemnasium_shield_url]][bd_gemnasium_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/fur-repo/fur
[bd_travis_url]: http://travis-ci.org/fur-repo/fur
[bd_travis_shield_url]: http://img.shields.io/travis/fur-repo/fur.svg?style=flat
[bd_license_url]: https://github.com/fur-repo/fur/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/fur-repo/fur
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/fur-repo/fur.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/fur-repo/fur.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/fur-repo/fur
[bd_gemnasium_shield_url]: https://gemnasium.com/fur-repo/fur.svg
[bd_npm_url]: http://www.npmjs.org/package/fur
[bd_npm_shield_url]: http://img.shields.io/npm/v/fur.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Quick generator for banner, favicon, etc...

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>
<a href="https://github.com/fur-repo/fur#readme"><img style="height:128px;" src="docs/fur-banner.png" height="128"/></a>

```javascript
// Generate favicon with command options.
$ fur favicon "my-favicon.png" --color a --font g --text 'f' --style 'rounded'
```



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "docs/readme/02-howto.md.hbs" Start -->

<a name="section-docs-readme-02-howto-md"></a>
Getting started
------

### Requirements

+ [node.js&gt;=0.10.3][nodejs_url]
+ [phantomjs>=2.0.0](http://phantomjs.org/)

### Installation

fur is available as an [npm][npm_url] package.

```bash
# Install fur as a global module.
$ npm install fur -g
```

Or you can install it without `-g` option and use [Programmatic API](#programmatic-api).
For more details, see tutorial section "[01 - Installing fur][01_installing_fur_url]".


<a name="available commands" />
### Available Commands

```bash
$ fur -h

  Usage: fur [options] [command]


  Commands:

    banner [options] <filename>   Generate a banner.
    favicon [options] <filename>  Generate a favicon.

  Options:

    -h, --help     output usage information
    -V, --version  output the version number


```

<a name="programmatic-api" />
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


[nodejs_url]: https://nodejs.org/

<!-- Section from "docs/readme/02-howto.md.hbs" End -->

<!-- Section from "docs/readme/03-banners.md.hbs" Start -->

<a name="section-docs-readme-03-banners-md"></a>
Generating Logo Banner
------------------

### Banner Examples

| Image | Command |
| ----- | ------- |
| <img src="https://raw.githubusercontent.com/fur-repo/fur-examples/master/examples/01-fur/banner.png" height="40" style="height:40px;"/> | ` $ fur banner "fur-banner.png" --text="FUR" --color="e" --font="bt" --style="default"  ` |
| <img src="https://raw.githubusercontent.com/fur-repo/fur-examples/master/examples/02-coz/banner.png" height="40" style="height:40px;"/> | ` $ fur banner "coz-banner.png" --text="coz" --color="o" --font="aa" --style="plain"  ` |
| <img src="https://raw.githubusercontent.com/fur-repo/fur-examples/master/examples/03-apeman/banner.png" height="40" style="height:40px;"/> | ` $ fur banner "apeman-banner.png" --text="apeman" --color="#3C0B00" --font="p" --style="default"  ` |
| <img src="https://raw.githubusercontent.com/fur-repo/fur-examples/master/examples/04-pudding/banner.png" height="40" style="height:40px;"/> | ` $ fur banner "pudding-banner.png" --text="PUDDING" --color="#004BBB" --font="cn" --style="plain"  ` |
| <img src="https://raw.githubusercontent.com/fur-repo/fur-examples/master/examples/05-pon/banner.png" height="40" style="height:40px;"/> | ` $ fur banner "pon-banner.png" --text="pon" --color="g" --font="ar" --style="plain"  ` |

These examples are available [here]().

### Banner Usage

```bash
$ fur banner -h


  Usage: banner [options] <filename>

  Generate a banner.

  Options:

    -h, --help                 output usage information
    -c, --color <color>        Color expression string or color theme name.
    -s, --shape <shape>        Banner style.
    -f, --font <font>          Font file name or font theme name.
    -F, --fontsize <fontSize>  Size of font.
    -H, --height <height>      Banner height.
    -o, --format <format>      File format. 'svg' or 'png'.
    -t, --text <text>          Banner text.
    -W, --width <width>        Banner width.


```


<!-- Section from "docs/readme/03-banners.md.hbs" End -->

<!-- Section from "docs/readme/04-favicons.md.hbs" Start -->

<a name="section-docs-readme-04-favicons-md"></a>
Generating Favicon
------------------

### Favicon Examples

| Image | Command |
| ----- | ------- |
| <img src="https://raw.githubusercontent.com/fur-repo/fur-examples/master/examples/01-fur/favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon "f-favicon.png" --text="F" --color="e" --font="bt" --style="default"  ` |
| <img src="https://raw.githubusercontent.com/fur-repo/fur-examples/master/examples/02-coz/favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon "c-favicon.png" --text="c" --color="o" --font="aa" --style="plain"  ` |
| <img src="https://raw.githubusercontent.com/fur-repo/fur-examples/master/examples/03-apeman/favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon "ap-favicon.png" --text="ap" --color="#3C0B00" --font="p" --style="circle"  ` |
| <img src="https://raw.githubusercontent.com/fur-repo/fur-examples/master/examples/04-pudding/favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon "p-favicon.png" --text="P" --color="#004BBB" --font="cn" --style="default"  ` |
| <img src="https://raw.githubusercontent.com/fur-repo/fur-examples/master/examples/05-pon/favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon "pon-favicon.png" --text="pon" --color="g" --font="ar" --style="circle"  ` |

These examples are available [here]().


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
    -S, --size <size>          Favicon size.
    -s, --shape <shape>        Banner style.
    -t, --text <text>          Favicon text.
    -o, --format <format>      File format. 'svg' or 'png'.


```

<!-- Section from "docs/readme/04-favicons.md.hbs" End -->

<!-- Section from "docs/readme/05-Themes.md.hbs" Start -->

<a name="section-docs-readme-05-themes-md"></a>
Theme Gallery
------------

+ [Color Theme](http://fur-repo.github.io/fur-resources/color-gallery.html)
+ [Font Theme](http://fur-repo.github.io/fur-resources/font-gallery.html)


<!-- Section from "docs/readme/05-Themes.md.hbs" End -->

<!-- Section from "docs/readme/11-project.md.hbs" Start -->

<a name="section-docs-readme-11-project-md"></a>
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


[bitdeli_url]: https://bitdeli.com/free
[my_bitdeli_badge_url]: https://d2weczhvl823v0.cloudfront.net/okunishinishi/node-fur/trend.png

[my_gratipay_url]: https://gratipay.com/okunishinishi/
[my_gratipay_budge_url]: http://img.shields.io/gratipay/okunishinishi.svg?style=flat

<!-- Section from "docs/readme/11-project.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/fur-repo/fur/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [fur-examples](https://github.com/fur-repo/fur-examples)
+ [fur-resources](https://github.com/fur-repo/fur-resources)

<!-- Links End -->
