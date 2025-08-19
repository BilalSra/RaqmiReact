import miskLogo from "@assets/MiSK_Foundation_Logo.png";
import htuLogo from "@assets/htu logo.png";
import lisanLogo from "@assets/Lisan-Logo.png";
import arijLogo from "@assets/arij logo.png";
import reflectionsLogo from "@assets/reflections logo.webp";
import nationalLogo from "@assets/national_logo-removebg-preview.png";

export default function ClientsSection() {
  const clients = [
    { name: "Misk", logo: miskLogo },
    { name: "HTU", logo: htuLogo },
    { name: "Lisan", logo: lisanLogo },
    { name: "Arij", logo: arijLogo },
    { name: "Reflections", logo: reflectionsLogo },
    { name: "National", logo: nationalLogo }
  ];

  return (
    <section className="bg-slate-800 py-16 lg:py-20 pb-56">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Some of Our Happy Clients
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Trusted by leading organizations across the MENA region to drive growth
            <br />
            and deliver measurable results through strategic partnerships.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mb-24">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 hover:opacity-100 transition-opacity duration-300 opacity-80"
            >
              <img
                src={client.logo}
                alt={`${client.name} Logo`}
                className={`w-auto brightness-0 invert hover:brightness-0 hover:invert hover:opacity-80 transition-all duration-300 ${client.name === 'National' ? 'h-20' : 'h-12'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
