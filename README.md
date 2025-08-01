# Business Profitability Calculator

A modern React web application that helps businesses analyze costs, suggest pricing strategies, and forecast return on investment.

## Features

- Cost Analysis: Calculate fixed and variable costs per unit
- Pricing Strategy: Get suggested selling prices based on desired profit margins
- Profit Forecasting: See profit per unit and total net profit
- Break-Even Analysis: Calculate break-even points in units and pricing
- Responsive Design: Works on desktop, tablet, and mobile devices

## Technologies Used

- React 18 - Frontend framework
- Vite - Build tool and development server
- Tailwind CSS - Styling framework
- Lucide React - Icon library
- Docker - Containerization

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

## Usage

1. Enter business costs:
   - Total Fixed Costs: Rent, salaries, insurance
   - Variable Cost Per Unit: Materials, per-item labor
   - Number of Units: Products/services to sell
   - Desired Profit Margin: Target profit percentage

2. Review suggested pricing or enter custom price

3. Analyze results:
   - Cost per unit breakdown
   - Profit per unit and total profit
   - Break-even analysis

## CI/CD Pipeline

The project includes automated CI/CD using GitHub Actions:

### Development Workflow
- Triggers on any push or pull request
- Runs build tests and linting
- Tests Docker container builds
- Ensures code quality before deployment

### Production Workflow
- Triggers on push to main/master branch
- Builds and tests application
- Creates Docker image
- Deploys to production (when configured)

### Local Deployment Script
```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

## Deployment Options

### Static Hosting
- Netlify: Drag and drop dist folder
- Vercel: Connect GitHub repository
- GitHub Pages: Use dist folder as source

### Docker Deployment
```bash
# Production
docker-compose up businessapp-prod

# Development
docker-compose up businessapp-dev
```

### Cloud Platforms
- AWS S3 + CloudFront
- Google Cloud Storage
- DigitalOcean App Platform
- Azure Static Web Apps

## Project Structure

```
├── src/                    # React source code
├── .github/workflows/      # CI/CD pipelines
├── scripts/               # Deployment scripts
├── Dockerfile             # Production container
├── Dockerfile.dev         # Development container
├── docker-compose.yml     # Container orchestration
└── README.md             # This file
```

## License

This project is open source and available under the MIT License. 