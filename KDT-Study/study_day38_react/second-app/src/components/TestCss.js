import '../style/TestCss.scss';

/* const divStyle = {
  backgroundColor: "orange",
}

const headingStyle = {
  color: "blue",
}

const spanStyle = {
  backgroundColor: "pink",
  fontWeight: "bold"
}
*/

export default function TestCSS() {
  return (
    <div className="component-root">
      <h1 >h1 태그입니다. </h1>
      <span>스팬 태그입니다.!</span>
    </div>
  )
}