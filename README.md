# Adorn

> More of a concept than a repo.

Adorn is a theme for plain markup. And the emphasis is on __plain__. It's about making unstyled HTML look great again and adding useful little navigational aids to pages. All with minimal effort. Take a look at the simple source of this page.


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