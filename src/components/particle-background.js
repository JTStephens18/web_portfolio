import Particles from "react-tsparticles";
import Header from "./Header";
const ParticleBackground = () => {
    return (
        <div>
            <Particles 
            id="tsparticles"
            // init={particlesInit}
            // loaded={particlesLoaded}
            options={{
              fullScreen: {
                enable: false,
              },
              background: {
                color: "1d1d1d",
              },
              links: {
                opacity: 0.5,
                distance: 100,
                enable: true,
                width: 10,
                color: "fff",
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "bounce"
                  },
                  onDiv: { 
                    selectors: ".intro-hey",
                    enable: true,
                    mode: "repulse",
                    type: "rectangle",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    links: {
                      opacity: 1,
                    }
                  },
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40, 
                  },
                  bounce: {
                    distance: 50,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 10,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                  },
                  connect: {
                    distance: 500,
                    links: {
                      opacity: 1,
                    },
                    radius: 500,
                  },
                },
              },
              particles: {
                color: {
                  value: "#FFAC00",
                },
                links: {
                  color: "ffffff",
                  distance: 100,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 20,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              }}
            />
         </div>
    );
};

export default ParticleBackground;