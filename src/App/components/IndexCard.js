import React from 'react';
import { string, arrayOf,shape } from "prop-types"

const IndexCard = ({zoneName ,zoneData}) => (
    <div className="cell index-card">
        <h4 className="zone-display">
            {zoneName}
        </h4>
        <div className="card-item-group">
            {zoneData.map( ({buildingname, black, id}) => black === 0
                ? <a key={id} className="card-item" href="https://applefacilities.review.blueriver.com">{buildingname}</a>
                : <p key={id} className="card-item">{buildingname}</p>

            )}
        </div>
    </div>
)

IndexCard.propTypes = {
    zoneName: string.isRequired,
    zoneData: arrayOf(shape)

}

IndexCard.defaultProps = {
    zoneName: "Zone",
    zoneIndex: 'Building',
}



export default IndexCard