import logo from  "../../assets/img/dsmeta-logo.svg"
import "./styles.css"
function header() {
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta"/>
            <h1>DSMeta</h1>
            <p>Desenvolvido por
                <a href="https://www.instagram.com/daniel2009az/" target="_blank">@daniel2009az </a>
            </p>
        </div>
    </header>
    )


}
export default header