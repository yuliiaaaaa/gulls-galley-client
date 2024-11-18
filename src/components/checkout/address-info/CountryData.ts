

export type CountryKey = keyof typeof regions; 
export type RegionKey = keyof typeof cities;

export const countries = [
  { value: 'UA', label: 'Ukraine' },
  { value: 'US', label: 'United States' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
];

export const regions = {
  UA: [
    { value: 'kharkiv', label: 'Kharkiv' },
    { value: 'kyiv', label: 'Kyiv' },
    { value: 'lviv', label: 'Lviv' },
    { value: 'odesa', label: 'Odesa' },
    { value: 'dnipro', label: 'Dnipro' },
  ],
  US: [
    { value: 'california', label: 'California' },
    { value: 'new_york', label: 'New York' },
    { value: 'texas', label: 'Texas' },
    { value: 'florida', label: 'Florida' },
    { value: 'illinois', label: 'Illinois' },
  ],
  GB: [
    { value: 'england', label: 'England' },
    { value: 'scotland', label: 'Scotland' },
    { value: 'wales', label: 'Wales' },
    { value: 'northern_ireland', label: 'Northern Ireland' },
  ],
  CA: [
    { value: 'ontario', label: 'Ontario' },
    { value: 'quebec', label: 'Quebec' },
    { value: 'british_columbia', label: 'British Columbia' },
    { value: 'alberta', label: 'Alberta' },
    { value: 'manitoba', label: 'Manitoba' },
  ],
  FR: [
    { value: 'ile_de_france', label: 'Île-de-France' },
    { value: 'auvergne_rhone_alpes', label: 'Auvergne-Rhône-Alpes' },
    { value: 'nouvelle_aquitaine', label: 'Nouvelle-Aquitaine' },
    { value: 'occitanie', label: 'Occitanie' },
    { value: 'provence_alpes_cote_d_azur', label: "Provence-Alpes-Côte d'Azur" },
  ],
  DE: [
    { value: 'bavaria', label: 'Bavaria' },
    { value: 'berlin', label: 'Berlin' },
    { value: 'hamburg', label: 'Hamburg' },
    { value: 'baden_wurttemberg', label: 'Baden-Württemberg' },
    { value: 'north_rhine_westphalia', label: 'North Rhine-Westphalia' },
  ],
};

export const cities = {
  kharkiv: [
    { value: 'kharkiv', label: 'Kharkiv' },
    { value: 'chuhuiv', label: 'Chuhuiv' },
    { value: 'izyum', label: 'Izyum' },
  ],
  kyiv: [
    { value: 'kyiv', label: 'Kyiv' },
    { value: 'boryspil', label: 'Boryspil' },
    { value: 'brovary', label: 'Brovary' },
  ],
  lviv: [
    { value: 'lviv', label: 'Lviv' },
    { value: 'drohobych', label: 'Drohobych' },
    { value: 'sambir', label: 'Sambir' },
  ],
  odesa: [
    { value: 'odesa', label: 'Odesa' },
    { value: 'izmail', label: 'Izmail' },
    { value: 'bilyayivka', label: 'Bilyayivka' },
  ],
  dnipro: [
    { value: 'dnipro', label: 'Dnipro' },
    { value: 'krivyi_rih', label: 'Kryvyi Rih' },
    { value: 'nikopol', label: 'Nikopol' },
  ],
  california: [
    { value: 'los_angeles', label: 'Los Angeles' },
    { value: 'san_francisco', label: 'San Francisco' },
    { value: 'san_diego', label: 'San Diego' },
  ],
  new_york: [
    { value: 'new_york_city', label: 'New York City' },
    { value: 'buffalo', label: 'Buffalo' },
    { value: 'rochester', label: 'Rochester' },
  ],
  texas: [
    { value: 'houston', label: 'Houston' },
    { value: 'dallas', label: 'Dallas' },
    { value: 'austin', label: 'Austin' },
  ],
  florida: [
    { value: 'miami', label: 'Miami' },
    { value: 'orlando', label: 'Orlando' },
    { value: 'tampa', label: 'Tampa' },
  ],
  illinois: [
    { value: 'chicago', label: 'Chicago' },
    { value: 'naperville', label: 'Naperville' },
    { value: 'springfield', label: 'Springfield' },
  ],
  england: [
    { value: 'london', label: 'London' },
    { value: 'birmingham', label: 'Birmingham' },
    { value: 'manchester', label: 'Manchester' },
  ],
  scotland: [
    { value: 'edinburgh', label: 'Edinburgh' },
    { value: 'glasgow', label: 'Glasgow' },
    { value: 'aberdeen', label: 'Aberdeen' },
  ],
  wales: [
    { value: 'cardiff', label: 'Cardiff' },
    { value: 'swansea', label: 'Swansea' },
    { value: 'newport', label: 'Newport' },
  ],
  northern_ireland: [
    { value: 'belfast', label: 'Belfast' },
    { value: 'derry', label: 'Derry' },
    { value: 'lisburn', label: 'Lisburn' },
  ],
  ontario: [
    { value: 'toronto', label: 'Toronto' },
    { value: 'ottawa', label: 'Ottawa' },
    { value: 'mississauga', label: 'Mississauga' },
  ],
  quebec: [
    { value: 'montreal', label: 'Montreal' },
    { value: 'quebec_city', label: 'Quebec City' },
    { value: 'gatineau', label: 'Gatineau' },
  ],
  british_columbia: [
    { value: 'vancouver', label: 'Vancouver' },
    { value: 'victoria', label: 'Victoria' },
    { value: 'kelowna', label: 'Kelowna' },
  ],
  alberta: [
    { value: 'calgary', label: 'Calgary' },
    { value: 'edmonton', label: 'Edmonton' },
    { value: 'red_deer', label: 'Red Deer' },
  ],
  manitoba: [
    { value: 'winnipeg', label: 'Winnipeg' },
    { value: 'brandon', label: 'Brandon' },
    { value: 'steinbach', label: 'Steinbach' },
  ],
  ile_de_france: [
    { value: 'paris', label: 'Paris' },
    { value: 'versailles', label: 'Versailles' },
    { value: 'nantes', label: 'Nantes' },
  ],
  auvergne_rhone_alpes: [
    { value: 'lyon', label: 'Lyon' },
    { value: 'grenoble', label: 'Grenoble' },
    { value: 'saint_etienne', label: 'Saint-Étienne' },
  ],
  nouvelle_aquitaine: [
    { value: 'bordeaux', label: 'Bordeaux' },
    { value: 'bayonne', label: 'Bayonne' },
    { value: 'pau', label: 'Pau' },
  ],
  occitanie: [
    { value: 'toulouse', label: 'Toulouse' },
    { value: 'montpellier', label: 'Montpellier' },
    { value: 'perpignan', label: 'Perpignan' },
  ],
  provence_alpes_cote_d_azur: [
    { value: 'marseille', label: 'Marseille' },
    { value: 'nice', label: 'Nice' },
    { value: 'toulon', label: 'Toulon' },
  ],
  bavaria: [
    { value: 'munich', label: 'Munich' },
    { value: 'nuremberg', label: 'Nuremberg' },
    { value: 'augsburg', label: 'Augsburg' },
  ],
  berlin: [{ value: 'berlin', label: 'Berlin' }],
  hamburg: [{ value: 'hamburg', label: 'Hamburg' }],
  baden_wurttemberg: [
    { value: 'stuttgart', label: 'Stuttgart' },
    { value: 'karlsruhe', label: 'Karlsruhe' },
    { value: 'mannheim', label: 'Mannheim' },
  ],
  north_rhine_westphalia: [
    { value: 'cologne', label: 'Cologne' },
    { value: 'dusseldorf', label: 'Düsseldorf' },
    { value: 'dortmund', label: 'Dortmund' },
  ],
};
