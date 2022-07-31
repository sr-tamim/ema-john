import './Rating.css';

const Rating = ({ initialRating }) => {
    return (
        <span className='rating-container'>
            <span className="empty-stars">
                <i className="fa fa-star-o icon-color" />
                <i className="fa fa-star-o icon-color" />
                <i className="fa fa-star-o icon-color" />
                <i className="fa fa-star-o icon-color" />
                <i className="fa fa-star-o icon-color" />
            </span>
            <span className="filled-stars" style={{ width: `${initialRating / 5 * 100}%` }}>
                <i className="fa fa-star icon-color" />
                <i className="fa fa-star icon-color" />
                <i className="fa fa-star icon-color" />
                <i className="fa fa-star icon-color" />
                <i className="fa fa-star icon-color" />
            </span>
        </span>
    );
};

export default Rating;