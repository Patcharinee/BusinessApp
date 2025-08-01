# เครื่องคิดกำไรธุรกิจ (Business Profit Calculator)

A modern React web application that helps Thai businesses analyze costs, suggest pricing strategies, and forecast return on investment with comprehensive Thai language support.

## Features

### 📊 **Cost Analysis**
- **ต้นทุนคงที่ทั้งหมด** (Total Fixed Costs): Rent, salaries, insurance
- **ต้นทุนผันแปรต่อหน่วย** (Variable Cost Per Unit): Materials, per-item labor
- **ต้นทุนต่อหน่วย** (Cost Per Unit): Complete cost breakdown per unit

### 💰 **Pricing Strategy**
- **ราคาขายที่แนะนำ** (Recommended Selling Price): Based on desired profit margin
- **ราคาที่คุณต้องการขายสินค้า** (Custom Selling Price): User-defined pricing
- **ราคาขายสินค้า** (Final Selling Price): Shows exact user input or recommended price

### 📈 **Profit Analysis**
- **รายได้รวมทั้งหมด** (Total Revenue): Complete revenue from all units
- **กำไรต่อหน่วย** (Profit Per Unit): Profit per individual unit
- **กำไรสุทธิรวม** (Total Net Profit): Overall business profitability

### 🎯 **Break-Even Analysis**
- **จุดคุ้มทุน** (Break-Even Units): Units needed to cover fixed costs
- **ราคาทุน** (Break-Even Price): Minimum price to cover costs

### 🎨 **User Experience**
- **Thai Language Interface**: Complete Thai translation with proper financial terms
- **Interactive Tooltips**: Click-to-show help with Thai explanations
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Calculations**: Instant updates as you change values

## Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Inline Styles** - Custom styling (no Tailwind dependency)
- **Lucide React** - Icon library
- **Docker** - Containerization
- **Thai Locale** - Proper Thai number formatting

## Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- Docker (optional, for containerized deployment)

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open browser: `http://localhost:5173`

### Docker Development

1. Start with Docker:
   ```bash
   docker-compose up businessapp-dev
   ```

2. Access: `http://localhost:5173`

### Production Build

```bash
npm run build
```

## Usage Guide

### 1. **Enter Business Data**
- **ต้นทุนคงที่ทั้งหมด**: Fixed costs like rent, salaries, insurance
- **ต้นทุนผันแปรต่อหน่วย**: Variable costs like materials, labor per unit
- **จำนวนหน่วยสินค้าที่ต้องการผลิต**: Number of units to produce
- **อัตรากำไรที่ต้องการ**: Desired profit margin percentage

### 2. **Review Pricing Strategy**
- **ราคาขายที่แนะนำ**: Automatically calculated based on your profit margin
- **ราคาที่คุณต้องการขายสินค้า**: Enter your custom price (optional)

### 3. **Analyze Results**

#### **ภาพรวมธุรกิจ (Business Overview)**
- **รายได้รวมทั้งหมด**: Total revenue from all units
- **กำไรสุทธิรวม**: Total profit after all costs
- **จุดคุ้มทุน**: Units needed to break even
- **ต้นทุนรวมทั้งหมด**: Total cost for all units

#### **รายละเอียดต่อสินค้าหนึ่งหน่วย (Per Unit Details)**
- **ราคาขายสินค้า**: Final selling price being used
- **กำไรต่อหน่วย**: Profit per individual unit
- **ราคาทุน**: Minimum price to cover costs
- **ต้นทุนต่อหน่วย**: Total cost per unit

## Key Features

### 🎯 **Smart Pricing**
- **Automatic Recommendations**: Based on desired profit margin
- **Custom Override**: Set your own pricing strategy
- **Conservative Rounding**: Rounds up costs for safety margins

### 📱 **User-Friendly Interface**
- **Thai Language**: Complete Thai translation
- **Tooltips**: Click help icons for explanations
- **Color Coding**: Green for profits, red for losses, yellow for break-even
- **Real-time Updates**: Instant calculations as you type

### 🔧 **Technical Features**
- **Responsive Design**: Works on all devices
- **Docker Support**: Easy containerized deployment
- **Hot Reload**: Instant updates during development
- **Error Handling**: Graceful handling of edge cases

## Deployment Options

### GitHub Pages (Recommended)
The easiest way to deploy your app:

1. **Automatic Deployment**: Push to GitHub and let GitHub Actions handle the rest
2. **Manual Deployment**: Build locally and upload the `dist` folder

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Docker Deployment
```bash
# Development
docker-compose up businessapp-dev

# Production
docker-compose up businessapp-prod
```

### Other Static Hosting Options
- **Netlify**: Drag and drop dist folder
- **Vercel**: Connect GitHub repository
- **Cloud Platforms**: AWS S3 + CloudFront, Google Cloud Storage, DigitalOcean App Platform, Azure Static Web Apps

## Project Structure

```
├── src/
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── Dockerfile               # Production container
├── Dockerfile.dev           # Development container
├── docker-compose.yml       # Container orchestration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Recent Updates

### ✅ **Latest Features**
- **Complete Thai Translation**: All text in Thai with proper financial terms
- **Interactive Tooltips**: Click-to-show help with Thai explanations
- **Smart Price Display**: Shows exact user input or recommended price
- **Conservative Rounding**: Rounds up costs for safety margins
- **Enhanced UX**: Better visual feedback and user guidance

### 🎨 **UI Improvements**
- **Color-coded Results**: Green for profits, red for losses
- **Responsive Layout**: Works perfectly on all screen sizes
- **Clean Design**: Modern, professional appearance
- **Accessible Interface**: Easy to understand and use

## License

This project is open source and available under the MIT License.

---

**เครื่องคิดกำไรธุรกิจ** - Helping Thai businesses make informed pricing decisions