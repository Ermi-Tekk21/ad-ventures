import AboutUsImage from '@/public/asset/bookAd.jpg'
import Image from 'next/image';
const ContactUsSection: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-8 bg-gray-200 pt-32">
            <div className="md:w-1/2 p-4">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
                <p className="text-lg mb-4 text-gray-600">
                    Have questions or need assistance? We're here to help! Reach out to us using the form below or connect with us through our social media channels.
                </p>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={4}
                    ></textarea>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
                        Send Message
                    </button>
                </form>
            </div>

            {/* Right Side: Contact Image */}
            <div className="md:w-1/2 flex justify-center">
                <Image
                    src={AboutUsImage} // Replace with your actual image path
                    alt="Contact Us"
                    className="rounded-lg shadow-lg"
                    width={500} // Adjust width as needed
                    height={300} // Adjust height as needed
                />
            </div>
        </div>
    );
};

export default ContactUsSection;
