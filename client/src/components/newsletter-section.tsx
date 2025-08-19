import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Subscribing email:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="relative -mt-16 z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Box - Overlapping Design */}
        <div className="relative bg-primary rounded-2xl py-12 px-8 overflow-hidden shadow-2xl">
          <div className="max-w-xl mx-auto text-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                Need a strategic partner to help you scale results?
              </h2>
              
              <div className="mt-8">
                <a
                  href="/contact"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 inline-block text-lg"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
