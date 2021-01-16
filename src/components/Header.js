import React from 'react'
import {cities} from "./consts"
function Header() {
    return (
        <div className="header">
            <select name="cards" id="cards">
                {cities}
                </select>
        </div>
    )
}

export default Header
