import { IParticlesParams } from "ng-particles";

export const particles: IParticlesParams = {
  motion: {
    reduce: {
      factor: 10
    }
  },
  particles: {
    color: {
      animation: {
        enable: true,
        speed: 2
      },
      value: ["#f5222d", "#2f54eb", "#0050b3"]
    },
    collisions: {
      enable: true
    },
    move: {
      enable: true,
      direction: "top-right",
      speed: 1.5
    },
    number: {
      density: {
        enable: true,
        value_area: 1000
      },
      value: 25
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      animation: {
        enable: true,
        speed: 3,
        startValue: "random"
      },
      random: true,
      value: 12
    }
  },
  detectRetina: true,
  fpsLimit: 120
};
