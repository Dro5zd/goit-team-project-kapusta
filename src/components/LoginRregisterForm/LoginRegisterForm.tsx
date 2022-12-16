import React, {ChangeEvent, FormEvent, useState} from 'react';
import {
    ContactFormButton,
    ContactFormLabel,
    ContactFormWrapper,
    Input, UserIcon,
} from '../ContactForm/ContactForm.styled';
import {useAppDispatch} from '../../redux/store';
import {createUser, loginUser} from '../../redux/auth/auth-operations';
import {
    EmailIcon,
    FormButton,
    FormTitle,
    FormWrapper,
    KeyIcon, RegFormTitle,
    RegFormWrapper,
} from './LoginRegisterForm.styled';

const LoginRegisterForm = () => {
    const [isHidden, setIsHidden] = useState(true);
    const dispatch = useAppDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createUser({name, email, password}))
        resetForm()
    };
    const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser({email, password}))
        resetForm()
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    };
    return (
        <FormWrapper>
            <FormTitle>CONTAppCTS</FormTitle>
            {isHidden ?
            <RegFormWrapper>
                <RegFormTitle>Login</RegFormTitle>
                <ContactFormWrapper onSubmit={handleLoginSubmit}>
                    <ContactFormLabel>E-mail
                        <EmailIcon/>
                        <Input
                            type='email'
                            name='e-mail'
                            id='login_email'
                            placeholder='example@gmail.com'
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </ContactFormLabel>
                    <ContactFormLabel>Password
                        <KeyIcon/>
                        <Input
                            type='password'
                            name='password'
                            id='login_password'
                            min='7'
                            placeholder='Your password'
                            required
                            value={password}
                            onChange={handlePasswordChange}
                            title="The password must be more than 7 characters"
                        />
                    </ContactFormLabel>
                    <ContactFormButton type="submit">Login</ContactFormButton>
                </ContactFormWrapper>
                <FormButton onClick={()=> setIsHidden(!isHidden)}>
                    <span>Don't have an account? Sign up</span>
                </FormButton>
            </RegFormWrapper>
:
            <RegFormWrapper>
                <RegFormTitle>Register</RegFormTitle>
                <ContactFormWrapper onSubmit={handleRegisterSubmit}>
                    <ContactFormLabel htmlFor='register_name'>Name
                        <UserIcon top={'25px'}/>
                        <Input
                            type='text'
                            name='name'
                            id='register_name'
                            placeholder='Your name'
                            autoFocus
                            min='3' max='25'
                            required
                            value={name}
                            onChange={handleNameChange}
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        />
                    </ContactFormLabel>
                    <ContactFormLabel htmlFor='register_email'>E-mail
                        <EmailIcon/>
                        <Input
                            type='email'
                            name='e-mail'
                            id='register_email'
                            placeholder='example@gmail.com'
                            required
                            value={email}
                            onChange={handleEmailChange}
                            title="Email must contain @ . For example example@gmail.com"
                        />
                    </ContactFormLabel>
                    <ContactFormLabel htmlFor='register_password'>Password
                        <KeyIcon/>
                        <Input
                            type='password'
                            name='password'
                            id='register_password'
                            min='7'
                            placeholder='Your password'
                            required
                            value={password}
                            onChange={handlePasswordChange}
                            title="The password must be more than 7 characters"
                        />
                    </ContactFormLabel>
                    <ContactFormButton type="submit">Register</ContactFormButton>
                </ContactFormWrapper>
                <FormButton onClick={()=> setIsHidden(!isHidden)}>
                    <span>Already have an account? Login here</span>
                </FormButton>
            </RegFormWrapper>}
        </FormWrapper>

    );
};

export default LoginRegisterForm;