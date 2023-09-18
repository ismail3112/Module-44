import PropTypes from 'prop-types'
import { AiFillCheckCircle } from "react-icons/ai";

const Features = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2'> <AiFillCheckCircle className='text-white'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

Features.PropTypes = {
    feature: PropTypes.string
}

export default Features;