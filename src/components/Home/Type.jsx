import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "En apprentissage continu",
              "Développeuse web",
              "Créatrice d'expériences numériques",
              "Passionnée par la technologie"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type