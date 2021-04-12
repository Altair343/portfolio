import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const DetailsTitle = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2600);
    }, [])

    const loader = () => {
        return (
            <SkeletonTheme color="#2B2A2A" highlightColor="#2F2F2F">
                <div className="Content-title">
                    <h2 className="Content-title__title"> <Skeleton /></h2>
                </div>
            </SkeletonTheme >
        );
    }

    if (loading) {
        return (loader());
    } else {
        return (
            <div className="Content-title">
                <h2 className="Content-title__title"> {props.title}</h2>
            </div>
        );
    }
}

export default DetailsTitle;