import React from 'react';
import { string} from "prop-types"

const IndexCard = ({buildingname}) => {

}

IndexCard.propTypes = {
    buildingname: string.isRequired
}

IndexCard.defaultProps = {
    buildingname: "Building"
}



export default IndexCard