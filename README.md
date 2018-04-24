# Adorn

Adorn is a theme for *plain* markup. It aims to make unstyled HTML much more user friendly with minimal fuss. Simply include a style and a script into the document.

It comprises of two external files:

- `/adorn/adorn.css` Basic style for plain markup
- `/adorn/adorn.js` Navigtational UI Components, etc...

Take a look at the simple source of this page [right click view source]


## Options

Adorn will derive options from a few places

- A [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
	If a Link tag such as `<link rel=manifest href=/app/manifest.json />` can be found it will load the address defined there or take a bet on it being in the root at `/manifest.json`, but if neither exists it'll carry on regardless.

- Document overides come from `<meta>` tags with a matching `name` property.



Default site Favicon to be put into page

	"favicon" : "/favicon.ico",

Github name or name/repo for linking through, edit options

	"github" : "MrSwitch",

Twitter sharing link

	"twitter:creator" : "@setData",

Shoutout message appears in top right of navbar

	"shoutout": "Adorn: <i>make more beautiful or attractive.</i>",

Footer Author link

	"author" : "Andrew Dodson, https://adodson.com",

Serviceworker URL to register.

	"serviceworker": "./adorn_sw.js",

Fallover, page to show when offline

	"fallover" : [{
		"mode": "navigate",
		"fallover": "/offline.html"
	}],





## Rules

### //localhost/adorn/

The adorn path must be available at http://localhost/adorn/ when developing. This means your assets can be referenced relative to the root, e.g.

```html
	# Loads the basic page CSS
	<link rel="stylesheet" href="/adorn/adorn.css" />

	# Loads the page navigational components and their styles
	<script src="/adorn/adorn.js" async></script>
```

This has the benefit of continuity with GitHub Pages. Once you have pushed the adorn files up to gh-pages, your other projects gh-pages are relative, so assets are looking at your adorn gh-page.

Also when you fork an exisiting project which references adorn in this way, you wont see an unstyled page youll see your adorn theme.


### Custom classes, Keep it out

Avoid attributing custom classes, id's, javascript, to your HTML files which only exist in your version of adorn, these may not be in someone elses instances of Adorn.


### Flat DOM
Avoid nesting elements for the sake of style, the document should be linear and all block level elements should really belong to body.

If your familiar with [MarkDown](https://en.wikipedia.org/wiki/Markdown) then you're already initiated into this idea.


## Example

This page is hosted on [https://adodson.com/adorn](https://adodson.com/adorn/) and shows how the markup is themed.