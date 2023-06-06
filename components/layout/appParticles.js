import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function appParticles() {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        canvasClassName="custom-particles-canvas position-static"
        style={{ zIndex: "-100", height: "0px" }}
        init={particlesInit}
        loaded={particlesLoaded}
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 4000,
              },
            },
            color: {
              value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#fff",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 33,
                height: 33,
              },
            },
            opacity: {
              value: 0.15,
              random: !0,
              anim: {
                enable: !0,
                speed: 0.2,
                opacity_min: 0.15,
                sync: !1,
              },
            },
            size: {
              value: 50,
              random: !0,
              anim: {
                enable: !0,
                speed: 2,
                size_min: 5,
                sync: !1,
              },
            },
            line_linked: {
              enable: !1,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: !0,
              speed: 1,
              direction: "top",
              random: !0,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: !1,
                mode: "bubble",
              },
              onclick: {
                enable: !1,
                mode: "repulse",
              },
              resize: !0,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: !0,
        }}
      />
    </>
  );
}

export default appParticles;
