
import React from "react";
import { Calendar, Bell, CreditCard, Users } from "lucide-react";

const features = [
  {
    title: "Scheduling",
    description: "Effortless appointment management",
    icon: Calendar,
    color: "from-blue-400 to-indigo-400",
    details: "Organize your appointments with our intuitive calendar interface. Drag and drop to reschedule, set recurring cleanings, and avoid double-bookings with conflict detection."
  },
  {
    title: "Reminders",
    description: "Make missed appointments a thing of the past",
    icon: Bell,
    color: "from-amber-400 to-orange-400",
    details: "Automated notifications sent to clients via email or SMS. Customize timing and messages to reduce no-shows and keep your schedule running smoothly."
  },
  {
    title: "Billing",
    description: "Automate invoices and payments",
    icon: CreditCard,
    color: "from-emerald-400 to-green-500",
    details: "Generate professional invoices automatically after service completion. Accept online payments and track payment statuses to improve your cash flow."
  },
  {
    title: "Client Management",
    description: "Track customer details and history",
    icon: Users,
    color: "from-purple-400 to-violet-500",
    details: "Build a comprehensive database of your clients with custom fields. Track service history, preferences, and notes to provide personalized service."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-augwa-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-72 h-72 bg-augwa-50 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 stagger-children">
          <div className="inline-flex items-center rounded-full bg-augwa-50 px-3 py-1 text-sm font-medium text-augwa-600 animate-fade-in mb-4">
            <span>Features</span>
          </div>
          <h2 className="title-text mb-4">
            Everything you need to manage your cleaning business
          </h2>
          <p className="subtitle-text text-gray-600">
            Our all-in-one platform handles the administrative work so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card relative overflow-hidden group hover:translate-y-[-4px] transition-all"
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${feature.color} opacity-10 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500`}></div>
              
              <div className="p-6 relative">
                <div className={`w-12 h-12 mb-5 rounded-lg flex items-center justify-center bg-gradient-to-br ${feature.color} text-white`}>
                  <feature.icon size={20} />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500 mb-4">{feature.description}</p>
                
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-card p-8 sm:p-10 md:p-12 overflow-hidden relative stagger-children">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Discover Your Hidden Costs... <br />
                <span className="text-gradient">And How Augwa Can Eliminate Them</span>
              </h3>
              
              <p className="text-gray-600">
                How many hours per week do you spend preparing schedules, sending reminders, creating invoices, and collecting payments?
              </p>
              
              <div className="p-4 bg-white/70 border border-gray-100 rounded-lg">
                <div className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-1">
                      Hours per week
                    </label>
                    <div className="relative">
                      <input 
                        type="number" 
                        id="hours"
                        defaultValue="5"
                        min="1"
                        max="40"
                        className="block w-full p-3 pl-4 border border-gray-200 rounded-lg focus:ring-augwa focus:border-augwa text-gray-900"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 mb-1">
                      Your hourly rate
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <input 
                        type="number" 
                        id="hourlyRate"
                        defaultValue="25"
                        min="1"
                        className="block w-full p-3 pl-8 border border-gray-200 rounded-lg focus:ring-augwa focus:border-augwa text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-augwa-50 rounded-lg border border-augwa-100">
                <h4 className="text-lg font-semibold mb-2">Your Result</h4>
                <p className="text-3xl font-bold text-gray-900">
                  Augwa could save you <span className="text-augwa-600">$367</span> per month.
                </p>
                <p className="text-gray-600 mt-2">
                  What could you do with that extra time and money?
                </p>
              </div>
              
              <div>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-augwa text-white text-base font-medium rounded-full shadow-lg shadow-augwa-400/20 hover:bg-augwa-600 transition-colors button-shine"
                >
                  Start automating today!
                </a>
              </div>
            </div>
            
            <div className="relative">
              {/* Calculator graphic */}
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-augwa-100 to-augwa-50 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl shadow-xl p-6 transform hover:-rotate-2 transition-transform">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-augwa text-white text-xs font-bold px-3 py-1 rounded-full">
                    SAVE TIME
                  </div>
                  
                  <div className="flex items-center justify-center w-16 h-16 bg-augwa-50 rounded-full mb-6 mx-auto">
                    <CreditCard className="h-8 w-8 text-augwa-600" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-center mb-4">Cost Calculator</h4>
                  
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 bg-gray-100 rounded-md animate-pulse-slow" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                  </div>
                  
                  <div className="h-0.5 bg-gray-100 my-4"></div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Total Savings:</span>
                    <span className="text-lg font-bold text-augwa-600">$367</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-augwa-100 rounded-full opacity-60 blur-xl"></div>
              <div className="hidden lg:block absolute -left-20 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-amber-200 rounded-full opacity-60 blur-xl animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
