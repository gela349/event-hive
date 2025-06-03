import {Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() { 
return( 
    <footer className="bg-navy-blue text-white">
            
        <h1><span>Event</span> <span>Hive</span></h1>
        <form>
            <input type="text" placeholder="Enter your mail" name="email" />
            <button type="submit">Subscribe</button>
        </form>
        <div className="flex justify-center text-center space-x-4 pt-6 pb-5">
            <span>Home</span>
            <span>About</span>
            <span>Service</span>
            <span>Get in touch</span>
            <span>FAQs</span>
        </div>
        <hr className="" />
        <div className="flex flex-row justify-around pt-3 pb-3">
            <div className="space-x-2">
                <button>English</button>
                <button>French</button>
                <button>Hindi</button>
            </div>
        </div>

        <div>
          <div>
<Linkedin/>
<Instagram/>
<Facebook/>
            </div> 
            <p> Non Copyrighted @ 2025 Upload by EventHive</p> 
        </div>
    </footer>
    );
} 
