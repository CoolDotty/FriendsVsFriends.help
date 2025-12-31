export const MAX_COST = 50;
export const MIN_CARDS = 25;

// FvF cards and first sorted by patch, then by ID
export const defaultCardSort = (a, b) => {
  // Present always shows at the very beginning
  if (a.name === 'Present') return -1;
  if (b.name === 'Present') return 1;
  return a.batch === b.batch ? a.id - b.id : a.batch - b.batch;
};

// Batch:
// 0 = Launch
// 1 = Pixel Vision
// 1.1 = Secret 404 card drop (SHOULD BE 12 BUT IS SORTED AS HERE)
// 2 = Little Lars Content Update
// 3 = Myk Raver BFF
// 4 = Baba's Laundromat
// 5 = Wired Wrecks
// 6 = Halloween Update (2023)
// 7 = Sable Santana BFF
// 8 = Xmas Update (2023)
// 9 = Nerdvana
// 10 = Art Gallary Update
// 11 = The "Siaro" Update
// 12 = 90's Drugstore Crime Update
// 13 = Very Expensive Update

const Card = (img, batch, type, name, cost) => ({
  id: parseInt(img.substring(5, 9), 10),
  batch,
  type,
  name,
  cost,
  img,
});

export const allCards = [
  Card('Card_0001_bake.webp', 0, 'Debuff', 'Big Head', 2),
  Card('Card_0010_bake.webp', 0, 'Weapon', 'Albatross 21', 3),
  Card('Card_0019_bake.webp', 4, 'Buff', 'Silent Steps', 1),
  Card('Card_0028_bake.webp', 0, 'Buff', 'Vampire Bullets', 3),
  Card('Card_0038_bake.webp', 0, 'Buff', 'Tin Man', 2),
  Card('Card_0051_bake.webp', 3, 'Buff', 'Card Profaner', 4),
  Card('Card_0064_bake.webp', 0, 'Helper', 'Sticky Bomb', 1),
  Card('Card_0078_bake.webp', 3, 'Buff', 'Lottery Ticket', 2),
  Card('Card_0096_bake.webp', 2, 'Buff', 'Bigger Explosions', 1),
  Card('Card_0114_bake.webp', 1, 'Debuff', 'Pixel Vision', 1),
  Card('Card_1005_bake.webp', 0, 'Personality', 'Classic', 2),
  Card('Card_0002_bake.webp', 0, 'Buff', 'Small Head', 1),
  Card('Card_0011_bake.webp', 0, 'Debuff', 'Less Accuracy', 1),
  Card('Card_0020_bake.webp', 0, 'Weapon', 'Brass Hopper', 1),
  Card('Card_0030_bake.webp', 0, 'Buff', 'Energy Drink', 1),
  Card('Card_0041_bake.webp', 0, 'Helper', 'Wall', 1),
  Card('Card_0056_bake.webp', 3, 'Buff', 'Card Thief', 3),
  Card('Card_0067_bake.webp', 0, 'Weapon', 'Punch-R', 3),
  Card('Card_0083_bake.webp', 3, 'Wild', 'Hot Potato', 2),
  Card('Card_0098_bake.webp', 2, 'Buff', 'Thick Skin', 1),
  Card('Card_0124_bake.webp', 5, 'Helper', 'Dr. MoleBOT', 1),
  Card('Card_1006_bake.webp', 0, 'Personality', 'Thick Coat', 2),
  Card('Card_0003_bake.webp', 0, 'Debuff', 'Health Down', 2),
  Card('Card_0012_bake.webp', 0, 'Buff', 'More Accuracy', 1),
  Card('Card_0021_bake.webp', 0, 'Weapon', 'Laika', 2),
  Card('Card_0031_bake.webp', 0, 'Buff', 'Helmet', 2),
  Card('Card_0042_bake.webp', 0, 'Helper', 'Bomb Belt', 2),
  Card('Card_0057_bake.webp', 0, 'Helper', 'Land Mine', 1),
  Card('Card_0068_bake.webp', 0, 'Helper', 'Toxic Bomb', 2),
  Card('Card_0085_bake.webp', 2, 'Buff', 'Bomb Lover', 3),
  Card('Card_0099_bake.webp', 4, 'Buff', 'Berserker', 2),
  Card('Card_0127_bake.webp', 5, 'Buff', 'Pyromania', 1),
  Card('Card_1007_bake.webp', 0, 'Personality', 'Power Legs', 2),
  Card('Card_0004_bake.webp', 0, 'Buff', 'Health Up', 2),
  Card('Card_0013_bake.webp', 0, 'Debuff', 'Rubber Bullets', 2),
  Card('Card_0022_bake.webp', 0, 'Buff', 'Medkit', 2),
  Card('Card_0032_bake.webp', 4, 'Weapon', 'Akimbo', 3),
  Card('Card_0044_bake.webp', 0, 'Debuff', 'Garbage Day', 1),
  Card('Card_0058_bake.webp', 0, 'Helper', 'Bear Trap', 1),
  Card('Card_0069_bake.webp', 0, 'Weapon', 'Katana', 2),
  Card('Card_0086_bake.webp', 5, 'Debuff', 'Frozen Gun', 2),
  Card('Card_0100_bake.webp', 0, 'Trap', 'Ninja Log', 2),
  Card('Card_0128_bake.webp', 5, 'Wild', 'Warp Room', 2),
  Card('Card_1010_bake.webp', 0, 'Personality', 'Runner', 2),
  Card('Card_0005_bake.webp', 0, 'Debuff', 'Move Slower', 2),
  Card('Card_0014_bake.webp', 0, 'Buff', 'Steel Bullets', 2),
  Card('Card_0023_bake.webp', 0, 'Debuff', 'Invisible Health', 1),
  Card('Card_0033_bake.webp', 0, 'Helper', 'CA-Turret', 2),
  Card('Card_0046_bake.webp', 0, 'Helper', 'Ice Block', 1),
  Card('Card_0059_bake.webp', 0, 'Buff', 'Invisible', 2),
  Card('Card_0070_bake.webp', 0, 'Debuff', 'Swap Weapons', 3),
  Card('Card_0088_bake.webp', 0, 'Helper', 'Kaboomber', 2),
  Card('Card_0102_bake.webp', 0, 'Trap', 'Self-destruct Device', 3),
  Card('Card_0137_bake.webp', 5, 'Helper', 'Teleport Bomb', 1),
  Card('Card_1011_bake.webp', 0, 'Personality', 'Katana Lover', 2),
  Card('Card_0006_bake.webp', 0, 'Buff', 'Move Faster', 1),
  Card('Card_0015_bake.webp', 0, 'Debuff', 'Small Mag', 2),
  Card('Card_0024_bake.webp', 0, 'Debuff', 'Invisible Hand', 3),
  Card('Card_0034_bake.webp', 0, 'Wild', 'Titan', 4),
  Card('Card_0047_bake.webp', 4, 'Helper', 'Bouncy Wall', 2),
  Card('Card_0060_bake.webp', 0, 'Debuff', 'Mind Blowing', 4),
  Card('Card_0071_bake.webp', 2, 'Buff', 'Predator Vision', 1),
  Card('Card_0090_bake.webp', 0, 'Trap', 'Counter Card', 3),
  Card('Card_0104_bake.webp', 0, 'Helper', 'Karratov', 2),
  Card('Card_1001_bake.webp', 0, 'Personality', "It's Medicinal", 2),
  Card('Card_1013_bake.webp', 0, 'Personality', 'Big Bullets', 2),
  Card('Card_0007_bake.webp', 0, 'Buff', 'Double Jump', 1),
  Card('Card_0016_bake.webp', 0, 'Buff', 'Big Mag', 1),
  Card('Card_0025_bake.webp', 0, 'Weapon', 'FK-82', 3),
  Card('Card_0035_bake.webp', 4, 'Debuff', 'Disarm', 2),
  Card('Card_0048_bake.webp', 0, 'Helper', 'Smoke Bomb', 1),
  Card('Card_0061_bake.webp', 0, 'Wild', 'Heartless', 3),
  Card('Card_0072_bake.webp', 2, 'Buff', 'Phantom Bullets', 3),
  Card('Card_0091_bake.webp', 0, 'Trap', 'Mirror Card', 1),
  Card('Card_0109_bake.webp', 0, 'Wild', 'Parlay', 1),
  Card('Card_1002_bake.webp', 0, 'Personality', 'Brasslover', 1),
  Card('Card_1014_bake.webp', 0, 'Personality', 'Dither & Banding', 2),
  Card('Card_0008_bake.webp', 0, 'Debuff', 'No Jump', 2),
  Card('Card_0017_bake.webp', 4, 'Debuff', 'Slow Reload', 2),
  Card('Card_0026_bake.webp', 0, 'Buff', 'Bullet Time', 1),
  Card('Card_0036_bake.webp', 0, 'Buff', 'Poison Bullets', 2),
  Card('Card_0049_bake.webp', 0, 'Helper', 'Flash Bomb', 1),
  Card('Card_0062_bake.webp', 0, 'Wild', 'Nuke', 0),
  Card('Card_0074_bake.webp', 4, 'Debuff', 'Clown Shoes', 1),
  Card('Card_0092_bake.webp', 0, 'Buff', 'Love Letter', 1),
  Card('Card_0111_bake.webp', 0, 'Debuff', 'Barbed Cards', 2),
  Card('Card_1003_bake.webp', 0, 'Personality', 'Reading Glasses', 2),
  Card('Card_0009_bake.webp', 0, 'Weapon', 'Boomstick', 3),
  Card('Card_0018_bake.webp', 4, 'Buff', 'Quick Reload', 2),
  Card('Card_0027_bake.webp', 0, 'Debuff', 'Poison', 1),
  Card('Card_0037_bake.webp', 0, 'Helper', 'Bomb', 1),
  Card('Card_0050_bake.webp', 3, 'Buff', 'Extra Cards', 3),
  Card('Card_0063_bake.webp', 0, 'Weapon', 'Golden Boira', 2),
  Card('Card_0075_bake.webp', 0, 'Debuff', 'Empty Mag', 2),
  Card('Card_0094_bake.webp', 4, 'Buff', 'Ninja Smoke', 1),
  Card('Card_0113_bake.webp', 4, 'Buff', 'Painkillers', 3),
  Card('Card_1004_bake.webp', 0, 'Personality', 'Badass', 2),
  Card('Card_0143_bake.webp', 6, 'Helper', 'Bat Turret Lover', 2),
  Card('Card_0140_bake.webp', 7, 'Helper', 'Laser Fence', 2),
  Card('Card_0152_bake.webp', 8, 'Wild', 'Present', 1),
  Card('Card_0131_bake.webp', 9, 'Weapon', 'Deep Fryer', 3),
  Card('Card_0139_bake.webp', 9, 'Wild', 'Shrink Spell', 4),
  Card('Card_0147_bake.webp', 9, 'Debuff', 'Silence!', 2),
  Card('Card_0148_bake.webp', 9, 'Buff', 'Reroll', 2),
  Card('Card_0149_bake.webp', 9, 'Helper', 'Dice Bomb', 0),
  Card('Card_1017_bake.webp', 9, 'Personality', 'Roleplay', 1),
  Card('Card_1019_bake.webp', 10, 'Personality', 'Arpeggio', 1),
  Card('Card_0155_bake.webp', 11, 'Wild', 'Floor is Lava', 2),
  Card('Card_0157_bake.webp', 11, 'Buff', 'Venom Eater', 1),
  Card('Card_0164_bake.webp', 11, 'Buff', 'Brain Mirror', 2),
  Card('Card_0165_bake.webp', 11, 'Buff', 'Sly Shooter', 3),
  Card('Card_1021_bake.webp', 11, 'Personality', 'Undercover Agent', 1),
  Card('Card_0166_bake.webp', 1.1, 'Buff', '404', 0),
  Card('Card_1022_bake.webp', 12, 'Personality', 'Left Behind', 2),
  Card('Card_1023_bake.webp', 12, 'Personality', 'At The End Of The Road', 2),
  Card('Card_1024_bake.webp', 12, 'Personality', 'Venom Eater', 2),
  Card('Card_1025_bake.webp', 12, 'Personality', 'Fluffy Wool', 2),
  Card('Card_1026_bake.webp', 12, 'Personality', 'Energy Boost', 2),
  Card('Card_1027_bake.webp', 12, 'Personality', 'Stuntman', 2),
  Card('Card_1028_bake.webp', 12, 'Personality', 'Determination', 2),
].sort(defaultCardSort);

