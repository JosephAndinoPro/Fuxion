
import React from 'react';
import { Product } from '../types';
import { CheckIcon, SparklesIcon, TagIcon, PuzzlePieceIcon, ClockIcon } from './IconComponents';

interface ProductCardProps {
  product: Product;
  isMainProduct?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isMainProduct = false }) => {
  const cardBaseClasses = "rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl";
  const mainProductClasses = "bg-gradient-to-br from-green-50 via-white to-green-100 border-2 border-green-500 p-4 sm:p-6";
  const complementaryProductClasses = "bg-white p-4 sm:p-5 border border-gray-200 hover:border-blue-400";

  return (
    <div className={`${cardBaseClasses} ${isMainProduct ? mainProductClasses : complementaryProductClasses}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        <div className="w-full">
          <img 
            className="h-48 sm:h-60 w-full object-contain md:object-cover rounded-lg shadow-md bg-gray-100 p-1" 
            src={product.imageUrl || 'https://picsum.photos/seed/placeholder_fuxion/400/300'} 
            alt={product.name}
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.src = 'https://picsum.photos/seed/placeholder_fuxion_error/400/300';
              target.onerror = null; // Prevent infinite loop if fallback also fails
            }}
          />
        </div>
        
        <div className="flex-grow">
          <h4 className={`text-xl sm:text-2xl font-bold ${isMainProduct ? 'text-green-700' : 'text-blue-700'}`}>{product.name}</h4>
          <p className={`mt-1 text-sm ${isMainProduct ? 'text-green-600' : 'text-blue-500'} font-medium flex items-center`}>
            <TagIcon className="h-4 w-4 mr-1.5 flex-shrink-0"/> Categoría: {product.category}
          </p>

          <div className="mt-3 sm:mt-4">
            <h5 className="font-semibold text-gray-700 flex items-center mb-1"><SparklesIcon className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0"/>Beneficios Clave:</h5>
            <ul className="list-none space-y-1">
              {product.benefits.slice(0, 3).map((benefit, index) => ( // Show first 3 benefits initially for brevity
                <li key={index} className="flex items-start text-sm text-gray-600">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
              {product.benefits.length > 3 && <li className="text-xs text-gray-500 italic ml-6">...y más.</li>}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
         <div>
            <h5 className="font-semibold text-gray-700 flex items-center mb-1"><PuzzlePieceIcon className="h-5 w-5 mr-2 text-indigo-500 flex-shrink-0"/>Ingredientes Clave:</h5>
            <p className="text-sm text-gray-600">{product.keyIngredients.join(', ')}.</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 flex items-center mb-1"><ClockIcon className="h-5 w-5 mr-2 text-purple-500 flex-shrink-0"/>Modo de Uso Sugerido:</h5>
            <p className="text-sm text-gray-600">{product.suggestedUsage}</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 flex items-center mb-1"><SparklesIcon className="h-5 w-5 mr-2 text-pink-500 flex-shrink-0"/>Resultados Esperados:</h5>
            <p className="text-sm text-gray-600">{product.expectedResults}</p>
          </div>
      </div>
    </div>
  );
};

export default ProductCard;