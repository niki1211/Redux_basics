import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Modals from './Modal';

const useStyles = makeStyles({
  root: {
      width: '100%',
      backgroundColor: 'white',
      color: '#005288'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 5,
  },
});

export default function Cards({item}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
        {item.mission_name} 
        </Typography>
      </CardContent>
      <CardActions>
        <Modals item = {item}/>
      </CardActions>
    </Card>
  );
}
