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
                    <div className="flex justify-center outline-sky-500">
                        <div className="text-sky-500 px-2">
                            <label htmlFor="name">Name</label>
                        </div>
                        <div>
                            <input type="text" id="name" name="name" required className="border-2 rounded border-slate-300 text-sky-500 px-2 m-2" />
                        </div>
                    </div>
                    <div className="flex justify-center outline-sky-500">
                        <div className="text-sky-500 px-2">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="text-sky-500 px-2"> 
                            <input type="email" id="email" name="email" required className="border-2 rounded border-slate-300 text-sky-500 px-2 m-2" />
                        </div>
                    </div>
                    <div className="flex justify-center outline-sky-500">
                        <div className="text-sky-500 px-2">
                            <label htmlFor="message">Message</label>
                        </div>
                        <div className="text-sky-500 px-2">
                            <textarea id="message" name="message" rows={5} required className="border-2 rounded border-slate-300 text-sky-500 px-2 m-2" />
                        </div>
                    </div>
                    <button type="submit" className="m-2 px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline outline-2 outline-offset-0 outline-sky-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent">Send</button>
                </form>
            )
            }
        </section >
    );
};

export default EmailMe;
