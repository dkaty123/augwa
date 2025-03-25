
import React, { useState } from "react";
import { Check, X, Info, ArrowRight } from "lucide-react";

const pricingPlans = {
  monthly: [
    {
      name: "Starter",
      description: "Helping your small team stay organized and grow.",
      price: 39,
      currency: "$",
      period: "month",
      features: [
        "Automated scheduling",
        "Quotes & Invoices",
        "Automated reminders",
        "Automated billing",
        "Online payments",
        "Client management",
        "3 staff included",
        "24-hour support response time",
      ],
      notIncluded: [
        "Advanced analytics",
        "Custom reports",
        "Custom domains",
        "Priority support",
        "Custom integrations",
      ],
      cta: "Start 30-day free trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "A plan that scales with your rapidly growing business.",
      price: 99,
      currency: "$",
      period: "month",
      features: [
        "Automated scheduling",
        "Quotes & Invoices",
        "Automated reminders",
        "Automated billing",
        "Online payments",
        "Client management",
        "10 staff included",
        "Additional staff $12/month",
        "24-hour support response time",
      ],
      notIncluded: [
        "Advanced analytics",
        "Custom reports",
        "Custom domains",
        "Priority support",
      ],
      cta: "Start 30-day free trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Dedicated support and infrastructure for your company.",
      price: "Custom",
      currency: "",
      period: "",
      features: [
        "Automated scheduling",
        "Quotes & Invoices",
        "Automated reminders",
        "Automated billing",
        "Online payments",
        "Client management",
        "Unlimited staff",
        "Advanced analytics",
        "Custom reports",
        "Custom domains",
        "Priority support",
        "Custom integrations",
      ],
      notIncluded: [],
      cta: "Contact sales",
      popular: false,
    },
  ],
  annually: [
    {
      name: "Starter",
      description: "Helping your small team stay organized and grow.",
      price: 29,
      currency: "$",
      period: "month",
      features: [
        "Automated scheduling",
        "Quotes & Invoices",
        "Automated reminders",
        "Automated billing",
        "Online payments",
        "Client management",
        "3 staff included",
        "24-hour support response time",
      ],
      notIncluded: [
        "Advanced analytics",
        "Custom reports",
        "Custom domains",
        "Priority support",
        "Custom integrations",
      ],
      cta: "Start 30-day free trial",
      popular: false,
      savings: "Save $120/year",
    },
    {
      name: "Professional",
      description: "A plan that scales with your rapidly growing business.",
      price: 79,
      currency: "$",
      period: "month",
      features: [
        "Automated scheduling",
        "Quotes & Invoices",
        "Automated reminders",
        "Automated billing",
        "Online payments",
        "Client management",
        "10 staff included",
        "Additional staff $10/month",
        "24-hour support response time",
      ],
      notIncluded: [
        "Advanced analytics",
        "Custom reports",
        "Custom domains",
        "Priority support",
      ],
      cta: "Start 30-day free trial",
      popular: true,
      savings: "Save $240/year",
    },
    {
      name: "Enterprise",
      description: "Dedicated support and infrastructure for your company.",
      price: "Custom",
      currency: "",
      period: "",
      features: [
        "Automated scheduling",
        "Quotes & Invoices",
        "Automated reminders",
        "Automated billing",
        "Online payments",
        "Client management",
        "Unlimited staff",
        "Advanced analytics",
        "Custom reports",
        "Custom domains",
        "Priority support",
        "Custom integrations",
      ],
      notIncluded: [],
      cta: "Contact sales",
      popular: false,
    },
  ],
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");
  const [selectedRegion, setSelectedRegion] = useState("Canada");

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 inset-0 z-0">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-augwa-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-augwa-50 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 stagger-children">
          <div className="inline-flex items-center rounded-full bg-augwa-50 px-3 py-1 text-sm font-medium text-augwa-600 animate-fade-in mb-4">
            <span>Pricing</span>
          </div>
          <h2 className="title-text mb-4">
            Pricing that grows with you
          </h2>
          <p className="subtitle-text text-gray-600">
            Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                billingCycle === "monthly"
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                billingCycle === "annually"
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Region selector (simplified for this implementation) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center">
            <span className="text-sm text-gray-600 mr-2">Region:</span>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="form-select text-sm font-medium rounded-md border border-gray-200 py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-augwa focus:border-augwa"
            >
              <option value="Canada">Canada</option>
              <option value="United States">United States</option>
              <option value="Europe">Europe</option>
            </select>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          {pricingPlans[billingCycle].map((plan, index) => (
            <div
              key={plan.name}
              className={`glass-card relative overflow-hidden ${
                plan.popular
                  ? "md:scale-105 ring-2 ring-augwa z-10"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-augwa text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  POPULAR
                </div>
              )}

              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-gray-500 mt-1 mb-4">{plan.description}</p>
                
                <div className="flex items-baseline mb-6">
                  {typeof plan.price === "number" ? (
                    <>
                      <span className="text-3xl font-extrabold text-gray-900">{plan.currency}{plan.price}</span>
                      <span className="text-sm font-medium text-gray-500 ml-1">/{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                  )}
                </div>

                {plan.savings && (
                  <div className="mb-6 p-2 bg-green-50 text-green-700 text-xs font-medium rounded-md text-center">
                    {plan.savings}
                  </div>
                )}
                
                <a
                  href="#"
                  className={`w-full flex items-center justify-center px-6 py-3 text-base font-medium rounded-full shadow-sm transition-colors ${
                    plan.popular
                      ? "bg-augwa text-white hover:bg-augwa-600"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                  {plan.name !== "Enterprise" && <ArrowRight className="ml-2 h-4 w-4" />}
                </a>
                
                <div className="mt-8 space-y-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">What's included:</h4>
                  
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-augwa-500 flex-shrink-0 mr-3" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <div className="h-px bg-gray-100 my-6"></div>
                      <h4 className="text-sm font-medium text-gray-900 mb-4">Not included:</h4>
                      
                      {plan.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-start">
                          <X className="h-5 w-5 text-gray-300 flex-shrink-0 mr-3" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mt-20 text-center stagger-children">
          <p className="text-gray-600">
            Have a different question and can't find the answer you're looking for?
          </p>
          <a 
            href="#faq" 
            className="inline-flex items-center text-augwa font-medium mt-2 hover:text-augwa-700 transition-colors"
          >
            <Info className="mr-2 h-4 w-4" />
            Check our FAQ section
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
