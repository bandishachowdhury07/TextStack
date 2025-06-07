# 📝 Text Stack

**Text Stack** is a sleek, stack-based **text editor** built with **React**.  
It features undo/redo functionality using stacks, a clean and intuitive UI, and easy state control — making it both a useful tool and a fun showcase of data structure concepts in action.

---

## 🚀 Live Demo

🌐 [Visit the App](https://bandishachowdhury07.github.io/TextStack)

---

## ✨ Features

- ✅ Stack-based **Undo & Redo** system
- 🧼 **Clear** functionality to reset the editor
- 💡 Instant visual feedback and intuitive button states
- 🎨 **Modern UI** with responsive design
- ⚛️ Powered by **React** (functional components + hooks)

---

## 🧠 Tech Stack

| Technology | Usage |
|------------|--------|
| ⚛️ React   | Frontend framework |
| 🧱 JavaScript | Core logic & stack-based state management |
| 💅 CSS     | Styling and layout |
| 📄 GitHub Pages | Deployment |

---

## 🖼️ Preview

<div style="display: flex; flex-direction: column; gap: 20px;">
  <img src="https://github.com/user-attachments/assets/9658dccf-2dfa-41d5-a7c8-c18c506b175d" alt="image" />
  <img src="https://github.com/user-attachments/assets/57a52d95-0f77-4163-8a94-d4a279183c3a" alt="image" />
</div>

---

## 📁 Project Structure

```
TEXT-STACK/
├── build/                          # Production build output
│   ├── static/                     # Static assets for production
│   │   ├── css/                    # Compiled CSS files
│   │   └── js/                     # Compiled JavaScript files
│   ├── asset-manifest.json         # Asset manifest for build
│   ├── favicon.ico                 # Application favicon
│   ├── index.html                  # Main HTML entry point
│   ├── logo192.png                 # App logo (192x192)
│   ├── logo512.png                 # App logo (512x512)
│   ├── manifest.json               # Web app manifest
│   └── robots.txt                  # Search engine crawling rules
├── public/                         # Public static assets
│   ├── favicon.ico                 # Application favicon
│   ├── index.html                  # HTML template
│   ├── logo192.png                 # App logo (192x192)
│   ├── logo512.png                 # App logo (512x512)
│   ├── manifest.json               # Progressive Web App manifest
│   └── robots.txt                  # SEO and crawler directives
├── src/                            # Source code directory
│   ├── App.css                     # Main application styles
│   ├── App.js                      # Main React application component
│   ├── App.test.js                 # Tests for App component
│   ├── index.css                   # Global CSS styles
│   ├── index.js                    # Application entry point
│   ├── logo.svg                    # React logo SVG
│   ├── reportWebVitals.js          # Performance monitoring
│   └── setupTests.js               # Test configuration
├── .gitignore                      # Git ignore rules
├── package-lock.json               # Locked dependency versions
├── package.json                    # Project dependencies and scripts
└── README.md                       # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TEXT-STACK
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

Create a production build:
```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

### Testing

Run the test suite:
```bash
npm test
```

## 📂 Directory Breakdown

### `/build`
Contains the production-ready build of the application. This directory is generated automatically when running `npm run build` and includes optimized, minified assets.

### `/public`
Static assets that are served directly without processing by the build system:
- **index.html**: The HTML template for the React app
- **manifest.json**: PWA configuration for mobile app-like experience
- **favicon.ico & logos**: Application branding assets
- **robots.txt**: SEO configuration for web crawlers

### `/src`
The main source code directory containing:
- **App.js**: Main React component and application logic
- **index.js**: Application entry point and React DOM rendering
- **CSS files**: Application styling and global styles
- **Test files**: Unit tests and testing configuration
- **reportWebVitals.js**: Performance monitoring setup

## 🔧 Configuration Files

- **package.json**: Defines project dependencies, scripts, and metadata
- **package-lock.json**: Locks specific versions of dependencies
- **.gitignore**: Specifies files and directories to exclude from version control

## 📱 Progressive Web App (PWA)

This project is configured as a PWA with:
- Web app manifest for mobile installation
- Service worker support (via reportWebVitals)
- Responsive design with multiple logo sizes

## 🧪 Testing

The project includes:
- Jest testing framework
- React Testing Library
- Performance monitoring with Web Vitals

## 📄 License

[Add your license information here]

## 🤝 Contributing

[Add contribution guidelines here]

## 📞 Support

[Add support/contact information here]

---

## 📦 Installation & Setup

To run locally:

```bash
git clone https://github.com/bandishachowdhury07/TextStack.git
cd TextStack
npm install
npm start
```

🙋‍♀️ Author
Made with ❤️ by Bandisha Chowdhury
