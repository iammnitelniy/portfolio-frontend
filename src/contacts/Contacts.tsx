import React, {FormEvent, useState} from "react";
import s from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'


export const Contacts = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const contactsHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const message = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nIN PROGRESS`;

        // Выводим сообщение в alert
        alert(message);
        setFormData({ name: '', email: '', message: '' })
    }

    const handleInputNameChange = (e: any) => {


        // Обновляем состояние с данными формы
        setFormData({ ...formData, name: e.currentTarget.value });
    }
    const handleInputEmailChange = (e: any) => {



        setFormData({ ...formData, email: e.currentTarget.value });
    }
    const handleTextareaChange = (e: any) => {



        setFormData({ ...formData, message: e.currentTarget.value });
    }

    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={styleContainer.title}>Contacts</h2>

                <div className={s.contactsForm}>

                    <form onSubmit={contactsHandler}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputNameChange}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputEmailChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleTextareaChange}
                        />
                        <button className={styleContainer.button} type="submit">Submit</button>
                    </form>
                </div>


            </div>
        </div>
    );
};

