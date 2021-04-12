import React, {useState, useEffect} from 'react';
import Card from '../Molecules/Card';
import CardSkelet from '../Molecules/CardSkelet';
import data from '../../Assets/js/data';

const Portafolio = () =>{
    const [loadiing,setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },3000);
    },[])

    const loader = () =>{
        return(
            <div className="content-Page portafolio">
                <div className="content-proyects">
                    <CardSkelet />
                    <CardSkelet />
                    <CardSkelet />
                    <CardSkelet />
                    <CardSkelet />
                    <CardSkelet />
                </div>
            </div>   
        );
    }

    if(loadiing){
        return(loader());
    }else{
        return(
            <div className="content-Page portafolio">
                <div className="content-proyects">
                    {
                        data.map(proyect => <Card  id={proyect.id} key={proyect.id} imgLikn={proyect.imgLinkMin} title= {proyect.title} /> )
                    }
                </div>
            </div>
        );
    }
}

export default Portafolio;