/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 'bowls' | 'scratchers' | 'houses' | 'decorations' | 'all';
  categoryCroatian: string;
  image: string;
  description: string;
  dimensionsInfo: string;
  materialUsed: string;
  completionTime: string;
  priceRange: string;
  features: string[];
}

export interface WoodMaterial {
  id: string;
  name: string;
  nameCroatian: string;
  density: string;
  colorDescription: string;
  priceMultiplier: number;
  bestFor: string;
}

export interface QuoteRequest {
  woodworkType: string;
  woodMaterialId: string;
  lengthCm: number;
  widthCm: number;
  heightCm: number;
  estimatedPrice: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  comment: string;
  rating: number;
  projectType: string;
}
