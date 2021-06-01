import React, { Component } from 'react'
import { setItems } from '../actions/dashboardActions';
import { connect } from 'react-redux';
import Tab from '../components/Shared/Tab';
import Cards from './Shared/Card';
import Filter from './Filter';
import _ from 'lodash';

class Dashboard extends Component {
    constructor(props) {
        super();
        this.state = {
            items: [],
            filteredItems: [],
        }
    }

    componentDidMount() {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => 
                this.props.setItems(data))
    }

    componentDidUpdate(prevProps) {
        if(prevProps.dItems !== this.props.dItems || prevProps.filteredItems !== this.props.filteredItems) {
            this.setState({items : _.isEmpty(this.props.filteredItems) ? this.props.dItems : this.props.filteredItems})
        }
    }

    render() {
        const {items} = this.state;
        return (
            <div style={{width: '1100px', margin:'20px auto', color:'#005288'}}>
                <h1>SpaceX Dashboard</h1>
                <Filter />
                {/* <Tab past = {past} upcoming = {upcoming} items={dItems}/> */}
                <h2>SpaceX Launches:</h2>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
                    {
                     items.map((item, index) => (
                        <div key={index} style={{margin:'20px'}}>
                            <Cards item = {item} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dItems: state.dItems.items,
    filteredItems: state.dItems.filteredItems,
})

export default connect(mapStateToProps, {setItems})(Dashboard);