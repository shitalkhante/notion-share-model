import { useNavigate } from "react-router-dom";
import "./search.css";
// import { useState } from "react";
export const Search = (props) => {
    const navigate= useNavigate();
    const person = props.state.filter(r => { if (r.type == "person") return r });
    const group = props.state.filter(r => { if (r.type == "group") return r });

    return (
        <div id="search-page">
            <div id="search-box1">
                <input type="text" placeholder="Peoples, emails, groups" id="search" onChange={(e) => {
                    props.setState(e.target.value)
                }} />
                <span>
                    <select className="select" onChange={(e) => { props.setSelect({ ...props.select, access: e.target.value }) }}>
                        <option value="Full access" >Full access</option>
                        <option value="Can edit" >Can edit</option>
                        <option value="Can view" >Can view</option>
                        <option value="No access">No access</option>
                    </select>
                </span>
                <button id="invite-btn" onClick={()=>{navigate("/")}}>Invite</button>
            </div>
            <div className="search-body">
                <div>
                    {person.length > 0 &&
                        <p className="member-header-txt">Select Person</p>
                    }
                    {person.map(r => {
                        if (r.type === 'person') {
                            return (
                                <div className="members" onClick={(e) => {
                                    props.setSelect({ ...props.select, data: r })
                                }}>
                                    <div id="member-logo"></div>
                                    <span id="ss">
                                        <h4>{r.name}</h4>
                                    </span>
                                </div>
                            )
                        }
                    })
                    }

                </div>
                <div>
                    {group.length > 0 &&
                        <p className="member-header-txt">Select Group</p>
                    }
                    {
                        group.map(r => {
                            if (r.type === "group") {
                                return(
                                    <div className="members" onClick={(e) => {
                                        props.setSelect({ ...props.select, data: r })
                                    }}>
                                        <div id="group-logo"><p>{r.name[0]}</p></div>
                                        <span id="ss">
                                            <h4>{r.name}</h4>
                                        </span>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className="members" id="last">
                <div id="ques"></div>
                <span id="ss">
                    learning about sharing
                </span>
            </div>
        </div>
    )
}