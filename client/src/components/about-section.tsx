import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, durationMs = 5000, start = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / durationMs, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, durationMs]);

  return value;
}

function StatItem({ target, label, caption }: { target: number; label: string; caption: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const value = useCountUp(target, 5000, inView);
  const formatted = new Intl.NumberFormat().format(value);

  return (
    <div ref={ref} className="min-w-[180px]">
      <div className="text-3xl font-extrabold text-gray-900">{formatted}+</div>
      <div className="text-sm text-gray-700">{label}</div>
      <div className="text-xs text-gray-500">{caption}</div>
    </div>
  );
}
export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide" data-testid="about-label">
                ABOUT US
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight" data-testid="about-title">
                Driven by Data.<br />
                Powered by Results.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed" data-testid="about-description">
                Raqmi is a specialized growth marketing consultancy that leverages data-driven strategies,
                cutting-edge AI, and deep regional market insights to accelerate business growth.
              </p>

              {/* Key statistics (styled similar to hero logos row) */}
              <div className="pt-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-12 space-y-6 sm:space-y-0 opacity-90">
                  {/* Clients */}
                  <StatItem target={50} label="Clients" caption="across MENA region" />
                  {/* Projects */}
                  <StatItem target={100} label="Projects" caption="that make a difference" />
                  {/* Hours */}
                  <StatItem target={10000} label="Hours" caption="of consultation time" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Connect Section */}
          <div className="space-y-6">
            <div className="bg-white p-8 cropped-corner shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="connect-title">
                Connect With Us
              </h3>
              <p className="text-gray-600 mb-6" data-testid="connect-description">
                Ready to transform your business with proven growth marketing strategies? 
                Our team of MENA market experts is here to help you achieve measurable 
                results and sustainable growth in today's competitive landscape.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-200"
                  data-testid="social-facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-200"
                  data-testid="social-twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-200"
                  data-testid="social-youtube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-200"
                  data-testid="social-linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
