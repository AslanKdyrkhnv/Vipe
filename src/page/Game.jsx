import React, { useState } from "react";

const Game = () => {
  const [isGameVisible, setIsGameVisible] = useState(true);

  const closeGame = () => {
    setIsGameVisible(!isGameVisible);
  };

  return (
    <div className="relative">
      {isGameVisible && (
        <div className="relative w-full h-screen">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://microstudio.io/HomineLudens/marblequest/"
            allowFullScreen={true}
          ></iframe>
          <button
            onClick={closeGame}
            className="absolute top-3 right-3 z-10 bg-red-500 text-white py-2 px-4 rounded"
          >
            Close Game
          </button>
        </div>
      )}
      {!isGameVisible && (
        <div className="p-5 ">
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h1>Let's play game!</h1>
            <p>Explore our content now that you're done with the game!</p>
          </div>
          <button
            onClick={closeGame}
            className="absolute top-3 right-3 z-10 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Turn on the Game
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
