import React, { useEffect } from 'react';
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  const schemes = [
    {
      id: 1,
      title: "Opening of the PM-VIKAS Portal for Submission of Proposals",
      date: "November 19, 2025",
      description: "Government of India, Ministry of Minority Affairs (Skill Division) has issued a notification for the opening of PM-VIKAS Portal for submission of proposals. This initiative aims to enhance skill development among minority communities.",
      applyLink: "https://skillspedia.in/opening-of-the-pm-vikas-portal-for-submission-of-proposals/"
    },
    {
      id: 2,
      title: "RFP for Self-Defense Training Partner under Mission Shakti, Odisha",
      date: "November 17, 2025",
      description: "The National Commission for Women (NCW) has released a Request for Proposal (RFP) for empanelment of training partners to conduct self-defense training programs under Mission Shakti initiative in Odisha.",
      applyLink: "https://skillspedia.in/rfp-for-self-defense-training-partner-under-mission-shakti-odisha/"
    },
    {
      id: 3,
      title: "Notice Inviting Proposal for Hiring of Implementation Agency for Execution of CSR Projects",
      date: "November 13, 2025",
      description: "Summary of NSTFDC EOI/RFP for Hiring Implementation Agency for CSR Projects. The notice invites proposals from eligible agencies to implement various CSR initiatives focused on skill development and community welfare.",
      applyLink: "https://skillspedia.in/notice-inviting-proposal-for-hiring-of-implementation-agency-for-execution-of-csr-projects/"
    },
    {
      id: 4,
      title: "Tender for Engaging Agencies to Provide Skill Trainers & Helpers to Undertake Skill Training under PM-VIKAS Scheme in Punjab",
      date: "November 12, 2025",
      description: "Detailed Summary: Tender for Engaging Skill Training Agencies under PM VIKAS in Punjab. This tender seeks qualified agencies to provide skilled trainers and support staff for various vocational training programs.",
      applyLink: "https://skillspedia.in/tender-for-engaging-agencies-to-provide-skill-trainers-helpers-to-undertake-skill-training-under-pm-vikas-scheme-in-punjab/"
    }
  ];

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest Opportunities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the latest government schemes and training opportunities
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {schemes.map((scheme, index) => (
            <div
              key={scheme.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                <div className="bg-white p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {scheme.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{scheme.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {scheme.description}
                  </p>

                  {/* Apply Button */}
                  <a
                    href={scheme.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg group/button"
                  >
                    <span>Apply Now</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button - Centered */}
        <div className="flex justify-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://skillspedia.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center">
              View More Opportunities
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-8" data-aos="fade-up" data-aos-delay="500">
          Stay updated with the latest government schemes and training programs
        </p>
      </div>
    </div>
  );
};

export default Skill;