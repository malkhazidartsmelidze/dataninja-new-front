import React from 'react';
import TitleBlock from './content/TitleBlock';
import { makeStyles } from '@material-ui/core/styles';
import SecondaryTitle from './content/SecondaryTitle';

const useStyles = makeStyles({
    root: {
        position: 'relative'
    },
});

function ContentTop() {
    const classes = useStyles();
    return (
        <div className={classes.root} container>
            <TitleBlock />
            <SecondaryTitle />
        </div>

    )
}


export default ContentTop