import React from "react";
import BgVector from "../../assets/vector1.png";
import BgVec from "../../assets/vector2.png";

// Reusable Stat Card Component
const StatCard = ({ title, count, gradient }) => {
  return (
    <div
      className="relative rounded-2xl p-6 flex flex-col items-center justify-center text-center text-white shadow-lg w-full h-[200px] overflow-hidden"
      style={{ background: gradient }}
    >
      {/* Background Decorations */}
      <img
        src={BgVector}
        alt="background shape"
        className="absolute left-6 top-1/2 -translate-y-1/2 w-1/3 h-full object-cover scale-125 opacity-70"
      />
      <img
        src={BgVec}
        alt="background shape"
        className="absolute right-6 top-1/2 -translate-y-1/2 w-1/3 h-full object-cover scale-125 opacity-70"
      />

      {/* Content */}
      <p className="text-xl font-semibold opacity-90 z-10">{title}</p>
      <h1 className="text-5xl font-bold z-10">{count}</h1>
    </div>
  );
};

const Banner = ({ InProgress, resolved }) => {
  return (
    <section className="mx-6 lg:mx-20 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <StatCard
          title="In Progress"
          count={InProgress.length}
          gradient="linear-gradient(90deg, #632EE3 0%, #9F62F2 100%)"
        />

        <StatCard
          title="Resolved"
          count={resolved.length}
          gradient="linear-gradient(90deg, #54CF68 0%, #00827A 100%)"
        />

      </div>
    </section>
  );
};

export default Banner;