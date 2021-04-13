import React from 'react';
import Title from '../Atomic/Title';
import IconsMedia from '../Atomic/IconsMedia';
import About from '../Atomic/About';
class Home extends React.Component {
    render() {
        return (
            <>
                <div className="content-Page">
                    <div className="section1">
                        <div className="section1__title">
                            <Title />
                            <IconsMedia />
                        </div>
                        <div className="section1__about">
                            <About />
                        </div>
                    </div>
                    <div className="Section2">

                    </div>
                </div>
            </>
        );
    }
}

export default Home;