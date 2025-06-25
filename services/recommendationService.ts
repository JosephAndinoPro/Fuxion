
import { ClientInfo, Product } from '../types';
import { PRODUCTS } from '../constants'; // Assuming PRODUCTS is correctly typed as Product[]

interface ProductRecommendationResult {
  mainProduct: Product;
  complementaryProducts: Product[];
}

// Helper to find products by category or tags
const findProducts = (criteria: string, searchIn: 'category' | 'tags' = 'category'): Product[] => {
  const lowerCriteria = criteria.toLowerCase();
  return PRODUCTS.filter(p => {
    if (searchIn === 'category') {
      return p.category.toLowerCase() === lowerCriteria;
    }
    // Search in tags
    return p.tags.some(tag => tag.toLowerCase().includes(lowerCriteria));
  });
};

export const generateRecommendation = (clientInfo: ClientInfo, allProducts: Product[]): ProductRecommendationResult => {
  let mainProduct: Product | undefined;
  const complementaryProducts: Product[] = [];

  // 1. Determine Main Product based on Main Goal
  const goalBasedProducts = findProducts(clientInfo.mainGoal);
  if (goalBasedProducts.length > 0) {
    mainProduct = goalBasedProducts[0]; // Take the first match as main product for simplicity
  }

  // 2. Determine Complementary Products
  // Example logic:
  if (clientInfo.mainGoal === 'Control de Peso') {
    if (!mainProduct) mainProduct = findProducts('Termo T3')[0] || allProducts.find(p => p.id === 'P001');
    const bioproFit = findProducts('Biopro Fit')[0] || allProducts.find(p => p.id === 'P002');
    if (bioproFit && bioproFit.id !== mainProduct?.id) complementaryProducts.push(bioproFit);

    // If client mentions fatigue and wants weight control, Vita Xtra T+ could be complementary
    if (clientInfo.commonSymptoms.includes('Fatiga frecuente')) {
        const vitaXtraT = findProducts('Vita Xtra T+')[0] || allProducts.find(p => p.id === 'P003');
        if (vitaXtraT && vitaXtraT.id !== mainProduct?.id && !complementaryProducts.find(p=>p.id === vitaXtraT.id)) complementaryProducts.push(vitaXtraT);
    }
  } else if (clientInfo.mainGoal === 'Energía') {
    if (!mainProduct) mainProduct = findProducts('Vita Xtra T+')[0] || allProducts.find(p => p.id === 'P003');
     // If active and needs energy, protein is good
    if (clientInfo.activityLevel === 'Activo' || clientInfo.activityLevel === 'Muy Activo') {
        const proteinActive = findProducts('Biopro Fit')[0] || allProducts.find(p => p.id === 'P002'); // Assuming Biopro Fit as a general protein
        if (proteinActive && proteinActive.id !== mainProduct?.id && !complementaryProducts.find(p=>p.id === proteinActive.id)) complementaryProducts.push(proteinActive);
    }
  } else if (clientInfo.mainGoal === 'Digestión') {
    if (!mainProduct) mainProduct = findProducts('Flora Liv')[0] || allProducts.find(p => p.id === 'P004');
  } else if (clientInfo.mainGoal === 'Estrés/Ánimo') {
    if (!mainProduct) mainProduct = findProducts('ON (No Stress)')[0] || allProducts.find(p => p.id === 'P005');
  } else if (clientInfo.mainGoal === 'Belleza') {
    if (!mainProduct) mainProduct = findProducts('Beauty In')[0] || allProducts.find(p => p.id === 'P006');
  } else if (clientInfo.mainGoal === 'Desintoxicación') {
    if (!mainProduct) mainProduct = findProducts('Alpha Balance')[0] || allProducts.find(p => p.id === 'P007');
  } else if (clientInfo.mainGoal === 'Sistema Inmunológico') {
    if (!mainProduct) mainProduct = findProducts('Berry Balance')[0] || allProducts.find(p => p.id === 'P008'); // Example primary
    const floraLiv = findProducts('Flora Liv')[0] || allProducts.find(p => p.id === 'P004'); // Gut health supports immunity
    if (floraLiv && floraLiv.id !== mainProduct?.id && !complementaryProducts.find(p=>p.id === floraLiv.id)) complementaryProducts.push(floraLiv);
  }
  
  // Add complementary product based on secondary symptoms/needs
  if (clientInfo.commonSymptoms.includes('Problemas digestivos (hinchazón, estreñimiento, etc.)')) {
    const floraLiv = findProducts('Flora Liv')[0] || allProducts.find(p => p.id === 'P004');
    if (floraLiv && floraLiv.id !== mainProduct?.id && !complementaryProducts.find(p => p.id === floraLiv.id)) {
      complementaryProducts.push(floraLiv);
    }
  }
  if (clientInfo.commonSymptoms.includes('Estrés/Ansiedad alto') && clientInfo.mainGoal !== 'Estrés/Ánimo') {
    const noStress = findProducts('ON (No Stress)')[0] || allProducts.find(p => p.id === 'P005');
    if (noStress && noStress.id !== mainProduct?.id && !complementaryProducts.find(p => p.id === noStress.id)) {
      complementaryProducts.push(noStress);
    }
  }


  // Fallback if no main product is found (should ideally not happen with good product data)
  if (!mainProduct) {
    // Default to a general wellness product or the first in the list
    mainProduct = allProducts.find(p => p.tags.includes('bienestar general')) || allProducts[0];
    if (!mainProduct) throw new Error("No products available in the database."); // Should not happen
  }

  // Ensure complementary products are distinct and not same as main product
  const finalComplementary = complementaryProducts
    .filter(p => p.id !== mainProduct!.id) // Ensure not same as main
    .filter((p, index, self) => index === self.findIndex(t => t.id === p.id)) // Distinct
    .slice(0, 2); // Limit to 2 complementary products

  return {
    mainProduct,
    complementaryProducts: finalComplementary,
  };
};
