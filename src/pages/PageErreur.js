import Navbar from "../components/header/navbar";
import Footer from "../components/footer/footer";
import china from "../images/bing-chilling-eggman-super-idol-john-xina.mp4"


function PageErreur() {

  return (
    <div className="Home">
      <Navbar />

      <div className="w-100 d-flex justify-content-center mb-5 mt-2 pb-5 pt-5"><video src={china} width="500" height="280" controls autoplay/></div>

      <h1 className="text-center text-white mb-5">Désolé, la page que vous cherchez est introuvable.</h1>

      <Footer />
    </div>
  );
}

export default PageErreur;