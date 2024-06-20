
import Nav from "./components/navbar"
import Footer from "./components/footer"
import { Outlet } from "react-router-dom"
import { Grid } from "./Grid.style"



function App() {

  return (
    <Grid>
      <Nav />
      <Outlet />
      <Footer />
    </Grid>
  )
}

export default App
