import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";


const OpenDays = () => {

    const [getDays, setGetDays] = useState()

    const activateDays = () => {
        let today = new Date();
        let currentDay = today.getDay()
        setGetDays(currentDay)
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
                            <Box>
                            <span>Open Days</span>
                            <span>Open Hours</span>
                            </Box>
                        </li>
                        <li className={getDays == 1 ? active : "days"}>
                            <Box >
                            <span>Mondays</span>
                            <span>9:00AM - 5:00PM</span>
                            </Box>
                        </li>
                      
                    </ul>
</Box>
                
        </Box>
        </>
    )
}
export default OpenDaysactiva