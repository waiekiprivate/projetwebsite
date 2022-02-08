import './footer.css'


const Footer  = () => {
    return(
        <footer className='footer-back ' >
            <div className='divFooterMediaColumn text-white d-flex justify-content-around mt-5 pt-5 pb-5 '> 

                <div className='text-center'>
                    <h2 className='mb-5 opacity-75'>a propos</h2>
                    <p>loremblzedazedhapiedhapdzhpiadhipahzdncqcc</p>
                </div>
                <div className='text-center'>
                    <h2 className='mb-5 opacity-75'>siege social</h2>
                    <p>rue de la soie kattegat 22</p>
                </div>
                <div className='text-center tagsInFooter' style={{ width: 16 + '%' }}>
                    {/* tags */}
                    <h2 className='mb-5 opacity-75'>tags</h2>
                    <button className='btn border border-1 text-white ms-2 mt-2 opacity-50'>food</button>
                    <button className='btn border border-1 text-white ms-2 mt-2 opacity-50'>express</button>
                    <button className='btn border border-1 text-white ms-2 mt-2 opacity-50'>rien</button>
                    <button className='btn border border-1 text-white ms-2 mt-2 opacity-50'>okok</button>
                    <button className='btn border border-1 text-white ms-2 mt-2 opacity-50'>jspspp</button>
                    <button className='btn border border-1 text-white ms-2 mt-2 opacity-50'>jspspp</button>
                </div>
            </div>




        </footer>
    )
}

export default Footer