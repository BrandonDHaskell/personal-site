import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailMe: React.FC = () => {
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Sending email");
        emailjs
            .sendForm(
                'service_o31wbxh',
                'template_profile_site',
                e.currentTarget,
                '3WOn7ZaKmoc_hnHYt'
            )
            .then(
                () => {
                    setEmailSent(true);
                },
                (error) => {
                    console.log('Email sending failed:', error.text);
                }
            );
    };

    return (
        <section>
            <h2 className="mb-8 mt-8 text-4xl font-bold md:text-5xl lg:text-6xl dark:text-sky-500">Email Me</h2>
            {emailSent ? (
                <div>
                    <p>Email sent successfully!</p>
                    <p>Feel free to connect with me on other social platforms:</p>
                    <p><a href='https://linkedin.com/in/BrandonDHaskell'>in/BrandonDHaskell</a></p>
                    <p><a href='https://twitter.com/BrandonDHaskell'>@BrandonDHaskell</a></p>
                </div>
            ) : (
                <form onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} required />
                    </div>
                    <button type="submit">Send</button>
                </form>
            )}
        </section>
    );
};

export default EmailMe;
