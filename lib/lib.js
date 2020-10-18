const Ne = "descrption of Ne";
const Se = "description of Se";
const Ni = "description of Ni";
const Si = "description of Si";
const Ti = "descrption of Ti";
const Fe = "description of Fe";
const Te = "description of Te";
const Fi = "description of Fi";

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
