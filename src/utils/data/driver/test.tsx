import React from 'react';

interface PackageData {
  name: string;
  price: string;
  mapUrls: string[];
  impressions: number;
  adPlacements: string;
  support: string;
  description: string;
}

const packageData: PackageData = {
  name: "Enterprise Package",
  price: "Custom pricing",
  mapUrls: [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4471.49623915743!2d39.29529920128635!3d8.567725037913522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fe4c294e6cb%3A0x6b86d6a89f24215c!2sAdama%20Science%20And%20Technology%20University%20-%20ASTU!5e0!3m2!1sen!2set!4v1729499827431!5m2!1sen!2set",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4471.49623915743!2d39.29529920128635!3d8.567725037913522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fe4c294e6cb%3A0x6b86d6a89f24215c!2sAdama%20Science%20And%20Technology%20University%20-%20ASTU!5e0!3m2!1sen!2set!4v1729499827431!5m2!1sen!2set"
  ],
  impressions: 500000,
  adPlacements: "Unlimited",
  support: "Dedicated team with custom solutions",
  description:
    "Tailored for enterprises or large organizations requiring a custom solution. This package offers flexibility in terms of impressions, ad placements, and advanced reporting, with a dedicated support team ensuring your advertising strategy meets your specific goals. Perfect for highly targeted and expansive campaigns.",
};

const AdventuresEarningPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Earnings - Package Details</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-700">{packageData.name}</h2>
        <p className="text-lg text-gray-700">{packageData.price}</p>
        <p className="text-md text-gray-600 mt-2">{packageData.description}</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700">Package Specifications</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Impressions:</strong> {packageData.impressions.toLocaleString()}</li>
          <li><strong>Ad Placements:</strong> {packageData.adPlacements}</li>
          <li><strong>Support:</strong> {packageData.support}</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700">Map Locations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {packageData.mapUrls.map((url, index) => (
            <iframe
              key={index}
              src={url}
              width="100%"
              height="250"
              className="border-2 border-gray-200 rounded-lg"
              loading="lazy"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdventuresEarningPage;
