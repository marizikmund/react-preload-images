# react-preload-images
Sequential preloading of images in ReactJS for their faster appearance on the site without slowing down the loading of other assets.

`npm install react-preload-images --save`

The only necessary property is `images`: Array (urls of images to preload)

```jsx

var React = require('react');
var ReactPreloadImages = require('react-preload-images');

React.render(<ReactPreloadImages images={['http://example.com/sth.jpg','http://example.com/sth2.jpg']} />, document.body);

```
