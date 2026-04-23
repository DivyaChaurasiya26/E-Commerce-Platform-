import { Product } from '../contexts/CartContext';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 15,
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Fitness tracking smartwatch with heart rate monitor and GPS',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 20,
  },
  {
    id: '3',
    name: 'Laptop Backpack',
    description: 'Water-resistant backpack with padded laptop compartment',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'Accessories',
    stock: 30,
  },
  {
    id: '4',
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical keyboard with custom switches',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 12,
  },
  {
    id: '5',
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 25,
  },
  {
    id: '6',
    name: 'USB-C Hub',
    description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
    category: 'Accessories',
    stock: 18,
  },
  {
    id: '7',
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and color temperature',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
    category: 'Home',
    stock: 22,
  },
  {
    id: '8',
    name: 'Phone Stand',
    description: 'Adjustable aluminum phone and tablet stand',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=500&fit=crop',
    category: 'Accessories',
    stock: 35,
  },
  {
    id: '9',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with 360-degree sound',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 16,
  },
  {
    id: '10',
    name: 'Webcam',
    description: '1080p webcam with auto-focus and built-in microphone',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 14,
  },
  {
    id: '11',
    name: 'Monitor Stand',
    description: 'Wooden monitor stand with storage drawer',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    category: 'Accessories',
    stock: 28,
  },
  {
    id: '12',
    name: 'Cable Organizer',
    description: 'Set of 5 cable organizers for desk management',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    category: 'Accessories',
    stock: 40,
  },
];

export function getProducts() {
  const stored = localStorage.getItem('products');
  if (!stored) {
    localStorage.setItem('products', JSON.stringify(mockProducts));
    return mockProducts;
  }
  return JSON.parse(stored);
}

export function saveProducts(products: Product[]) {
  localStorage.setItem('products', JSON.stringify(products));
}
