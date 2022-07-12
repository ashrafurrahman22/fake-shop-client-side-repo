import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import SingleProducts from './SingleProducts';

const Products = () => {

    const [products] = useProducts();

    return (
        <div>
            <div className='card w-64 mt-5 bg-base-100 shadow-xl mx-auto mb-5'>
                <div className='card-body bg-primary'>
                    <h2 className="text-center text-4xl font-bold text-white tracking-widest">Products</h2> <hr />
                </div>

            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-7'>
            {
                products.map(product => <SingleProducts
                key={product.id}
                product={product}
                ></SingleProducts>  )
            }
            </div>
        </div>
    );
};

export default Products;