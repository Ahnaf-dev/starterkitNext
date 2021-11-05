

// react can't export syblings from  a component
// If you have new line between return and JSX you will get an error
// <></> react fragment - can use to export elements without parent
import AppBar from "../components/appbar"
import Brand from "../components/brand"
function Home() {
  return (
    <Brand title="Next.JS Starter Kit" tagline="starter kit for git"/>
  )
}


export default Home