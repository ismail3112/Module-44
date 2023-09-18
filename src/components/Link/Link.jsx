import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-10 hover:bg-red-200 p-2 rounded-md">
            <a href={route.path}>{route.name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;