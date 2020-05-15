import React from 'react';
import {Helmet} from 'react-helmet';

export class HeadSpace extends React.Component{
    render(){
        return(
        <Helmet>
            <meta charSet="utf-8"/>
            <title>GTM workshop</title>
        </Helmet>


        )

    }

}

export default HeadSpace;