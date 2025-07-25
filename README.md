# Chrome Extension: AZ Problem Tracker

<div align="center">
  <img src="assets/ext-icon.png" alt="AZ Problem Tracker Logo" width="128" height="128">
  
  [![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285f4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chrome.google.com/webstore)
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
</div>

## 📖 Introduction  

**AZ Problem Tracker** is a powerful Chrome extension designed to help students and developers efficiently bookmark and manage coding problems on the [maang.in](https://maang.in) platform. This extension streamlines your coding practice by allowing you to save, organize, and quickly access your favorite problems.

Perfect for competitive programmers, interview preparation, and coding enthusiasts who want to keep track of their problem-solving journey!

### ✨ Key Features

- 🔖 **Smart Bookmarking**: One-click problem bookmarking with automatic duplicate detection
- 📱 **Intuitive Popup Interface**: Clean, responsive design for managing bookmarks  
- 💾 **Persistent Storage**: Chrome sync storage for cross-device bookmark synchronization
- 🎯 **Problem Navigation**: Direct links to bookmarked problems with one click
- 🗑️ **Safe Deletion**: Confirmation dialogs prevent accidental bookmark removal
- 🎨 **Responsive Design**: Optimized for various screen sizes and Chrome themes
- ⚡ **Fast Performance**: Lightweight extension with minimal resource usage
- 🔄 **Real-time Updates**: Dynamic content detection for single-page applications

### 🎯 Perfect For

- 👨‍💻 **Competitive Programmers**: Track problems across different contests
- 🎓 **Students**: Organize practice problems by topic or difficulty  
- 💼 **Job Seekers**: Save interview preparation problems
- 🏃‍♂️ **Coding Enthusiasts**: Build a personal problem library

---

## 📁 Repository Structure  

```
chrome-ext-problem-tracker/
├── 📄 manifest.json        # Extension configuration & permissions
├── 📄 content.js           # Content script for DOM manipulation
├── 📄 popup.html           # Extension popup interface
├── 📄 popup.js             # Popup functionality & event handlers
├── 📄 popup.css            # Popup styling & responsive design
├── 📄 content.css          # Content script styling
├── 📄 background.js        # Background service worker
├── 📁 assets/              # Icons and images
│   ├── 🖼️ ext-icon.png     # Extension icon
│   ├── 🖼️ bookmark.png     # Bookmark button icon
│   ├── 🖼️ play.png         # Play/open button icon
│   └── 🖼️ delete.png       # Delete button icon
├── 📄 .gitignore           # Git ignore rules
├── 📄 LICENSE              # MIT License
└── 📄 README.md            # This documentation
```

---

## 🚀 Getting Started  

### 📋 Prerequisites  

Before you begin, ensure you have:
- 💻 **Basic knowledge** of JavaScript, HTML, and CSS
- 📝 **Text editor** (Visual Studio Code recommended)
- 🌐 **Google Chrome browser** (latest version)
- 🔧 **Git** for version control (optional)

### 📥 Installation Methods

#### Method 1: For Developers (Recommended)

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Nishkarsh0Sharma/chrome-ext-problem-tracker.git
   cd chrome-ext-problem-tracker
   ```

2. **Load the Extension in Chrome**  
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **Developer Mode** (toggle switch at the top-right)
   - Click **Load unpacked** and select the project folder
   - The extension icon should appear in your Chrome toolbar

#### Method 2: Direct Download

1. **Download ZIP**
   - Click the green "Code" button on GitHub
   - Select "Download ZIP"
   - Extract the downloaded file

2. **Load in Chrome**
   - Follow step 2 from Method 1 above

### � Verification Steps

1. ✅ Look for the AZ Problem Tracker icon in your extensions toolbar
2. ✅ Click the icon to open the popup interface  
3. ✅ Visit [maang.in](https://maang.in) and navigate to any problem page
4. ✅ Look for the bookmark button next to the problem title
5. ✅ Test bookmarking functionality

---

## 🎮 How to Use  

### 📌 Bookmarking Problems

1. 🌐 **Navigate** to [maang.in](https://maang.in) and browse to any problem page
2. 🔖 **Click** the bookmark button that appears next to the problem title
3. ✅ **Confirm** the bookmark is saved (check the extension popup)

### 📊 Managing Bookmarks

1. 🖱️ **Click** the extension icon in your Chrome toolbar
2. 📋 **View** all your saved bookmarks in the popup
3. ▶️ **Play button**: Opens the problem in a new tab
4. 🗑️ **Delete button**: Removes bookmark (with confirmation dialog)

### 🔍 Features in Action

- 🚫 **Duplicate Prevention**: Already bookmarked problems won't be added again
- 🔄 **Real-time Sync**: Bookmarks sync across your Chrome devices
- 💬 **User Feedback**: Confirmation dialogs for important actions
- 🎯 **Smart Detection**: Automatically detects problem pages on maang.in

---

## 🛠️ Technical Implementation

### 🏗️ Core Technologies

- **Manifest V3**: Latest Chrome extension format with enhanced security
- **Content Scripts**: DOM manipulation and UI injection
- **Storage API**: Persistent data storage with Chrome sync
- **Service Workers**: Background processing and extension lifecycle management

### 🔧 Key Components

```javascript
// Example: Smart bookmark button injection
function addBookmarkButton() {
    // Check if we're on a problem page and button doesn't exist
    if (!onProblemPage() || document.getElementById("add-bookmark-button")) return;
    
    const bookmarkButton = document.createElement('img');
    bookmarkButton.id = "add-bookmark-button";
    bookmarkButton.src = chrome.runtime.getURL("assets/bookmark.png");
    
    // Insert button into DOM and add event listener
    insertButtonIntoPage(bookmarkButton);
    bookmarkButton.addEventListener('click', handleBookmarkCreation);
}

// Example: Storage management
async function saveBookmark(problemData) {
    const existingBookmarks = await getStoredBookmarks();
    const updatedBookmarks = [...existingBookmarks, problemData];
    
    await chrome.storage.sync.set({ 
        AZ_PROBLEM_KEY: updatedBookmarks 
    });
}
```

### 📊 Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Content.js    │    │    Popup.js      │    │  Background.js  │
│                 │    │                  │    │                 │
│ • DOM Detection │◄──►│ • UI Management  │◄──►│ • Service Worker│
│ • Button Inject │    │ • Event Handling │    │ • Extension API │
│ • User Events   │    │ • Data Display   │    │ • Permissions   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                        │                        │
         └────────────────────────┼────────────────────────┘
                                  ▼
                    ┌──────────────────────────┐
                    │    Chrome Storage API    │
                    │                          │
                    │ • Sync Across Devices    │
                    │ • Persistent Storage     │
                    │ • Automatic Backup       │
                    └──────────────────────────┘
```

---

## 🎓 Learning & Development

### 📚 Educational Value

This project is perfect for learning:
- 🏗️ **Chrome Extension Architecture**: Manifest files, permissions, and lifecycle
- 🎯 **Content Script Development**: DOM manipulation and web page interaction
- 💾 **Storage Management**: Chrome API usage and data persistence
- 🎨 **UI/UX Design**: Creating responsive popup interfaces
- 🐛 **Debugging Techniques**: Using Chrome DevTools for extensions
- 🔧 **Best Practices**: Code organization, error handling, and user experience

### 🛤️ Development Journey

1. **Foundation** → Set up manifest and basic file structure
2. **Core Logic** → Implement bookmark detection and storage
3. **User Interface** → Build and style the popup interface  
4. **Enhancement** → Add confirmation dialogs and error handling
5. **Optimization** → Performance tuning and cross-device sync
6. **Testing** → Debug and validate across different scenarios

### 🔧 Development Setup

```bash
# Clone the repository
git clone https://github.com/Nishkarsh0Sharma/chrome-ext-problem-tracker.git
cd chrome-ext-problem-tracker

# Open in your favorite editor
code .

# Load in Chrome for testing
# Navigate to chrome://extensions/
# Enable Developer Mode
# Click "Load unpacked" and select the project folder
```

### 🐛 Debugging Tips

| Component | Debug Method | Location |
|-----------|-------------|----------|
| **Content Scripts** | Right-click webpage → Inspect → Console | Web page console |
| **Popup Scripts** | Right-click extension icon → Inspect popup | Popup console |
| **Background Scripts** | chrome://extensions/ → Background page | Service worker |
| **Manifest Issues** | chrome://extensions/ → Extension details | Extension page |

---

## 🚀 Future Enhancements

### 🎯 Planned Features

- 🏷️ **Tags & Categories**: Organize bookmarks by topic, difficulty, or status
- 📊 **Progress Tracking**: Visual dashboard showing solved vs. unsolved problems
- 🔍 **Advanced Search**: Filter bookmarks by name, tags, or date added
- 📱 **Export/Import**: Backup and restore bookmark data (JSON/CSV)
- 🎨 **Theme Support**: Dark mode and customizable color schemes
- 🔔 **Smart Notifications**: Reminders for practice sessions and review
- 📈 **Analytics**: Problem-solving statistics and progress insights
- 🌐 **Multi-Platform**: Support for additional coding platforms

### 💡 Enhancement Ideas

- **Difficulty Rating**: Personal difficulty assessment for each problem
- **Time Tracking**: Record time spent on each problem
- **Notes System**: Add personal notes and solution approaches
- **Study Plans**: Pre-built and custom study schedules
- **Social Features**: Share bookmark collections with friends
- **Integration**: Connect with GitHub, LeetCode, and other platforms

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🔧 Ways to Contribute

- 🐛 **Report Bugs**: Found an issue? Create a detailed bug report
- 💡 **Suggest Features**: Have ideas? Share them in the issues section
- 🔧 **Submit Pull Requests**: Fix bugs or implement new features
- 📖 **Improve Documentation**: Help make our docs even better
- 🎨 **Design Assets**: Contribute icons, UI improvements, or themes

### 📋 Contribution Guidelines

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### 🏆 Contributors

Thanks to all the amazing people who have contributed to this project!

<!-- Contributors will be automatically added here -->

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### 📋 License Summary

✅ **Permissions**: Use, copy, modify, merge, publish, distribute, sublicense, sell  
❌ **Limitations**: No warranty, no liability  
📝 **Conditions**: Include license and copyright notice  

---

## 🆘 Support & FAQ

### ❓ Frequently Asked Questions

<details>
<summary><strong>Q: The bookmark button doesn't appear on problem pages</strong></summary>

**A:** Make sure you're on a problem page that starts with `/problems/` in the URL. Try refreshing the page or checking if the extension is enabled.
</details>

<details>
<summary><strong>Q: My bookmarks disappeared after restarting Chrome</strong></summary>

**A:** This extension uses Chrome sync storage, so bookmarks should persist. Check if you're signed into Chrome and sync is enabled.
</details>

<details>
<summary><strong>Q: Can I use this extension on other coding platforms?</strong></summary>

**A:** Currently, this extension is specifically designed for maang.in. Support for other platforms is planned for future releases.
</details>

<details>
<summary><strong>Q: How do I backup my bookmarks?</strong></summary>

**A:** Currently, bookmarks are automatically synced with your Chrome account. Manual export/import functionality is planned for a future update.
</details>

### 🐛 Found a Bug?

If you encounter any issues:

1. Check the [Issues](https://github.com/Nishkarsh0Sharma/chrome-ext-problem-tracker/issues) page
2. If your issue isn't listed, create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Browser version and OS

---

## 👨‍💻 Author

<div align="center">
  <img src="https://github.com/Nishkarsh0Sharma.png" width="100" height="100" style="border-radius: 50%;" alt="Nishkarsh Sharma">
  
  **Nishkarsh Sharma**  
  *Chrome Extension Developer & Educator*
  
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Nishkarsh0Sharma)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/nishkarsh-sharma)
  [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:nishkarsh.sharma@example.com)
</div>

---

## 🙏 Acknowledgments

- 💡 **Inspiration**: The need for better problem tracking in competitive programming
- 🎨 **Icons**: Custom designed icons for the extension
- 📚 **Documentation**: Inspired by best practices in open source projects
- 🌟 **Community**: Thanks to all users who provided feedback and suggestions

---

<div align="center">
  <h3>⭐ If you found this project helpful, please give it a star! ⭐</h3>
  <p>
    <strong>Happy Coding! 🚀</strong><br>
    <em>Build something amazing, one extension at a time!</em>
  </p>
  
  <hr>
  
  <sub>
    Made with ❤️ by <a href="https://github.com/Nishkarsh0Sharma">Nishkarsh Sharma</a><br>
    © 2025 Chrome Extension: AZ Problem Tracker. All rights reserved.
  </sub>
</div>
