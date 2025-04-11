import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <>
            <div>
                <div className="footer mt-5">
                    <p className="text-gray-500 text-sm text-center text">
                        If you enjoyed exploring my portfolio,
                        here’s more where that came from. <br />
                        Take a stroll through my <span className="text-yellow-500 cursor-pointer">blogs</span> and <span className="text-yellow-500 cursor-pointer">short stories</span><br />
                        You might just stumble upon something that makes you smile or think.
                    </p>
                    <p className="text-gray-500 text-[0.7rem] text-center text mt-5">
                    Built with code, sprinkled with creativity, and infused with passion for what I do. <br />
                    Thank you for exploring my work:)
                    </p>
                    <p className="text-yellow-500 text-[0.7rem] text-center text mt-3">
                        - Raghavendra R
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer;