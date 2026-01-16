

export interface OrderData {
  orderId: string;
  date: string;
  time: string;
  customerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  paymentMethod: string;
  subtotal: number;
  shipping: number;
  total: number;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  sku: string;
  name: string;
  price: number;
  quantity: number;
  originalPrice?: number;
  selectedSize?: string;
  selectedColor?: string;
  image: string;
  slug: string;
}

/**
 * Generate unique order ID
 * Format: INBD-YYYYMMDD-HHMMSS-XXXX
 */
export function generateOrderId(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
  return `INBD-${year}${month}${day}-${hours}${minutes}${seconds}-${random}`;
}

/**
 * Send order data to Google Sheets
 * Web App URL: https://script.google.com/macros/s/AKfycbySDL6NIQAhTNzfl-yMAo8TfGzgRHxmvXByhFg6ZB7zccdavQJJFxvP3qGfEQ9hYa_l/exec
 */
export async function sendOrderToGoogleSheets(orderData: OrderData): Promise<{ success: boolean; error?: string }> {
  // Get Web App URL from environment variable or use the hardcoded one as fallback
  const webAppUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL || 
    'https://script.google.com/macros/s/AKfycbySDL6NIQAhTNzfl-yMAo8TfGzgRHxmvXByhFg6ZB7zccdavQJJFxvP3qGfEQ9hYa_l/exec';

  if (!webAppUrl) {
    console.error('Google Sheets Web App URL is not configured');
    return { success: false, error: 'Google Sheets integration not configured' };
  }

  console.log('Sending order to Google Sheets:', webAppUrl);
  console.log('Order data:', JSON.stringify(orderData, null, 2));

  try {
    // Use no-cors mode for Google Apps Script Web Apps to avoid CORS issues
    // This is the recommended approach for Google Apps Script
    await fetch(webAppUrl, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    
    // With no-cors mode, we can't read the response (it will be opaque)
    // But the request is sent successfully, so we assume success
    // The Google Apps Script will process the request and save to the sheet
    console.log('Order data sent to Google Sheets (no-cors mode)');
    return { success: true };
    
  } catch (error) {
    console.error('Error sending order to Google Sheets:', error);
    
    // Return error but don't block order completion (graceful degradation)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to connect to Google Sheets' 
    };
  }
}

/**
 * Format order data for Google Sheets submission
 */
export function formatOrderData(
  customerInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    paymentMethod: string;
  },
  cartItems: OrderItem[],
  subtotal: number,
  shipping: number = 0
): OrderData {
  const now = new Date();
  const date = now.toLocaleDateString('en-GB'); // DD/MM/YYYY format
  const time = now.toLocaleTimeString('en-GB', { hour12: false }); // 24-hour format

  return {
    orderId: generateOrderId(),
    date,
    time,
    customerName: customerInfo.fullName,
    phone: customerInfo.phone,
    email: customerInfo.email || '',
    address: customerInfo.address,
    city: customerInfo.city,
    paymentMethod: customerInfo.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment',
    subtotal: Number(subtotal.toFixed(2)),
    shipping: Number(shipping.toFixed(2)),
    total: Number((subtotal + shipping).toFixed(2)),
    items: cartItems.map(item => ({
      id: item.id,
      sku: item.sku,
      name: item.name,
      price: Number(item.price.toFixed(2)),
      quantity: item.quantity,
      originalPrice: item.originalPrice ? Number(item.originalPrice.toFixed(2)) : undefined,
      selectedSize: item.selectedSize,
      selectedColor: item.selectedColor,
      image: item.image,
      slug: item.slug,
    })),
  };
}
