import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from "@material-ui/core/Grid";
import {Icon} from '@material-ui/core';


function Stars({rank}) {
    const stars = new Array(5);

    return (
        <Grid container justify='flex-end'>
            {stars
                .fill('0')
                .map((el, i) =>
                    parseInt(rank) <= i ?
                        <Grid item>
                            <Icon color='secondary'>
                                <StarBorderIcon/>
                            </Icon>
                        </Grid> :
                        <Grid item>
                            <Icon color='secondary'>
                                <StarIcon/>
                            </Icon>
                        </Grid>
                )}
        </Grid>
    );
}

export default Stars;