export const cards = allCards.filter(({ type }) => type !== 'Personality');

export const personalities = allCards.filter(
  ({ id, type }) => type === 'Personality' && id !== 1999
);

export const personalityToId = (p) =>
  ({
    Classic: 'seagull',
    'Thick Coat': 'polarbear',
    'Power Legs': 'moose',
    Runner: 'hare',
    'Katana Lover': 'tiger',
    "It's Medicinal": 'duck',
    'Big Bullets': 'cat',
    Brasslover: 'woodpecker',
    'Dither & Banding': 'rat',
    'Reading Glasses': 'crocodile',
    Badass: 'doberman',
    Roleplay: 'toad',
    Arpeggio: 'cow',
    'Undercover Agent': 'wolf',
    'Left Behind': 'dingo',
    'At The End Of The Road': 'dingo_laika',
    'Venom Eater': 'dingo_siaro',
    'Fluffy Wool': 'dingo_jawhara',
    'Energy Boost': 'dingo_fennecfox',
    Stuntman: 'dingo_turtle',
    Determination: 'dingo_llama',
  })[p];

export const personalityToRender = (p) =>
  ({
    Classic: 'characters/character_full_seagull_default.webp',
    'Thick Coat': 'characters/character_full_polarbear_default.webp',
    'Power Legs': 'characters/character_full_moose_default.webp',
    Runner: 'characters/character_full_hare_default.webp',
    'Katana Lover': 'characters/character_full_tiger_default.webp',
    "It's Medicinal": 'characters/character_full_duck_default.webp',
    'Big Bullets': 'characters/character_full_cat_default.webp',
    Brasslover: 'characters/character_full_woodpecker_default.webp',
    'Dither & Banding': 'characters/character_full_rat_default.webp',
    'Reading Glasses': 'characters/character_full_crocodile_default.webp',
    Badass: 'characters/character_full_doberman_default.webp',
    Roleplay: 'characters/character_full_toad_default.webp',
    Arpeggio: 'characters/character_full_cow_default.webp',
    'Undercover Agent': 'characters/character_full_wolf_default.webp',
    'Left Behind': 'characters/character_full_dingo_default.webp',
    'At The End Of The Road': 'characters/character_full_dingo_laika.webp',
    'Venom Eater': 'characters/character_full_dingo_siaro.webp',
    'Fluffy Wool': 'characters/character_full_dingo_jawhara.webp',
    'Energy Boost': 'characters/character_full_dingo_fennecfox.webp',
    Stuntman: 'characters/character_full_dingo_turtle.webp',
    Determination: 'characters/character_full_dingo_llama.webp',
  })[p];
