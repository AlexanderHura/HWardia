

// import React, { Component } from "react";
import React, { useState } from "react";
import { Transition } from 'react-transition-group'; // ES6
import "./../forms/form.css";
import "./../forms/castomBtn.css";

function Form() {
    const [isOpen, setOpen] = useState(false);

    return (
        <main>
            <Transition in={isOpen} timeout={300} unmountOnExit={true}>
                {(state) => (
                    <form className={`menu menu--${state}`}  >
                        <div className="menu__list">
                            <div className="menu__item">
                                <input type="text" name="user_name" placeholder="name" required="" maxlength="17" />
                            </div>
                            <div className="menu__item">
                                <input type="tel" name="user_phone" id="phone_question" placeholder="tel" required="" maxlength="17" />
                            </div>
                            <div class="menu__item">
                                <input type="email" name="user_email" placeholder="e-mail" maxlength="100" required="" />
                            </div>
                            <div className="menu__item">
                                <textarea name="user_question" placeholder="Your questuion" maxlength="800" required="" />
                            </div>
                        </div>


                    </form>
                    // <nav className={`menu menu--${state}`}>
                    //     <ul className="menu__list">
                    //         <li className="menu__item">111111</li>
                    //         <li className="menu__item">222222</li>
                    //         <li className="menu__item">333333</li>
                    //     </ul>
                    // </nav>



                )}
            </Transition>

            <button class="animated-button" onClick={() => setOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Contact Me
            </button>





        </main>

    )
}
export default Form;