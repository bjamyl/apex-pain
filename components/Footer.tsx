"use client";

import Link from "next/link";
import { Facebook, Send, ArrowUp } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {
  const services = [
    "Spinal Cord and Stimulation",
    "Radiofrequency Ablations",
    "Kyphoplasty",
    "Epidural Injections",
    "Peripheral Nerve Stimulation",
    "Sacroiliac Joint Fusion",
    "Joint Injections",
  ];

  const providers = [
    { name: "Dr. Ammar Mahmoud", href: "/doctors/ammar-mahmoud" },
    { name: "Dr. Mansoor Aman", href: "/doctors/mansoor-aman" },
    { name: "Dr. Vishal Patel", href: "/doctors/vishal-patel" },
  ];
  const logo = "/apex-pain-white.png";

  return (
    <div className="xl:p-14 bg-gray-300">
      <footer className="bg-defaultGreen xl:pt-8 xl:pb-4 text-gray-300 xl:rounded-xl">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Logo and Description - Full width on mobile, 1/3 on desktop */}
            <div className="lg:col-span-4">
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <img src={logo} alt="apex-logo" className="h-32" />
                </div>
              </div>
              <p className="text-sm mb-6">
                Apex Interventional Pain Specialists is a leading provider of
                comprehensive pain management solutions, dedicated to improving
                the quality of life for our patients through innovative
                treatments and compassionate care.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-3 mb-8">
                <Link
                  href="#"
                  className="border p-3 rounded-full hover:bg-white hover:text-defaultGreen transition-colors"
                >
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="border p-3 rounded-full hover:bg-white hover:text-defaultGreen transition-colors"
                >
                  <Send size={20} />
                  <span className="sr-only">Telegram</span>
                </Link>
              </div>
            </div>

            {/* Services Links - Full width on mobile, stacked on tablet, side by side on desktop */}
            <div className="lg:col-span-2 md:mt-0 mt-4">
              <h3 className="text-white text-lg font-semibold mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href="/services"
                      className="hover:text-[#f0c14b] transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="lg:col-span-2 mt-5">
                <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-[#f0c14b] transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awareness"
                      className="hover:text-[#f0c14b] transition-colors"
                    >
                      Awareness
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-[#f0c14b] transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-[#f0c14b] transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Providers and Links - Full width on mobile, side by side on desktop */}
            <div className="lg:col-span-2 md:mt-0 mt-4">
              <h3 className="text-white text-lg font-semibold mb-4">
                Providers
              </h3>
              <ul className="space-y-3">
                {providers.map((provider, index) => (
                  <li key={index}>
                    <Link
                      href={provider.href}
                      className="hover:text-[#f0c14b] transition-colors"
                    >
                      {provider.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact With Us - Full width on mobile, right side on tablet and desktop */}
            <div className="lg:col-span-4 md:mt-0 mt-8">
              <div className="bg-gray-300 text-defaultGreen p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>

                <div className="space-y-4 text-sm">
                  <p>
                    <strong>Address:</strong> 840 Hammond St. STE 2 Bangor, ME
                    04401
                  </p>
                  <p>
                    <strong>Support mail:</strong> info@apex-mail.com
                  </p>
                  <p>
                    <strong>Fax:</strong> 1 888-355-6416
                  </p>
                  <p>
                    <strong>Telephone:</strong> 207-830-2739(APEX)
                  </p>

                  <Link
                    href="/contact"
                    className="bg-defaultGreen text-white py-3 px-6 rounded flex items-center justify-center hover:bg-green-950 transition-colors"
                  >
                    Request An Appointment
                    <FaArrowRightLong className="ml-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Only visible on desktop */}
        <div className="border-t border-gray-400 mt-8 py-4 hidden lg:block">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
            <p>
              <span className="font-semibold">
                Apex Interventional Pain Specialists
              </span>{" "}
              © 2025 – All Rights Reserved
            </p>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#f0c14b] text-[#0a1a2f] p-3 rounded-full hover:bg-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}
