import React, { Component } from 'react'

import './adminForm.css'

class adminForm extends Component {
  state = {
    nom: '',
    prix: '',
    image: '',
    stock: '',
    cate: '',
    id: '',
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    this.state.prix = parseInt(this.state.prix)
    this.state.stock = parseInt(this.state.stock)
    this.state.id = Date.now()
    event.preventDefault()
    const recette = { ...this.state }
    this.props.ajoutArticle(recette)
  }

  render() {
    return (
      <div className='d-flex '>
        <div className='container bg-light d-flex flex-column align-items-center rounded shadow divGInadmin'  style={{ width: 50 + '%' }}>

          <form className='' onSubmit={this.handleSubmit}>
           <div className='d-flex flex-column align-items-center'>
            <div className='mt-4 mb-3'>
              <svg style={{ width: 150 + 'px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-shield" class="svg-inline--fa fa-user-shield fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"></path></svg>
            </div>
            <input className='form-control mb-3 ' value={this.state.nom} onChange={this.handleChange} name='nom' type='text' placeholder={'nom'} />
            <input  className='form-control mb-3' value={this.state.prix} onChange={this.handleChange} name='prix' type='number' placeholder={'prix'} />
            <input  className='form-control mb-3' value={this.state.image} onChange={this.handleChange} name='image' type='text' placeholder={'image'} />
            <input  className='form-control mb-3' value={this.state.stock} onChange={this.handleChange} name='stock' type='number' placeholder={'stock'} />
            <input  className='form-control mb-3' value={this.state.cate} onChange={this.handleChange} name='cate' type='text' placeholder={'Catégorie'} />
            <button className='btn bg-danger text-white mb-4' type='submit'>+ Ajouter une recette</button>

           </div>
          </form>
        </div>
      </div>
    )
  }
}

export default adminForm