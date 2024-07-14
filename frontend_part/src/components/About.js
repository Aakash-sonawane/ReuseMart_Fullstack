import React from 'react'

export default function About() {
  return (
    <div className='about-wrapper'>
    <div className="about-container">
        <header>
            <h1>Welcome to Reusemart!</h1>
            <p>Your Marketplace for Second-Hand Treasures</p>
        </header>
    
        <section>
            <h2>Our Mission</h2>
            <p>
                At Reusemart, we believe in the beauty of second-hand items finding new homes and stories. Our platform is designed to facilitate connections between buyers and sellers, making it easy to chat and negotiate directly.
            </p>
            <ul>
                <li><strong>Buyers:</strong> Discover unique and affordable items that are gently used and full of character.</li>
                <li><strong>Sellers:</strong> Easily list items and communicate directly with potential buyers to arrange transactions.</li>
            </ul>
        </section>

        <section>
            <h2>Why Choose Us?</h2>
            <ul>
                <li><strong>Ease of Use:</strong> Our user-friendly interface makes it simple to browse, connect, and negotiate.</li>
                <li><strong>Community Focused:</strong> We foster a supportive environment where trust and respect are paramount.</li>
                <li><strong>Simplicity:</strong> By facilitating direct communication, we simplify the buying and selling process.</li>
            </ul>
        </section>

        <section>
            <h2>How It Works</h2>
            <ol>
                <li><strong>List Your Item:</strong> Create a listing with photos and details.</li>
                <li><strong>Connect and Negotiate:</strong> Chat directly with potential buyers or sellers to discuss details and arrange transactions.</li>
                <li><strong>Finalize Your Transaction:</strong> Agree on terms, meet up (if applicable), and complete your transaction offline.</li>
            </ol>
        </section>

        <section>
            <h2>Join Us!</h2>
            <p>
                Whether you're looking to declutter your space or find a unique treasure, Reusemart connects you with like-minded individuals passionate about sustainable living and quality finds.
            </p>
            <p>
                Ready to explore? <a href="#">Start browsing</a> or <a href="#">selling today</a> and join our community!
            </p>
        </section>
        
    </div>
    
        <footer>
            <section id="contact">
                <h2>Get in Touch</h2>
                <p>Have questions or feedback? We'd love to hear from you! Contact our friendly team at <a href="mailto:info@reusemart.com">info@reusemart.com</a> or connect with us on <a href="https://twitter.com/reusemart">Twitter</a> and <a href="https://facebook.com/reusemart">Facebook</a>. Stay updated on our latest news and product launches by subscribing to our newsletter.</p>
            </section>
        </footer>

      
    </div>
  )
}
