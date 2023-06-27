import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/TaskTable">Task Table</Link>
                </li>
                <li>
                    <Link to="/Equipment">Equipment</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
            </ul>
        </div>
    )
}