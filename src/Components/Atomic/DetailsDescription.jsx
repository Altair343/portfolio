import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const DetailsDescription = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2800);
    }, [])

    const loader = () => {
        return (
            <SkeletonTheme color="#2B2A2A" highlightColor="#2F2F2F">
                <div className="Content-description">
                    <p className="Content-description__description"> <Skeleton count={6} /> </p>
                </div>
            </SkeletonTheme >
        );
    }

    if (loading) {
        return (loader());
    } else {
        return (
            <div className="Content-description">
                <p className="Content-description__description" dangerouslySetInnerHTML={{ __html: props.description }}>  
                 </p>
            </div>
        );
    }
}

export default DetailsDescription;