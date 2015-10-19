import React from 'react';

class ReactPreloadImages extends React.Component {
  componentDidMount() {
    preload(this.props.images)
  }
  render() {
    return (
      <span></span>
    );
  }
}
ReactPreloadImages.propTypes = {
  images: React.PropTypes.array.isRequired
}
function preload(imageArray, index) {
  index = index || 0;
  if (imageArray && imageArray.length > index) {
    var img = new Image ();
    img.onload = function() {
        preload(imageArray, index + 1);
    }
    img.src = imageArray[index];
  }
}
export default ReactPreloadImages;
