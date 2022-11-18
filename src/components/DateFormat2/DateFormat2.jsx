﻿import { parseISO, format} from 'date-fns';
import {IoPeopleOutline} from 'react-icons/io5';
import "./dateFormat2.css"

function DateFormat2({date, type}) {
    const Newdate = parseISO(date);
    const datePost = format(
        Newdate, 
    "dd'/'MM'/'yy'"
    );

    return (
        <>
        {datePost}
        </>)
    
}

export {DateFormat2}