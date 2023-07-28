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
        
        <Box>Opendays</Box>
        </>
    )
}
export default OpenDaysactiva