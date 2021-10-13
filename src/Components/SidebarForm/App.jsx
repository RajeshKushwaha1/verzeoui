import React, { useState } from 'react';
import cross from "./image/cross.svg";
import group from "./image/Group 232.svg";
import "../SidebarForm/css/index.css";
// import DropDownBox from './DropDownBox';



const App = () => {
    const [open, setOpen] = useState(false);

    const [show, setShow] = useState(true);
    const [left, setLeft] = useState("-21rem")
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        category: "",
        status: ""

    });

    const inputEvent = (event) => {

        const { value, name } = event.target;

        setFormData((preValue) => {

            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const SubmmitForm = (e) => {
        e.preventDefault();
    }

    function handleOpen(e) {
        e.preventDefault()
        setLeft("0rem")
        setShow(true)
    }

    const handleClose = (e) => {
        e.preventDefault()
        setShow(false)

    }
 
    const HandleClick = () => {
        setOpen(!open);
      };

    return (
        <div>
            <button className="addContact" onClick={handleOpen} >Add Canditate</button>

            {
                show &&
                <div className="MainDiv" style={{ right: left }}>
                    <form onSubmit={SubmmitForm}>
                        <div className="HeadingCrossMainDiv">
                            <div className="HeadingDiv">Add Details</div>
                            <div className="crossDiv" onClick={handleClose}><img src={cross} alt="cross" /></div>
                        </div>
                        <div>
                            <h1 className="heading">Name</h1>
                            <input
                                type="text"
                                name="name"
                                onChange={inputEvent}
                                className="input"
                                required
                            />

                            <h1 className="heading">Email</h1>
                            <input
                                type="text"
                                name="email"
                                onChange={inputEvent}
                                className="input"
                                required
                            />

                            <h1 className="heading">Phone</h1>
                            <input
                                type="text"
                                name="phone"
                                onChange={inputEvent}
                                className="input"
                                required
                            />

                            <h1 className="heading">Position</h1>
                            <input
                                type="text"
                                name="position"
                                onChange={inputEvent}
                                className="input"
                                required
                            />

                            <h1 className="heading">Category</h1>
                            <input
                                type="text"
                                name="category"
                                onChange={inputEvent}
                                placeholder="Select Category"
                                className="input"
                                required
                            />

                            <div className="container">
                                <img src={group} alt="group" className="group" onClick={HandleClick}/>
                                {open && (
                                    <div class="dropdown">
                                        <ul>
                                            <li>Front-End</li>
                                            <li>Back-End</li>
                                            <li>React.js</li>
                                            <li>Flutetr</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            
                            <h1 className="heading">Status</h1>
                            <input
                                type="text"
                                name="status"
                                onChange={inputEvent}
                                placeholder="Select Status"
                                className="input"
                                required
                            />
                            <img src={group} alt="group" className="group" />
                        </div>
                        <button type="submit" className="button"><h1 className="buttonHeading">Add User</h1></button>
                    </form>
                </div>
            }

        </div>
    )
}

export default App;