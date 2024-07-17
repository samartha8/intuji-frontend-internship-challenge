import React from 'react';

const BlogCard = ({ title, subtitle, description, children }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    {children}
    <div className="p-6">
      <h3 className="text-sm font-semibold text-gray-500">{subtitle}</h3>
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="mt-4 text-gray-600">{description}</p>
      <a href="#" className="mt-4 inline-block text-blue-500 hover:text-blue-600">
        Read More &rarr;
      </a>
    </div>
  </div>
);

const RecentBlogs = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Recent Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <BlogCard
            title="In design active temper be uneasy. Thirty for remove plenty regard."
            subtitle="BEST PRACTICES"
            description=""
          >
            <div className="w-full h-48 bg-gray-300"></div>
          </BlogCard>
        </div>
        <BlogCard
          title="Partiality on or continuing particular principles as."
          subtitle="BEST PRACTICES"
          description=""
        >
          <div className="w-full h-48 bg-gray-300"></div>
        </BlogCard>
        <BlogCard
          title="Village did removed enjoyed explain."
          subtitle="BEST PRACTICES"
          description=""
        >
          <div className="w-full h-48 bg-gray-300"></div>
        </BlogCard>
        <BlogCard
          title="Wise busy past both park when an ye no. Nay likely her length."
          subtitle="BEST PRACTICES"
          description=""
        >
          <div className="w-full h-48 bg-gray-300"></div>
        </BlogCard>
      </div>
    </div>
  );
};

export default RecentBlogs;
