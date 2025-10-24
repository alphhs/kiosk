# Monorepo Migration Status

## ✅ Successfully Completed

### 1. **Turbo Monorepo Setup**

- ✅ Moved main app to `apps/kiosk/`
- ✅ Created `packages/ui/` and `packages/widgets/`
- ✅ Updated root `package.json` for monorepo
- ✅ Configured `pnpm-workspace.yaml`
- ✅ Updated `turbo.json` with proper task configuration
- ✅ Created proper TypeScript configurations for all packages

### 2. **UI Package (@kiosk/ui)**

- ✅ Adapted from Next.js to Vite/React
- ✅ Fixed `next-image.tsx` → `image.tsx` with standard `<img>` implementation
- ✅ Converted from `@cody-mn/ui` to `@kiosk/ui` naming
- ✅ Updated TypeScript configuration for Vite compatibility
- ✅ **Successfully building** with tsup

### 3. **Package Structure**

```
kiosk-monorepo/
├── apps/
│   └── kiosk/                  # Main Kiosk app (@kiosk/web)
├── packages/
│   ├── ui/                     # UI Components (@kiosk/ui) ✅ WORKING
│   ├── widgets/                # Widget System (@kiosk/widgets) ⚠️ NEEDS WORK
│   └── config/                 # Shared configs (@kiosk/config)
```

## ⚠️ Widgets Package Issues (Expected)

The widgets package has many Next.js-specific dependencies that need to be adapted:

### **Import Issues to Fix:**

1. **Next.js Dependencies:**
   - `next/dynamic` → needs Vite equivalent or React.lazy
   - `next/image` → use `@kiosk/ui/image` instead
   - `next/link` → use React Router Link

2. **Missing UI Package Imports:**
   - `@cody-mn/ui/lazyload` → `@kiosk/ui/lazyload`
   - `@cody-mn/ui/swiper` → `@kiosk/ui/swiper`
   - `@cody-mn/ui/countdown` → `@kiosk/ui/countdown`
   - `@cody-mn/ui/image` → `@kiosk/ui/image`

3. **Missing Dependencies:**
   - `classnames` - needs to be added to package.json
   - `lodash` - needs to be added to package.json
   - `@heroicons/react` - needs to be added to package.json
   - `rc-image` - needs to be added to package.json

4. **CSS Module Issues:**
   - `.scss` files need to be converted to `.css` or configured properly
   - PostCSS configuration needed for CSS modules

5. **External Dependencies:**
   - `@apollo/client` - should be marked as external
   - `@lingui/core` - should be marked as external

## 🚀 Current Working Commands

```bash
# Build UI package (working)
pnpm build --filter=@kiosk/ui

# Build main app (working)
pnpm build --filter=@kiosk/web

# Development
pnpm dev --filter=@kiosk/web
```

## 📝 Next Steps for Widgets Package

1. **Add missing dependencies** to `packages/widgets/package.json`
2. **Replace Next.js imports** with Vite/React equivalents
3. **Update import paths** to use workspace packages
4. **Configure CSS handling** for SCSS modules
5. **Mark external dependencies** in build config

The monorepo structure is solid and the UI package is working! The widgets package just needs the expected migration work from Next.js → Vite.
