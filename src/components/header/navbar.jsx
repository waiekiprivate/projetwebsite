import "./navbar.css"
import halalcat from '../../images/halalcat.png'
import { useNavigate } from "react-router-dom"

function Navbar() {
    let navigate = useNavigate()
    return (
        <header>
            <nav className=" navbarpAcc navbar navbar-expand-lg navbar-light bg-lightshadow-lg p-3  bg-body ">
                <div className="container-fluid">
                <img src={halalcat} alt="logo" width="120" height="100" />

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-5">
                            <input className="form-control ms-5 " style={{ width: 30 + 'rem' }} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btnsearch btn text-dark  fw-bolder me-5" type="submit">Search</button>
                        </form>

                    </div>
                        <button onClick={() => {navigate("/admin")}} className="btn border border-1 ms-5  me-3"> <svg style={{ width: 30 + 'px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-alt" class="svg-inline--fa fa-user-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path></svg></button>
                        <button onClick={() => {navigate("/panier")}} className="btn btnPanier  border border-1 me-3"><svg  style={{ width: 35 + 'px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg></button>

                </div>

            </nav>
            <div className="navbarlink2 navbar navbar-expand-lg container-fluid  rounded shadow p-3 mb-5 sticky-top">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 container fw-bold">
                    <li className="nav-item ">
                        <a onClick={() => {navigate("/")}} className="nav-link " href="#">acceuil</a>
                    </li>
                    <li className="nav-item ">
                        <a onClick={() => {navigate("/chat")}} className="nav-link " href="#">chats</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => {navigate("/chien")}} className="nav-link" href="#">chiens</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => {navigate("/oiseaux")}} className="nav-link" href="#">oiseaux</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => {navigate("/poisson")}} className="nav-link" href="#">poisson</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => {navigate("/rongeur")}} className="nav-link" href="#">rongeur</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}



export default Navbar