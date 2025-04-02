import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authenticationApiInstance from '../../utils/Apis/authenticationApiInstance';
import title from './../../assets/images/title-light-theme.png';
import styles from './index.module.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await authenticationApiInstance.post('/sign-in', {
                email,
                password
            });

            if (response.status === 200) {
                navigate('/dashboard')
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError(error.response.data);
            } else {
                setError('Something went wrong. Please try again later.');
            }
        }
    }

    return (
        <div className={styles.loginDivision}>
            <div className={styles.loginLeftBanner}>
                <h1 className={styles.loginLeftBannerTagline}>
                    Built for Teams, Secured for Success
                </h1>
            </div>
            <div className={styles.loginRightSection}>
                <div className={styles.loginContent}>
                    <div className={styles.loginContentLoginForm}>
                        <img src={title} className='w-[12rem] mb-[1.5rem]' />
                        <h1 className={styles.loginContentLoginFormHeader}>Welcome back</h1>
                        <h3 className={styles.loginContentLoginFormSubHeader}>Please enter your registration information</h3>

                        <form className={styles.loginForm} onSubmit={handleSubmit}>
                            <div className='pb-[1rem]'>
                                <div className={styles.loginRequirement}>
                                    <h3 className={styles.loginRequirementHeader}>Registered Email</h3>
                                    <input type='text'
                                        className={styles.loginRequirementInput}
                                        placeholder='Enter your email...'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <div className={styles.loginRequirement}>
                                    <h3 className={styles.loginRequirementHeader}>Password</h3>
                                    <input
                                        type='password'
                                        className={styles.loginRequirementInput}
                                        placeholder='Enter your password...'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.loginContentAnchorContainer}>
                                <h3 className={styles.loginContentError}>{error}</h3>
                                <a className={styles.loginContentAnchor}>Forgot password?</a>
                            </div>

                            <button type='submit' className={styles.loginButton}>Sign In</button>
                        </form>
                    </div>
                    <div className={styles.loginContentAnchorContainer}>
                        <a className={styles.loginContentAnchor}>Privacy Policy</a>
                        <a className={styles.loginContentAnchor}>Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login