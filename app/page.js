import { Button } from "@/components/ui/button";
import Header from "./dashboard/_components/Header";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Header />
      </div>
      
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side */}
          <div className="w-full lg:w-2/3 lg:pr-12 mb-8 lg:mb-0">
            <h2 className="text-sm uppercase text-indigo-600 font-semibold mb-2">AI-powered interview</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Your Personal <span className="text-blue-500">AI Interview Coach</span></h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Double your chances of landing that job offer with our AI-powered interview prep
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="w-full sm:w-auto">
                <a href="/dashboard" className="w-full">Get Started</a>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto text-blue-500 px-6 py-3 rounded-full">
                <a href="/how" className="w-full">How it Works →</a>
              </Button>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="w-full lg:w-1/3 h-[40vh] md:h-[50vh] lg:h-[60vh]">
            <Spline scene="https://prod.spline.design/oSLMiEbgGgJi9gKb/scene.splinecode"/>
          </div>
        </div>
      </main>
    </div>
  );
}