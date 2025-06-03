import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NavMenu } from "./NavMenu";

export function HeaderXl() {
    const logo = '/apex-logo-white.png'
  return (
    <header className="w-full hidden xl:block">
      {/* Top bar */}
      <div className="flex items-center justify-between bg-white py-4 px-20 ">
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>Support Email: info@apex-pain.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>840 Hammond St. STE 2 Bangor, ME 04401</span>
          </div>
        </div>
        
      </div>

      {/* Main navigation */}
      <div className="flex items-center justify-between bg-defaultGreen p-8 rounded-2xl mx-12 text-white">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <img src={logo} alt="apex-logo" className="h-10" />


          </Link>
          <NavMenu />
        </div>
        <div className="flex items-center gap-4">
          <Button className="rounded-md py-6 px-4">
            Book An Appointment
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
