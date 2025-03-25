
import React from "react";
import { ArrowRight, CheckCircle2, Calendar, BellRing, CreditCard, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-28 lg:pt-36 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-0 w-[800px] h-[800px] bg-augwa-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-40 -right-20 w-[600px] h-[600px] bg-augwa-200 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 items-center">
          <div className="w-full lg:w-1/2 lg:pr-8 space-y-6 stagger-children">
            <div className="inline-flex items-center rounded-full bg-augwa-50 px-3 py-1 text-sm font-medium text-augwa-600 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-augwa-400 mr-2"></span>
              <span>Simplify your cleaning business</span>
            </div>

            <h1 className="title-text leading-tight text-gray-900">
              Manage Your Cleaning Business <span className="text-gradient">Efficiently</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Running your cleaning business is about to get easier and more affordable! Augwa simplifies everything from scheduling to payments, crew management, and customer reminders — so you can focus on what matters.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-augwa-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Automated scheduling</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-augwa-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Client reminders</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-augwa-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Payment processing</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-augwa-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Staff coordination</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 bg-augwa text-white text-base font-medium rounded-full shadow-lg shadow-augwa-400/20 hover:bg-augwa-600 transition-colors button-shine"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 text-base font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 flex items-center">
                <span className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <span key={i} className="inline-block h-8 w-8 rounded-full bg-gray-200 ring-2 ring-white overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-br from-augwa-300 to-augwa-500 opacity-60"></div>
                    </span>
                  ))}
                </span>
                <span>Trusted by over <b>500+</b> cleaning businesses</span>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-augwa-200 rounded-full mix-blend-multiply opacity-10 filter blur-3xl animate-pulse-slow"></div>
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-augwa-200 rounded-full mix-blend-multiply opacity-10 filter blur-3xl animate-pulse-slow" style={{animationDelay: "1s"}}></div>

              {/* Main dashboard card */}
              <div className="relative glass-card p-6 sm:p-8 w-full shadow-xl animate-fade-up">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Dashboard Overview</h3>
                  <span className="text-xs font-medium pill-tag bg-augwa-50 text-augwa-600">Live Demo</span>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between bg-gray-50/80 p-3 rounded-lg">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-augwa-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium">Today's Appointments</p>
                        <p className="text-xs text-gray-500">4 cleanings scheduled</p>
                      </div>
                    </div>
                    <button className="text-xs bg-white px-3 py-1 rounded-full border border-gray-200 text-gray-700">View</button>
                  </div>
                  
                  <div className="flex items-center justify-between bg-augwa-50/60 p-3 rounded-lg">
                    <div className="flex items-center">
                      <BellRing className="h-5 w-5 text-augwa-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium">Client Reminders</p>
                        <p className="text-xs text-gray-500">12 reminders sent today</p>
                      </div>
                    </div>
                    <button className="text-xs bg-white px-3 py-1 rounded-full border border-gray-200 text-gray-700">Manage</button>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gray-50/80 p-3 rounded-lg">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-augwa-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium">Payments</p>
                        <p className="text-xs text-gray-500">$1,240 received this week</p>
                      </div>
                    </div>
                    <button className="text-xs bg-white px-3 py-1 rounded-full border border-gray-200 text-gray-700">Details</button>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gray-50/80 p-3 rounded-lg">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-augwa-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium">Crew Management</p>
                        <p className="text-xs text-gray-500">6 active team members</p>
                      </div>
                    </div>
                    <button className="text-xs bg-white px-3 py-1 rounded-full border border-gray-200 text-gray-700">View</button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="loader-wave">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-500">Live data updating...</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 glass-panel px-3 py-2 rounded-lg text-sm font-medium shadow-lg animate-float" style={{animationDelay: "0.7s"}}>
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
                  <span>New booking received</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-panel px-3 py-2 rounded-lg text-sm font-medium shadow-lg animate-float" style={{animationDelay: "1.3s"}}>
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 rounded-full bg-augwa-400"></span>
                  <span>$367 saved this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 w-full h-32 bg-gradient-to-b from-transparent to-augwa-50/50"></div>
    </section>
  );
};

export default Hero;
