import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';

const ProductDetails = () => {

    const {productId} = useParams();
    const [data] = useProductDetails(productId);

    const {image, title, price, description, rating, category} = data;

    return (
        <div>

            <div className='card w-64 mt-5 bg-base-100 shadow-xl mx-auto mb-5'>
                <div className='card-body bg-primary'>
                    <h2 className="text-center text-4xl font-bold text-white tracking-widest">Details</h2> <hr />
                </div>
            </div>

            <div class="card p-10 lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <h2 class="card-title">Category: {category}</h2>
    <h2 class="card-title">Price: ${price}</h2>
    <h2 class="card-title">Ratings: {rating?.rate}</h2>
    <h2 class="card-title">Count: {rating?.count}</h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;