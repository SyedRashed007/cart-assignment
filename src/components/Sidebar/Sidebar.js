// import {React, useState} from 'react'
// import {products} from "../../data/products"
import Main from '../Main/Main'
// import { Button } from "@chakra-ui/react"
import './Sidebar.css' 

const Sidebar=({ items })=> {

    return (
        <div className="container">
            {/* <div className="left">    
                <Button mb={5} onClick={clearfilter} color="black">Clear filter</Button>
            </div> */}
            <div className="right">
                <Main items={items} />
            </div>
        </div>
    )
}

export default Sidebar
