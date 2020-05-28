import React from 'react';
import { getCall } from "../../functions/API/buildingCalls";

class Buildings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buildingData: null
        }

    }

    processData = async () => {
        let processedData= {};
        const buildingData = await getCall('buildings')

        for( let item of buildingData.items) {
            let newKey = "";
            item.buildingzone === "" ? newKey = "z9" : newKey = item.buildingzone.toLowerCase()

            if(processedData[newKey]) {
                processedData[newKey].push(item)
            } else {
                processedData[newKey] = [item]
            }
        }

        for( let item in processedData) {
            console.log(item)
        }

        //console.log(processedData);
        this.setState({buildingData: processedData}, ()=> {console.log(this.state.buildingData)} )

    }

    componentDidMount() {
        this.processData()
    }

    render() {
        const { buildingData } = this.state;

        return (
            <div className="page-buildings grid-x">
                <div className="cell">
                    {buildingData ?
                        Object.keys(buildingData).map( section =>
                                <div>
                                    {section}
                                </div>
                            )


                        : "Loading"}

                </div>
            </div>
        );
    }


}

export default Buildings