import { useEffect, useState } from 'react';
import './StarRating.css';
import Star from './Star';

const StarRating = ({ starsSelected, countRatings, onlyRead = true }) => {
    const totalStars = 5;

    const [rating, setRating] = useState(0);
    useEffect(() => {
        setRating(starsSelected);
    }, [starsSelected])

    const change = (selectedRating) => {
        if (onlyRead) return;
        setRating(selectedRating);
    }

    return (
        <div className="star-rating">
            <div className={onlyRead ? 'stars only-read' : 'stars'}>
                {
                    [...Array(totalStars)].map((n, i) => {
                        return <Star key={i} selected={i < rating} onlyRead={onlyRead} onClick={() => change(i + 1)} ind={i} />
                    })
                }
            </div>
            {
                onlyRead && countRatings !== undefined ? <p className="rating">({countRatings}<span> ratings)</span></p> : ''
            }
        </div>
    )
}

export default StarRating;