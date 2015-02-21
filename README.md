# &lt;memory-stats&gt; element

&lt;memory-stats&gt; provides a [Custom Element](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/) for [memory-stats.js](https://github.com/paulirish/memory-stats.js).

## Installation

Available on [Bower](http://bower.io) as **memory-stats-element**.

```
$ bower install memory-stats-element
```

This component is built on the upcoming [Web Component](http://webcomponents.org/) stack. Specifically, it requires a feature called [Custom Elements](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/).

You'll need to use a polyfill to get this feature today. Either the [Polymer](http://www.polymer-project.org/) or [X-Tag](http://www.x-tags.org/) frameworks supply a polyfill, or you can install the standalone [CustomElements](https://github.com/webcomponents/webcomponentsjs) polyfill.

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.5.5/CustomElements.min.js"></script>
```

You would also need the [memory-stats.js](https://github.com/paulirish/memory-stats.js) package available from [Bower](http://bower.io).

```
$ bower install memory-stats
```

## Usage

This component provides a very basic element, `<memory-stats>`. Simply
add the following anywhere inside the `<body>` of your HTML element.

```html
<memory-stats></memory-stats>
```

## Ack

Thanks to [@paulirish's](https://github.com/paulirish/memory-stats.js) memory-stats.js project.
