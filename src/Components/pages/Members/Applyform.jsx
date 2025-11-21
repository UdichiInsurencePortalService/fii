import React, { useState, useEffect } from 'react';
import { Download, FileText, ArrowRight, CheckCircle, Users, TrendingUp, Network, Heart, BookOpen, Info, Building2, Globe } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css"; 
const Applyform = () => {
    useEffect(() => {
          AOS.init({
            duration: 800,
            once: false, // ⭐ important if you want re-animation every time
          });
        
        }, []);

  const [activeTab, setActiveTab] = useState('about');

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/membership-form-institution.pdf";
    link.download = "membership-form-institution.pdf";
    link.click();
  };

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 sm:mb-6 shadow-lg">
            <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            FII Membership
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Join India's Premier Business Association
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 px-2">
          <div className="inline-flex flex-col sm:flex-row bg-white rounded-lg shadow-md p-1 w-full sm:w-auto max-w-lg">
            <button
              onClick={() => setActiveTab('about')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                activeTab === 'about'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Info className="w-4 h-4 sm:w-5 sm:h-5" />
              About
            </button>
            <button
              onClick={() => setActiveTab('advantages')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                activeTab === 'advantages'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              Advantages
            </button>
            <button
              onClick={() => setActiveTab('download')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                activeTab === 'download'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Download Form</span>
              <span className="sm:hidden">Download</span>
            </button>
          </div>
        </div>

        {/* About Membership Tab */}
        {activeTab === 'about' && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2 sm:gap-3">
                <Info className="w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0" />
                <span>About Membership</span>
              </h2>
            </div>

            <div className="p-4 sm:p-6 lg:p-12 space-y-6 sm:space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong>Federation of Institutes & Industries (FII)</strong> works to create and sustain an environment conducive to the development of India, partnering industry, Government, and civil society, through advisory and consultative processes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  FII is a non-government, not-for-profit, industry-led and industry-managed organization, playing a proactive role in India's development process. India's premier business association has members from Institute, private as well as public sectors, including SMEs and MNCs.
                </p>
              </div>

              {/* Eligibility Section */}
              <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <span>Who Can Join?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  FII membership is open to any Company or Firm in India engaged in:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Manufacturing activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Consultancy services (Engineering/Technical/Management)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Services sector: Banks, Financial Institutions, Law Firms, Hospitals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Travel/Tourism & Hospitality, Films, Media: Print and Electronic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Digital Entertainment, Advertising, Publishing, Fashion</span>
                  </li>
                </ul>
              </div>

              {/* Important Notes */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="border-l-4 border-purple-500 bg-purple-50 p-4 sm:p-6 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Associate Membership</h4>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    India Liaison Offices operating with the approval of Reserve Bank, without any Sales Turnover in India, are eligible for Associate Membership.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 bg-blue-50 p-4 sm:p-6 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Membership Policy</h4>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    There is no Individual membership in FII. Companies from the same group must take up membership separately, as there is no group membership.
                  </p>
                </div>
              </div>

              {/* What FII Does */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0" />
                  <span>What FII Does</span>
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  FII charts change by working closely with Government on policy issues, interfacing with thought leaders, and enhancing efficiency, competitiveness and business opportunities for industry through a range of specialized services and strategic global linkages. It also provides a platform for consensus-building and networking on key issues.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Extending its agenda beyond business, FII assists industry to identify and execute corporate citizenship programmes. Partnerships with civil society organizations carry forward corporate initiatives for integrated and inclusive development across diverse domains including affirmative action, healthcare, education, livelihood, diversity management, skill development, empowerment of women, and water, to name a few.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Advantages Tab */}
        {activeTab === 'advantages' && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2 sm:gap-3">
                <TrendingUp className="w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0" />
                <span>Membership Advantages</span>
              </h2>
            </div>

            <div className="p-4 sm:p-6 lg:p-12 space-y-6 sm:space-y-8">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                As a member of FII, you will access the world of opportunities, from networking with the corporate majors of Indian and global industry to assisting in framing economic and industrial policies, through close linkage with the government. FII's proactive approach focuses on helping you to increase efficiency and competitiveness.
              </p>

              {/* Advantage Cards */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Learning */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 sm:p-6 border border-blue-200" data-aos="fade-up">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Learning</h3>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Global trends that affect your business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Industry best practices on competitiveness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Improve internal efficiency and productivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Get an insight into Government policies and their impact on businesses</span>
                    </li>
                  </ul>
                </div>

                {/* Networking */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 sm:p-6 border border-purple-200" data-aos="fade-down">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Network className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Networking</h3>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Networking opportunities with Indian and Global Corporate Majors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Platform to enhance your business and develop newer markets</span>
                    </li>
                  </ul>
                </div>

                {/* Sharing */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 sm:p-6 border border-green-200" data-aos="fade-right">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Sharing</h3>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Share your best practices with other members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Help enhance competitiveness of Indian Industry</span>
                    </li>
                  </ul>
                </div>

                {/* Caring */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 sm:p-6 border border-pink-200" data-aos="fade-left">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Caring</h3>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Opportunity to give back to society</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Get involved with important initiatives in Child Education, Women Empowerment, Fight against HIV/AIDS, Disaster management, etc.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Download Form Tab */}
        {activeTab === 'download' && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2 sm:gap-3">
                <Download className="w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0" />
                <span>Download Membership Form</span>
              </h2>
            </div>

            <div className="p-4 sm:p-6 lg:p-12">
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm sm:text-base">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Download the Form</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Click the button below to get your membership form</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm sm:text-base">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Fill Out Details</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Complete all required information carefully</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Submit & Join</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Send your completed form and become a member</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleDownload}
                  className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto justify-center"
                >
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
                  Download Form
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
                  PDF format • Easy to fill • Printable
                </p>
              </div>
            </div>

            <div className="bg-gray-50 px-4 sm:px-8 py-4 sm:py-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-2 text-gray-600 text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                <span>Secure download • No registration required</span>
              </div>
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="mt-6 sm:mt-8 text-center px-4">
          <p className="text-sm sm:text-base text-gray-600">
            Need help? Contact us at{' '}
            <a href="mailto:support@fii.org" className="text-blue-600 hover:underline font-medium break-all">
              support@fii.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Applyform;