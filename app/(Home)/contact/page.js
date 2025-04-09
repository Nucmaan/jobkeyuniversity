"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Here you would normally send the data to your backend
        // For now we'll simulate a successful submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });
            
            // Reset the success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Header Section */}
            <div className="relative bg-[#33d1ff] text-white">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#33d1ff]/90 to-[#0099cc]/90"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch With Us</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                        We are here to help! Reach out to us with any questions about programs, admissions, or campus life.
                    </p>
                </div>
            </div>
            
            {/* Contact Information Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 - Address */}
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all hover:shadow-xl">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#33d1ff]/10 text-[#33d1ff] mb-6">
                            <FaMapMarkerAlt className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location</h3>
                        <p className="text-gray-600">
                            Jobkey University Campus<br />
                            Mogadishu, Somalia
                        </p>
                    </div>
                    
                    {/* Card 2 - Contact */}
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all hover:shadow-xl">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#33d1ff]/10 text-[#33d1ff] mb-6">
                            <FaPhoneAlt className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
                        <p className="text-gray-600 mb-2">
                            <a href="tel:+252612345678" className="hover:text-[#33d1ff]">+252 61 2345678</a>
                        </p>
                        <p className="text-gray-600">
                            <a href="mailto:info@jobkey.edu.so" className="hover:text-[#33d1ff]">info@jobkey.edu.so</a>
                        </p>
                    </div>
                    
                    {/* Card 3 - Hours */}
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all hover:shadow-xl">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#33d1ff]/10 text-[#33d1ff] mb-6">
                            <FaEnvelope className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Office Hours</h3>
                        <p className="text-gray-600">
                            Monday - Thursday: 8:00 AM - 5:00 PM<br />
                            Friday: 8:00 AM - 2:00 PM<br />
                            Saturday - Sunday: Closed
                        </p>
                    </div>
                </div>
                
                {/* Contact Form and Map Section */}
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                        
                        {isSubmitted ? (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center">
                                <BsCheck2Circle className="text-green-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-green-800 font-medium text-lg">Message Sent Successfully!</h3>
                                    <p className="text-green-700">Thank you for reaching out. We will get back to you shortly.</p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] transition-colors"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] transition-colors"
                                            placeholder="Your email"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] transition-colors"
                                            placeholder="Your phone"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] transition-colors"
                                            placeholder="Message subject"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] transition-colors"
                                        placeholder="Your message"
                                        required
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 px-6 bg-[#33d1ff] hover:bg-[#0099cc] text-white font-bold rounded-lg transition-colors shadow-md disabled:opacity-70"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                    
                    {/* Map and Social Links */}
                    <div className="space-y-8">
                        {/* Map */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] relative">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.298757589322!2d45.3086789!3d2.0363222999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d584211c9bdd131%3A0x92c4096b25e11638!2sJobkey%20University!5e0!3m2!1sen!2sso!4v1744179559686!5m2!1sen!2sso" 
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                        
                        {/* Quick Contact Options */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Connect With Us</h3>
                            
                            <div className="space-y-4">
                                <a 
                                    href="https://wa.me/2516500191" 
                                    className="flex items-center p-4 bg-green-50 hover:bg-green-100 text-green-800 rounded-lg transition-colors"
                                >
                                    <FaWhatsapp className="text-green-600 text-2xl mr-4" />
                                    <span className="font-medium">Chat on WhatsApp</span>
                                </a>
                                
                                <p className="text-gray-700 font-medium mb-4">Follow us on social media:</p>
                                
                                <div className="flex space-x-4">
                                    <a 
                                        href="#" 
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b5998] hover:bg-[#2d4373] text-white transition-colors"
                                    >
                                        <FaFacebookF className="text-xl" />
                                    </a>
                                    
                                    <a 
                                        href="#" 
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1da1f2] hover:bg-[#0c85d0] text-white transition-colors"
                                    >
                                        <FaTwitter className="text-xl" />
                                    </a>
                                    
                                    <a 
                                        href="#" 
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#e1306c] hover:bg-[#c13584] text-white transition-colors"
                                    >
                                        <FaInstagram className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* FAQ Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Find answers to common questions about contacting our university
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">What are the best ways to reach admissions?</h3>
                            <p className="text-gray-600">
                                For admissions inquiries, you can email admissions@jobkey.edu.so or call our dedicated admissions line at +252 61 2345678 during office hours.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">How long does it take to get a response?</h3>
                            <p className="text-gray-600">
                                We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, we recommend calling our main office directly.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Is there parking available for visitors?</h3>
                            <p className="text-gray-600">
                                Yes, visitor parking is available on campus. Please inform the security at the main gate that you are visiting, and they will direct you to the visitor parking area.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">How can I schedule a campus tour?</h3>
                            <p className="text-gray-600">
                                To schedule a campus tour, please fill out the contact form on this page or call our main office. Tours are available Monday through Thursday between 10:00 AM and 3:00 PM.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}   