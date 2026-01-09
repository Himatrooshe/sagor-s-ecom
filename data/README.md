# Product Data Structure

This directory contains JSON files for managing your e-commerce product data.

## Files Overview

### 1. `categories.json`
Contains all product categories with metadata.

**Structure:**
```json
{
  "categories": [
    {
      "id": number,
      "name": "Category Name",
      "slug": "category-slug",
      "description": "Category description",
      "image": "category image URL",
      "icon": "emoji icon",
      "featured": boolean,
      "productCount": number
    }
  ]
}
```

---

### 2. `products.json`
Contains product card data for listing pages (home, category pages, search results).

**Structure:**
```json
{
  "products": [
    {
      "id": number,                           // Unique product ID
      "name": "Product Name",                 // Display name
      "slug": "product-slug",                 // URL-friendly name
      "category": "Category Name",            // Must match a category
      "originalPrice": number,                // Original price in USD
      "discountedPrice": number,              // Sale price in USD
      "discount": number,                     // Discount percentage
      "image": "image URL",                   // Main product image
      "hoverImage": "image URL",              // Image shown on hover
      "rating": number,                       // 1-5 stars (decimals allowed)
      "reviews": number,                      // Number of reviews
      "isNew": boolean,                       // New product badge
      "isFeatured": boolean,                  // Featured on homepage
      "inStock": boolean,                     // Stock availability
      "stockQuantity": number,                // Available quantity
      "badge": "Badge Text",                  // Badge label (New, Sale, etc.)
      "shortDescription": "Brief description" // Short product description
    }
  ]
}
```

**Usage:**
- Used in: Home page, Product listing, Deal of the Day, Category pages
- Display: Product cards with image, name, price, rating
- Linking: Each card links to `/product/{slug}`

---

### 3. `product-details.json`
Contains complete product information for detail pages.

**Structure:**
```json
{
  "productDetails": [
    {
      "id": number,
      "slug": "product-slug",                 // Must match products.json
      "name": "Product Name",
      "category": "Category Name",
      "brand": "Brand Name",
      "sku": "SKU-CODE",
      "originalPrice": number,
      "discountedPrice": number,
      "discount": number,
      "rating": number,
      "reviews": number,
      "inStock": boolean,
      "stockQuantity": number,
      
      "images": [                             // Array of product images
        "image URL 1",
        "image URL 2",
        "image URL 3"
      ],
      
      "shortDescription": "Brief description",
      "fullDescription": "Detailed product description with multiple paragraphs",
      "ingredients": "Product ingredients or materials",
      "howToUse": "Usage instructions",
      
      "colors": [                             // Available color options
        {
          "name": "Color Name",
          "value": "#HEX",
          "image": "image URL"
        }
      ],
      
      "sizes": [                              // Available sizes
        {
          "size": "Size Label",
          "price": number,
          "available": boolean
        }
      ],
      
      "specifications": {                     // Product specifications
        "Spec Name": "Spec Value",
        "Another Spec": "Another Value"
      },
      
      "features": [                           // Array of key features
        "Feature 1",
        "Feature 2"
      ],
      
      "shipping": {
        "weight": "weight with unit",
        "dimensions": "dimensions",
        "freeShipping": boolean,
        "estimatedDelivery": "delivery time"
      },
      
      "warranty": "Warranty information",
      "returnPolicy": "Return policy text",
      "relatedProducts": [1, 2, 3],          // Array of related product IDs
      
      "reviewsData": [                        // Customer reviews
        {
          "id": number,
          "author": "Customer Name",
          "rating": number,
          "date": "YYYY-MM-DD",
          "comment": "Review text",
          "verified": boolean,
          "helpful": number
        }
      ]
    }
  ]
}
```

**Usage:**
- Used in: Product detail pages (`/product/[slug]`)
- Display: Complete product information, images, specs, reviews
- Related products section uses IDs to fetch from products.json

---

## How to Add New Products

### Step 1: Add Basic Product Info to `products.json`

```json
{
  "id": 13,
  "name": "Your Product Name",
  "slug": "your-product-name",
  "category": "Perfume & Fragrance",
  "originalPrice": 100,
  "discountedPrice": 80,
  "discount": 20,
  "image": "https://your-image-url.com/product.jpg",
  "hoverImage": "https://your-image-url.com/product-2.jpg",
  "rating": 4.5,
  "reviews": 50,
  "isNew": true,
  "isFeatured": false,
  "inStock": true,
  "stockQuantity": 25,
  "badge": "New",
  "shortDescription": "Your short description"
}
```

### Step 2: Add Detailed Info to `product-details.json`

Use the same `id` and `slug` as in products.json, then add all detailed information following the structure above.

---

## Important Notes

1. **ID Matching**: The `id` in `products.json` and `product-details.json` must match
2. **Slug Format**: Use lowercase with hyphens, no spaces (e.g., "chanel-no-5-eau-de-parfum")
3. **Category Names**: Must match exactly with categories in `categories.json`
4. **Images**: Use high-quality images (recommended: 800x800px for detail pages, 400x400px for cards)
5. **Related Products**: Use product IDs that exist in your products.json
6. **Prices**: Use numbers without currency symbols (USD assumed)
7. **Dates**: Use ISO format (YYYY-MM-DD)

---

## Categories Available

1. **Perfume & Fragrance** - Perfumes, colognes, EDT, EDP
2. **Watch** - Luxury watches, smartwatches, sports watches
3. **Beauty and Skincare** - Creams, serums, makeup, skincare products
4. **Gadget Items** - Electronics, smart devices, accessories
5. **Ladies Items** - Handbags, accessories, fashion items
6. **Shoes Collection** - Sneakers, boots, formal shoes, sandals

---

## Example: Adding a New Watch

**In products.json:**
```json
{
  "id": 14,
  "name": "Omega Speedmaster Professional",
  "slug": "omega-speedmaster-professional",
  "category": "Watch",
  "originalPrice": 6500,
  "discountedPrice": 6200,
  "discount": 5,
  "image": "https://images.unsplash.com/photo-watch-1.jpg",
  "hoverImage": "https://images.unsplash.com/photo-watch-2.jpg",
  "rating": 4.9,
  "reviews": 156,
  "isNew": false,
  "isFeatured": true,
  "inStock": true,
  "stockQuantity": 3,
  "badge": "Limited",
  "shortDescription": "Iconic moonwatch chronograph"
}
```

**In product-details.json:**
Add full details including specifications, features, images, reviews, etc.

---

## Tips for Success

- Keep product names concise and descriptive
- Use high-quality images with consistent dimensions
- Write compelling descriptions that highlight benefits
- Add detailed specifications for better SEO
- Include customer reviews for social proof
- Update stock quantities regularly
- Use realistic pricing and discounts
- Link related products to increase cross-selling

---

## Questions?

If you need to add custom fields or modify the structure, update both the JSON files and the corresponding React components that read this data.
