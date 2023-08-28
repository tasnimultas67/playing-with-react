import { useEffect, useState } from 'react';
import Price from '../Price/Price';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-extrabold text-center'>Affordable <span className='text-purple-600'>Prices</span></h2>
            <div className='block md:grid lg:grid grid-cols-3 gap-5 px-[1rem] md:px-[3rem] lg:px-[3rem] mt-5 w-10/12 m-auto'>
                {
                    prices.map(price => <Price price={price} key={price.id}></Price>)
                }
            </div>
        </div>
    );
};

export default PriceList;