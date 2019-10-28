import React, {useEffect, useState} from 'react';
import TrailIndex from '../Trails/MyTrails/TrailIndex'; 

const MyFavorites = (props) => {
    return(
        <div className="main">
            <h3>My Favorites</h3>
            <TrailIndex token={props.token} />
        </div>
    )
}

export default MyFavorites;