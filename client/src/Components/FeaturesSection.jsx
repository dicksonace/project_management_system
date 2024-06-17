import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Feature One</h3>
            <p>
              Manage your projects seamlessly with our user-friendly interface.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Feature Two</h3>
            <p>
              Collaborate with your team in real-time and track progress
              efficiently.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Feature Three</h3>
            <p>
              Get detailed analytics and insights to improve your project
              management skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
