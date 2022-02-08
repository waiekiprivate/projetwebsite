import React from 'react';
import Navbar from "../components/header/navbar";
import Footer from "../components/footer/footer";

import './Panier.css'

function Panier(props) {

    const { cartItems, onAdd, onRemove, onClear } = props;
    const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.prix, 0);

    return (
        <div className="Panier">
            <Navbar />
            <div className='divForPanier '>
                <h1 className='bg-light mb-5 rounded shadow p-3 container' style={{ width: 45 + '%' }}><svg style={{ width: 3 + 'rem' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>panier</h1>
                <div className='d-flex container divG2InP'>
                    <div className="card mb-3  shadow p-3 container align-self-center me-5">
                    {cartItems.length === 0 && <h1 className="text-dark">Le panier est vide</h1>}
                    {cartItems.map((item) => (
                        <div key={item.id} className="row g-0 d-flex align-items-center">
                            <div className='divBlueStyleInCard' style={{ height: 45 + 'px' }} ></div>
                            <div className="col-md-4">
                                <img src={item.image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body d-flex align-items-center text-center">
                                    <h5 className="card-title me-3">{item.nom}</h5>
                                    <div className='d-flex'>
                                        <button onClick={() => onRemove(item)} className='btn border-end-0 border-dark shadow text-dark '>-</button>
                                        <button className='btn border-end-0 border-dark shadow text-dark '>{item.qty}</button>
                                        <button onClick={() => onAdd(item)} className='btn  border-start-0 border-dark shadow text-dark'>+</button>
                                    </div>
                                    <p className=" ms-3  me-3 card-text text-success fw-bolder fs-4 ">{item.prix.toFixed(2)}€</p>
                                   
                                
                                
                                </div>
                            </div>
                            <div className='divBlueStyleInCard' style={{ height: 45 + 'px' }}></div>
                        </div>
                    ))}

                    </div>
                    <div className='divgrecap text-white p-4 rounded shadow'>
                        <div className='d-flex justify-content-between'>
                            <p className='fs-4'>{cartItems.length} Article</p>
                            <p className='fs-4'>{totalPrice.toFixed(2)}€</p>
                        </div>
                        <hr />
                        <div>
                            <p className='text-center text-warning'>vous avez un code promo ?</p>
                        </div>
                        <hr />
                        <div className='d-flex'>
                            <svg className='me-2' style={{ width: 2 + 'rem' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck-loading" class="svg-inline--fa fa-truck-loading fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M50.2 375.6c2.3 8.5 11.1 13.6 19.6 11.3l216.4-58c8.5-2.3 13.6-11.1 11.3-19.6l-49.7-185.5c-2.3-8.5-11.1-13.6-19.6-11.3L151 133.3l24.8 92.7-61.8 16.5-24.8-92.7-77.3 20.7C3.4 172.8-1.7 181.6.6 190.1l49.6 185.5zM384 0c-17.7 0-32 14.3-32 32v323.6L5.9 450c-4.3 1.2-6.8 5.6-5.6 9.8l12.6 46.3c1.2 4.3 5.6 6.8 9.8 5.6l393.7-107.4C418.8 464.1 467.6 512 528 512c61.9 0 112-50.1 112-112V0H384zm144 448c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path></svg>
                            <p>Livraison à domicile: 5€ (Max. 60kg)</p>

                        </div>
                        <hr />
                        <div className='divInDivRecap text-center d-flex flex-column align-items-center'>
                            <p className='opacity-75 p-2' style={{ width: 230 + 'px' }}>Le service de livraison est disponible pour les commandes à partir de 15 € .
                                En-dessous de ce montant veuillez choisir le retrait en magasin pour votre commande.</p>
                        </div>
                        <button onClick={() => onClear()} type="button" class="btn btn-warning">Commander</button>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Panier;