"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const controls = useAnimation();
    
    useEffect(() => {
        controls.start("visible");
    }, [controls]);

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
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-40 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-40 left-60 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
            
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
            
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-500/90"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white">
                            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                            Connect With Us
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch With Us</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                        We are here to help! Reach out to us with any questions about programs, admissions, or campus life.
                    </p>
                </div>
            </motion.div>
            
            {/* Contact Information Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
                <motion.div 
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                            }
                        }
                    }}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Card 1 - Address */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="bg-white rounded-2xl shadow-xl p-8 text-center transition-all hover:shadow-2xl border border-gray-100 group"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                            <FaMapMarkerAlt className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                        <p className="text-gray-600">
                            Jobkey University Campus<br />
                            Mogadishu, Somalia
                        </p>
                    </motion.div>
                    
                    {/* Card 2 - Contact */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                        }}
                        className="bg-white rounded-2xl shadow-xl p-8 text-center transition-all hover:shadow-2xl border border-gray-100 group"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                            <FaPhoneAlt className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
                        <p className="text-gray-600 mb-2">
                            <a href="tel:+252612345678" className="hover:text-blue-600 transition-colors">+252616774499</a>
                        </p>
                        <p className="text-gray-600">
                            <a href="mailto:info@jobkey.edu.so" className="hover:text-blue-600 transition-colors">info@jobkey.edu.so</a>
                        </p>
                    </motion.div>
                    
                    {/* Card 3 - Hours */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
                        }}
                        className="bg-white rounded-2xl shadow-xl p-8 text-center transition-all hover:shadow-2xl border border-gray-100 group"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                            <FaEnvelope className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
                        <p className="text-gray-600">
                           Saturday - Friday<br />
                        </p>
                    </motion.div>
                </motion.div>
                
                {/* Contact Form and Map Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
                        <div className="absolute h-2 w-full bg-gradient-to-r from-blue-600 to-cyan-500 top-0 left-0"></div>
                        <div className="absolute right-0 bottom-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mb-20 z-0"></div>
                        <div className="relative z-10">
                            <div className="flex items-center mb-8">
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg mr-5">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
                            </div>
                            
                            {isSubmitted ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-center"
                                >
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-5">
                                        <BsCheck2Circle className="text-green-600 text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-green-800 font-bold text-lg">Message Sent Successfully!</h3>
                                        <p className="text-green-700">Thank you for reaching out. We will get back to you shortly.</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="Your name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="Your email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="Your phone"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                                Subject
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="Message subject"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <div className="relative">
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="5"
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder="Your message"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-lg transition-all duration-300 shadow-md disabled:opacity-70 flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </div>
                    
                    {/* Map and Social Links */}
                    <div className="space-y-8">
                        {/* Map */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-[400px] relative border border-gray-100">
                            <div className="absolute h-2 w-full bg-gradient-to-r from-blue-600 to-cyan-500 top-0 left-0 z-10"></div>
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
                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg mr-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Connect With Us</h3>
                            </div>
                            
                            <div className="space-y-5">
                                <a 
                                    href="https://wa.me/252616774499" 
                                    className="flex items-center p-4 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 text-green-800 rounded-xl transition-all duration-300 shadow-sm hover:shadow"
                                >
                                    <FaWhatsapp className="text-green-600 text-2xl mr-4" />
                                    <span className="font-medium">Chat on WhatsApp</span>
                                </a>
                               
                            </div>
                        </div>
                    </div>
                </motion.div>
                
                {/* FAQ Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-24"
                >
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-5">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            Support
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find answers to common questions about contacting our university
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                question: "What are the best ways to reach admissions?",
                                answer: "For admissions inquiries, you can email info@jobkey.edu.so or call our dedicated admissions line at +252616774499 during office hours."
                            },
                            {
                                question: "How long does it take to get a response?",
                                answer: "We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, we recommend calling our main office directly."
                            },
                            {
                                question: "Is there parking available for visitors?",
                                answer: "Yes, visitor parking is available on campus. Please inform the security at the main gate that you are visiting, and they will direct you to the visitor parking area."
                            },
                            {
                                question: "How can I schedule a campus tour?",
                                answer: "To schedule a campus tour, please fill out the contact form on this page or call our main office. Tours are available Monday through Thursday between 10:00 AM and 3:00 PM."
                            }
                        ].map((faq, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                            >
                                <div className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-600">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            
            {/* Add custom style for animation delays */}
            <style jsx global>{`
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
            `}</style>
        </div>
    );
}   