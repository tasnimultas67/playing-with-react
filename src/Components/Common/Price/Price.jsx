import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Price = ({ price }) => {
    const { name, pricing, features } = price
    // console.log(price)

    return (
        <div className="border text-center mb-5 p-5 rounded-md shadow-lg bg-gradient-to-t from-cyan-500 to-blue-500 text-white flex flex-col gap-y-3">
            <h2 className="text-sm">{name}</h2>
            <p className="mb-3">$<span className="text-3xl font-semibold">{pricing}</span>/month</p>
            <hr className='border-[#e5e7eb38]' />
            <p className='mt-3'>Features</p>
            {
                features.map((feature, i) => <Feature feature={feature} key={i}></Feature>)
            }
            <button className="w-full font-medium bg-blue-600 rounded text-white p-2 mt-auto focus:outline outline-offset-2 outline-2 outline-blue-500 border-none">Buy Now</button>

        </div>
    );
};
const Feature = ({ feature }) => {
    return (
        <div>
            <p className='flex justify-center items-center my-1 gap-1'><CheckCircleIcon className=" h-4 w-4 text-white" /> {feature}</p>
        </div>
    )
}

export default Price;