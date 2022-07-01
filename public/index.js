/** creating the hero Heracles */
const heracles = new Hero('👨 Heracles', 0, 0);

/** Creating his weapon and associating it */
const bow = new Weapon('bow', 8, './images/bow.svg', 1);
heracles.weapon = bow;

/** Creating his shield and associating it */
const shield = new Shield('shield', 10, './images/shield.svg');
heracles.shield = shield;


/** Creating all of his adversaries */
const Ceryneian = new Monster('🐴 Ceryneian Hind', 9, 6);

/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate('fighters');
fighterHtml.createTemplate(heracles, Ceryneian);


/** Creating the arena place  */
const arena = new Arena(heracles, [Ceryneian])
const ArenaHTML = new ArenaTemplate('arena');
ArenaHTML.setMoveEvent(arena);
ArenaHTML.setMonsterClick(arena);

arena.tiles = [...grass, ...water, ...bush]

ArenaHTML.createArena(arena);

/** Do not touch => allow the opening / closing of the hero information section */
let openingModal = true;
const openModal = (type) => {
  if (openingModal) {
    const info = new InfoTemplate('info');
    if (type === "hero") info.createHeroInfoTemplate(heracles);
    if (type === "ennemy") info.createEnnemyInfoTemplate([Ceryneian]);
    document.getElementById("info").style.display = "flex";
    openingModal = false;
  }
}

const closeModal = () => {
  const heroInfo = document.getElementById("info");
  heroInfo.style.display = "none";
  heroInfo.innerHTML = "";
  openingModal = true;
}