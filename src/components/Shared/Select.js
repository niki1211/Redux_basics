import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function Dropdown({handleChange, value}) {
  const [type, setType] = React.useState('All');

  const handleEvent = (event) => {
    setType(event.target.value);
  };
  
    return (
        <Select
          style={{marginLeft:'20px', width:'200px'}}
          value={value || type}
          onChange={(e) => {handleChange(e); handleEvent(e)}}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Upcoming">Upcoming Launches</MenuItem>
          <MenuItem value="Past">Past Launches</MenuItem>
        </Select> 
    )
}