import Link from 'next/link';

function Page() {
  const steps = [
    {
      title: "Set Up Your Interview",
      description: "Go to the dashboard and click on 'Add New'. Fill in the details about your job position, description, and experience.",
      icon: "📝",
    },
    {
      title: "Record Your Interview",
      description: "A camera will open, allowing you to record yourself. Answer the questions asked by the AI interviewer.",
      icon: "🎥",
    },
    {
      title: "Receive Feedback",
      description: "End the interview and review the comprehensive feedback provided by our AI system.",
      icon: "📊",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-900 animate-fade-in">
          How it Works?
        </h1>
        <h2 className="text-2xl font-semibold mb-12 text-center text-indigo-700">Give mock interviews in just 3 simple steps</h2>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{step.icon}</span>
                <h3 className="text-2xl font-bold text-indigo-900">Step {index + 1}: {step.title}</h3>
              </div>
              <p className="text-gray-700 ml-14">{step.description}</p>
            </div>
          ))}
        </div>

        

        <div className="mt-12 text-center">
          <Link href="/dashboard" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors transform hover:scale-105 duration-300 shadow-md hover:shadow-lg">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;