import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";


const OpenDays = () => {

    const [getDays, setGetDays] = useState()

    const activateDays = () => {
        let today = new Date();
        let currentDay = today.getDay()
        setGetDays(currentDay)
        console.log(today)
        console.log(currentDay)
    }

    useEffect(() => {
        activateDays
    }, [])
    return (
        <>
        <Box>
                <Box>
                    
                    <ul>
                        <li> 
                            <span>Open Days</span>
                            <span>Open Hours</span>
                        </li>
                        <br/>
                        <li className={getDays == 1 ? "active" : "days"}>
                            <span>Mondays</span>
                            <span>9:00AM - 5:00PM</span> 
                        </li>
                        <br/>
                        <li className={getDays == 2 ? "active" : "days"}>
                            <span>Tuesdays</span>
                            <span>9:00AM - 5:00PM</span>
                        </li>
                        <br/>
                        <li className={getDays == 3 ? "active" : "days"}>
                            <span>Wednesdays</span>
                            <span>9:00AM - 5:00PM</span>
                        </li>
                        <br/>
                        <li className={getDays == 4 ? "active" : "days"}>
                            <span>Thursdays</span>
                            <span>9:00AM - 5:00PM</span>
                        </li>
                        <br/>
                        <li className={getDays == 5 ? "active" : "days"}>
                            <span>Fridays</span>
                            <span>9:00AM - 5:00PM</span>
                        </li>
                        <br/>
                        <li className={getDays == 6 ? "active" : "days"}>
                            <span>Saturdays</span>
                            <span>Office Closed</span>
                        </li>
                        <br/>
                        <li className={getDays == 0 ? "active" : "days"}>
                            <span>Sundays</span>
                            <span>Office Closed</span>
                        </li>
                      
                    </ul>
</Box>
                
        </Box>
        </>
    )
}
export default OpenDays;