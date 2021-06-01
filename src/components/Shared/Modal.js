import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import moment from 'moment';

function getModalStyle() {

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    color: '#005288',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Modals({item}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h1>{item.mission_name}</h1>
      <h4>Launch details: </h4>{item.details}
      <h4>Launch Year: </h4>{item.launch_year}
      <h4>Launch Date: </h4>{moment(item.launch_date_local).format('DD/MM/YYYY')}
      <h4>Launch Site Name: </h4>{item.launch_site.site_name}
      <h4>
        <a href={item.links.article_link} 
            style={{color: '#005288'}}>
          {item.links.article_link}
        </a>
      </h4>
    </div>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        More Info
      </Button>
      <Modal
        open={open}
        onClose={handleClose} >
        {body}
      </Modal>
    </div>
  );
}
