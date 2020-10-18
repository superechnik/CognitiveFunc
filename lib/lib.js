const Ne = "As a Pe function, Ne has a short cycle of decay (S), making its extrapolations (A)...";
const Se = "As a Pe function, Se has a short cycle of decay (s), limiting its exploration...";
const Ni = "As a Pi function, Ni has a long cycle of decay (L), keeping information schemas...";
const Si = "As a Pi function, Si has a long cycle of decay (L), keeping information schemas...";
const Ti = "Ti evaluates things without the a priori of the emotional register. This leaves...";
const Fe = "Fe by itself cannot view a causality between objects without comprehending...";
const Te = "Te compares objects to other objects in a matter of fact way. There is no extra...";
const Fi = "Fi is the aspect that handles the ethical question by comparing things singularly to the subject...";

function Selector(msg) {
  var desc;
  switch (msg) {
    case '!Ne':
      return Ne;
    case '!Se':
      return Se;
    case '!Ni':
      return Ni;
    case '!Si':
      return Si;
    case '!Ti':
      return Ti;
    case '!Fe':
      return Fe;
    case '!Te':
      return Te;
    case '!Fi':
      return Fi;
    default: return 'dunno';
  }
}

module.exports = { Selector }
