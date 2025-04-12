import { configureStore } from "@reduxjs/toolkit";

import Postreducer from "./Postreducer";

const store=configureStore(
    {
reducer:{
    posts:Postreducer
}


    }
)

export default store;