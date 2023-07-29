import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";


const OpenDays = () => {

    const [getDays, setGetDays] = useState()

    const activateDays = () => {
        let today = new Date();
        let currentDay = today.getDay()
        setGetDays(currentDay)
        // console.log(currentDay)
        console.log(today)
    }

    useEffect(() => {
        activateDays
    }, [])
    return (
        <>
        <Box>
                <Box>
                    
                    <Box width="25%" textAlign="left">
                        <Box display="flex" justifyContent="space-around" fontWeight="bold" fontSize="1.5rem" color="#023e8a"> 
                            <span>Open Days</span>
                            <span>Open Hours</span>
                        </Box>
                        <br />
                        <Box className={getDays == 1 ? "active" : "days"} style={{display:"flex", justifyContent:"space-around", textAlign:"left", alignItems:"left"}}>
                            <span>Mondays</span>
                            <span>9:00AM - 5:00PM</span> 
                        </Box>
                        <br/>
                        <li className={getDays == 2 ? "active" : "days"} style={{display:"flex", justifyContent:"space-around" , textAlign:"left", }}>
                            <span>Tuesdays</span>
                            <span>9:00AM - 5:00PM</span>
                        </li>
                        <br/>
                        <li className={getDays == 3 ? "active" : "days"} style={{display:"flex", justifyContent:"space-around" , textAlign:"left", }}>
                            <span>Wednesdays</span>
                            <span>9:00AM - 5:00PM</span>
                        </li>
                        <br/>
                        <li className={getDays == 4 ? "active" : "days"} style={{display:"flex", justifyContent:"space-around"}}>
                            <span>Thursdays</span>
                            <span>9:00AM - 5:00PM</span>
                        </li>
                        <br/>
                        <li className={getDays == 5 ? "active" : "days"} style={{display:"flex", justifyContent:"space-around"}}>
                            <span>Fridays</span>
                            <span>9:00AM - 5:00PM</span>
                        </li>
                        <br/>
                        <li className={getDays == 6 ? "open" : "days"} style={{display:"flex", justifyContent:"space-around"}}>
                            <span>Saturdays</span>
                            <span>Office Closed</span>
                        </li>
                        <br/>
                        <li className={getDays == 0 ? "active" : "days"} style={{display:"flex", justifyContent:"space-around"}}>
                            <span>Sundays</span>
                            <span>Office Closed</span>
                        </li>
                      
                    </Box>
</Box>
                
        </Box>
        </>
    )
}
export default OpenDays;