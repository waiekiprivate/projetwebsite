import Navbar from "../components/header/navbar";
import Footer from "../components/footer/footer";
import AdminForm from "../components/adminForm/adminForm";
import { useState } from 'react';


function Admin(props) {

    const { ajoutArticle } = props;

    return (
        <div className="Admin">

            <Navbar />

            <AdminForm ajoutArticle={ajoutArticle} />

            <Footer />
            
        </div>
    );
}

export default Admin;