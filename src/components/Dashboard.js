import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { setItems } from '../actions/dashboardActions';
import { connect } from 'react-redux';
import Cards from './Shared/Card';
import Button from '@material-ui/core/Button';
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
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1>SpaceX Dashboard</h1>
                <Button onClick={() => this.props.history.push('/login')}>Log out</Button>
                </div>
                <Filter />
                {/* <Tab past = {past} upcoming = {upcoming} items={items}/> */}
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

export default withRouter(connect(mapStateToProps, {setItems})(Dashboard));