import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { setReqData } from "../../Redux/action/RequestAction";
import styleclass from "./singlerequest.module.css";
import Button from "@material-ui/core/Button";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from '@material-ui/core/StepLabel';

function Singlerequests() {
  const dispatch = useDispatch();

  const [limit, setLimit] = useState(5);

  const req_arr = useSelector((state) =>state.ReqVal.requestarray ? state.ReqVal.requestarray : []);
  const ser_arr = useSelector((state) =>state.ReqVal.servicearray ? state.ReqVal.servicearray : []);
  const tabindex = useSelector((state) =>state.ReqVal.tabindex ? state.ReqVal.tabindex : 0);
  const reqestsortarr = useSelector((state) =>state.ReqVal.reqestsortarr ? state.ReqVal.reqestsortarr : '');
  const refsortarr = useSelector((state) =>state.ReqVal.refsortarr ? state.ReqVal.refsortarr : '');

  useEffect(() => {
    let data = [...req_arr];
    let arr = data.filter((val) => val.packageid === tabindex);
    dispatch(setReqData('refsortarr',arr))
    let sorted=[...arr].slice(0,limit)
    dispatch(setReqData('reqestsortarr',sorted))
  }, [tabindex,req_arr,limit]);

  const Accept = (id) => {
    let reqarr = [...req_arr];
    let serarr = [...ser_arr];
    let val = reqarr.find((item) => item.req_id === id);
    val.status='ACTIVE'
    serarr.push(val);
    dispatch(setReqData("servicearray", serarr));
    let arr = reqarr.filter((val) => val.req_id !== id);
    dispatch(setReqData("requestarray", arr));
  };

  const Showmore=()=>{
    setLimit((prev)=>prev+5)
  }


  return (
    <>
      {reqestsortarr ? (
        <>
          {reqestsortarr.length < 1 ? (
            <Grid container>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                No Data...
              </Grid>
            </Grid>
          ) : (
            reqestsortarr.map((val, ky) => {
                
                return (
                  <Grid
                    key={ky}
                    container
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className={styleclass.datadiv}>
                      <Grid container style={{ marginTop: "10px" }}>
                        <Grid item xs={12} sm={6}>
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
                                  alt="alter"
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

                        <Grid item xs={12} sm={6}>
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
                                  <Stepper alternativeLabel activeStep={0}>
                                        
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
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={()=>{Accept(val.req_id)}}
                                  style={{ marginTop:'5px' }}
                                >
                                  Accept Request
                                </Button>
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  style={{ marginLeft: "10px",marginTop:'5px' }}
                                >
                                  Reschedule
                                </Button>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                    
                    {refsortarr.length === ky + 1 ? (
                      <Grid
                        item
                        xs={12}
                        style={{
                          textAlign: "center",
                          marginTop: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <span style={{ color: "#708090" }}>
                          No More Booking.
                        </span>
                      </Grid>
                    ) : (
                      ""
                    )}
                  </Grid>
                ); 
                
            })
          )}
         {
           reqestsortarr.length===refsortarr.length ?
           ''
           :
           <Grid item xs={12}
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <span className={styleclass.show} onClick={Showmore}>
                  Show More...
                </span>
              </Grid>
         }
                   
        </>
      ) : (
        <Grid container>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            Loading...
          </Grid>
        </Grid>
      )}
    </>
  );
}
export default Singlerequests;
