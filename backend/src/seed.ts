import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

    data: [
      { 
        name: "Classic Tee", 
        price: 19.99, 
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80", 
        description: "Comfortable cotton t-shirt in multiple sizes.", 
        features: ["100% Cotton", "Machine Washable", "Pre-shrunk", "Breathable Fabric"],
        variants: [{ id: 1, name: "S" }, { id: 2, name: "M" }, { id: 3, name: "L" }], 
        stock: 20, 
        available: true, 
        category: "Apparel" 
      },
      { 
        name: "Sneaker Runner", 
        price: 79.5, 
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80", 
        description: "Lightweight running sneakers for everyday comfort.", 
        features: ["Lightweight Design", "Breathable Mesh", "Rubber Sole", "Cushioned Insole"],
        variants: [{ id: 1, name: "8" }, { id: 2, name: "9" }, { id: 3, name: "10" }], 
        stock: 15, 
        available: true, 
        category: "Footwear" 
      },
      { 
        name: "Hooded Jacket", 
        price: 49.0, 
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80", 
        description: "Stylish hooded jacket for cool weather.", 
        features: ["Water Resistant", "Adjustable Hood", "Zippered Pockets", "Soft Lining"],
        variants: [{ id: 1, name: "M" }, { id: 2, name: "L" }], 
        stock: 8, 
        available: true, 
        category: "Apparel" 
      },
      { 
        name: "Leather Backpack", 
        price: 89.0, 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80", 
        description: "Durable leather backpack for travel and daily use.", 
        features: ["Genuine Leather", "Laptop Compartment", "Multiple Pockets", "Adjustable Straps"],
        variants: [{ id: 1, name: "One Size" }], 
        stock: 10, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Wireless Headphones", 
        price: 129.99, 
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80", 
        description: "Noise-cancelling wireless headphones with deep bass.", 
        features: ["Active Noise Cancellation", "30-hour Battery", "Bluetooth 5.0", "Foldable Design"],
        variants: [{ id: 1, name: "Black" }, { id: 2, name: "White" }], 
        stock: 25, 
        available: true, 
        category: "Electronics" 
      },
      { 
        name: "Yoga Mat", 
        price: 29.99, 
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80", 
        description: "Eco-friendly non-slip yoga mat for all exercises.", 
        features: ["Non-slip Surface", "Eco-friendly Materials", "Extra Thick", "Easy to Clean"],
        variants: [{ id: 1, name: "Standard" }, { id: 2, name: "Extra Thick" }], 
        stock: 30, 
        available: true, 
        category: "Fitness" 
      },
      { 
        name: "Smart Watch", 
        price: 199.99, 
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80", 
        description: "Track your fitness and notifications on the go.", 
        features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-day Battery"],
        variants: [{ id: 1, name: "Black" }, { id: 2, name: "Silver" }], 
        stock: 18, 
        available: true, 
        category: "Electronics" 
      },
      { 
        name: "Running Shorts", 
        price: 24.99, 
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80", 
        description: "Lightweight running shorts for maximum comfort.", 
        features: ["Moisture Wicking", "Built-in Liner", "Zippered Pocket", "Lightweight Fabric"],
        variants: [{ id: 1, name: "S" }, { id: 2, name: "M" }, { id: 3, name: "L" }], 
        stock: 22, 
        available: true, 
        category: "Apparel" 
      },
      { 
        name: "Baseball Cap", 
        price: 14.99, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80", 
        description: "Stylish cap for sunny days.", 
        features: ["Adjustable Strap", "UV Protection", "Breathable Fabric", "One Size Fits All"],
        variants: [{ id: 1, name: "One Size" }], 
        stock: 40, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Bluetooth Speaker", 
        price: 59.99, 
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80", 
        description: "Portable Bluetooth speaker with deep sound.", 
        features: ["360° Sound", "12-hour Battery", "IPX7 Waterproof", "Built-in Mic"],
        variants: [{ id: 1, name: "Black" }, { id: 2, name: "Blue" }], 
        stock: 20, 
        available: true, 
        category: "Electronics" 
      },
      { 
        name: "Denim Jeans", 
        price: 39.99, 
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80", 
        description: "Classic slim-fit denim jeans.", 
        features: ["100% Cotton Denim", "Slim Fit", "Machine Washable", "Five Pocket Design"],
        variants: [{ id: 1, name: "30" }, { id: 2, name: "32" }, { id: 3, name: "34" }], 
        stock: 18, 
        available: true, 
        category: "Apparel" 
      },
      { 
        name: "Sunglasses", 
        price: 49.99, 
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80", 
        description: "Stylish UV-protection sunglasses.", 
        features: ["UV400 Protection", "Scratch-resistant", "Lightweight Frame", "Polarized Lenses"],
        variants: [{ id: 1, name: "Black" }, { id: 2, name: "Brown" }], 
        stock: 25, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Leather Belt", 
        price: 25.0, 
        image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=400&q=80", 
        description: "Premium leather belt for all occasions.", 
        features: ["Genuine Leather", "Brass Buckle", "Multiple Sizes", "Classic Design"],
        variants: [{ id: 1, name: "S" }, { id: 2, name: "M" }, { id: 3, name: "L" }], 
        stock: 30, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Sports Watch", 
        price: 149.99, 
        image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=400&q=80", 
        description: "Water-resistant sports watch.", 
        features: ["100m Water Resistant", "Stopwatch", "LED Backlight", "Shock Resistant"],
        variants: [{ id: 1, name: "Black" }, { id: 2, name: "Red" }], 
        stock: 12, 
        available: true, 
        category: "Electronics" 
      },
      { 
        name: "Hiking Boots", 
        price: 129.0, 
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=400&q=80", 
        description: "Durable boots for tough terrains.", 
        features: ["Waterproof Leather", "Vibram Sole", "Ankle Support", "Breathable Lining"],
        variants: [{ id: 1, name: "8" }, { id: 2, name: "9" }, { id: 3, name: "10" }], 
        stock: 16, 
        available: true, 
        category: "Footwear" 
      },
      { 
        name: "Beanie Hat", 
        price: 12.99, 
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=400&q=80", 
        description: "Warm beanie for winter.", 
        features: ["Acrylic Wool Blend", "One Size Fits All", "Stretchable", "Soft Material"],
        variants: [{ id: 1, name: "One Size" }], 
        stock: 35, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Graphic Hoodie", 
        price: 59.99, 
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80", 
        description: "Comfortable hoodie with graphic print.", 
        features: ["Cotton Blend", "Kangaroo Pocket", "Ribbed Cuffs", "Premium Print"],
        variants: [{ id: 1, name: "M" }, { id: 2, name: "L" }, { id: 3, name: "XL" }], 
        stock: 14, 
        available: true, 
        category: "Apparel" 
      },
      { 
        name: "Laptop Bag", 
        price: 79.99, 
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=400&q=80", 
        description: "Stylish laptop bag with compartments.", 
        features: ["Fits 15\" Laptop", "Multiple Pockets", "Padded Strap", "Water Resistant"],
        variants: [{ id: 1, name: "One Size" }], 
        stock: 12, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Fitness Tracker", 
        price: 99.99, 
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=400&q=80", 
        description: "Monitor your daily activity easily.", 
        features: ["Step Counter", "Sleep Tracking", "Smart Notifications", "7-day Battery"],
        variants: [{ id: 1, name: "Black" }, { id: 2, name: "White" }], 
        stock: 22, 
        available: true, 
        category: "Electronics" 
      },
      { 
        name: "Casual Sneakers", 
        price: 69.99, 
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=400&q=80", 
        description: "Stylish sneakers for daily wear.", 
        features: ["Memory Foam Insole", "Rubber Outsole", "Breathable Upper", "Classic Design"],
        variants: [{ id: 1, name: "7" }, { id: 2, name: "8" }, { id: 3, name: "9" }], 
        stock: 18, 
        available: true, 
        category: "Footwear" 
      },
      { 
        name: "Running Tank Top", 
        price: 22.99, 
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=400&q=80", 
        description: "Breathable tank top for workouts.", 
        features: ["Moisture Wicking", "Mesh Panels", "Raglan Sleeves", "Quick Dry"],
        variants: [{ id: 1, name: "S" }, { id: 2, name: "M" }, { id: 3, name: "L" }], 
        stock: 25, 
        available: true, 
        category: "Apparel" 
      },
      { 
        name: "Wireless Mouse", 
        price: 29.99, 
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80", 
        description: "Ergonomic wireless mouse for work or gaming.", 
        features: ["2.4GHz Wireless", "Optical Sensor", "12-month Battery", "Silent Click"],
        variants: [{ id: 1, name: "Black" }, { id: 2, name: "White" }], 
        stock: 30, 
        available: true, 
        category: "Electronics" 
      },
      { 
        name: "Laptop Stand", 
        price: 49.99, 
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80", 
        description: "Adjustable laptop stand for comfort.", 
        features: ["Aluminum Construction", "Adjustable Height", "Stable Base", "Portable Design"],
        variants: [{ id: 1, name: "Standard" }], 
        stock: 20, 
        available: true, 
        category: "Electronics" 
      },
      { 
        name: "Leather Wallet", 
        price: 39.99, 
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=400&q=80", 
        description: "Premium leather wallet with multiple compartments.", 
        features: ["Genuine Leather", "RFID Protection", "Multiple Card Slots", "Coin Pocket"],
        variants: [{ id: 1, name: "One Size" }], 
        stock: 28, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Classic Shirt", 
        price: 34.99, 
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80", 
        description: "Smart casual shirt for daily wear.", 
        features: ["Cotton Blend", "Classic Collar", "Button Front", "Machine Washable"],
        variants: [{ id: 1, name: "M" }, { id: 2, name: "L" }, { id: 3, name: "XL" }], 
        stock: 20, 
        available: true, 
        category: "Apparel" 
      },
      { 
        name: "Basketball Shoes", 
        price: 99.99, 
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=400&q=80", 
        description: "High-performance basketball shoes.", 
        features: ["Ankle Support", "Cushioned Sole", "Breathable Upper", "Non-marking Outsole"],
        variants: [{ id: 1, name: "8" }, { id: 2, name: "9" }, { id: 3, name: "10" }], 
        stock: 15, 
        available: true, 
        category: "Footwear" 
      },
      { 
        name: "Tote Bag", 
        price: 29.99, 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80", 
        description: "Stylish tote bag for daily errands.", 
        features: ["Canvas Material", "Reinforced Handles", "Inner Pocket", "Machine Washable"],
        variants: [{ id: 1, name: "One Size" }], 
        stock: 22, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Sports Cap", 
        price: 14.99, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80", 
        description: "Adjustable sports cap for outdoor activities.", 
        features: ["Moisture Wicking", "Adjustable Strap", "Curved Brim", "Lightweight"],
        variants: [{ id: 1, name: "One Size" }], 
        stock: 35, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Graphic Tee", 
        price: 19.99, 
        image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=400&q=80", 
        description: "Trendy graphic tee for casual wear.", 
        features: ["100% Cotton", "Premium Print", "Regular Fit", "Machine Washable"],
        variants: [{ id: 1, name: "S" }, { id: 2, name: "M" }, { id: 3, name: "L" }], 
        stock: 28, 
        available: true, 
        category: "Apparel" 
      },
      { 
        name: "Digital Camera", 
        price: 299.99, 
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80", 
        description: "Capture high-quality photos easily.", 
        features: ["24MP Sensor", "4K Video", "Wi-Fi Connectivity", "3\" LCD Screen"],
        variants: [{ id: 1, name: "Black" }], 
        stock: 12, 
        available: true, 
        category: "Electronics" 
      },
      { 
        name: "Smartphone Stand", 
        price: 19.99, 
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=400&q=80", 
        description: "Convenient stand for phones or tablets.", 
        features: ["Adjustable Angle", "Non-slip Base", "Universal Compatibility", "Compact Design"],
        variants: [{ id: 1, name: "White" }, { id: 2, name: "Black" }], 
        stock: 30, 
        available: true, 
        category: "Electronics" 
      },
      { 
        name: "Sports Tights", 
        price: 34.99, 
        image: "https://images.unsplash.com/photo-1591362842302-715db26d4a45?auto=format&fit=crop&w=400&q=80", 
        description: "Compression tights for sports and workouts.", 
        features: ["Compression Fit", "Moisture Wicking", "Four-way Stretch", "Gusseted Crotch"],
        variants: [{ id: 1, name: "S" }, { id: 2, name: "M" }, { id: 3, name: "L" }], 
        stock: 20, 
        available: true, 
        category: "Apparel" 
      },
      { 
        name: "Casual Loafers", 
        price: 59.99, 
        image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?auto=format&fit=crop&w=400&q=80", 
        description: "Comfortable loafers for everyday wear.", 
        features: ["Genuine Leather", "Cushioned Insole", "Slip-on Design", "Flexible Sole"],
        variants: [{ id: 1, name: "8" }, { id: 2, name: "9" }, { id: 3, name: "10" }], 
        stock: 15, 
        available: true, 
        category: "Footwear" 
      },
      { 
        name: "Wireless Charger", 
        price: 39.99, 
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=400&q=80", 
        description: "Fast wireless charger for smartphones.", 
        features: ["15W Fast Charging", "LED Indicator", "Non-slip Surface", "Universal Compatibility"],
        variants: [{ id: 1, name: "Black" }, { id: 2, name: "White" }], 
        stock: 25, 
        available: true, 
        category: "Electronics" 
      },
      { 
        name: "Slim Wallet", 
        price: 29.99, 
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=400&q=80", 
        description: "Compact wallet with RFID protection.", 
        features: ["RFID Blocking", "Slim Design", "Multiple Card Slots", "Money Clip"],
        variants: [{ id: 1, name: "Black" }, { id: 2, name: "Brown" }], 
        stock: 28, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Fleece Jacket", 
        price: 54.99, 
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80", 
        description: "Warm fleece jacket for cold days.", 
        features: ["Polyester Fleece", "Full Zip", "Kangaroo Pocket", "Ribbed Cuffs"],
        variants: [{ id: 1, name: "M" }, { id: 2, name: "L" }], 
        stock: 20, 
        available: true, 
        category: "Apparel" 
      },
      { 
        name: "Travel Mug", 
        price: 19.99, 
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=400&q=80", 
        description: "Insulated mug for hot and cold drinks.", 
        features: ["Stainless Steel", "Leak-proof Lid", "Double Wall", "Dishwasher Safe"],
        variants: [{ id: 1, name: "300ml" }, { id: 2, name: "500ml" }], 
        stock: 35, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Laptop Sleeve", 
        price: 29.99, 
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=400&q=80", 
        description: "Protective sleeve for laptops up to 15 inches.", 
        features: ["Neoprene Material", "Padded Protection", "Zipper Closure", "Slim Profile"],
        variants: [{ id: 1, name: "13 inch" }, { id: 2, name: "15 inch" }], 
        stock: 18, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Sneaker High Tops", 
        price: 79.99, 
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=400&q=80", 
        description: "Trendy high-top sneakers for casual wear.", 
        features: ["High-top Design", "Canvas Upper", "Rubber Sole", "Padded Collar"],
        variants: [{ id: 1, name: "7" }, { id: 2, name: "8" }, { id: 3, name: "9" }], 
        stock: 20, 
        available: true, 
        category: "Footwear" 
      },
      { 
        name: "Sports Bag", 
        price: 49.99, 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80", 
        description: "Durable sports bag for gym and travel.", 
        features: ["Multiple Compartments", "Shoulder Strap", "Ventilated Pocket", "Durable Material"],
        variants: [{ id: 1, name: "One Size" }], 
        stock: 25, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Graphic Cap", 
        price: 14.99, 
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80", 
        description: "Cool cap with graphic design.", 
        features: ["Structured Crown", "Premium Embroidery", "Adjustable Strap", "Curved Brim"],
        variants: [{ id: 1, name: "One Size" }], 
        stock: 30, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Compression Socks", 
        price: 12.99, 
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=400&q=80", 
        description: "Supportive socks for running and workouts.", 
        features: ["Graduated Compression", "Moisture Wicking", "Seamless Toe", "Arch Support"],
        variants: [{ id: 1, name: "S" }, { id: 2, name: "M" }, { id: 3, name: "L" }], 
        stock: 40, 
        available: true, 
        category: "Apparel" 
      },
      { 
        name: "Bluetooth Earbuds", 
        price: 59.99, 
        image: "https://images.unsplash.com/photo-1590658165737-15a047b8b5e7?auto=format&fit=crop&w=400&q=80", 
        description: "Compact wireless earbuds with charging case.", 
        features: ["True Wireless", "Charging Case", "Touch Controls", "IPX5 Waterproof"],
        variants: [{ id: 1, name: "Black" }, { id: 2, name: "White" }], 
        stock: 30, 
        available: true, 
        category: "Electronics" 
      },
      { 
        name: "Casual Belt", 
        price: 24.99, 
        image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=400&q=80", 
        description: "Simple belt for everyday wear.", 
        features: ["Genuine Leather", "Simple Buckle", "Multiple Sizes", "Classic Design"],
        variants: [{ id: 1, name: "S" }, { id: 2, name: "M" }, { id: 3, name: "L" }], 
        stock: 35, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Windbreaker Jacket", 
        price: 64.99, 
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80", 
        description: "Lightweight windbreaker for outdoor activities.", 
        features: ["Wind Resistant", "Lightweight", "Packable", "Elastic Cuffs"],
        variants: [{ id: 1, name: "M" }, { id: 2, name: "L" }], 
        stock: 20, 
        available: true, 
        category: "Apparel" 
      },
      { 
        name: "Travel Backpack", 
        price: 89.99, 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80", 
        description: "Large backpack suitable for travel and hiking.", 
        features: ["40L Capacity", "Padded Back", "Multiple Compartments", "Water Bottle Pocket"],
        variants: [{ id: 1, name: "One Size" }], 
        stock: 18, 
        available: true, 
        category: "Accessories" 
      },
      { 
        name: "Fitness Gloves", 
        price: 19.99, 
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80", 
        description: "Protect your hands during workouts.", 
        features: ["Padded Palms", "Breathable Mesh", "Hook and Loop Closure", "Flexible Material"],
        variants: [{ id: 1, name: "S" }, { id: 2, name: "M" }, { id: 3, name: "L" }], 
        stock: 25, 
        available: true, 
        category: "Fitness" 
      }
    ]

  console.log("Database seeded with 40 products including features.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });