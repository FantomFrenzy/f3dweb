var Private = {
  /**
   * First string of a name
   * @type {Array}
   */
  nouns: [
    'ninja',
    'truce',
    'harj',
    'finney',
    'szabo',
    'gwei',
    'laser',
    'justo',
    'satoshi',
    'mantso',
    '3D',
    'inventor',
    'theShocker',
    'aritz',
    'sumpunk',
    'cryptoknight',
    'randazz',
    'kadaz',
    'daok',
    'shenron',
    'notreally',
    'thecrypt',
    'stick figures',
    'mermaid eggs',
    'sea barnacles',
    'dragons',
    'jellybeans',
    'snakes',
    'dolls',
    'bushes',
    'cookies',
    'apples',
    'ice cream',
    'ukulele',
    'kazoo',
    'banjo',
    'opera singer',
    'circus',
    'trampoline',
    'carousel',
    'carnival',
    'locomotive',
    'hot air balloon',
    'praying mantis',
    'animator',
    'artisan',
    'artist',
    'colorist',
    'inker',
    'coppersmith',
    'director',
    'designer',
    'flatter',
    'stylist',
    'leadman',
    'limner',
    'make-up artist',
    'model',
    'musician',
    'penciller',
    'producer',
    'scenographer',
    'set decorator',
    'silversmith',
    'teacher',
    'auto mechanic',
    'beader',
    'bobbin boy',
    'clerk of the chapel',
    'filling station attendant',
    'foreman',
    'maintenance engineering',
    'mechanic',
    'miller',
    'moldmaker',
    'panel beater',
    'patternmaker',
    'plant operator',
    'plumber',
    'sawfiler',
    'shop foreman',
    'soaper',
    'stationary engineer',
    'wheelwright',
    'woodworkers',
  ],

  /**
   * Last string of a name
   * @type {Array}
   */
  adjectives: [
    'adamant',
    'adroit',
    'amatory',
    'animistic',
    'antic',
    'arcadian',
    'baleful',
    'bellicose',
    'bilious',
    'boorish',
    'calamitous',
    'caustic',
    'cerulean',
    'comely',
    'concomitant',
    'contumacious',
    'corpulent',
    'crapulous',
    'defamatory',
    'didactic',
    'dilatory',
    'dowdy',
    'efficacious',
    'effulgent',
    'egregious',
    'endemic',
    'equanimous',
    'execrable',
    'fastidious',
    'feckless',
    'fecund',
    'friable',
    'fulsome',
    'garrulous',
    'guileless',
    'gustatory',
    'harjd',
    'heuristic',
    'histrionic',
    'hubristic',
    'incendiary',
    'insidious',
    'insolent',
    'intransigent',
    'inveterate',
    'invidious',
    'irksome',
    'jejune',
    'jocular',
    'judicious',
    'lachrymose',
    'limpid',
    'loquacious',
    'luminous',
    'mannered',
    'mendacious',
    'meretricious',
    'minatory',
    'mordant',
    'munificent',
    'nefarious',
    'noxious',
    'obtuse',
    'parsimonious',
    'pendulous',
    'pernicious',
    'pervasive',
    'petulant',
    'platitudinous',
    'precipitate',
    'propitious',
    'puckish',
    'querulous',
    'quiescent',
    'rebarbative',
    'recalcitant',
    'redolent',
    'rhadamanthine',
    'risible',
    'ruminative',
    'sagacious',
    'salubrious',
    'sartorial',
    'sclerotic',
    'serpentine',
    'spasmodic',
    'strident',
    'taciturn',
    'tenacious',
    'tremulous',
    'trenchant',
    'turbulent',
    'turgid',
    'ubiquitous',
    'uxorious',
    'verdant',
    'voluble',
    'voracious',
    'wheedling',
    'withering',
    'zealous',
  ],

  /**
   * Returns a random index bound to the max length of any given array.
   * @param  {array} array Array to pick from.
   * @return {int}       Key of the array.
   */
  randomKey: function(list) {
    return Math.floor(Math.random() * list.length);
  },
};

/**
 * All methods that we want accesible from our views/controllers.
 * @type {Object}
 */
var Public = {
  /**
   * Compose a random name based upon our nouns and adjectives
   * @return {string} Frankenstein'd random name.
   */
  generate: function() {
    var noun = Private.nouns[Private.randomKey(Private.nouns)];
    var adjective = Private.adjectives[Private.randomKey(Private.adjectives)];
    return `${adjective} ${noun}`;
  },
};

module.exports = Public;
