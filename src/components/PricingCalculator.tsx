
import React, { useState, useEffect } from "react";
import { Calculator, DollarSign, Clock, Calendar } from "lucide-react";

const PricingCalculator = () => {
  const [isInView, setIsInView] = useState(false);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [hoursPerDay, setHoursPerDay] = useState(6);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [weeksOff, setWeeksOff] = useState(2);
  const [expenses, setExpenses] = useState(20);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("calculator");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Calculate the hourly rate needed based on inputs
  const calculateResults = () => {
    const weeksPerYear = 52 - weeksOff;
    const hoursPerWeek = hoursPerDay * daysPerWeek;
    const hoursPerYear = hoursPerWeek * weeksPerYear;
    
    const targetAnnualIncome = hourlyRate * hoursPerYear;
    const expenseAmount = (targetAnnualIncome * expenses) / 100;
    const totalRequired = targetAnnualIncome + expenseAmount;
    
    const recommendedHourlyRate = Math.round(totalRequired / hoursPerYear);
    
    return {
      weeksPerYear,
      hoursPerWeek,
      hoursPerYear,
      targetAnnualIncome: Math.round(targetAnnualIncome),
      expenseAmount: Math.round(expenseAmount),
      totalRequired: Math.round(totalRequired),
      recommendedHourlyRate
    };
  };

  const results = calculateResults();

  return (
    <section id="calculator" className="py-24 bg-augwa-50/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-augwa-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/4 w-72 h-72 bg-augwa-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 stagger-children">
            <div className="inline-flex items-center rounded-full bg-augwa-100 px-3 py-1 text-sm font-medium text-augwa-700 animate-fade-in mb-4">
              <Calculator className="h-4 w-4 mr-2" />
              <span>Calculator</span>
            </div>
            <h2 className="title-text mb-4">
              Cleaning Services Pricing Calculator
            </h2>
            <p className="subtitle-text text-gray-600">
              Find the Right Rate for Your Business
            </p>
          </div>

          <div className="glass-card overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-augwa via-augwa-400 to-augwa"></div>
            
            <div className="p-6 sm:p-8 md:p-10">
              <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-gray-600 mb-8">
                  Pricing your cleaning services can be overwhelming, whether you're just starting out or looking to refine your current rates. This step-by-step calculator is designed to help you determine the perfect price for your cleaning services — tailored to your location, income goals, and business needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Input section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <DollarSign className="h-5 w-5 text-augwa-500 mr-2" />
                      Your Income Goals
                    </h3>

                    <div>
                      <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 mb-1">
                        Desired hourly income ($ per hour)
                      </label>
                      <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input
                          type="number"
                          id="hourlyRate"
                          value={hourlyRate}
                          onChange={(e) => setHourlyRate(Number(e.target.value))}
                          min="10"
                          max="200"
                          className="block w-full p-3 pl-8 border border-gray-200 rounded-lg focus:ring-augwa focus:border-augwa text-gray-900"
                        />
                      </div>
                      <div className="mt-2">
                        <input
                          type="range"
                          value={hourlyRate}
                          onChange={(e) => setHourlyRate(Number(e.target.value))}
                          min="10"
                          max="200"
                          step="5"
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-augwa"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Clock className="h-5 w-5 text-augwa-500 mr-2" />
                      Working Hours
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hoursPerDay" className="block text-sm font-medium text-gray-700 mb-1">
                          Hours per day
                        </label>
                        <input
                          type="number"
                          id="hoursPerDay"
                          value={hoursPerDay}
                          onChange={(e) => setHoursPerDay(Number(e.target.value))}
                          min="1"
                          max="12"
                          className="block w-full p-3 border border-gray-200 rounded-lg focus:ring-augwa focus:border-augwa text-gray-900"
                        />
                      </div>
                      <div>
                        <label htmlFor="daysPerWeek" className="block text-sm font-medium text-gray-700 mb-1">
                          Days per week
                        </label>
                        <input
                          type="number"
                          id="daysPerWeek"
                          value={daysPerWeek}
                          onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                          min="1"
                          max="7"
                          className="block w-full p-3 border border-gray-200 rounded-lg focus:ring-augwa focus:border-augwa text-gray-900"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Calendar className="h-5 w-5 text-augwa-500 mr-2" />
                      Time Off & Expenses
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="weeksOff" className="block text-sm font-medium text-gray-700 mb-1">
                          Weeks off per year
                        </label>
                        <input
                          type="number"
                          id="weeksOff"
                          value={weeksOff}
                          onChange={(e) => setWeeksOff(Number(e.target.value))}
                          min="0"
                          max="12"
                          className="block w-full p-3 border border-gray-200 rounded-lg focus:ring-augwa focus:border-augwa text-gray-900"
                        />
                      </div>
                      <div>
                        <label htmlFor="expenses" className="block text-sm font-medium text-gray-700 mb-1">
                          Business expenses (%)
                        </label>
                        <div className="relative mt-1">
                          <input
                            type="number"
                            id="expenses"
                            value={expenses}
                            onChange={(e) => setExpenses(Number(e.target.value))}
                            min="0"
                            max="50"
                            className="block w-full p-3 pr-8 border border-gray-200 rounded-lg focus:ring-augwa focus:border-augwa text-gray-900"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results section */}
                  <div>
                    <div className="bg-augwa-50/70 rounded-lg p-6 border border-augwa-100">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Your Results</h3>
                      
                      <div className="mb-6 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Working hours per week:</span>
                          <span className="font-medium">{results.hoursPerWeek} hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Working weeks per year:</span>
                          <span className="font-medium">{results.weeksPerYear} weeks</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total annual hours:</span>
                          <span className="font-medium">{results.hoursPerYear} hours</span>
                        </div>
                        
                        <div className="h-px bg-augwa-200 my-3"></div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Target annual income:</span>
                          <span className="font-medium">${results.targetAnnualIncome.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Business expenses ({expenses}%):</span>
                          <span className="font-medium">${results.expenseAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total required revenue:</span>
                          <span className="font-medium">${results.totalRequired.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 border border-augwa-100 mb-6">
                        <h4 className="text-base font-medium mb-1">Recommended Hourly Rate:</h4>
                        <div className="flex items-center">
                          <span className="text-3xl font-bold text-augwa-600">${results.recommendedHourlyRate}</span>
                          <span className="ml-2 text-gray-500">per hour</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-6">
                        This rate ensures you'll reach your target income of ${results.targetAnnualIncome.toLocaleString()} per year while covering your business expenses and taking {weeksOff} weeks off.
                      </p>
                      
                      <a 
                        href="#" 
                        className="block w-full text-center px-6 py-3 bg-augwa text-white font-medium rounded-lg shadow-sm hover:bg-augwa-600 transition-colors"
                      >
                        Get Started with Augwa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
