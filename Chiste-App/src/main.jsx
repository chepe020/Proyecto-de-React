import React from "react";
import ReactDOM from 'react-dom/client'
import { ChisteApp } from "./components/ChisteApp"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChisteApp/>
    </React.StrictMode>
)