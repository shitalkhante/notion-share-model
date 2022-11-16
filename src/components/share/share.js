import { useEffect } from "react";
import "./share.css";
import { useNavigate } from "react-router-dom";
export const Share = (props) => {
    const navigate = useNavigate();
    // useEffect(()=>{},[props.state])
    console.log(props.state.data);

    return (
        <div>
            <p id="txt-head">click on input field to add people, emails, groups</p>
            <button id="btn"><span id="share-text">Share</span><div id="share-vector"></div></button>
            <div id="share-page">
                <div id="div1">
                    <div id="share-to-web-icon"></div>
                    <span>
                        <h4>Share to web</h4>
                        <p>Publish and share link with anyone</p>
                    </span>
                </div>
                <div id="filter">
                    <div id="search-box">
                        <input type="text" placeholder="Peoples, emails, groups" id="search1" onClick={()=>{navigate("/search")}}/>
                        <button id="invite-btn1">Invite</button>
                    </div>
                    <div className="members">
                        <div id="member-logo"></div>
                        <span id="ss">
                            <h4>Everyone at Oslash</h4>
                            <p>25 Workspace Members</p>
                        </span>
                        <span>
                            <select className="select">
                                <option value="no access">No Access</option>
                                <option value="no access">Full Access</option>
                                <option value="no access">Can Edit</option>
                                <option value="no access">Can View</option>
                            </select>
                        </span>
                    </div>
                    {props.state.data &&
                        <div className="members">
                        <div id="member-logo"></div>
                        <span id="ss">
                            <h4>{props.state.data.name}</h4>
                            <p>{props.state.data.email}s</p>
                        </span>
                        <span>
                            <select className="select">
                                <option value="no access">No Access</option>
                                <option value="no access">Full Access</option>
                                <option value="no access">Can Edit</option>
                                <option value="no access">Can View</option>
                            </select>
                        </span>
                    </div>
                    }
                </div>
                <div className="members" id="last">
                        <div id="ques"></div>
                        <span id="ss">
                            learning about sharing
                        </span>
                        <div>
                            <div id="copy"></div>
                            <span id="copy-txt">Copy link</span>
                        </div>
                    </div>
            </div>
        </div>
    )
}