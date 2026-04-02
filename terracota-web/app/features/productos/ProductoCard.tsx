import React from 'react';

interface ProductoCardProps {
  name: string;
  category: string;
  stock: number;
  image?: string;
}

export function ProductoCard({ name, category, stock, image }: ProductoCardProps) {
  return (
    <article className="p-4 border rounded-lg">
      {image && <img src={image} alt={name} className="h-40 w-full object-cover rounded" />}
      <h3 className="mt-2 text-lg font-medium">{name}</h3>
      <p className="text-sm text-gray-600">{category}</p>
      <p className="text-sm">Stock: {stock}</p>
    </article>
  );
}
