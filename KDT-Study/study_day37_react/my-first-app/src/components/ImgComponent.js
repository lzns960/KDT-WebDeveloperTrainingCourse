import React from "react";
import loopyImg from '../loopy.jpg';

class ImgComponent extends React.Component {
  render () {
    return (
      <img src={ loopyImg } alt="루피"/>
    )
  }
}
/*
function ImgComponent() {
  return (
    <img src={ loopyImg } alt="루피"/>
  )
}
*/

export default ImgComponent;