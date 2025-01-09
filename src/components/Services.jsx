import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Personal Training",
      description: "Get one-on-one training sessions tailored to your fitness goals with our expert trainers.",
      images: "/src/assets/group.png",
    },
    {
      id: 2,
      title: "Group Classes",
      description: "Join fun and engaging group fitness classes like Yoga, Zumba, and CrossFit.",
      images: "/src/assets/org.png",
    },
    {
      id: 3,
      title: "Nutrition Coaching",
      description: "Receive personalized nutrition plans to complement your fitness journey.",
      images: "/src/assets/asso.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      {/* Section Title */}
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Trusted by Thousands Worldwide
        </h2>
        <p className="text-neutralGrey">
          Over 10,000 members have joined our fitness revolution.
        </p>

        {/* Companies Logos */}
        <div className="w-full h-20 my-12 flex justify-between items-center gap-8">
          <img src="/src/assets/company1.png" alt="Company 1" className="w-20 h-20" />
          <img src="/src/assets/company2.png" alt="Company 2" className="w-14 h-14" />
          <img src="/src/assets/company3.png" alt="Company 3" className="w-14 h-14" />
          <img src="/src/assets/company4.png" alt="Company 4" className="w-14 h-14" />
          <img src="/src/assets/company5.png" alt="Company 5" className="w-14 h-14" />
          <img src="/src/assets/company6.png" alt="Company 6" className="w-20 h-20" />
          <img src="/src/assets/company7.png" alt="Company 7" className="w-14 h-14" />
        </div>
      </div>

      {/* Section Title for Services */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Achieve Your Fitness Goals with Ease
        </h2>
        <p className="text-neutralGrey">
          Tailored to your fitness level and preferences.
        </p>
      </div>

      {/* Services Cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div className="mb-4 mx-auto rounded-t1-3xl rounded-br-3xl">
              <div className="flex justify-center items-center">
                <img src={service.images} alt={service.title} className="w-14 h-14" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
