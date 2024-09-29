const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-navBg text-white px-20 py-8">
            <nav><h1 className="text-2xl font-semibold">Ad Ventures</h1></nav>
            <div className="flex justify-end">
                <ul className="flex max-md:flex-col max-md:justify-items-end gap-5 justify-end">
                    <li className="font-semibold">Home
                        <hr className="border-2 border-red-700 mt-3" />
                    </li>
                    <li>Drivers</li>
                    <li>Book Ad</li>
                    <li>Privacy Policy</li>
                    <li>Support</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="flex flex-col gap-6"><h1 className="font-semibold">Contact info:</h1>
                <div className="px-8">
                    <ul>
                        <li><span>email:</span> Adventures@gmail.com</li>
                        <li><span>phone:</span> +254 23 2345 646</li>
                        <li><span>location:</span> NYC ft street</li>
                    </ul>
                </div></div>
            <div>
                <ul className="flex justify-end gap-20 m-5">
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ebe5e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ebe5e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ebe5e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></li>
                </ul>
            </div>
            <hr />
            <div><p className="text-center font-light m-5">© 2024 Ad Ventures. All rights reserved.</p></div>
        </footer>
    )
}
export default Footer;