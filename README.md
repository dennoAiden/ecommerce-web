## Frontend 
Layout Approach: The app uses a flexbox-based layout with a fixed header, flexible main content, and footer that stays at the bottom. The header contains the store title and the cart widget, while the main section displays products in a scrollable grid.

Responsiveness Considerations: The layout adapts to different screen sizes using responsive TailwindCSS classes, ensuring readable text, proper spacing, and a flexible product grid on both mobile devices and large screens. The fixed header remains visible while scrolling for better user experience.

## Backend 
Tech Stack: This project uses Node.js, TypeScript, Express, and Prisma ORM with a SQLite/PostgreSQL database to handle product management and cart functionality.

How to Run: Install dependencies with npm install and start the development server using npm run dev. The backend runs on http://localhost:4000

Sample Requests:
1. Get all products:
curl http://localhost:4000/products

2. Get a product by ID:
curl http://localhost:4000/products/1

3. Add a new product:
curl -X POST http://localhost:4000/products \
-H "Content-Type: application/json" \
-d '{"name":"Classic Tee","price":19.99,"stock":10,"available":true,"category":"Apparel"}'
