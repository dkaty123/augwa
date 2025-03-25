
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search, MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "What is Augwa?",
    answer: "Augwa is an all-in-one business management platform designed specifically for residential cleaning businesses. It helps automate scheduling, payments, client management, invoicing, and staff coordination."
  },
  {
    question: "Who is Augwa for?",
    answer: "Augwa is built for residential cleaning businesses looking to streamline operations, reduce administrative workload, and improve efficiency through automation."
  },
  {
    question: "How does Augwa help my business?",
    answer: "Augwa automates key tasks such as scheduling, booking notifications, invoicing, and payments, reducing manual work and improving cash flow."
  },
  {
    question: "How does scheduling work in Augwa?",
    answer: "Augwa offers automated scheduling, allowing business owners to efficiently manage their appointments and avoid conflicts."
  },
  {
    question: "Can I accept payments through Augwa?",
    answer: "Yes, Augwa supports both online and offline payments, ensuring flexible and fast transaction processing."
  },
  {
    question: "Does Augwa support client management?",
    answer: "Yes, Augwa includes a basic CRM to help you track client information, history, and communication for better customer relationships."
  },
  {
    question: "How does Augwa handle invoicing?",
    answer: "Augwa automates invoice generation, making it easy to send invoices and track payments with minimal effort."
  },
  {
    question: "Can Augwa help reduce no-shows?",
    answer: "Yes, Augwa sends automated booking reminders and status updates to reduce cancellations and missed appointments."
  },
  {
    question: "Is Augwa easy to use?",
    answer: "Yes, Augwa is designed to be intuitive and user-friendly, requiring minimal training to get started."
  },
  {
    question: "How long does it take to set up Augwa?",
    answer: "You can get started with Augwa in minutes, with an easy onboarding process and step-by-step setup guidance."
  },
  {
    question: "Can Augwa support my growing business?",
    answer: "Yes, Augwa is designed to scale with your business, offering automation and organization tools that grow as you do."
  },
  {
    question: "Is my data secure with Augwa?",
    answer: "Yes, Augwa prioritizes security and reliability, ensuring your business and client data remain safe."
  },
  {
    question: "What support options are available?",
    answer: "Augwa provides customer support to help with any issues, ensuring a smooth experience for your business."
  },
  {
    question: "How much does Augwa cost?",
    answer: "Pricing starts at $39 per month, providing essential tools for scheduling, payments, invoicing, and client management."
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer: "No, Augwa offers flexible plans without long-term commitments, allowing you to choose what works best for your business."
  },
  {
    question: "Can I try Augwa before committing?",
    answer: "Yes, Augwa offers a 30-day free trial so you can explore its features before making a decision, no credit card required!"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-augwa-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 right-20 w-72 h-72 bg-augwa-50 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 stagger-children">
            <div className="inline-flex items-center rounded-full bg-augwa-50 px-3 py-1 text-sm font-medium text-augwa-600 animate-fade-in mb-4">
              <span>FAQ</span>
            </div>
            <h2 className="title-text mb-4">
              Frequently asked questions
            </h2>
            <p className="subtitle-text text-gray-600">
              Have a different question and can't find the answer you're looking for? Reach out to our support team by opening a chat.
            </p>
          </div>

          {/* Search */}
          <div className="mb-10">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for a question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full p-4 pl-10 border border-gray-200 rounded-lg focus:ring-augwa focus:border-augwa transition-colors"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 stagger-children">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="glass-card overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex items-center justify-between w-full p-6 text-left"
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 pb-6 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No results found for "{searchTerm}"</p>
                <p className="mt-2 text-gray-600">Try a different search term or browse the questions above.</p>
              </div>
            )}
          </div>

          {/* Support CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block px-6 py-4 bg-augwa-50 rounded-lg">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-augwa-500 mr-3" />
                <span className="text-augwa-700 font-medium">
                  Still have questions? <a href="#" className="text-augwa-600 underline hover:text-augwa-800">Contact our support team</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
