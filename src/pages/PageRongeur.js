import Cards from "../components/cards/cards";
import Navbar from "../components/header/navbar";
import Footer from "../components/footer/footer";

function PageRongeur(props) {

  const { onAdd, data } = props;

  return (
    <div className="PageRongeur">
      <Navbar />

      <h1 className="text-center text-white mb-5">Pour les rongeurs :</h1>
      <div className="d-flex justify-content-center">

      <div className="d-flex container justify-content-around  row row-cols-1 row-cols-md-3 g-4">
            {/* methode map qui permet d'afficher tout les élement du tableau articles */}
            {data.filter(data => data.cate === "rongeur").map((cards) => {
            return(
                <Cards
                cards={cards}
                onAdd={onAdd}
            
                />
            )
            })}
      </div>

      </div>

      <Footer />
    </div>
  );
}

export default PageRongeur;