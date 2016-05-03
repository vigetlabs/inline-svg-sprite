```
npm install inline-svg-sprite --save-exact
```


Inspired by https://css-tricks.com/ajaxing-svg-sprite/. Inlines external svgs sprites and updates `xlink:href` attributes in `<use>` tags to reference the inlined svg. 

## Usage
```js
import inlineSvgSprite from 'lib/inline-svg-sprite'

// For our good friends IE 11 and below :)
inlineSvgSprite(spritePath, iconSelector)
```

##### `spritePath` 
_string, required_

The path to your icon-sprite.

##### `iconSelector` 
_string, optional_ 

Default: `svg.icon`

This selector is used to find svg elements and update the `xlink:href` attributes in `<use>` tags. When an SVG is inlined, full urls are stripped, leaving just the ID.



