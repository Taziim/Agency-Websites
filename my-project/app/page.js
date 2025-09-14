import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-teal-900 to-black text-white flex flex-col items-center px-6 py-12 space-y-8 font-sans">
        {/* Logo */}
        <div>
          <img
            src="/Logo.png"
            alt="Ena Ena Technologies Logo"
            className="h-10 mx-auto"
          />
        </div>
        {/* Badge */}
        <div className="bg-green-900/20 border border-green-500 text-green-300 text-sm px-4 py-1 rounded-full flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            ✓
          </div>
          <div>Trusted by 30+ startups & entrepreneurs worldwide</div>
        </div>
        {/* Headline */}
        <div className="text-center space-y-4 max-w-xxl">
          <div className="text-3xl md:text-4xl font-bold leading-tight">
            Strategic Landing Pages That <br></br>Convert From Just{" "}
            <span className="text-green-400">$200</span>
          </div>
          <div className="text-gray-300 text-sm md:text-base block">
            Stop wasting traffic on generic pages. We deliver premium,
            conversion-focused landing pages designed, developed, <br></br> and
            launched in just 5 days.
          </div>
        </div>
        {/* Form */}
        <div className="bg-teal-950/50 p-6 rounded-lg w-full max-w-xl space-y-4 shadow-sm shadow-yellow-100/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-600 rounded px-3 py-2 text-sm text-gray-300">
              Your name
            </div>
            <div className="border border-gray-600 rounded px-3 py-2 text-sm text-gray-300">
              Email Address
            </div>
            <div className="border border-gray-600 rounded px-3 py-2 text-sm text-gray-300">
              Phone Number
            </div>
          </div>
          {/* CTA Button */}
          <div className="bg-green-300 text-black font-semibold text-center py-3 rounded hover:bg-green-400 hover:cursor-pointer transition">
            Get my high-converting landing page →
          </div>
          {/* Features */}
          <div className="flex justify-between text-gray-400 text-xs pt-4 ">
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-black text-xs">
                🔒
              </div>
              <div>SSL secure</div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-black text-xs">
                💵
              </div>
              <div>Money-back guaranteed</div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-black text-xs">
                😊
              </div>
              <div>Satisfaction guaranteed</div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="horizontal-container"
        className=" flex gap-2  bg-gradient-to-b from-teal-900 to-black w-full"
      >
        <img src="/image1.png" className="h-100 w-156 rounded" />
        <img src="/image2.png" className="h-100 w-156 rounded" />
      </div>

      <div className="bg-gradient-to-b from-emerald-950 to-emerald-950 text-white py-20 px-4">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-5xl ">
              Why Businesses <span className="text-green-400">Trust Us</span>{" "}
              With Their Designs
            </h2>
            <p className=" text-gray-400 max-w-3xl mx-auto text-sm">
              We combine proven conversion frameworks with agency-level design
              to deliver results that matter.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-18">
            {/* Feature 1 */}
            <div className=" p-8 rounded-lg space-y-4 border border-gray-700 hover:border-green-500 transition-colors">
              <div className="text-green-500 text-4xl">🚀</div>
              <h3 className="text-2xl font-semibold">
                Proven Conversion Framework
              </h3>
              <p className="text-gray-400">
                Designs based on 100+ tested layouts that actually convert
                visitors into customers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className=" p-8 rounded-lg space-y-4 border border-gray-700 hover:border-green-500 transition-colors">
              <div className="text-green-500 text-4xl">🎮</div>
              <h3 className="text-2xl font-semibold">Agency Level Design</h3>
              <p className="text-gray-400">
                Modern, premium, and tailored for your brand - without the
                agency price tag.
              </p>
            </div>

            {/* Feature 3 */}
            <div className=" p-8 rounded-lg space-y-4 border border-gray-700 hover:border-green-500 transition-colors">
              <div className="text-green-500 text-4xl">⚡</div>
              <h3 className="text-2xl font-semibold">
                5-day Guaranteed Delivery
              </h3>
              <p className="text-gray-400">
                With a highly professional team, we deliver on time, everytime.
              </p>
            </div>

            {/* Feature 4 */}
            <div className=" p-8 rounded-lg space-y-4 border border-gray-700 hover:border-green-500 transition-colors">
              <div className="text-green-500 text-4xl">💰</div>
              <h3 className="text-2xl font-semibold">Transparent Pricing</h3>
              <p className="text-gray-400">
                No hidden fees, just clear value. What you see is what you pay.
              </p>
            </div>

            {/* Feature 5 */}
            <div className=" p-8 rounded-lg space-y-4 border border-gray-700 hover:border-green-500 transition-colors">
              <div className="text-green-500 text-4xl">🔄</div>
              <h3 className="text-2xl font-semibold">
                Revisions Until You're Happy
              </h3>
              <p className="text-gray-400">
                We keep working until it's right. Your satisfaction is
                guaranteed.
              </p>
            </div>

            {/* Feature 6 */}
            <div className=" p-8 rounded-lg space-y-4 border border-gray-700 hover:border-green-500 transition-colors">
              <div className="text-green-500 text-4xl">🏆</div>
              <h3 className="text-2xl font-semibold">Results That Speak</h3>
              <p className="text-gray-400">
                Our pages consistently outperform industry averages for
                conversions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20 px-4">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl  text-gray-300">
              Case Studies
            </h2>
            <p className="text-sm text-gray-500">
              See the designs that delivered results
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <div className="relative">
                <img
                  src="/image4.png"
                  alt="We Plan, You Shine case study"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>20% high conversion than average in first week</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Clean and modern design with clear CTA</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 - Flowpilot */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <div className="relative">
                <img
                  src="/image6.png"
                  alt="Flowpilot case study"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>20% high conversion than average in first week</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Clean and modern design with clear CTA</span>
                </div>
              </div>
            </div>

            {/* Case Study 3 - GrowthSummit */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <div className="relative">
                <img
                  src="/imgar5.png"
                  alt="GrowthSummit case study"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>20% high conversion than average in first week</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Clean and modern design with clear CTA</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-10">
            <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-sm text-sm font-medium transition shadow-lg hover:shadow-xl transform hover:scale-105">
              I want similar results →
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#0A0F0D] text-white py-20 px-4">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header Section */}
          <div className="text-left space-y-2 ml-6">
            <h2 className="text-3xl md:text-4xl">
              Simple, Transparent Pricing –{" "}
              <span className="text-green-400">Choose Your Plan</span>
            </h2>
            <p className="text-sm text-gray-400">
              No hidden fees, no surprises. Just premium landing pages at
              unbeatable prices.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-6">
            {/* Basic Plan */}
            <div className="bg-[#192420] rounded-2xl p-6 border border-gray-800 hover:border-green-500 transition-all">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">Basic</h3>
                    <p className="text-gray-400">Perfect for solopreneurs</p>
                  </div>
                  <div className="text-3xl font-bold text-green-400">$200</div>
                </div>

                <div className="border-t border-gray-800 pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      1 Landing Page (Design + Development)
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Hosting Deployment
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      5-Day Delivery
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Basic Support
                    </li>
                  </ul>
                </div>

                <button className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-6 rounded-lg text-lg transition-colors mt-22">
                  Start my project →
                </button>
              </div>
            </div>

            {/* Standard Plan (Popular) */}
            <div className="bg-[#192420] rounded-2xl p-6 border-2 border-green-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-black text-sm px-3 py-1 rounded-full">
                Most popular
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">Standard</h3>
                    <p className="text-gray-400">
                      Best balance of value & features
                    </p>
                  </div>
                  <div className="text-3xl font-bold text-green-400">$300</div>
                </div>

                <div className="border-t border-gray-800 pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Everything in Basic
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Extra Custom Section
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Free Hosting Setup
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Free Consultation Call
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Priority Support
                    </li>
                  </ul>
                </div>

                <button className="w-full bg-green-400 hover:bg-green-400 text-black py-3 px-6 rounded-lg text-lg font-medium transition mt-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start my project →
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-green-500 transition-all">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">Premium</h3>
                    <p className="text-gray-400">For brands & agencies</p>
                  </div>
                  <div className="text-3xl font-bold text-green-400">$500</div>
                </div>

                <div className="border-t border-gray-800 pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Everything in Standard
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Advanced Animations
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Priority Delivery (3 Days)
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      6 Months Free Support
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Performance Optimization
                    </li>
                  </ul>
                </div>

                <button className="w-full bg-green-900 hover:bg-green-800 text-white py-3 px-6 rounded-lg text-lg font-medium transition-colors mt-12">
                  Start my project →
                </button>
              </div>
            </div>
          </div>

          {/* Availability Notice */}
          <div className="flex items-center gap-2 p-1 ml-5">
            <div className="text-green-500">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl">Limited Availability</h3>
              <p className="text-gray-400">
                We only onboard 5 new clients per month. 2 spots left for this
                month – secure yours today.
              </p>
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-gray-900 rounded-2xl p-8 mx-6 border border-green-500 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl">
              Special Offer For Early Clients
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Get 10% OFF + Free Hosting Setup when you book this week.
            </p>
            <button className="bg-green-300 hover:bg-green-200 text-black py-4 px-8 rounded text-lg font-medium transition hover:cursor-pointer mt-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Claim my 10% discount →
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#192420] py-20 px-4">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto space-y-16 text-center">
          {/* Header Section */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl text-white">
              From Idea to Live Landing Page in{" "}
              <span className="text-green-500">Just 5 Days</span>
            </h2>
            <p className="text-base text-white max-w-3xl mx-auto">
              Our streamlined process ensures fast delivery without compromising
              quality.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Day 1 - Book Your Project */}
            <div className="bg-[#10241d]  rounded p-8 text-white relative overflow-visible">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#10241d]  text-white text-sm px-3 py-1 rounded-full border border-black">
                Day 1
              </div>

              <div className="flex flex-col items-center space-y-6 pt-4">
                <div className="w-24 h-24 bg-green-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Book Your Project</h3>
                  <p className="text-gray-400">
                    Fill out a short form and we'll get started immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Days 2-4 - Design & Development */}
            <div className="bg-[#10241d]  rounded p-8 text-white relative overflow-visible">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#10241d]  text-white text-sm px-3 py-1 rounded-full border border-black">
                Day 2-4
              </div>

              <div className="flex flex-col items-center space-y-6 pt-4">
                <div className="w-24 h-24 bg-green-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Design & Development</h3>
                  <p className="text-gray-400">
                    Unlimited revisions until perfect. You're involved every
                    step.
                  </p>
                </div>
              </div>
            </div>

            {/* Day 5 - Launch */}
            <div className="bg-[#10241d]  rounded p-8 text-white relative overflow-visible">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#10241d]  text-white text-sm px-3 py-1 rounded-full border border-black">
                Day 5
              </div>

              <div className="flex flex-col items-center space-y-6 pt-4">
                <div className="w-24 h-24 bg-green-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Launch</h3>
                  <p className="text-gray-400">
                    Fully deployed on your hosting and ready to convert
                    visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#192420] py-20 px-4">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="space-y-4 mb-12 ml-10">
            <h2 className="text-3xl md:text-4xl text-white">
              What Our Clients Are Saying{" "}
              <span className="text-green-500">About Us</span>
            </h2>
            <p className="text-sm text-white text-left">
              Real feedback from real businesses who've seen real results.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-10">
            {/* Testimonial 1 - Sarah Johnson */}
            <div className="bg-[#212926]  rounded-2xl p-6 text-white space-y-4 relative">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg italic">
                "They delivered a landing page better than agencies charging 10x
                more. My conversion rate doubled within the first week!"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Johnson"
                />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-400">SaaS Founder</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Mike Chen */}
            <div className="bg-[#212926]  rounded-2xl p-6 text-white space-y-4">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg italic">
                "Fast, reliable, and professional. My conversions doubled and
                I'm getting more quality leads than ever before."
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Mike Chen"
                />
                <div>
                  <p className="font-semibold">Mike Chen</p>
                  <p className="text-sm text-gray-400">Fitness Coach</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Amanda Rodriguez */}
            <div className="bg-[#212926] rounded-2xl p-6 text-white space-y-4">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg italic">
                "Best investment for my business. The ROI was immediate and
                substantial. Will definitely order again."
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Amanda Rodriguez"
                />
                <div>
                  <p className="font-semibold">Amanda Rodriguez</p>
                  <p className="text-sm text-gray-400">E-Commerce Owner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 - David Lee */}
            <div className="bg-[#212926]  rounded-2xl p-6 text-white space-y-4">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg italic">
                "They delivered a landing page better than agencies charging 10x
                more. My conversion rate doubled within the first week!"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="David Lee"
                />
                <div>
                  <p className="font-semibold">David Lee</p>
                  <p className="text-sm text-gray-400">SaaS Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#192420] py-20 px-4">
        {/* Main Container */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Got Questions?{" "}
              <span className="text-white">We've Got The Answers</span>
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-[#202825]  rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-1 rounded-full bg-green-500 shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    How long does it take?
                  </h3>
                  <p className="text-gray-300">
                    5 days from start to finish - design, development, and
                    deployment included.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-[#202825]  rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-1 rounded-full bg-green-500 shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Do you provide revisions?
                  </h3>
                  <p className="text-gray-300">
                    Yes, unlimited revisions until you're 100% satisfied with
                    the final result.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-[#202825]  rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-1 rounded-full bg-green-500 shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    What's the payment process?
                  </h3>
                  <p className="text-gray-300">
                    50% upfront to get started, 50% after final delivery and
                    your approval.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-[#202825]  rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-1 rounded-full bg-green-500 shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Can you deploy on my hosting?
                  </h3>
                  <p className="text-gray-300">
                    Absolutely! Deployment is included in every package, on your
                    hosting or ours.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-[#202825] rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-1 rounded-full bg-green-500 shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Why are your prices so affordable compared to agencies?
                  </h3>
                  <p className="text-gray-300">
                    We run lean without big overheads - you get the same
                    agency-level quality at a fraction of the cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0A0F0D] py-20 px-4 min-h-screen flex items-center">
        {/* Main Container */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Ready to Turn Visitors Into{" "}
              <span className="text-green-400">Real Customers?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't settle for an average page. Get a premium,
              conversion-focused landing page that pays for itself.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-[#192420] rounded p-8 shadow-2xl border border-gray-700">
            {/* Form Fields */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-[#122c21] text-white py-4 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#122c21] text-white py-4 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-[#122c21] text-white py-4 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-green-300 hover:bg-green-600 text-black py-4 px-6 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-102 shadow-lg hover:shadow-green-500/30">
              Get my high-converting landing page →
            </button>

            {/* Trust Indicators */}
            <div className="flex justify-center gap-8 mt-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15l8-8m0 0l-8-8m8 8H4"
                  />
                </svg>
                <span>SSL secure</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Money-back guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span>Satisfaction guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-300 text-white py-6 px-4">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto">
          {/* Footer Content - Flex Layout */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="text-black text-xl">
                <img
                  src="/Logo.png"
                  alt="Ena Ena Technologies Logo"
                  className="h-7 mx-auto text-black invert"
                />
              </div>
            </div>

            {/* Copyright Section */}
            <div className="text-black text-sm mb-4 md:mb-0">
              © All rights reserved to Ena Ema Technologies
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black hover:text-gray-800 transition-colors"
              >
                <img
                  src="/whatsapp.png"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                ></img>
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-800 transition-colors"
              >
                <img
                  src="/facebook.png"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                ></img>
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-800 transition-colors"
              >
                <img
                  src="/instagram.png"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
