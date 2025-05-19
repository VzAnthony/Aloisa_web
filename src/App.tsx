import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import LandingPage from "./components/Main/Main"

function App() {

  return (
    <div className="page_wrapper">
      <Header />
      <main className="content">
        <LandingPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
