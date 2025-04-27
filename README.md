# Whalescale.ai

Real-time blockchain whale transaction tracker for Bitcoin and Ethereum with dashboard and alerts.

## Features

- 🐋 Detect large Bitcoin transactions (50+ BTC)
- 🐋 Detect large Ethereum transactions (500+ ETH)
- 📊 Real-time dashboard
- 📧 Daily summary emails
- 🔍 Transaction attribution to known entities

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Backend**: Node.js
- **Database**: Supabase (Postgres)
- **Hosting**: Vercel
- **Blockchain APIs**: 
  - Bitcoin: Blockchain.com API
  - Ethereum: Etherscan API
- **Email**: Resend

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   # Create a .env.local file with the following variables
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   ETHERSCAN_API_KEY=your_etherscan_key
   BLOCKCHAIN_API_KEY=your_blockchain_key
   RESEND_API_KEY=your_resend_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
whalescale/
├── src/
│   ├── app/              # Next.js app router
│   │   └── ...          # Feature components
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   └── types/           # TypeScript types
├── public/              # Static assets
└── ...                  # Configuration files
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to GitHub
2. Import the project in Vercel
3. Set up environment variables in Vercel
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
