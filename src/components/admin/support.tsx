"use client"

// pages/support.tsx
import React, { useState } from 'react';

// Mock FAQs data
const mockFAQs = [
    {
        question: "How do I reset my password?",
        answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page."
    },
    {
        question: "How can I contact support?",
        answer: "You can contact support by filling out the contact form on this page or emailing support@example.com."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept credit cards, PayPal, and other online payment methods."
    }
];

const SupportPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here, you would typically send the form data to your backend.
        console.log('Support request submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Clear the form
    };

    return (
        <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Support</h1>

            {submitted ? (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
                    <h2 className="text-xl font-semibold">Thank You!</h2>
                    <p className="mt-2">Your support request has been submitted. We will get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                            rows={4}
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            )}

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                {mockFAQs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="font-semibold">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SupportPage;
