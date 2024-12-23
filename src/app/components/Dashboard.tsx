import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { BsEnvelopeCheck } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { IoSendOutline } from "react-icons/io5";
import { Lead } from "../types";
import { BsCheckCircleFill } from "react-icons/bs"; // Check icon
import { FaMedal } from "react-icons/fa"; // Medal icon
import { FiTarget } from "react-icons/fi"; // Intent icon
import { AiFillLock } from "react-icons/ai"; // Lock icon
import { FaRegThumbsDown } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa6";
import { MdAddChart } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { VscRefresh } from "react-icons/vsc";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FcPieChart } from "react-icons/fc";
import { FiPieChart } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { MdOutlineEditNote } from "react-icons/md";
import { FaShareFromSquare } from "react-icons/fa6";

const Dashboard = () => {
  const progressData = [
    { label: "Won", amount: "$18m", color: "bg-green-500", width: "w-[30%]" },
    {
      label: "Committed",
      amount: "$8m",
      color: "bg-blue-500",
      width: "w-[15%]",
    },
    {
      label: "Best case",
      amount: "$7m",
      color: "bg-purple-500",
      width: "w-[12%]",
    },
    {
      label: "Qualified",
      amount: "$3m",
      color: "bg-yellow-400",
      width: "w-[6%]",
    },
    { label: "Leads", amount: "$7m", color: "bg-gray-300", width: "w-[40%]" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const handleCardClick = (lead: Lead) => {
    setSelectedLead(lead); // Set the selected lead for the modal
  };

  const closeModal = () => {
    setSelectedLead(null); // Close the modal
  };

  const leads: Lead[] = [
    {
      id: 1,
      icon: <BsEnvelopeCheck />,
      name: "Jane Reyes",
      position: "COO",
      company: "Northwind Traders",
      interest:
        " Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
      intent: "High",
      dealValue: "$1M",
      isDecisionMaker: true,
      createdAt: "2024-12-01",
      status: "New",
      topic: "Expand business",
      description: [
        "Jane is a key decision maker and was browsing 'espresso machines' on First Coffee’s website.",
        "Multiple people at her company have reported 'slowness' during service requests.",
        "Northwind Traders currently see $200M in revenue from their in-store coffee shops.",
      ],
      tags: ["Coffee Machines", "Customer Experience"],
      action: "Engage with Jane Reyes",
      about: `Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders’ in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane’s commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops’ offerings, ensuring consistent, high-quality service.`,
    },
    {
      id: 2,
      icon: <FaRegCalendarAlt />,
      name: "Allan Munger",
      position: "Head of Real Estate Development",
      company: "Contoso Coffee",
      interest:
        "Upgrading service contract. Prepare for a high-buying intent meeting.",
      intent: "Medium",
      dealValue: "$800k",
      isDecisionMaker: true,
      createdAt: "2024-12-10",
      status: "In Progress",
      topic: "Upcoming meeting",
      description: [
        "Allan is looking for better support and services for their coffee shop locations.",
        "Contoso Coffee is expanding rapidly and needs reliable service contracts.",
        "Allan is planning to discuss long-term partnerships.",
      ],
      tags: ["Service Contract", "Real Estate"],
      action: "Prepare for meeting with Allan",
      about: `Allan Munger oversees real estate development for Contoso Coffee, a rapidly growing coffee chain. His focus is on ensuring operational efficiency across all new locations, making service reliability a top priority. Allan’s attention to detail and strategic planning make him a critical decision-maker in contract negotiations.`,
    },
    {
      id: 3,
      icon: <BsEnvelopeCheck />,
      name: "Sarah Chen",
      position: "Operations Director",
      company: "Global Retailers",
      interest:
        "Implementing a new POS system across all locations. High potential for large-scale deployment.",
      intent: "High",
      dealValue: "$5.5M",
      isDecisionMaker: false,
      createdAt: "2024-12-15",
      status: "Qualified",
      topic: "Technology upgrade",
      description: [
        "Sarah is considering modern POS systems to streamline operations for their retail chain.",
        "Existing systems are outdated and causing inefficiencies.",
        "The company is ready to invest in scalable technology solutions.",
      ],
      tags: ["POS System", "Technology"],
      action: "Schedule discovery call with Sarah",
      about: `Sarah Chen plays a pivotal role in modernizing Global Retailers' operations. Her expertise in logistics and technology ensures that all upgrades align with the company’s strategic goals. Sarah is particularly focused on driving efficiency and enhancing the customer experience.`,
    },
    {
      id: 4,
      icon: <FaRegCalendarAlt />,
      name: "Marcus Johnson",
      position: "Procurement Manager",
      company: "City Beverages",
      interest:
        "Modernizing their inventory management system. Requires a comprehensive solution proposal.",
      intent: "High",
      dealValue: "$3M",
      isDecisionMaker: true,
      createdAt: "2024-12-18",
      status: "In Progress",
      topic: "System upgrade",
      description: [
        "Marcus is looking for an advanced inventory solution to improve efficiency and reduce costs.",
        "Current system struggles to keep up with the company's growth.",
        "Marcus seeks a solution that integrates seamlessly with their supply chain.",
      ],
      tags: ["Inventory Management", "Modernization"],
      action: "Prepare proposal for Marcus",
      about: `Marcus Johnson is a forward-thinking Procurement Manager at City Beverages. With a deep understanding of supply chain dynamics, he is committed to finding solutions that optimize inventory management and drive operational excellence.`,
    },
  ];

  const slidesPerView = 2;
  const totalSlides = Math.ceil(leads.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleLeads = () => {
    const start = currentSlide * slidesPerView;
    return leads.slice(start, start + slidesPerView);
  };

  const CarouselIndicators = () => (
    <div className="flex justify-center gap-1 mt-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`h-1 rounded-full transition-all duration-300 ${
            index === currentSlide ? "w-6 bg-blue-600" : "w-1 bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
  const activities = [
    {
      icon: <BsEnvelopeCheck />,
      title: "Cafe A100 for Woodland Bank",
      subtitle: "Woodland Bank • $280,000 • 8 days to close",
      action: "Review draft and reply to Chris Naldo",
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Partnership opportunity for Fabrikam",
      subtitle: "Fabrikam • $5,000,000 • 12 days to close",
      action: "Prepare me for Fabrikam's key stakeholder meeting",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 bg-white rounded-lg text-[2px] lg:text-[10px]">
          <div>
          <select className="  px-4 py-2 ">
            <option>My open leads</option>
          </select>
          </div>
          <div className="flex items-center justify-between">
          <button className="p2 flex items-center gap-2"><MdAddChart/><p>Show chart</p></button>
          <button className="p-2   flex items-center gap-2"><TfiMenuAlt/> Focused view</button>
          <button className="p-2  flex items-center gap-2"><FiPlus/>New</button>
          <button className="p-2  flex items-center gap-2 "><VscRefresh/>Refresh</button>
          <button className="p-2 flex items-center gap-2  "><BsMicrosoftTeams/>Collaborate</button>
          <button className="p-2  flex items-center gap-2 "><IoTrashOutline/>Delete</button>
          <button  className="p-2"><MdKeyboardArrowDown/></button>
          <button className="p-2"><CiMenuKebab/></button>
          <div  className="flex items-center justify-between gap-2">
          <button className="border p-2 flex items-center gap-2 rounded-md"><FiPieChart/><p>Smart Data</p></button>
          <button className="border p-2 flex items-center gap-2 rounded-md"><HiMenu/><p>Edit Filters</p></button>
          <button className="border p-2 flex items-center gap-2 rounded-md"><MdOutlineEditNote/><p>Edit Columns</p></button>
          <button className="border p-2 flex items-center bg-blue-500 gap-2 rounded-md"><FaShareFromSquare/><MdKeyboardArrowDown/></button>
          </div>
          <button className="p-2">
            <FiMoreHorizontal className="w-5 h-5" />
          </button>
          </div>
         
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          {/* Progress Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4"></div>

            {/* Timer and Target */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full" />
                <h2 className="text-sm font-semibold">
                  Hi Mona, <span className="text-blue-600">68%</span> of goal
                  achieved and rest can be achieved by focusing on 20 top leads.
                </h2>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 text-xs">
                    1 month until Q4 ends
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium">Target</span>
                    <span className="text-xs">$45 million</span>
                  </div>
                  <span className="text-xs text-gray-600">
                    68% of target achieved
                  </span>
                </div>
                <div className="h-1 w-full flex mb-2">
                  {progressData.map((item, index) => (
                    <div
                      key={index}
                      className={`${item.color} ${item.width}`}
                    />
                  ))}
                </div>
                <div className="flex gap-4">
                  {progressData.map((item, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-sm ${item.color}`} />
                      <span className="text-xs text-gray-600">
                        {item.label} {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <button>
                <IoIosArrowUp className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}

            {/* Legend */}
          </div>
          <div className="flex gap-32">
            <p className="text-[12px] text-gray-700 mb-6">
              Copilot has pinpointed 20 key leads that show strong purchase
              intent and are actively engaging. These leads need your focus.
            </p>
            <h3 className="text-[12px] mb-4">Other key activities</h3>
          </div>
          <div className="flex gap-4">
            {/* Leads Grid */}
            <div className="relative w-[70%]">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {getVisibleLeads().map((lead) => (
                  <div
                    key={lead.id}
                    className="bg-white rounded-lg shadow-md p-4"
                    onClick={() => handleCardClick(lead)}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">{lead.name}</h3>
                            <p className="text-[10px] text-gray-600">
                              {lead.position} • {lead.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4  rounded-lg">
                      <div
                        className="max-w-sm p-4 rounded-lg shadow-md"
                        style={{
                          background:
                            "linear-gradient(to right,#E2EAF4 , #F0EBF9)",
                        }}
                      >
                        {/* Action Button */}
                        <button className="flex items-center gap-2 font-medium">
                          {lead.icon}
                          {lead.action || "No action provided"}
                          <FaRegStar className="w-4 h-4" />
                        </button>

                        {/* Description */}
                        <p className="text-sm">
                          {lead.interest || "No description available"}
                        </p>
                      </div>

                      {/* Tags */}
                      {lead.tags && lead.tags.length > 0 ? (
                        <div className="flex items-center gap-2">
                          {lead.tags.map((tag, index) => (
                            <span key={index} className="text-sm text-gray-600">
                              {tag}
                              {index < lead.tags.length - 1 && " •"}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">
                          No tags available
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -left-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50"
                disabled={currentSlide === 0}
              >
                <IoChevronBack className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 -right-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50"
                disabled={currentSlide === totalSlides - 1}
              >
                <IoChevronForward className="w-5 h-5 text-gray-600" />
              </button>

              {/* Carousel Indicators */}
              <CarouselIndicators />
            </div>
            {/* Other Activities */}
            <div>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 mb-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg" />
                      <div className="flex-1">
                        <h4 className="font-medium text-[12px]">
                          {activity.title}
                        </h4>
                        <p className="text-[8px] text-gray-600">
                          {activity.subtitle}
                        </p>
                        <div className="mt-2 text-[10px] flex items-center gap-2 bg-gray-50 py-2 px-1 rounded-lg">
                          <div>{activity.icon}</div>
                          <p>{activity.action}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-blue-600 text-[10px]">
                Show all key activities
              </button>
            </div>
          </div>
        </div>
      </div>
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl  w-full relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="font-bold">{selectedLead.icon}</div>
                <h2 className="font-bold">{selectedLead.action}</h2>
              </div>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="bg-white rounded-lg shadow-md p-2 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-12 bg-gray-200 rounded-3xl" />
              
                <div>
                <h2 className="text-lg font-medium">{selectedLead.name}</h2>
                <p className="text-sm text-gray-600 mb-4 flex gap-3">
                <IoLogoLinkedin size="20" color="blue-500" />{" "}
                <p className="border-t border-gray-300" />
                {selectedLead.position} • {selectedLead.company}
              </p>
                </div>
              </div>
             
            </div>
            <div
              className=" p-4 rounded-lg shadow-md flex items-center justify-between"
              style={{
                background: "linear-gradient(to right,#E2EAF4 , #D6CBEE)",
              }}
            >
              {/* Action Button */}
              <div>
                <button className="flex items-center gap-2 ">
                  <FaRegStar className="w-4 h-4" />
                  <p className="text-xs"> {selectedLead.interest}</p>
                </button>
              </div>
              <div className="flex items-center gap-2 ">
                <button className="flex items center gap-2 p-2 rounded-md bg-white">
                  <LuPencil />
                  <p>Edit</p>
                </button>
                <button
                  className="flex items-center gap-2 p-2 rounded-md"
                  style={{
                    background: "linear-gradient(to right,#2723A5 , #AA53C3)",
                  }}
                >
                  <IoSendOutline />
                  <p>Approve and Send</p>
                </button>
              </div>
            </div>
            <div className="p-4 rounded-lg shadow-md bg-white m-4">
              <div
                className="border rounded-lg p-4 hover:shadow-lg transition-shadow mt-4"
                style={{
                  background: "linear-gradient(to right,#E2EAF4 , #F0EBF9)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-blue-500">
                      Why i picked this lead
                    </h3>
                    {selectedLead.description &&
                    selectedLead.description.length > 0 ? (
                      <ul className="text-xs">
                        {selectedLead.description.map((desc, index) => (
                          <li key={index}>• {desc}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No description available.</p>
                    )}

                    <div className="flex space-x-4 mt-4">
                      <div className="p-2 rounded-md shadow-md bg-white flex items-center gap-2">
                        <div>
                          <BsCheckCircleFill size={32} />
                        </div>
                        <div className="">
                          <span className="block text-sm font-medium">
                            Decision Maker
                          </span>
                          <span
                            className={
                              selectedLead.isDecisionMaker
                                ? "text-blue-600 font-bold"
                                : "text-red-600 font-bold"
                            }
                          >
                            {selectedLead.isDecisionMaker ? "Yes" : "No"}
                          </span>
                        </div>
                      </div>
                      <div className="p-2 rounded-md shadow-md bg-white flex items-center gap-2">
                        <div>
                          <FaMedal size={32} />
                        </div>
                        <div className="">
                          <span className="block text-sm font-medium">
                            Potential deal value
                          </span>
                          <span className="text-blue-600 font-bold">
                            {selectedLead.dealValue}
                          </span>
                        </div>
                      </div>
                      <div className="p-2 rounded-md shadow-md bg-white flex items-center gap-2">
                        <div>
                          <FiTarget size={32} />
                        </div>
                        <div className="">
                          <span className="block text-sm font-medium">
                            Intent
                          </span>
                          <span
                            className={`text-${
                              selectedLead.intent === "High" ? "blue" : "gray"
                            }-600`}
                          >
                            {selectedLead.intent}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 mt-2">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg shadow-md bg-gray-100">
                    <AiFillLock  size="20"/>
                  </div>
                  <div className="p-2 rounded-lg shadow-md bg-gray-100 flex items-center gap-2">
                    {" "}
                    <p>1</p>
                    <FcPieChart size="20" />
                    <p>D365 Sales</p>
                  </div>
                  <div className="p-2 rounded-lg shadow-md bg-gray-100">+2</div>
                </div>
                <div className="flex items-center">
                  <div className="p-2 rounded-lg shadow-md bg-gray-100 text-sm">
                    <p>AI-generated content may be incorrect</p>
                  </div>
                  <div className="flex gap-2">
                    <FaRegThumbsUp />
                    <FaRegThumbsDown />
                  </div>

                  <div></div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-between mt-4">
              <button
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                onClick={() => {
                  const currentIndex = leads.findIndex(
                    (lead) => lead.id === selectedLead.id
                  );
                  const prevIndex =
                    (currentIndex - 1 + leads.length) % leads.length;
                  setSelectedLead(leads[prevIndex]);
                }}
              >
                <IoChevronBack className="w-5 h-5" />
              </button>
              <button
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                onClick={() => {
                  const currentIndex = leads.findIndex(
                    (lead) => lead.id === selectedLead.id
                  );
                  const nextIndex = (currentIndex + 1) % leads.length;
                  setSelectedLead(leads[nextIndex]);
                }}
              >
                <IoChevronForward className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 rounded-lg shadow-md bg-white">
              <h3 className="font-bold">
                About {selectedLead.name.split(" ")[0]}
              </h3>
              <p className="text-sm">{selectedLead.about}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
