import { FC } from 'react';
import Link from 'next/link';
import { MenuItem } from '../types';
import { GoHome } from "react-icons/go";
import { IoIosTrendingUp } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { FiActivity } from "react-icons/fi";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

const Sidebar: FC<SidebarProps> = ({ open, onToggle }) => {
  const menuItems: MenuItem[] = [
    { name: 'Home', icon: <GoHome className="w-5 h-5" />, href: '/' },
    { name: 'Agent skills', icon: <IoIosTrendingUp className="w-5 h-5" />, href: '/agent-skills' },
    { name: 'Dashboards', icon: <FiBarChart2 className="w-5 h-5" /> },
    { name: 'Activities', icon: <FaRegCalendarAlt className="w-5 h-5" /> },
    { name: 'Customers', icon: <RiUserSettingsLine className="w-5 h-5" />, subItems: ['Accounts', 'Contacts'] },
    { name: 'Sales', icon: <FaDollarSign className="w-5 h-5" />, subItems: ['Leads', 'Opportunities', 'Competitors'] },
    { name: 'Collateral', icon: <FiFileText className="w-5 h-5" />, subItems: ['Quotes', 'Orders', 'Invoices', 'Products', 'Sales Literature'] },
    { name: 'Marketing', icon: <CiMail className="w-5 h-5" />, subItems: ['Marketing lists', 'Quick Campaigns'] },
    { name: 'Performance', icon: <FiActivity className="w-5 h-5" />, subItems: ['Sales'] }
  ];

  return (
    <div className={`bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${open ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
      <nav>
        {menuItems.map((item, index) => (
          <div key={index} className="space-y-3">
            {item.href ? (
              <Link href={item.href} className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-100 w-full">
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ) : (
              <button className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-gray-100 w-full">
                {item.icon}
                <span>{item.name}</span>
              </button>
            )}
            {item.subItems && (
              <div className="pl-4 space-y-2">
                {item.subItems.map((subItem, subIndex) => (
                  <button key={subIndex} className="flex items-center text-gray-600 p-2 rounded-lg hover:bg-gray-100 w-full">
                    {subItem}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
