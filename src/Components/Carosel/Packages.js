import React from 'react';
import style from "./package.module.css"
import Grid from '@material-ui/core/Grid';


function Singlepackages(props){
    return(
        <div className={style.package}>
            <Grid container>
                <Grid item xs={12} sm={5}>
                    <div className={style.pic}>
                        <img 
                            alt='yoga' 
                            src={props.image} 
                            loading='lazy' 
                            width='100%' 
                            height='100%'
                            style={{borderRadius:'5px 0px 0px 5px',minHeight:'250px'}}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Grid container>
                        <Grid item xs={12} style={{margin:'30px 0px 10px 10px'}}>
                            <span className={style.caption}>{props.caption}</span>
                        </Grid>
                        <Grid item xs={12} style={{margin:'0px 0px 0px 10px'}}>
                            <span className={style.type}>{props.type}</span> 
                        </Grid>
                        <Grid item xs={12} style={{margin:'10px 0px 10px 10px'}}>
                            <div style={{width:'100%',wordWrap:'break-word'}}>
                                <p className={style.des}>
                                    {props.description}
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <span style={{color:'#C0C0C0',marginLeft:'10px'}}>for one session</span>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <span className={style.amt}>{props.amount}</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            

        </div>
    )
}
export default Singlepackages