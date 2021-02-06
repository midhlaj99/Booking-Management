import React, {  useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setReqData } from "../../Redux/action/RequestAction";

import Grid from "@material-ui/core/Grid";
import styleclass from "./singlepayment.module.css";
import Button from "@material-ui/core/Button";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from '@material-ui/core/StepLabel';

function Singlepayment(){


    const dispatch = useDispatch();

    const pay_arr = useSelector((state) =>state.ReqVal.paymentarray ? state.ReqVal.paymentarray : []);
    const array = useSelector((state) =>state.ReqVal.paymentsortarray ? state.ReqVal.paymentsortarray : []);
    const tabindex = useSelector((state) =>state.ReqVal.tabindex ? state.ReqVal.tabindex : 0);

    useEffect(() => {
        let data = [...pay_arr];
        let arr = data.filter((val) => val.packageid === tabindex);
        dispatch(setReqData('paymentsortarray',arr));
      }, [tabindex]);

    return(
        <div>
{
                array.length < 1 ?
                <Grid container>
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                        No Records...
                    </Grid>
                </Grid>
                :
                array.map((val,ky)=>{
                    return (
                        <Grid
                          key={ky}
                          container
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div className={styleclass.datadiv}>
                            <Grid container style={{ marginTop: "10px" }}>
                              <Grid item xs={12} sm={12} md={6}>
                                <Grid container>
                                  <Grid item xs={12}>
                                    <span className={styleclass.head}>
                                      Pending Request
                                    </span>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <span className={styleclass.time}>
                                      {val.time},{val.date}
                                    </span>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    style={{ marginTop: "15px", display: "flex" }}
                                  >
                                    <div style={{ width: "70px", height: "70px" }}>
                                      <img
                                        src={val.profile}
                                        height="70px"
                                        loading="lazy"
                                        width="70px"
                                        alt='alter'
                                        style={{ borderRadius: "50%" }}
                                      />
                                    </div>
                                    <div style={{ marginLeft: "15px" }}>
                                      <span className={styleclass.name}>
                                        {val.name}
                                      </span>{" "}
                                      <br />
                                      <span className={styleclass.place}>
                                        {val.place}
                                      </span>
                                    </div>
                                  </Grid>
                                  <Grid item xs={12} style={{ marginTop: "15px" }}>
                                    <span style={{ color: "#C0C0C0" }}>
                                      This customer is availabe at:
                                    </span>
                                  </Grid>
                                  <Grid item xs={12} style={{ marginTop: "15px" }}>
                                    <span>
                                      <AccessTimeIcon
                                        fontSize="small"
                                        style={{ color: "#1E90FF" }}
                                      />
                                    </span>
                                    <span className={styleclass.availableat}>
                                      {val.availableat}
                                    </span>
                                  </Grid>
                                </Grid>
                              </Grid>
        
                              <Grid item xs={12} sm={12} md={6}>
                                <Grid container direction="column">
                                  <div
                                    style={{
                                      width: "100%",
                                      height: "200px",
                                      display: "flex",
                                      flexDirection: "column",
                                      justifyContent: "space-evenly",
                                    }}
                                  >
                                    <div>
                                      <Stepper alternativeLabel activeStep={3}>
                                          <Step key={1}>
                                            <StepLabel>REQUEST</StepLabel>
                                          </Step>
                                      
                                          <Step key={2}>
                                            <StepLabel>ACTIVE</StepLabel>
                                          </Step>
                                          <Step key={3}>
                                            <StepLabel>PAYMENT</StepLabel>
                                          </Step>
                                      </Stepper>
                                    </div>
                                    <div>
                                      <Button variant="contained" color="primary"
                                        disabled
                                      >
                                        completed
                                      </Button>
                                      
                                    </div>
                                  </div>
                                </Grid>
                              </Grid>
                            </Grid>
                          </div>
                        </Grid>
                      );
                })

            }
        </div>
    )
}
export default Singlepayment