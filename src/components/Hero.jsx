import React from "react";

const Hero = () => {
  return (
    <div
      class="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://files.oaiusercontent.com/file-UPu6QqMCBs7H1TuVchiqJX?se=2025-01-07T18%3A20%3A58Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3576558a-58bf-42d0-adc4-0b17d93b458c.webp&sig=DfSmmyOrDbYnUseaUn0NMHnwdbMgGQv3I3yVfpk4gl4%3D)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-6xl font-bold">Vipe for Funning</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt
            temporibus porro cupiditate, voluptatibus commodi aut error
            voluptatum quasi labore sed! Rerum voluptas nemo minus.
          </p>
          <div className="flex gap-2 justify-center">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn about it</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
