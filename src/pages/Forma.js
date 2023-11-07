import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "./../img/icons/menuIcon.svg";
import { ReactComponent as CrossIcon } from "./../img/icons/cross_icon.svg";
import { Transition } from "react-transition-group";
import "./../styles/forma.css";

function Forma() {
    const [isOpen, setOpen] = useState(false);

    return (
        // <header className="header">
        <main>
            <Transition in={isOpen} timeout={300} unmountOnExit={true}>
                {(state) => <form className={`mobile-menu ${state}`}>


                    <button className="cross_button" onClick={() => setOpen(!isOpen)}>
                        <CrossIcon />
                    </button>

                    <div className="header__wrapper">
                        <div >
                            <input type="text" name="user_name" placeholder="name" required="" maxlength="17" />
                        </div>
                        <div >
                            <input type="tel" name="user_phone" id="phone_question" placeholder="tel" required="" maxlength="17" />
                        </div>
                        <div >
                            <input type="email" name="user_email" placeholder="Введите рабочий e-mail" maxlength="100" required="" />
                        </div>
                        <div >
                            <textarea name="user_question" placeholder="Задайте вопрос или опишите проект" maxlength="800" required="" />
                        </div>
                    </div>

                    {/* <div class="form-group form-group-animation">
                        <input type="tel" name="user_phone" id="phone_question" class="form-field user_phone error" placeholder="tel" value="" required="" maxlength="17" aria-invalid="true"><label id="phone_question-error" class="error" for="phone_question" style="display: inline-block;">This field is required.</label>
                        </input>
                        <label>Your phone number:</label>
                    </div>
                    <div class="form-group form-group-animation">
                        <input type="email" name="user_email" placeholder="Введите рабочий e-mail" class="form-field user_email error" value="" required="" aria-invalid="true"><label id="user_email-error" class="error" for="user_email"></label>
                            <label>Email:</label></input>
                    </div> */}


                    {/* <div className="menu__list">
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
                    </div> */}



                </form>}

            </Transition>

            <button className="menu_button" onClick={() => setOpen(!isOpen)}>
                <MenuIcon />

            </button>
        </main>
        // </header>

    );
}

export default Forma;