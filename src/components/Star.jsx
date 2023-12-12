import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ starVote }) => {
    const stars = starVote / 2;
    const ratingStar = Array.from({ length: 5 }, (element, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar className="text-base text-yellow-500" />
                ) : stars >= number ? (
                    <FaStarHalfAlt className="text-base text-yellow-500" />
                ) : (
                    <AiOutlineStar className="text-base text-yellow-500" />
                )}
            </span>
        );
    });

    return (
        <div className="mt-2 flex items-center justify-center">{ratingStar}</div>
    );
};

export default Stars;
