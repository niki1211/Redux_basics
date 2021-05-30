import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Modal from './Modal';

const useStyles = makeStyles({
  root: {
      width: '35%',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 5,
  },
});

export default function SimpleCard({item}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
        {item.mission_name} 
        </Typography>
      </CardContent>
      <CardActions>
        <Modal name={item.mission_name} details={item.details}/>
      </CardActions>
    </Card>
  );
}
