import React from 'react';
import {getCall} from "../../functions/API/buildingCalls";

class Buildings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buildingData: null
        }

    }

    processData = async () => {
        let groupedData = {};
        let sortedByName = [];
        let sortedByZone = [];
        let buildingData = await getCall('buildings')

        //will use "z9-" to artificially send other locations to the bottom
        function sortByName(a, b) {
            const zoneA = a['buildingname'].includes('Other') ? "z9-" + a['buildingname'].toLowerCase() : a['buildingname'].toLowerCase();
            const zoneB = b['buildingname'].includes('Other') ? "z9-" + a['buildingname'].toLowerCase() : b['buildingname'].toLowerCase();

            return zoneA.localeCompare(zoneB,undefined , {numeric: true, sensitivity: 'base'} )

        }

        function sortByZone(a, b) {
            const zoneA = a['buildingzone'].includes('Other') ? "z9-" + a['buildingzone'].toLowerCase() : a['buildingzone'].toLowerCase();
            const zoneB = b['buildingzone'].includes('Other') ? "z9-" + a['buildingzone'].toLowerCase() : b['buildingzone'].toLowerCase();

            return zoneA.localeCompare(zoneB,undefined , {numeric: true, sensitivity: 'base'} )

        }



        sortedByName = buildingData.items.sort(sortByName);
        sortedByZone = sortedByName.sort(sortByZone);




        for (let item of sortedByZone) {
            const {buildingzone} = item;
            let newKey = buildingzone.charAt(0).toLowerCase() + buildingzone.slice(1);

            if (groupedData[newKey]) {
                groupedData[newKey].push(item)
            } else {
                groupedData[newKey] = [item]
            }
        }

        delete groupedData[""];


        this.setState({buildingData: groupedData}, () => {
            //console.log(this.state.buildingData)
        })

    }

    componentDidMount() {
        this.processData()
    }

    render() {
        const {buildingData} = this.state;

        return (
            <div className="page-buildings grid-y margin-30">
                <h1 className="title-display">Index</h1>
                {buildingData ?
                    Object.entries(buildingData).map(([zone, values], i) =>
                        <div key={`zone-${i}-${zone}`} className="cell index-card">
                            <h4 className="zone-display">
                                {zone}
                            </h4>
                            <div className="card-item-group">
                                {values.map(building => <p className="card-item">{building.buildingname}</p>)}
                            </div>
                        </div>
                    )


                    : <p>Loading...</p>}

            </div>
        );
    }


}

export default Buildings