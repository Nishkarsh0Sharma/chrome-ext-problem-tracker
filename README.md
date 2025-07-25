# Chrome Extension: AZ Problem Tracker

<div align="center">
  <img src="Starter Files/assets/ext-icon.png" alt="AZ Problem Tracker Logo" width="128" height="128">
  
  [![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285f4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chrome.google.com/webstore)
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
</div>

## 📖 Introduction  
**AZ Problem Tracker** is a powerful Chrome extension designed to help students and developers efficiently bookmark and manage coding problems on the [maang.in](https://maang.in) platform. This project serves as an excellent learning resource for Chrome extension development, covering essential concepts like manifest files, storage APIs, content scripts, and modern web development practices.

### ✨ Key Features
- 🔖 **Smart Bookmarking**: One-click problem bookmarking with automatic duplicate detection
- 📱 **Intuitive Popup Interface**: Clean, responsive design for managing bookmarks  
- 💾 **Persistent Storage**: Chrome sync storage for cross-device bookmark synchronization
- 🎯 **Problem Navigation**: Direct links to bookmarked problems with one click
- 🗑️ **Safe Deletion**: Confirmation dialogs prevent accidental bookmark removal
- 🎨 **Responsive Design**: Optimized for various screen sizes and Chrome themes

### 🎯 Learning Objectives
- Master Chrome extension architecture and development workflow
- Understand DOM manipulation and content script injection
- Learn Chrome Storage API for data persistence
- Practice modern JavaScript (ES6+) and web development best practices
- Gain experience with Chrome extension debugging and testing

---

## 📁 Repository Structure  

```
chrome-ext-problem-tracker/
├── 📁 Starter Files/           # Development version with base setup
│   ├── 📄 manifest.json        # Extension configuration
│   ├── 📄 content.js           # Content script for DOM manipulation
│   ├── 📄 popup.html           # Extension popup interface
│   ├── 📄 popup.js             # Popup functionality
│   ├── 📄 popup.css            # Popup styling
│   ├── 📄 content.css          # Content script styling
│   ├── 📄 background.js        # Background service worker
│   └── 📁 assets/              # Icons and images
│       ├── 🖼️ ext-icon.png
│       ├── 🖼️ bookmark.png
│       ├── 🖼️ play.png
│       └── 🖼️ delete.png
└── 📄 README.md               # Documentation
```

---

## 🚀 Getting Started  

### 📋 Prerequisites  
Before you begin, ensure you have:
- 💻 **Basic knowledge** of JavaScript, HTML, and CSS
- 📝 **Text editor** (Visual Studio Code recommended)
- 🌐 **Google Chrome browser** (latest version)
- 🔧 **Git** for version control

### 📥 Installation  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Algozenith/chrome-ext-problem-tracker.git
   cd chrome-ext-problem-tracker
   ```

2. **Load the Extension in Chrome**  
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **Developer Mode** (toggle switch at the top-right)
   - Click **Load unpacked** and select the `Starter Files/` folder
   - The extension icon should appear in your Chrome toolbar

3. **Verify Installation**
   - Look for the AZ Problem Tracker icon in your extensions toolbar
   - Click the icon to open the popup interface
   - Visit [maang.in](https://maang.in) to test bookmarking functionality

---

## 🎮 How to Use  

### Bookmarking Problems
1. 🌐 **Navigate** to [maang.in](https://maang.in) and browse to any problem page
2. 🔖 **Click** the bookmark button that appears next to the problem title
3. ✅ **Confirm** the bookmark is saved (check the extension popup)

### Managing Bookmarks
1. 🖱️ **Click** the extension icon in your Chrome toolbar
2. 📋 **View** all your saved bookmarks in the popup
3. ▶️ **Play button**: Opens the problem in a new tab
4. 🗑️ **Delete button**: Removes bookmark (with confirmation)

### Features in Action
- 🚫 **Duplicate Prevention**: Already bookmarked problems won't be added again
- 🔄 **Real-time Sync**: Bookmarks sync across your Chrome devices
- 💬 **User Feedback**: Confirmation dialogs for important actions

---

## 🛠️ Technical Implementation

### Core Technologies
- **Manifest V3**: Latest Chrome extension format
- **Content Scripts**: DOM manipulation and UI injection
- **Storage API**: Persistent data storage with Chrome sync
- **Background Scripts**: Service worker for extension lifecycle

### Key Components
```javascript
// Example: Bookmark button injection
function addBookmarkButton() {
    if (!onProblemPage() || document.getElementById("add-bookmark-button")) return;
    
    const bookmarkButton = document.createElement('img');
    bookmarkButton.id = "add-bookmark-button";
    bookmarkButton.src = chrome.runtime.getURL("assets/bookmark.png");
    
    // Insert button and add event listener
    insertButton(bookmarkButton);
    bookmarkButton.addEventListener('click', addNewBookmarkHandler);
}
```

---

## 🎓 Learn While Building  

This project is structured as a hands-on learning experience:

### 📚 Concepts Covered
- 🏗️ **Chrome Extension Architecture**: Understanding manifest files, permissions, and extension lifecycle
- 🎯 **Content Scripts**: Injecting JavaScript into web pages and DOM manipulation
- 💾 **Storage API**: Saving and retrieving data with Chrome's sync storage
- 🎨 **UI Development**: Creating responsive popups and user interfaces
- 🐛 **Debugging**: Using Chrome DevTools for extension development
- 🔧 **Best Practices**: Code organization, error handling, and user experience

### 🛤️ Development Journey
1. **Setup**: Configure manifest and basic file structure
2. **Content Injection**: Add bookmark button to problem pages
3. **Data Management**: Implement storage and retrieval systems
4. **User Interface**: Build and style the popup interface
5. **Enhancement**: Add confirmation dialogs and error handling
6. **Testing**: Debug and optimize the extension

---

## 🔧 Development Setup

### Local Development
```bash
# Clone and setup
git clone https://github.com/Algozenith/chrome-ext-problem-tracker.git
cd chrome-ext-problem-tracker

# Work with starter files
cd "Starter Files"

# Make your changes and reload extension in Chrome
```

### Debugging Tips
- 🔍 **Content Script**: Right-click on webpage → Inspect → Console tab
- 🔧 **Popup**: Right-click extension icon → Inspect popup
- 📊 **Background**: Visit `chrome://extensions/` → Background page
- 🔄 **Reload**: Click reload button in `chrome://extensions/` after changes

---

## 🚀 Future Enhancements

Consider implementing these advanced features:
- 🏷️ **Tags & Categories**: Organize bookmarks by topic or difficulty
- 📊 **Progress Tracking**: Monitor solved vs. unsolved problems
- 🔍 **Search & Filter**: Find bookmarks quickly
- 📱 **Export/Import**: Backup and restore bookmark data
- 🎨 **Themes**: Dark mode and customizable UI
- 🔔 **Notifications**: Reminders for practice sessions

---

## 🤝 Contributing

We welcome contributions! Please feel free to:
- 🐛 Report issues and bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- 📖 Improve documentation

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Nishkarsh Sharma**  
*Chrome Extension Developer & Educator*

---

<div align="center">
  <h3>Happy Coding! 🚀</h3>
  <p><i>Build something amazing, one extension at a time!</i></p>
</div>
