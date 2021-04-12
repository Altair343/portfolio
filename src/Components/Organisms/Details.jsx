import React from "react";
import data from '../../Assets/js/data';
import Error404 from '../Templates/Error404';
import DetailsLink from '../Molecules/DetailsLink';
import DetailsTitle from '../Atomic/DetailsTitle';
import DetailsDescription from '../Atomic/DetailsDescription';
import CarouselWeb from '../Molecules/CarouselWeb';
import CarouselMovile from '../Molecules/CarouselMovile';

const Details = ({ match }) => {

    let proyectAct = data.filter(
        pro => pro.id === parseInt(match.params.id)
    )[0];

    if (proyectAct === undefined) {
        return (
            <Error404 />
        );
    } else {
        return (

            <div className="content-Page details">
                <div className="ConteinerDetails">
                    {
                        proyectAct.imgPro1
                        ? proyectAct.imgPro2
                          ? proyectAct.imgPro3
                            ? <CarouselWeb imgPro1={proyectAct.imgPro1} imgPro2={proyectAct.imgPro2} imgPro3={proyectAct.imgPro3} title={proyectAct.title}/>
                            : <CarouselWeb imgPro1={proyectAct.imgPro1} imgPro2={proyectAct.imgPro2} title={proyectAct.title}/>
                          : <CarouselWeb imgPro1={proyectAct.imgPro1} title={proyectAct.title}/>
                        : <CarouselWeb />
                    }
                    <div className="ConteinerDetails__text">
                        <DetailsTitle title={proyectAct.title} />
                        {
                            proyectAct.imgPro1
                            ? proyectAct.imgPro2
                              ? proyectAct.imgPro3
                                ? <CarouselMovile imgPro1={proyectAct.imgPro1} imgPro2={proyectAct.imgPro2} imgPro3={proyectAct.imgPro3} title={proyectAct.title}/>
                                : <CarouselMovile imgPro1={proyectAct.imgPro1} imgPro2={proyectAct.imgPro2} title={proyectAct.title}/>
                              : <CarouselMovile imgPro1={proyectAct.imgPro1} title={proyectAct.title}/>
                            : <CarouselMovile />
                        }


                        <DetailsDescription description={proyectAct.description} />
                        {
                            proyectAct.linkBehance
                                ? proyectAct.linkGithub
                                    ? <DetailsLink linkBehance={proyectAct.linkBehance} linkGithub={proyectAct.linkGithub} />
                                    : <DetailsLink linkBehance={proyectAct.linkBehance} />
                                : proyectAct.linkGithub
                                    ? <DetailsLink linkGithub={proyectAct.linkGithub} />
                                    : <DetailsLink />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;