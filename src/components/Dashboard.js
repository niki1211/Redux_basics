import React, { Component } from 'react'
import { fetchItems } from '../actions/dashboardActions';
import { connect } from 'react-redux'

class Dashboard extends Component {

    componentWillMount() {
        this.props.fetchItems();
    }

    render() {
        const dItems = this.props.dItems.map((item) => (
            <div key={item.flight_number}>
                {item.mission_name}
            </div>
        ))
        return (
            <div>
                <h1>List Of SpaceX Launches:</h1>
                <div>
                    <h3>{dItems}</h3>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dItems: state.dItems.items
})

export default connect(mapStateToProps, {fetchItems})(Dashboard);