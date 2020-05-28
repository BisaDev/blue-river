import React from 'react';
import { string, shape,number } from "prop-types"

const IndexCard = ({zoneName, zoneIndex ,zoneData}) => (
    <div key={`zone-${zoneIndex}-${zoneName}`} className="cell index-card">
        <h4 className="zone-display">
            {zoneName}
        </h4>
        <div className="card-item-group">
            {zoneData.map( ({buildingname, black}) => black === 0
                ? <a className="card-item" href="https://applefacilities.review.blueriver.com">{buildingname}</a>
                : <p className="card-item">{buildingname}</p>

            )}
        </div>
    </div>
)

IndexCard.propTypes = {
    zoneName: string.isRequired,
    zoneIndex: string.isRequired,
    zoneData: shape({
        buildingname: string,
        black: number,
    })

}

IndexCard.defaultProps = {
    zoneName: "Zone",
    zoneIndex: 'Building',
}



export default IndexCard