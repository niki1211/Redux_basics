import React, { Component } from 'react';
import DateRangePicker from '../components/Shared/DateRangePicker';
import Button from '@material-ui/core/Button';
import FilterIcon from '@material-ui/icons/FilterList';
import './styles.css'
import Select from '../components/Shared/Select';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import { setFilteredItems } from '../actions/dashboardActions';

export class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start : null,
            end: null,
            selector : 'All',
            filteredList: []
        };
        this.m = moment().format('YYYY-MM-DDTHH:mm:ssZ');

    }

    setDateRange = (value) => {
        this.setState({ 
                start : value[0],
                end: value[1]
            });
    }

    setSelect = (e) => {
        this.setState({
            selector : e.target.value,
        });
    }

    getFilteredList = () => {
        console.log(this.state)
        switch(this.state.selector) {
            case 'All': 
                const list = this.props.dItems.map(item => (
                        (moment(item.launch_date_local)).isSameOrAfter(moment(this.state.start)) 
                            && (moment(item.launch_date_local)).isSameOrBefore(moment(this.state.end)) ?
                                item : ''));
                const fList=_.without(list, "");
                this.setState({filteredList: fList});
                this.props.setFilteredItems(fList);
                break;
            case 'Upcoming':
                const upList = this.props.dItems.map(item => (
                        (moment(this.m)).isSameOrAfter(item.launch_date_local) 
                        && (item.upcoming) ?
                        item : ''));
                let upcomingList = _.without(upList, "");
                console.log(upcomingList);
                if(this.state.start && this.state.end) { console.log("jk")
                    const fList = upcomingList.map(item => (
                        (moment(item.launch_date_local)).isSameOrAfter(moment(this.state.start)) 
                        && (moment(item.launch_date_local)).isSameOrBefore(moment(this.state.end)) ?
                        item : ''));
                    upcomingList = _.without(fList, '')
                }
                console.log(upcomingList);
                this.setState({filteredList: upcomingList});
                this.props.setFilteredItems(upcomingList);
                break;
            case 'Past':
                const pList= this.props.dItems.map(item => (
                        (moment(item.launch_date_local)).isSameOrBefore(moment(this.m)) 
                        && !(item.upcoming) ?
                        item : ''));
                let pastList = _.without(pList, '');
                if(this.state.start && this.state.end) {
                    const fList = pastList.map(item => (
                        (moment(item.launch_date_local)).isSameOrAfter(moment(this.state.start)) 
                        && (moment(item.launch_date_local)).isSameOrBefore(moment(this.state.end)) ?
                        item : ''));
                    pastList = _.without(fList, '');
                }
                this.setState({filteredList: pastList});
                this.props.setFilteredItems(pastList)
                break;
            default:
                return this.props.dItems;
        }
    }

    resetFilters = () =>{
        this.setState({
            start : null,
            end: null,
            selector : 'All',
            filteredList: []
        },() => console.log('state empty'));
        console.log("tg")
        this.props.setFilteredItems([]);
    }

    render() {
        return (
            <div>
            <div className='flex-center'>
                    <FilterIcon />
                    <h3>Filters</h3>
            </div>
            <div className='flex-evenly'>
                <DateRangePicker onChange = {(value) => this.setDateRange(value)} date={[this.state.start, this.state.end]}/> 
                <Select handleChange = {(e) => this.setSelect(e)} value={this.state.selector}/>
                <Button variant="contained" onClick = {() => 
                    this.getFilteredList()} style={{marginLeft:'20px'}}>
                  Filter Now
                </Button>
                <Button onClick = {() => this.resetFilters()}>
                    Reset Filters
                </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dItems : state.dItems.items
})

export default connect(mapStateToProps, {setFilteredItems})(Filter);
