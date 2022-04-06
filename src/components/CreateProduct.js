import React from 'react'
import CreateCss from './css/CreateProduct.css'

const CreateProduct = () => {
  return (
    <div className='zIndex'>
     


<div id="popup1" className="overlay">
	<div className="popup">
    <h2>Add Post</h2>
<form onSubmit={(e) => {e.preventDefault(); console.log(e.data)}} action="/posts" method='POST'>
<div className='title-div'>
    <input 
    
    type="text" placeholder='Title' name='title' required/>
    </div>
    <div className='options'>
    <select defaultValue={'DEFAULT'} name="category" id="select" required>
      <option value="none" selected disabled hidden>Select Category</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
  </select>
    </div>
    <hr />
    <div className="description">
    <input type="text" name='description' placeholder='Description' />
    </div>
    <div className="price">
      <input placeholder='Price' name='price' type="number" />
      <select defaultValue={'DEFAULT'} name="select" id="selecto">
      <option value="AMD" selected >֏</option>
      <option value="USD">$</option>
      <option value="EURO">€</option>
  </select>
    </div>
    <div className="images">
    <label className="custom-file-upload">
    <input name='image' type="file"/>
</label>
    </div><br />
    <div className='submit'>
      <button type='submit'>Create</button>

    </div>
</form>
  <a className="close" href="/">&times;</a>

	</div>
</div>
      
    </div>
  )
}

export default CreateProduct