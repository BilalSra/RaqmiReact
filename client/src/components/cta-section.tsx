import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Contact</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Have a Project in Mind?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Tell us a bit about your goals and timeline. We’ll get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" data-testid="contact-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              aria-label="Name"
              className="w-full rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              name="company"
              placeholder="Company (Optional)"
              aria-label="Company"
              className="w-full rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Email"
              className="w-full rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              aria-label="Phone number"
              className="w-full rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project"
            aria-label="Message"
            className="w-full rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              className="px-6 py-3 rounded-full bg-primary text-white hover:bg-indigo-600 transition-colors"
              data-testid="button-send-message"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
