


# Adorn

<blockquote>
	<p><b>Adorn</b>: not just an open source code repo, <b> a concept</b>.</p>
	<p>Adorn is your theme for plain markup.</p>
	<p>The idea is simple, make HTML tags look great, and add a little navigational aids to pages.</p>
</blockquote>

## Rules

<ol>
	<li>

		<h3>//localhost/adorn/</h3>

		<p>The adorn path must be available at http://localhost/adorn/ when developing. This means your assets can be referenced relative to the root, e.g.</p>

			<script type="text/html" class="pre">
				<link rel="stylesheet" href="/adorn/adorn.css" />
				<script src="/adorn/adorn.js"><\/script>
			</script>

		<p>This has the benefit of continuity with GitHub Pages. Once you have pushed the adorn files up to gh-pages, your other projects gh-pages are relative, so assets are looking at your adorn gh-page.</p>
		<p>Also when you fork an exisiting project which references adorn in this way, you wont see an unstyled page youll see your adorn theme.</p>

	</li>

	<li>
		<h3>Custom classes, Keep it out</h3>
		<p>Avoid attributing custom classes, id's, javascript, to your HTML files which only exist in your version of adorn, these may not be in someone elses instances of Adorn.</p>
	</li>

	<li>
		<h3>Flat DOM</h3>
		<p>Avoid nesting elements for the sake of style, the document should be linear and all block level elements should really belong to body.</p>
		<p>If your familiar with <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank">MarkDown</a> then you're already initiated into this idea.</p>
	</li>

</ol>

## Example

This page is hosted on [https://adodson.com/adorn](https://adodson.com/adorn) and shows how the markup is themed.