import Modal from 'bootstrap/js/src/modal'
import './cards.css'

const Cards = (props) => {

    const { cards, onAdd } = props;

    return (
       
            <div className="cardback card cardi cardzoom  shadow-sm p-3 mb-5  rounded "  style={{ width: 16 + 'rem' }}>
                <img src={cards.image} className="card-img-top" alt="..." />

                <div className="card-body d-flex align-items-center flex-column ">
                    <h5 className="card-title text-center">{cards.nom}</h5>
                    <p className="card-text text-center">unités: {cards.stock}</p>
                    <p className="card-text text-danger text-center">{cards.prix}€</p>
                    <a onClick={() => { onAdd(cards) }} className={cards.stock <= 0 ? "d-none" : "btn btn-danger d-flex align-items-center"}>ajouter au panier</a>
                    <a className={cards.stock <= 0 ? "btn btn-secondary d-flex align-items-center" : "d-none"}>Out of stock</a>
                    <button type="button" className="btn btn-warning mt-1 d-flex text-center"data-bs-toggle="modal" data-bs-target={'#'+ cards.nom.replace(/[^0-9a-z]/gi, '')}>
                    Information
                    </button>
                </div>

                <div className="modal fade text-white" id={cards.nom.replace(/[^0-9a-z]/gi, '')} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark" id="exampleModalLabel">{cards.nom}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <div className='d-flex container flex-column align-items-center'>
                                <div>
                                    <img className='rounded' style={{ width: 14 + 'rem' }} src={cards.image} alt="" />
                                </div>
                                <div className='divInfosplus text-center mb-4 mt-4 divArtiPage rounded col-md-6 shadow  text-white flex-column d-flex align-items-center justify-content-evenly' style={{ width: 22 + 'rem' }}>
                                    <h2 className="mt-4">{cards.nom}</h2>
                                    <h1>{cards.prix}€</h1>
                                    <p className="card-text text-center">unités: {cards.stock}</p>
                                    <a onClick={() => { onAdd(cards) }} className={cards.stock <= 0 ? "d-none" : "btn btn-danger d-flex align-items-center mb-4"}>ajouter au panier</a>
                                    <a className={cards.stock <= 0 ? "btn btn-secondary d-flex align-items-center" : "d-none"}>Out of stock</a>
                                </div>
                                <div className='divLivr mb-4 divArtiPage2 rounded shadow ms-4 align-self-center align-items-center d-flex flex-column' style={{ height: 100 + '%' }}>
                                    <h4 className='mb-5 mt-3 '>Mode de livraison disponible</h4>
                                    <div className=' ms-2 d-flex align-items-center'>
                                    <svg className='svgHomeTruck' style={{ width: 2 + 'rem' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
                                        <p className='ms-3' style={{ width: 150 + 'px' }}>Retrait en magasin <span className='opacity-50'>selon disponibilité</span></p>
                                        <p className=' ms-5 text-success'><svg className=' me-1'  style={{ height: 17 + 'px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>disponible</p>
                                    </div>
                                    <hr style={{ width: 15 + 'rem' }} />
                                    <div className=' ms-2 d-flex align-items-center'>
                                    <svg className='svgHomeTruck' style={{ width: 2 + 'rem' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck" class="svg-inline--fa fa-truck fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path></svg>
                                        <p  className='ms-3' style={{ width: 150 + 'px' }}>Livraison à domicile <span  className='opacity-50'>Dans les 2 à 3 jours ouvrés</span></p>
                                        <p className=' ms-5 text-success'><svg className='  me-1'  style={{ height: 17 + 'px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>disponible</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Cards