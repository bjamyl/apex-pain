import Link from "next/link";
import { Mail, MapPin, Phone, Printer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NavMenu } from "./NavMenu";
import { FaArrowRightLong } from "react-icons/fa6";

export function HeaderXl() {
  const logo = "/apex-pain-white.png";
  return (
    <header className="w-full hidden xl:block">
      {/* Top bar */}
      <div className="flex items-center justify-between bg-gray-300 py-4 px-20 ">
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>Support Email: <a href="mailto:info@apex-pain.com">info@apex-pain.com</a></span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>840 Hammond St. STE 2 Bangor, ME 04401</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Printer className="h-4 w-4" />
            <span>Fax: 1-888-355-6416</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>Phone: 207-830-2739</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-12 bg-gray-300">
        <div className="flex items-center justify-between bg-defaultGreen px-8 py-2 rounded-2xl  text-white">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <img src={logo} alt="apex-logo" className="h-32" />
            </Link>
            <NavMenu />
          </div>
          <div className="flex items-center gap-4">
            <Link href={"/contact"}>
            <Button className="rounded-none py-6 px-4 hover:bg-slate-200 transition-colors bg-slate-100 text-defaultGreen font-semibold">
              Book An Appointment
              <FaArrowRightLong />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
