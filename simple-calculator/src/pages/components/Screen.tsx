import {Container} from '@mui/material'
import React, {useRef,useEffect, ReactNode} from 'react'
type Props={
    children:ReactNode
}
export default function Screen({children}:Props){

    return(
        <Container className='h-20 bg-white p-2 m-1 screen align' sx={{
            textAlign:'right'
        }} >{children}</Container>
    )
}

