"use client";

interface CategoryFilterProps {
  categories: Array<{ id: string; label: string }>;
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap
            ${
              activeCategory === cat.id
                ? "bg-brand-primary text-white"
                : "bg-gray-100 text-brand-sub hover:bg-gray-200"
            }
          `}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
