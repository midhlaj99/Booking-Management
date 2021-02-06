import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Singlerequests from "./Singlerequests"

function RequestTab(){

    return(
        <div>
            <Grid container>
                <Grid item xs={12} style={{margin:'10px 0px'}}>
                    <Divider />
                </Grid>
                <Grid item xs={null} sm={2}></Grid>
                <Grid item xs={12} sm={8} >
                    <Singlerequests />
                </Grid>
                <Grid item xs={null} sm={2}></Grid>
            </Grid>
        </div>
    )
}
export default RequestTab