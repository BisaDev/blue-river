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
        const buildData = await getCall('buildings')
        this.setState({buildData})

    }

    componentDidMount() {
        this.processData()


    }

    render() {
        const { buildingData } = this.state;

        return (
            <div className="page-buildings grid-x">
                <div className="cell">
                    data:
                    {buildingData
                        ? "Hello"
                        : "Loading"
                    }

                </div>
            </div>
        );
    }


}

export default Buildings