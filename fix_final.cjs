const fs = require('fs');
const safeIds = JSON.parse(fs.readFileSync('safe_ids.json', 'utf8'));

const brokenUrls = [
"1673735186578-1a6cd08b8100", "1688497831384-e40b2e5615cd", "1664391776081-9ca987930d28",
"1706806943520-0387c9b63664", "1578507054195-f96dec3a8b14", "1706806943506-ab5ab9f6b45a",
"1664540415069-bc45ce3e711e", "1683121523671-9617aba661d7", "1688497831535-120bd47d9f9c",
"1677553954020-68ac75b4e1b4", "1708274147129-0c36374f1c25", "1658506833628-e758f73bb413",
"1672239496593-f51cdc01c0f8", "1663011069200-43ca559dac75", "1679429320036-4bf01542215f",
"1658506656752-4f1b1c1d5916", "1677553953991-53f96b04fe72", "1664532297350-dda09fa5192f",
"1680012589533-9ba597be37b1", "1674055047918-87672ee689f5", "1680012590879-39a8ec7c7cea",
"1671305004889-46d15e7ac51f", "1740409497402-b0e4931e6a05", "1679415150999-5d5a2b8d475c"
];

safeIds.mens = safeIds.mens.filter(id => !brokenUrls.includes(id));
safeIds.womens = safeIds.womens.filter(id => !brokenUrls.includes(id));

fs.writeFileSync('safe_ids.json', JSON.stringify(safeIds, null, 2));

const { execSync } = require('child_process');
execSync('node generate_static.cjs');
console.log("Filtered out broken IDs and regenerated!");
