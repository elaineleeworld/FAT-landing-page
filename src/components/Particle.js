import React, { Component } from 'react';
import Particles from 'react-particles-js';
 
class Particle extends Component{
  
    render(){
        return (
            <Particles
            params={{
                  "particles": {
                  "number": {
                    "value": 30,
                    "density": {
                      "enable": true,
                      "value_area": 900
                    }
                  },
                  "color": {
                    "value": "#ff0000"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#ff0000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.4,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 0.1,
                      "opacity_min": 0.1,
                      "sync": true
                    }
                  },
                  "size": {
                    "value": 10,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 60,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ff0000",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "window",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "grab"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 200,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 200,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }}
               />
        );
    };
 
}

export default Particle;