# :floppy_disk: Input File

## Classic
<br>
<InputFile-Classic></InputFile-Classic>

```html
<label for="file">Input file</label>
<input type="file" id="file">
```

<<< @/src/scss/components/inputfile/_classic.scss

## Custom
<br>
<InputFile-Custom></InputFile-Custom>

```html
<div class="input-file">
	<input type="file" id="file" data-multiple-caption="{count} files selected" multiple>
	<label for="file"><i class="icon icon-eye"></i><span>Choice file</span></label>
</div>
```

<<< @/src/scss/components/inputfile/_custom.scss

:::warning For use this you need JS
[inputFile.js](/javascript/forms/inputfile.html)
:::

## Media
<br>
<InputFile-Media></InputFile-Media>

```html
<div class="input-media">
	<input type="file" id="file">
	<label for="file">
		<span class="media-preview"></span>
	</label>
</div>
```

<<< @/src/scss/components/inputfile/_media.scss

:::warning For use this you need JS
[InputMedia.js](/javascript/forms/inputmedia.html)
:::