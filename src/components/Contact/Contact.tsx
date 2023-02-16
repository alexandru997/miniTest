import React, {useState} from 'react';

interface IUser {
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
}

const Contact = () => {

    const [userInformation, setUserInformation] = useState<IUser>({
        name: '',
        surname: '',
        phoneNumber: '',
        email: ''
    });
    const [submitForm, setSubmitForm] = useState(false);

    const changeStateUser = (event: any) => {
        const fieldName = event.target.name;
        const valueInput = event.target.value;
        setUserInformation({...userInformation, [fieldName]: valueInput})
    }

    const onSubmitForm = () => {
        setSubmitForm(!submitForm)
    }

    const clearInputs = () => {
        setUserInformation({
            name: '',
            surname: '',
            phoneNumber: '',
            email: ''
        })
        setSubmitForm(false)
    }
    return (
        <div>
            <form>
                <label htmlFor="fname">Name:</label><br/>
                <input type="text" id="name" name="name" value={userInformation.name}
                       onChange={changeStateUser}/><br/>
                <label htmlFor="surname">Surname:</label><br/>
                <input type="text" id="surname" name="surname" value={userInformation.surname}
                       onChange={changeStateUser}/><br/>
                <label htmlFor="phone">Phone number:</label><br/>
                <input type="text" name="phoneNumber" value={userInformation.phoneNumber}
                       onChange={changeStateUser}/><br/>
                <label htmlFor="email">Email:</label><br/>
                <input type="email" id="email" name="email" value={userInformation.email}
                       onChange={changeStateUser}/><br/><br/>
            </form>
            <button onClick={onSubmitForm}> Submit</button>
            <button onClick={clearInputs}> Clear</button>

            {submitForm && (<div>
                {JSON.stringify(userInformation)}
            </div>)}
        </div>
    );
};

export default Contact;
