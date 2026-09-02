sed -i 's/return (/return (\n    <>/' src/components/LuxuryUI.tsx
sed -i 's/      <AnimatePresence>/      <AnimatePresence>/' src/components/LuxuryUI.tsx
sed -i 's/    <\/AnimatePresence>      <AnimatePresence>        {showAbout/    <\/AnimatePresence>\n      <AnimatePresence>\n        {showAbout/' src/components/LuxuryUI.tsx
sed -i 's/  );/    <\/>\n  );/' src/components/LuxuryUI.tsx
