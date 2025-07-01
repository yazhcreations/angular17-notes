# Angular 17 Notes App 📒

This project is a modular, modern Notes app built with **Angular 17**, showcasing the latest framework capabilities including **Standalone Components**, **Signals**, and **AuthGuard**.

It serves as both a learning project and a portfolio piece for frontend interviews.

---

## 🚀 Live Demo

🔗 [View App on GitHub Pages](https://yazhcreations.github.io/angular17-notes/)

---

## ⚙️ Features Used

- ✅ **Angular 17** (latest stable version)
- ✅ **Standalone Components** (no NgModules)
- ✅ **Signals** (fine-grained reactivity)
- ✅ **AuthGuard** (basic route protection)
- ✅ **SCSS Styling**
- ✅ **GitHub Pages Deployment** (`angular-cli-ghpages`)

---

## 📦 Installation

```bash
git clone https://github.com/yazhcreations/angular17-notes.git
cd angular17-notes
npm install

🔨 Run Locally
``bash
npm start
Visit http://localhost:4200/

🛡️ Authentication & Routing
✅ Protected routes using AuthGuard

✅ Basic fake authentication logic

✅ Shows/hides views based on login state

🌟 Angular Signals
✅ Used for reactivity instead of RxJS

✅ Simple and powerful signal() and computed()

🧱 Standalone Components
✅ All components are fully standalone

✅ Clean project structure without NgModules

📤 Deploy to GitHub Pages
```bash
npm run build && npm run deploy
Compiles using production config

Deploys from docs/browser/ folder

📁 Project Structure (simplified)
pgsql

src/
 ├── app/
 │   ├── auth/
 │   │   ├── auth.guard.ts
 │   │   └── login.component.ts
 │   ├── notes/
 │   │   ├── note.component.ts
 │   │   └── note.model.ts
 │   ├── signals/
 │   │   └── state.signal.ts
 │   └── app.component.ts
angular.json
README.md
👩‍💻 Author
Made with 💻 and ☕ by Yazh Creations

📄 License
MIT License © 2025 Yazh Creations
