import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel'
import Packages from "../../json/Packages"
import style from './slide.module.css'
import Singlepackages from "./Packages"
import { useDispatch } from 'react-redux'
import {setReqData} from "../../Redux/action/RequestAction"

function Slide(){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setReqData('tabindex',0))
    },[])
    return(
        <div className={style.main}>
            
            <Carousel
                itemsToShow={1}
                onChange={(currentItem, pageIndex) =>{
                        dispatch(setReqData('tabindex',pageIndex))
                    }
                }
            >
                {
                    Packages.map(item => 
                        <Singlepackages 
                            key={item.package_id} 
                            caption={item.caption}
                            type={item.type}
                            amount={item.amount}
                            image={item.image}
                            description={item.description}
                        />
                    )
                }
            </Carousel>
        </div>
    )
}
export default Slide