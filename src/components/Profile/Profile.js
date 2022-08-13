import React from "react";
import Avatar from 'react-avatar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chip from "@material-ui/core/Chip";
function Profile() {
    return (
        <div className="app-container">
            <div className="profile-layout">
                <header className="background background-lg" style={{ backgroundColor: "#4b2caa" }}>
                    <div className="avatar avatar-profile center-block">
                        <Avatar name="Foo Bar" round={true} />
                    </div>
                    <div className="badges">
                        <h1 className="profile-name h3">Dummy Dum</h1>
                    </div>
                </header>
            </div>

            <div className="card mb-3 offset-4 cardSec" style={{ maxWidth: "540px", marginTop: "55px", marginBottom: "5rem" }}>
                <div className="row no-gutters">
                    <div className="col-md-12 mt-2 mb-2 panel-title">
                        <div className="">Story by walletAddress</div>
                    </div>
                    <div className="col-md-4 works-image">
                        <img className="card-img" src="https://img.wattpad.com/cover/318935119-144-kb6ae3f.jpg"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-heading">Story Title</p>
                            <div className="offset-4 col-4"><Chip label="Fanfiction" component="a" href="#chip" /></div>
                            <p className="card-text mt-3">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.This content is a little bit longer.This content is a little bit longer. This content is a little bit longer.</p>
                            <p class="card-text"><small className="text-muted">Last updated {new Date().toLocaleString()}</small></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;