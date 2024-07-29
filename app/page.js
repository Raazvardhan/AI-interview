import { Button } from "@/components/ui/button";
import Header from "./dashboard/_components/Header";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Header />
      </div>
      
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="flex-1 md:pr-8 mb-16 md:mb-0">
            <h2 className="text-sm uppercase text-indigo-600 font-semibold mb-2">AI-powered interview</h2>
            <h1 className="text-5xl font-bold text-navy-900 mb-4">Your Personal <span className="text-blue-500">AI Interview Coach</span></h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md">
              Double your chances of landing that job offer with our AI-powered interview prep
            </p>
            <div className="flex space-x-4">
              <Button>
                <a href="/dashboard">Get Started</a>
              </Button>
              <Button variant="outline" className="text-blue-500 px-6 py-3 rounded-full">How it Works →</Button>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="flex-1 md:pl-8">
            <div className="relative w-full h-96">
              <Image
                src="/1123.jpg"
                alt="AI Interview Coach Illustration"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}