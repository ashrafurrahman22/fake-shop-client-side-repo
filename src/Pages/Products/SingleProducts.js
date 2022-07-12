import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProducts = ({product}) => {

    const {title, price, description,category, rating, image} = product;

    const navigate = useNavigate();

    const navigateToProductDetails = id =>{
        navigate(`/product/${id}`);
    }

    return (
        <div class="card rounded-2xl bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={image} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body">
    <h2 class="card-title text-center">{title}</h2>
    <div className='text-left font-semibold'>
    <h4>Category: {category}</h4>
    <h4>Price: ${price}</h4>
    <h4>Rating: {rating.rate}</h4>
    </div>
    <p>{description}</p>
    <div class="card-actions">
      <button 
      onClick={() => navigateToProductDetails(product.id)} class="btn btn-primary mx-auto w-full">Details</button>
    </div>
  </div>
</div>
    );
};

export default SingleProducts;