import { FC, useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import { ListItem } from '../types';

interface InquiryListProps {
  inquiries: ListItem[];
}

const InquiryList: FC<InquiryListProps> = ({ inquiries }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter inquiries based on the search query
  const filteredInquiries = inquiries.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.createdAt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search inquiries..."
          className="w-[500px] p-2 border rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 px-4 py-3">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  Name
                  <RiArrowDownSLine className="h-4 w-4" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  Topic
                  <RiArrowDownSLine className="h-4 w-4" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  Status reason
                  <RiArrowDownSLine className="h-4 w-4" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  Created on
                  <RiArrowDownSLine className="h-4 w-4" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredInquiries.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-4 py-3 text-sm text-blue-600">{item.name}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{item.topic}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{item.status}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InquiryList;
