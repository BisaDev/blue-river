import React from 'react';
import { getCall } from "../../functions/API/buildingCalls";

class Buildings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null

        }

    }

    processData = () =>  {
        const buildData = getCall('buildings')
        buildData.then(data => this.setState({data}))

    }

    componentDidMount() {
        this.processData()


    }

    render() {
        const { data } = this.state;

        return (
            <div className="page-buildings grid-x">
                <div className="cell">
                    data:
                    {data
                        ? "Hello"
                        : "Loading"
                    }

                </div>
            </div>
        );
    }


}

export default Buildings