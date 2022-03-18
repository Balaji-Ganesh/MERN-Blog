import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import ViewPost from "../../components/viewPost/ViewPost";
import './single.css';

export default function Single() {
    return (
        <div className="single">
            <ViewPost/>
            <Sidebar/>
        </div>
    )
}