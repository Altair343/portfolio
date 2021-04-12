import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CardSkelet = () => (
    <SkeletonTheme color="#2B2A2A" highlightColor="#2F2F2F">
        <div className="contentCard">
            <div className="contentCard__img">
                <Skeleton width={133} height={108} />
            </div>
        </div>
    </SkeletonTheme>
);

export default CardSkelet;