'use client';

export function CategoryBadges() {
  const categories = [
    'Authentic Pokémon TCG',
    'Japanese & English',
    'Blind Box Collections',
  ];

  return (
    <div className="flex items-center justify-center gap-4 bg-black-950 px-4 py-6">
      {categories.map((category) => (
        <div
          key={category}
          className="rounded-full border border-blue-400 px-4 py-2 text-center text-xs font-semibold text- white -200"
        >
          {category}
        </div>
      ))}
    </div>
  );
}
