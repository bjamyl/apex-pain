"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  needs: z.string({
    required_error: "Please select your needs.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      needs: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <div className=" border border-gray-400 px-4 mt-10 py-10 rounded-2xl md:px-6 xl:pt-20 xl:px-16 ">
      <div className="">
        <div className="">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-defaultGreen">
                  {"We'd love to hear from you!"}
                </h1>
                <p className="text-slate-600 xl:text-lg">
                  We are always ready to help you at any time, {"let's"} talk
                  together.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                {/* Address Business */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-defaultGreen">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-defaultGreen">
                      Business Address
                    </h3>
                  </div>
                  <div className="ml-15 space-y-1 text-slate-600">
                    <p>840 Hammond St. STE 2 Bangor, ME 04401</p>
                  </div>
                </div>

                {/* Contact Us */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-defaultGreen">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-defaultGreen">
                      Contact Us
                    </h3>
                  </div>
                  <div className="ml-15 space-y-1 text-slate-600">
                    <p>Call Support: <br /> +1 207-830-2739</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-defaultGreen">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-defaultGreen">
                      Email Address
                    </h3>
                  </div>
                  <div className="ml-15 space-y-1 text-slate-600">
                    <p><a href="mailto:info@apex-pain.com">info@apex-pain.com</a></p>
                  </div>
                </div>

                {/* Working Time */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-defaultGreen">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-defaultGreen">
                      Working Time
                    </h3>
                  </div>
                  <div className="ml-15 space-y-1 text-slate-600">
                    <p>Mon - Sat: 8.00am - 18.00pm</p>
                    <p>Holiday : Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-defaultGreen">
                  Follow Us:
                </h3>
                <div className="flex flex-wrap gap-4 text-slate-600">
                  <Link target="_blank" href="https://www.facebook.com/apex.pain.me?mibextid=ZbWKwL" className="hover:text-slate-800 transition-colors">
                    Facebook
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="order-last">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* First Row - Name and Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="*Full Name"
                              className="h-14 rounded-xl border-gray-200 bg-gray-50 px-4 text-base placeholder:text-gray-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="*Email Address"
                              className="h-14 rounded-xl border-gray-200 bg-gray-50 px-4 text-base placeholder:text-gray-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Second Row - Phone and Needs */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="*Phone Number"
                              className="h-14 rounded-xl border-gray-200 bg-gray-50 px-4 text-base placeholder:text-gray-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="needs"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-14 rounded-xl border-gray-200 bg-gray-50 px-4 text-base text-gray-500">
                                <SelectValue placeholder="What are your needs?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="consultation">
                                Medical Consultation
                              </SelectItem>
                              <SelectItem value="appointment">
                                Book Appointment
                              </SelectItem>
                              <SelectItem value="emergency">
                                Emergency Care
                              </SelectItem>
                              <SelectItem value="general">
                                General Inquiry
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message Textarea */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Message...."
                            className="min-h-[160px] rounded-xl border-gray-200 bg-gray-50 px-4 py-4 text-base placeholder:text-gray-500 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="h-14 rounded-none bg-defaultGreen px-8 text-base font-medium hover:bg-slate-700 transition-colors"
                    >
                      Submit Message
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
