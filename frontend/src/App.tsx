import Header from "./components/Header";
import SalesCard from "./components/SalesCard/index";
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dev-superior-container">
            <div className="dev-superior">
              <p> Intensivo proporcionado por <a href="https://www.instagram.com/devsuperior.ig/?hl=pt" target="_blank">@devsuperior.ig</a> </p>
            </div>
          </div>
          <div className="dsmeta-card-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
