import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        {...other}
      >
        {children}
      </div>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

export default function SimpleTabs({past, upcoming, items}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const pastItems = past.map((item, index) => (
        <div key={index}>
            <Card item={item}/>
        </div>
    ))

    const upcomingItems = upcoming.map((item, index) => (
        <div key={index}>
            <Card item={item}/>
        </div>
    ))

    return(
        <div className={classes.root}>
            <AppBar position="static" 
                    style={{backgroundColor: 'white', 
                            color: 'black'}}>
                <Tabs value={value} onChange={(handleChange)}>
                <Tab label="All Launches" />
                <Tab label="Past Launches"  />
                <Tab label="Upcoming Launches"  />
                </Tabs>
            </AppBar> 
            <TabPanel value={value} index={0}>
                {items}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {pastItems}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {upcomingItems}
            </TabPanel>
        </div>
    );
}