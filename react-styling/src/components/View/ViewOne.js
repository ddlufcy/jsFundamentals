import React from 'react';

import styled from 'styled-components';
import Disc from '../../assets/disc.png';

const Resize = styled.img`
    width: 65vw;
    height: auto;
    display: block;
    margin: 0 auto;
`;

const ViewOne = () => {
    return(
        <div>
            <Resize src={Disc} />
        </div>
    )
}
export default ViewOne;