'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-fox-toast';
import { submitForm } from '@/lib/actions';
import styles from './contactform.module.scss';
import Image from 'next/image';

function formatDate(inputDate: Date): string {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    const day = days[inputDate.getDay()];
    const date = inputDate.getDate();
    const month = months[inputDate.getMonth()];

    return `${day} ${date} ${month}`;
}

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isLoading) return;

        setIsLoading(true);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        const response = await submitForm(formData);

        setIsLoading(false);

        if (response.success) {
            setIsSubmitted(true);
            toast.success(response.message || 'Email sent successfully!');
        } else {
            toast.error(response.error || 'An error occurred.');
        }
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <main className={styles.cont}>
            {isSubmitted ? (
                <div className={styles.thankYou}>
                    <Image
                        src="/thanks.svg"
                        alt="thank you message icon"
                        width={100}
                        height={100}
                    />
                    <p>I will get back to you as soon as possible!</p>
                    <button
                        className={`${styles.buttonStyle} ${styles.default}`}
                        onClick={resetForm}
                    >
                        send-new-message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={styles.messaging}>
                    <label htmlFor="name">_name:</label>
                    <input
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        placeholder="Brian Cantrell"
                        style={{ fontFamily: 'Fira Code' }}
                        required
                    />
                    <label htmlFor="_email">_email:</label>
                    <input
                        id="_email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="cantrellbrian546@gmail.com"
                        style={{ fontFamily: 'Fira Code' }}
                        required
                    />
                    <label htmlFor="_message">Message:</label>
                    <textarea
                        id="_message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        rows={5}
                        cols={33}
                        placeholder="Yo Brian! I'm interested in your talents. Can you help me with my project?"
                        style={{ resize: 'vertical', fontFamily: 'Fira Code' }}
                        required
                    />
                    <button
                        className={`${styles.buttonStyle} ${styles.default}`}
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'send-message'}
                    </button>
                </form>
            )}
            <div className={styles.beautifulResults}>
                <div className={styles.firstQuery}>
                    <span>const</span>
                    <div className={styles.varName}>button</div>
                    <div className={styles.query}>
                        <span>document</span>
                        <span>.</span>
                        <span>querySelector</span>
                        <span>&apos;#sendBtn&apos;</span>
                    </div>
                </div>
                <div className={styles.messageToJson}>
                    <span>const</span>
                    <div className={styles.varName}>message</div>
                    <span> =</span>
                    <span> {'{'}</span>
                    <div className={styles.dataObject}>
                        <div className={styles.set}>
                            <span className={styles.options}>name</span>
                            <p className={styles.results}>{name}</p>
                        </div>
                        <div className={styles.set}>
                            <span className={styles.options}>email</span>
                            <p className={styles.results}>{email}</p>
                        </div>
                        <div className={styles.set}>
                            <span className={styles.options}>message</span>
                            <p
                                className={styles.results}
                                style={{ whiteSpace: 'pre-line' }}
                            >
                                {message}
                            </p>
                        </div>
                        <div className={styles.set}>
                            <span className={styles.options}>date</span>
                            <p className={styles.results}>
                                {formatDate(currentDate)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
