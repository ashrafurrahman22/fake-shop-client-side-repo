import React from 'react';

const Banner = () => {
    return (
        <div className="hero my-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://media.istockphoto.com/photos/rack-with-stylish-womens-summer-clothes-concept-for-shopping-store-picture-id1321255356?b=1&k=20&m=1321255356&s=170667a&w=0&h=BqOL-oL0mfptcRJnfLn0igO3SU247P3HgTGralsRhaU=" className="max-w-xl rounded-lg shadow-2xl" />
                <div className='p-6'>
                    <h1 className="text-5xl font-bold">The Best Product is here for you</h1>
                    <p className="py-6">We are specialists in providing the most advanced and reliable products in providing ongoing, top-notch service. Our systems, service, and consulting capabilities are key to providing high performance and reliability.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;