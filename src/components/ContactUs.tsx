import { footerDetails } from '@/data/footer'
import React from 'react'

const ContactUs: React.FC = () => {
    return (
        <div className=" flex items-center justify-center font-sans">
            {/* Contact Card Container */}
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full transform ">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
                    Get in Touch
                </h2>
                <p className="text-gray-600 mb-8 text-lg text-center leading-relaxed">
                    We&apos;d love to hear from you!
                </p>

                {/* Contact Information Section */}
                <div className=" gap-6">
                    <div className="flex items-center space-x-4 pb-5">
                        <div className="flex-shrink-0 p-3 bg-green-100 text-green-600 rounded-full">
                            {/* WhatsApp Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 27 27"
                            >
                                <path d="M20.52 3.48a12 12 0 0 0-17 16l-1.31 4.79a1 1 0 0 0 1.22 1.22l4.79-1.31a12 12 0 0 0 16-17Zm-3.38 12.26c-.4.67-1.2 1.48-2.06 1.68-1.32.3-3.3-.28-5.35-2.2s-2.53-4-2.2-5.35c.2-.86 1.01-1.66 1.68-2.06a.67.67 0 0 1 .83.14l1.14 1.38a.66.66 0 0 1-.04.88l-.56.56a.43.43 0 0 0-.1.48 5.18 5.18 0 0 0 2.48 2.48.43.43 0 0 0 .48-.1l.56-.56a.66.66 0 0 1 .88-.04l1.38 1.14a.67.67 0 0 1 .14.83Z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">WhatsApp</h3>
                            <p className="text-gray-600">{footerDetails.telephone}</p>
                        </div>
                    </div>


                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 p-3 flex-col bg-indigo-100 text-indigo-600 rounded-full">
                            {/* Email Icon */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0V5a2 2 0 012-2h14a2 2 0 012 2v7"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                            <p className="text-gray-600">{footerDetails.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs