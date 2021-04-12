import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const DetailsLink = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])

    const loader = () => {
        return (
            <SkeletonTheme color="#2B2A2A" highlightColor="#2F2F2F">
                <div className="Content-links">
                    <div className="title-link">
                        <p className="title-link__item">
                            <Skeleton />
                        </p>
                    </div>
                    <div className="icons">
                        <div className="icons__item">
                            <Skeleton width={50} height={50} circle />
                        </div>
                        <div className="icons__item">
                            <Skeleton width={50} height={50} circle />
                        </div>
                    </div>
                </div>
            </SkeletonTheme >
        );
    }

    if (loading) {
        return (loader());
    } else {
        return (
            <div className="Content-links">
                <div className="title-link">
                    <p className="title-link__item">Mockup / Code demo</p>
                </div>
                <div className="icons">
                    {
                        props.linkBehance
                            ? <div className="icons__item"><a href={props.linkBehance} target="_blank" rel="noopener noreferrer" className="icons__item-link behance"> <i className="fab fa-behance"> </i></a></div>
                            : <div></div>
                    }
                    {
                        props.linkGithub
                            ? <div className="icons__item"><a href={props.linkGithub} target="_blank" rel="noopener noreferrer" className="icons__item-link github" ><i className="fab fa-github"></i></a></div>
                            : <div></div>
                    }
                </div>
            </div>
        );
    }
}



export default DetailsLink;