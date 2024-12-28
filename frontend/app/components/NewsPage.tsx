// NewsPage.tsx

import React from "react";

// Define the types for each prop
interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

interface FantasyData {
  id: number;
  title: string;
  content: string;
}

interface CategoryData {
  id: number;
  title: string;
  description: string;
}

interface ReferralCardData {
  id: number;
  title: string;
  url: string;
}

// Define the props interface for NewsPage component
interface NewsPageProps {
  singleCategoryDataHindi: CategoryData[];
  singleCategoryDataEnglish: CategoryData[];
  video: Video[];
  referralCardData: ReferralCardData[];
  fantsayCardData: FantasyData[];
}

const NewsPage: React.FC<NewsPageProps> = ({
  singleCategoryDataHindi,
  singleCategoryDataEnglish,
  video,
  referralCardData,
  fantsayCardData,
}) => {
  return (
    <div className="p-6">
      {/* Single Category Data (Hindi) */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Single Category Data (Hindi)
        </h2>
        <ul className="list-disc list-inside">
          {singleCategoryDataHindi.length > 0 ? (
            singleCategoryDataHindi.map((item) => (
              <li key={item.id} className="mb-2">
                {item.title || "No Title Available"}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No data available.</p>
          )}
        </ul>
      </section>

      {/* Single Category Data (English) */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Single Category Data (English)
        </h2>
        <ul className="list-disc list-inside">
          {singleCategoryDataEnglish.length > 0 ? (
            singleCategoryDataEnglish.map((item) => (
              <li key={item.id} className="mb-2">
                {item.title || "No Title Available"}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No data available.</p>
          )}
        </ul>
      </section>

      {/* Video */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Video</h2>
        {video.length > 0 ? (
          video.map((v) => (
            <div key={v.id} className="mb-4">
              <h3 className="text-xl">{v.title}</h3>
              <video controls className="w-full rounded shadow">
                <source src={v.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No video available.</p>
        )}
      </section>

      {/* Referral Card Data */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Referral Card Data</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {referralCardData.length > 0 ? (
            referralCardData.map((card) => (
              <div
                key={card.id}
                className="p-4 border rounded shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <a href={card.url} className="text-blue-500">
                  Visit
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No referral card data available.</p>
          )}
        </div>
      </section>

      {/* Fantasy Card Data */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Fantasy Card Data</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fantsayCardData.length > 0 ? (
            fantsayCardData.map((card) => (
              <div
                key={card.id}
                className="p-4 border rounded shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-700">{card.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No fantasy card data available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
