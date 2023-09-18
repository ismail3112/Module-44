import PropTypes from 'prop-types'
import Features from '../Features/Features';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-sky-500 p-4 rounded-md text-center flex flex-col text-white'>
            <h2>
                <span className='text-6xl font-semibold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-4xl'>{name}</h4>
          <div className='pl-6 pt-6 flex-grow'>
          {
                features.map((feature , index) => <Features key={index} feature={feature}></Features>)
            }
          </div>
            <button className='mt-12 bg-green-600 w-full text-center py-2 font-bold rounded-lg hover:bg-green-950'>Buy Now</button>
        </div>
    );
};

PriceOption.PropTypes = {
    option: PropTypes.object
}

export default PriceOption;