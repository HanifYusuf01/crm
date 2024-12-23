"use client";

import { useState } from 'react';
import Dashboard from '@/app/components/Dashboard'
import Sidebar from '@/app/components/Sidebar';
import { Inter } from 'next/font/google';
import InquiryList from '@/app/components/InquiryList';
import { customerInquiries } from './data';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className={`flex h-screen bg-gray-100 ${inter.className}`}>
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col">
       
        <Dashboard />
        <InquiryList inquiries={customerInquiries} />
    <div>
    
    </div>
      </div>
    </div>
  );
}