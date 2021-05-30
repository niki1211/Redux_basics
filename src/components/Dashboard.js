import React, { Component } from 'react'
import { fetchItems } from '../actions/dashboardActions';
import Card from './Shared/Card';
import { connect } from 'react-redux';
import Tab from '../components/Shared/Tab';
import moment from 'moment';

class Dashboard extends Component {

    componentWillMount() {
        this.props.fetchItems();
    }

    render() {
        let past = [];
        let upcoming = [];
        let m = moment().format('YYYY-MM-DDTHH:mm:ssZ');

        const dItems = this.props.dItems.map((item, index) => (
            <div key={index}>
                {console.log((moment(m)).isAfter(moment(item.launch_date_local)) ? 
                    past.push(item) : upcoming.push(item))}
                <Card item = {item} />
            </div>
        ))

        return (
            <div>
                <h1>List Of SpaceX Launches:</h1>
                <Tab past = {past} upcoming = {upcoming} items={dItems}/>
                {/* <div>
                    <h3>{dItems}</h3>
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dItems: state.dItems.items
})

export default connect(mapStateToProps, {fetchItems})(Dashboard);