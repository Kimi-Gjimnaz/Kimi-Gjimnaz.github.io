// Funksioni për menaxhimin e përzgjedhjes së klasës nga menuja
function selectClass(nrKlasa) {
    document.getElementById('selected-class-display').innerText = 'Klasa ' + nrKlasa;
    document.getElementById('link-eksperimentet').href = 'kimia' + nrKlasa + '-eksperimente.html';
    document.getElementById('link-kuiz').href = 'kimia' + nrKlasa + '-kuiz.html';
    document.getElementById('link-test').href = 'kimia' + nrKlasa + '-test.html';
}

// Ngjyrat nga CSS variablat
const c1='var(--c-alkali)', c2='var(--c-alkaline)', c3='var(--c-transition)', c4='var(--c-post-trans)';
const c5='var(--c-metalloid)', c6='var(--c-nonmetal)', c7='var(--c-halogen)', c8='var(--c-noble)';
const c9='var(--c-lanthanide)', c10='var(--c-actinide)', cx='var(--c-unknown)';

// Databaza me 118 elementet
const elementsData = [
    /* Perioda 1 */
    {sym:'H', name:'Hidrogjeni', z:1, mass:'1.008', en:'2.20', ox:'+1, -1', col:1, row:1, bg:c6},
    {sym:'He', name:'Heliumi', z:2, mass:'4.003', en:'-', ox:'0', col:18, row:1, bg:c8},
    /* Perioda 2 */
    {sym:'Li', name:'Litiumi', z:3, mass:'6.94', en:'0.98', ox:'+1', col:1, row:2, bg:c1},
    {sym:'Be', name:'Beriliumi', z:4, mass:'9.012', en:'1.57', ox:'+2', col:2, row:2, bg:c2},
    {sym:'B', name:'Bori', z:5, mass:'10.81', en:'2.04', ox:'+3', col:13, row:2, bg:c5},
    {sym:'C', name:'Karboni', z:6, mass:'12.011', en:'2.55', ox:'+4, +2, -4', col:14, row:2, bg:c6},
    {sym:'N', name:'Azoti', z:7, mass:'14.007', en:'3.04', ox:'-3, +3, +5', col:15, row:2, bg:c6},
    {sym:'O', name:'Oksigjeni', z:8, mass:'15.999', en:'3.44', ox:'-2', col:16, row:2, bg:c6},
    {sym:'F', name:'Fluori', z:9, mass:'18.998', en:'3.98', ox:'-1', col:17, row:2, bg:c7},
    {sym:'Ne', name:'Neoni', z:10, mass:'20.180', en:'-', ox:'0', col:18, row:2, bg:c8},
    /* Perioda 3 */
    {sym:'Na', name:'Natriumi', z:11, mass:'22.990', en:'0.93', ox:'+1', col:1, row:3, bg:c1},
    {sym:'Mg', name:'Magnezi', z:12, mass:'24.305', en:'1.31', ox:'+2', col:2, row:3, bg:c2},
    {sym:'Al', name:'Alumini', z:13, mass:'26.982', en:'1.61', ox:'+3', col:13, row:3, bg:c4},
    {sym:'Si', name:'Silici', z:14, mass:'28.085', en:'1.90', ox:'+4, -4', col:14, row:3, bg:c5},
    {sym:'P', name:'Fosfori', z:15, mass:'30.974', en:'2.19', ox:'+5, +3, -3', col:15, row:3, bg:c6},
    {sym:'S', name:'Squfuri', z:16, mass:'32.06', en:'2.58', ox:'+6, +4, -2', col:16, row:3, bg:c6},
    {sym:'Cl', name:'Klori', z:17, mass:'35.45', en:'3.16', ox:'+7, +5, -1', col:17, row:3, bg:c7},
    {sym:'Ar', name:'Argoni', z:18, mass:'39.95', en:'-', ox:'0', col:18, row:3, bg:c8},
    /* Perioda 4 */
    {sym:'K', name:'Kaliumi', z:19, mass:'39.098', en:'0.82', ox:'+1', col:1, row:4, bg:c1},
    {sym:'Ca', name:'Kalciumi', z:20, mass:'40.078', en:'1.00', ox:'+2', col:2, row:4, bg:c2},
    {sym:'Sc', name:'Skandiumi', z:21, mass:'44.956', en:'1.36', ox:'+3', col:3, row:4, bg:c3},
    {sym:'Ti', name:'Titani', z:22, mass:'47.867', en:'1.54', ox:'+4', col:4, row:4, bg:c3},
    {sym:'V', name:'Vanadiumi', z:23, mass:'50.942', en:'1.63', ox:'+5, +4', col:5, row:4, bg:c3},
    {sym:'Cr', name:'Kromi', z:24, mass:'51.996', en:'1.66', ox:'+6, +3, +2', col:6, row:4, bg:c3},
    {sym:'Mn', name:'Mangani', z:25, mass:'54.938', en:'1.55', ox:'+7, +4, +2', col:7, row:4, bg:c3},
    {sym:'Fe', name:'Hekuri', z:26, mass:'55.845', en:'1.83', ox:'+3, +2', col:8, row:4, bg:c3},
    {sym:'Co', name:'Kobalti', z:27, mass:'58.933', en:'1.88', ox:'+3, +2', col:9, row:4, bg:c3},
    {sym:'Ni', name:'Nikeli', z:28, mass:'58.693', en:'1.91', ox:'+2', col:10, row:4, bg:c3},
    {sym:'Cu', name:'Bakri', z:29, mass:'63.546', en:'1.90', ox:'+2, +1', col:11, row:4, bg:c3},
    {sym:'Zn', name:'Zinku', z:30, mass:'65.38', en:'1.65', ox:'+2', col:12, row:4, bg:c3},
    {sym:'Ga', name:'Galiumi', z:31, mass:'69.723', en:'1.81', ox:'+3', col:13, row:4, bg:c4},
    {sym:'Ge', name:'Germaniumi', z:32, mass:'72.630', en:'2.01', ox:'+4', col:14, row:4, bg:c5},
    {sym:'As', name:'Arseniku', z:33, mass:'74.922', en:'2.18', ox:'+5, -3', col:15, row:4, bg:c5},
    {sym:'Se', name:'Seleni', z:34, mass:'78.971', en:'2.55', ox:'+6, -2', col:16, row:4, bg:c6},
    {sym:'Br', name:'Bromi', z:35, mass:'79.904', en:'2.96', ox:'+5, -1', col:17, row:4, bg:c7},
    {sym:'Kr', name:'Kriptoni', z:36, mass:'83.798', en:'3.00', ox:'0', col:18, row:4, bg:c8},
    /* Perioda 5 */
    {sym:'Rb', name:'Rubidiumi', z:37, mass:'85.468', en:'0.82', ox:'+1', col:1, row:5, bg:c1},
    {sym:'Sr', name:'Stronciumi', z:38, mass:'87.62', en:'0.95', ox:'+2', col:2, row:5, bg:c2},
    {sym:'Y', name:'Itriumi', z:39, mass:'88.906', en:'1.22', ox:'+3', col:3, row:5, bg:c3},
    {sym:'Zr', name:'Zirkoniumi', z:40, mass:'91.224', en:'1.33', ox:'+4', col:4, row:5, bg:c3},
    {sym:'Nb', name:'Niobiumi', z:41, mass:'92.906', en:'1.6', ox:'+5, +3', col:5, row:5, bg:c3},
    {sym:'Mo', name:'Molibdeni', z:42, mass:'95.95', en:'2.16', ox:'+6, +4', col:6, row:5, bg:c3},
    {sym:'Tc', name:'Tekneciumi', z:43, mass:'[98]', en:'1.9', ox:'+7, +4', col:7, row:5, bg:c3},
    {sym:'Ru', name:'Ruteniumi', z:44, mass:'101.07', en:'2.2', ox:'+3, +4', col:8, row:5, bg:c3},
    {sym:'Rh', name:'Rodiumi', z:45, mass:'102.91', en:'2.28', ox:'+3', col:9, row:5, bg:c3},
    {sym:'Pd', name:'Paladiumi', z:46, mass:'106.42', en:'2.20', ox:'+2, +4', col:10, row:5, bg:c3},
    {sym:'Ag', name:'Argjendi', z:47, mass:'107.87', en:'1.93', ox:'+1', col:11, row:5, bg:c3},
    {sym:'Cd', name:'Kadmiumi', z:48, mass:'112.41', en:'1.69', ox:'+2', col:12, row:5, bg:c3},
    {sym:'In', name:'Indiumi', z:49, mass:'114.82', en:'1.78', ox:'+3', col:13, row:5, bg:c4},
    {sym:'Sn', name:'Kallaji', z:50, mass:'118.71', en:'1.96', ox:'+4, +2', col:14, row:5, bg:c4},
    {sym:'Sb', name:'Antimoni', z:51, mass:'121.76', en:'2.05', ox:'+5, +3, -3', col:15, row:5, bg:c5},
    {sym:'Te', name:'Teluri', z:52, mass:'127.60', en:'2.1', ox:'+4, +6, -2', col:16, row:5, bg:c5},
    {sym:'I', name:'Jodi', z:53, mass:'126.90', en:'2.66', ox:'+7, +5, -1', col:17, row:5, bg:c7},
    {sym:'Xe', name:'Ksenoni', z:54, mass:'131.29', en:'2.6', ox:'0, +2, +4', col:18, row:5, bg:c8},
    /* Perioda 6 */
    {sym:'Cs', name:'Ceziumi', z:55, mass:'132.91', en:'0.79', ox:'+1', col:1, row:6, bg:c1},
    {sym:'Ba', name:'Bariumi', z:56, mass:'137.33', en:'0.89', ox:'+2', col:2, row:6, bg:c2},
    /* Lantanidet */
    {sym:'La', name:'Lantani', z:57, mass:'138.91', en:'1.10', ox:'+3', col:4, row:9, bg:c9},
    {sym:'Ce', name:'Ceriumi', z:58, mass:'140.12', en:'1.12', ox:'+3, +4', col:5, row:9, bg:c9},
    {sym:'Pr', name:'Praseodimiumi', z:59, mass:'140.91', en:'1.13', ox:'+3', col:6, row:9, bg:c9},
    {sym:'Nd', name:'Neodimiumi', z:60, mass:'144.24', en:'1.14', ox:'+3', col:7, row:9, bg:c9},
    {sym:'Pm', name:'Prometiumi', z:61, mass:'[145]', en:'1.13', ox:'+3', col:8, row:9, bg:c9},
    {sym:'Sm', name:'Samariumi', z:62, mass:'150.36', en:'1.17', ox:'+3, +2', col:9, row:9, bg:c9},
    {sym:'Eu', name:'Europiumi', z:63, mass:'151.96', en:'1.2', ox:'+3, +2', col:10, row:9, bg:c9},
    {sym:'Gd', name:'Gadoliniumi', z:64, mass:'157.25', en:'1.2', ox:'+3', col:11, row:9, bg:c9},
    {sym:'Tb', name:'Terbiumi', z:65, mass:'158.93', en:'1.2', ox:'+3', col:12, row:9, bg:c9},
    {sym:'Dy', name:'Disproziumi', z:66, mass:'162.50', en:'1.22', ox:'+3', col:13, row:9, bg:c9},
    {sym:'Ho', name:'Holmiumi', z:67, mass:'164.93', en:'1.23', ox:'+3', col:14, row:9, bg:c9},
    {sym:'Er', name:'Erbiumi', z:68, mass:'167.26', en:'1.24', ox:'+3', col:15, row:9, bg:c9},
    {sym:'Tm', name:'Tuliumi', z:69, mass:'168.93', en:'1.25', ox:'+3', col:16, row:9, bg:c9},
    {sym:'Yb', name:'Iterbiumi', z:70, mass:'173.05', en:'1.1', ox:'+3, +2', col:17, row:9, bg:c9},
    {sym:'Lu', name:'Luteciumi', z:71, mass:'174.97', en:'1.27', ox:'+3', col:18, row:9, bg:c9},
    /* Vazhdon Perioda 6 */
    {sym:'Hf', name:'Hafniumi', z:72, mass:'178.49', en:'1.3', ox:'+4', col:4, row:6, bg:c3},
    {sym:'Ta', name:'Tantaliumi', z:73, mass:'180.95', en:'1.5', ox:'+5', col:5, row:6, bg:c3},
    {sym:'W', name:'Tungsteni', z:74, mass:'183.84', en:'2.36', ox:'+6', col:6, row:6, bg:c3},
    {sym:'Re', name:'Reniumi', z:75, mass:'186.21', en:'1.9', ox:'+7, +6, +4', col:7, row:6, bg:c3},
    {sym:'Os', name:'Osmiumi', z:76, mass:'190.23', en:'2.2', ox:'+4, +8', col:8, row:6, bg:c3},
    {sym:'Ir', name:'Iridiumi', z:77, mass:'192.22', en:'2.2', ox:'+3, +4', col:9, row:6, bg:c3},
    {sym:'Pt', name:'Platini', z:78, mass:'195.08', en:'2.28', ox:'+2, +4', col:10, row:6, bg:c3},
    {sym:'Au', name:'Ari', z:79, mass:'196.97', en:'2.54', ox:'+3, +1', col:11, row:6, bg:c3},
    {sym:'Hg', name:'Mërkuri', z:80, mass:'200.59', en:'2.00', ox:'+2, +1', col:12, row:6, bg:c3},
    {sym:'Tl', name:'Taliumi', z:81, mass:'204.38', en:'1.62', ox:'+1, +3', col:13, row:6, bg:c4},
    {sym:'Pb', name:'Plumbi', z:82, mass:'207.2', en:'2.33', ox:'+2, +4', col:14, row:6, bg:c4},
    {sym:'Bi', name:'Bismuti', z:83, mass:'208.98', en:'2.02', ox:'+3, +5', col:15, row:6, bg:c4},
    {sym:'Po', name:'Poloniumi', z:84, mass:'[209]', en:'2.0', ox:'+4, +2', col:16, row:6, bg:c5},
    {sym:'At', name:'Astatini', z:85, mass:'[210]', en:'2.2', ox:'-1, +1', col:17, row:6, bg:c7},
    {sym:'Rn', name:'Radoni', z:86, mass:'[222]', en:'-', ox:'0', col:18, row:6, bg:c8},
    /* Perioda 7 */
    {sym:'Fr', name:'Franciumi', z:87, mass:'[223]', en:'0.7', ox:'+1', col:1, row:7, bg:c1},
    {sym:'Ra', name:'Radiumi', z:88, mass:'[226]', en:'0.9', ox:'+2', col:2, row:7, bg:c2},
    /* Aktinidet */
    {sym:'Ac', name:'Aktiniumi', z:89, mass:'[227]', en:'1.1', ox:'+3', col:4, row:10, bg:c10},
    {sym:'Th', name:'Toriumi', z:90, mass:'232.04', en:'1.3', ox:'+4', col:5, row:10, bg:c10},
    {sym:'Pa', name:'Protaktiniumi', z:91, mass:'231.04', en:'1.5', ox:'+5', col:6, row:10, bg:c10},
    {sym:'U', name:'Uraniumi', z:92, mass:'238.03', en:'1.38', ox:'+6, +4', col:7, row:10, bg:c10},
    {sym:'Np', name:'Neptuniumi', z:93, mass:'[237]', en:'1.36', ox:'+5', col:8, row:10, bg:c10},
    {sym:'Pu', name:'Plutoniumi', z:94, mass:'[244]', en:'1.28', ox:'+4', col:9, row:10, bg:c10},
    {sym:'Am', name:'Americiumi', z:95, mass:'[243]', en:'1.3', ox:'+3', col:10, row:10, bg:c10},
    {sym:'Cm', name:'Kuriumi', z:96, mass:'[247]', en:'1.3', ox:'+3', col:11, row:10, bg:c10},
    {sym:'Bk', name:'Berkeliumi', z:97, mass:'[247]', en:'1.3', ox:'+3', col:12, row:10, bg:c10},
    {sym:'Cf', name:'Kaliforniumi', z:98, mass:'[251]', en:'1.3', ox:'+3', col:13, row:10, bg:c10},
    {sym:'Es', name:'Ajnshtajniumi', z:99, mass:'[252]', en:'1.3', ox:'+3', col:14, row:10, bg:c10},
    {sym:'Fm', name:'Fermiumi', z:100, mass:'[257]', en:'1.3', ox:'+3', col:15, row:10, bg:c10},
    {sym:'Md', name:'Mendeleviumi', z:101, mass:'[258]', en:'1.3', ox:'+3', col:16, row:10, bg:c10},
    {sym:'No', name:'Nobeliumi', z:102, mass:'[259]', en:'1.3', ox:'+2', col:17, row:10, bg:c10},
    {sym:'Lr', name:'Laurenciumi', z:103, mass:'[262]', en:'1.3', ox:'+3', col:18, row:10, bg:c10},
    /* Vazhdon Perioda 7 */
    {sym:'Rf', name:'Radhërfordiumi', z:104, mass:'[267]', en:'-', ox:'+4', col:4, row:7, bg:cx},
    {sym:'Db', name:'Dubniumi', z:105, mass:'[268]', en:'-', ox:'+5', col:5, row:7, bg:cx},
    {sym:'Sg', name:'Siborgiumi', z:106, mass:'[269]', en:'-', ox:'+6', col:6, row:7, bg:cx},
    {sym:'Bh', name:'Bohriumi', z:107, mass:'[270]', en:'-', ox:'+7', col:7, row:7, bg:cx},
    {sym:'Hs', name:'Hassiumi', z:108, mass:'[277]', en:'-', ox:'+8', col:8, row:7, bg:cx},
    {sym:'Mt', name:'Meitneriumi', z:109, mass:'[278]', en:'-', ox:'-', col:9, row:7, bg:cx},
    {sym:'Ds', name:'Darmshtadiumi', z:110, mass:'[281]', en:'-', ox:'-', col:10, row:7, bg:cx},
    {sym:'Rg', name:'Rentgeniumi', z:111, mass:'[282]', en:'-', ox:'-', col:11, row:7, bg:cx},
    {sym:'Cn', name:'Koperniciumi', z:112, mass:'[285]', en:'-', ox:'+2', col:12, row:7, bg:cx},
    {sym:'Nh', name:'Nihoniumi', z:113, mass:'[286]', en:'-', ox:'-', col:13, row:7, bg:cx},
    {sym:'Fl', name:'Fleroviumi', z:114, mass:'[289]', en:'-', ox:'-', col:14, row:7, bg:cx},
    {sym:'Mc', name:'Moskoviumi', z:115, mass:'[290]', en:'-', ox:'-', col:15, row:7, bg:cx},
    {sym:'Lv', name:'Livermoriumi', z:116, mass:'[293]', en:'-', ox:'-', col:16, row:7, bg:cx},
    {sym:'Ts', name:'Tenesini', z:117, mass:'[294]', en:'-', ox:'-', col:17, row:7, bg:cx},
    {sym:'Og', name:'Oganesoni', z:118, mass:'[294]', en:'-', ox:'-', col:18, row:7, bg:cx}
];

const tableContainer = document.getElementById('periodic-table');

// Gjenerimi i elementeve në DOM
elementsData.forEach(el => {
    let elementDiv = document.createElement('div');
    elementDiv.classList.add('element');
    elementDiv.innerText = el.sym;
    elementDiv.style.gridColumn = el.col;
    elementDiv.style.gridRow = el.row;
    elementDiv.style.backgroundColor = el.bg;

    // Ndryshimi i informacionit kur kalon kursorin mbi element
    elementDiv.addEventListener('mouseenter', () => {
        document.getElementById('el-sym').innerText = el.sym;
        document.getElementById('el-name').innerText = el.name;
        document.getElementById('el-z').innerText = el.z;
        document.getElementById('el-mass').innerText = el.mass;
        document.getElementById('el-en').innerText = el.en;
        document.getElementById('el-ox').innerText = el.ox;
    });

    tableContainer.appendChild(elementDiv);
});