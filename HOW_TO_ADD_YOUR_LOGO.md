# How to Add Your Company Logo to PDF Bills

## 🎯 Quick Guide

Your PDF bills currently have a placeholder logo. Follow these simple steps to replace it with your actual company logo.

---

## ✨ Method 1: Online Converter (Easiest - 2 minutes)

### Step 1: Prepare Your Logo
- Use PNG or JPG format
- Recommended size: 200x200 pixels or larger
- Square or rectangular shape works best
- Transparent background recommended (PNG)

### Step 2: Convert to Base64
1. Go to: **https://www.base64-image.de/**
2. Click "Choose File" and select your logo
3. Wait for upload to complete
4. Copy the entire output starting with `data:image/png;base64,`

### Step 3: Update the Edge Function
1. Open: `supabase/functions/generate-trip-bill/index.ts`
2. Find line 77 (search for "logoBase64")
3. Replace the existing placeholder with your copied base64 string:

```typescript
// BEFORE (line 77)
const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

// AFTER (your actual logo)
const logoBase64 = "data:image/png;base64,YOUR_COPIED_BASE64_STRING_HERE";
```

### Step 4: Test
The edge function will automatically redeploy. Test by:
1. Complete any trip
2. Click "Download Bill"
3. Open PDF and verify logo appears

---

## 💻 Method 2: Using Node.js (For developers)

### Step 1: Create a converter script

```javascript
// convert-logo.js
const fs = require('fs');

const logoPath = './your-logo.png'; // Your logo file path
const imageBuffer = fs.readFileSync(logoPath);
const base64 = imageBuffer.toString('base64');
const mimeType = logoPath.endsWith('.png') ? 'image/png' : 'image/jpeg';
const dataUrl = `data:${mimeType};base64,${base64}`;

console.log('Copy this entire line and paste it in the edge function:');
console.log('\n');
console.log(`const logoBase64 = "${dataUrl}";`);
console.log('\n');

// Also save to file for easy copying
fs.writeFileSync('logo-base64.txt', dataUrl);
console.log('✅ Base64 string also saved to logo-base64.txt');
```

### Step 2: Run the script

```bash
# Place your logo in the project folder
# Run the converter
node convert-logo.js

# Copy the output
# Paste in generate-trip-bill/index.ts at line 77
```

---

## 🍎 Method 3: Using Command Line (Mac/Linux)

### For PNG files:
```bash
# Convert and copy to clipboard (Mac)
echo -n "data:image/png;base64," && base64 -i your-logo.png | pbcopy

# Convert and save to file (Linux)
echo -n "data:image/png;base64," > logo-base64.txt
base64 -i your-logo.png >> logo-base64.txt
```

### For JPG files:
```bash
# Convert and copy to clipboard (Mac)
echo -n "data:image/jpeg;base64," && base64 -i your-logo.jpg | pbcopy

# Convert and save to file (Linux)
echo -n "data:image/jpeg;base64," > logo-base64.txt
base64 -i your-logo.jpg >> logo-base64.txt
```

---

## 🪟 Method 4: Using PowerShell (Windows)

```powershell
# Convert logo to base64
$logoPath = "C:\path\to\your-logo.png"
$base64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($logoPath))
$mimeType = "image/png"  # or "image/jpeg" for JPG
$dataUrl = "data:$mimeType;base64,$base64"

# Save to file
$dataUrl | Out-File -FilePath "logo-base64.txt"
Write-Host "✅ Base64 string saved to logo-base64.txt"
Write-Host "Copy the contents and paste in the edge function"
```

---

## 🎨 Logo Sizing in PDF

The logo appears at the top-left of the PDF. You can adjust its size:

```typescript
// Line 81 in generate-trip-bill/index.ts
doc.addImage(logoBase64, "PNG", 15, 10, 30, 30);
//                               ^^  ^^  ^^  ^^
//                               X   Y   W   H (in millimeters)

// Examples:
// Small logo:  (15, 10, 20, 20)
// Medium logo: (15, 10, 30, 30)  ← current
// Large logo:  (15, 10, 40, 40)
// Wide logo:   (15, 10, 50, 25)
```

---

## ✅ Verification Checklist

After adding your logo, verify:

- [ ] Logo appears in top-left corner
- [ ] Logo is clear and not pixelated
- [ ] Logo doesn't overlap with company name
- [ ] Logo maintains aspect ratio (not stretched)
- [ ] Logo works on all trip types (regular, rental, outstation, airport)

---

## 🐛 Troubleshooting

### Logo Not Appearing

**Cause:** Invalid base64 string

**Fix:**
1. Check that your base64 string starts with `data:image/png;base64,` or `data:image/jpeg;base64,`
2. Make sure there are no line breaks in the string
3. Verify the entire string is enclosed in quotes

**Example of CORRECT format:**
```typescript
const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...very long string...==";
```

**Example of WRONG format:**
```typescript
// ❌ Missing data URL prefix
const logoBase64 = "iVBORw0KGgoAAAANSUhEUgAA...";

// ❌ Has line breaks
const logoBase64 = "data:image/png;base64,iVBORw0KGgo
AAAANSUhEUgAA...";

// ❌ Not in quotes
const logoBase64 = data:image/png;base64,iVBORw0KGgo...;
```

### Logo Too Large/Small

**Fix:** Adjust width and height parameters (line 81):

```typescript
// Make logo smaller
doc.addImage(logoBase64, "PNG", 15, 10, 20, 20);

// Make logo larger
doc.addImage(logoBase64, "PNG", 15, 10, 40, 40);

// Make logo rectangular (width x height)
doc.addImage(logoBase64, "PNG", 15, 10, 50, 30);
```

### Logo Overlaps with Text

**Fix:** Move text right or logo down:

```typescript
// Move company name to the right (line 89)
doc.text("A1 TAXI SERVICE", 60, 20);  // Changed from 50 to 60

// OR move logo down (line 81)
doc.addImage(logoBase64, "PNG", 15, 15, 30, 30);  // Changed Y from 10 to 15
```

### Logo Appears Blurry

**Fix:** Use a higher resolution logo:
- Minimum: 200x200 pixels
- Recommended: 400x400 pixels or larger
- Use PNG with transparent background for best results

---

## 📏 Recommended Logo Specifications

### File Format
- **Best:** PNG with transparent background
- **Good:** PNG with white background
- **OK:** JPG (but no transparency)

### Size
- **Minimum:** 200x200 pixels
- **Recommended:** 400x400 pixels
- **Maximum:** 1000x1000 pixels (larger = bigger base64 string)

### Aspect Ratio
- **Square:** 1:1 (e.g., 400x400)
- **Rectangular:** Up to 2:1 (e.g., 400x200)

### File Size
- Keep under 100KB if possible
- Larger files = longer base64 strings = slower PDFs

---

## 🔄 Updating Logo After Deployment

If you need to change the logo later:

1. Convert new logo to base64 (use any method above)
2. Update `generate-trip-bill/index.ts` line 77
3. Save the file
4. Edge function automatically redeploys
5. Test with new trip completion

**Note:** Already-generated PDFs will still have old logo. Only new PDFs will show updated logo.

---

## 💡 Pro Tips

### Transparent Background
If your logo has a white background but you want it transparent:
- Use online tools like remove.bg
- Or use image editor (Photoshop, GIMP, etc.)

### Logo Optimization
Optimize your logo before converting:
- Remove unnecessary metadata
- Compress the image
- Use tools like TinyPNG or ImageOptim

### Multiple Logos
If you need different logos for different situations:

```typescript
// Add condition in edge function
const logoBase64 = tripData.vehicle_type === 'luxury'
  ? "data:image/png;base64,LUXURY_LOGO_HERE"
  : "data:image/png;base64,STANDARD_LOGO_HERE";
```

---

## 📞 Need Help?

If you're still having trouble:

1. **Check the base64 string:**
   - Should start with `data:image/png;base64,` or `data:image/jpeg;base64,`
   - Should be one continuous line (no breaks)
   - Should be enclosed in quotes

2. **Verify the image:**
   - Try opening it in a browser
   - Paste the base64 string in browser address bar
   - If image shows, base64 is valid

3. **Test with simple logo:**
   - Try with a small, simple PNG first
   - If that works, issue is with your original logo file

---

## 🎯 Quick Example

Here's a complete example with a tiny red square logo (for testing):

```typescript
// This creates a small red square - good for testing
const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mP8z8BQz0AEYBxVSF+FABJADveWkH6oAAAAAElFTkSuQmCC";

doc.addImage(logoBase64, "PNG", 15, 10, 30, 30);
```

Replace this with your actual logo's base64 string!

---

**Last Updated:** October 25, 2025
**Next Step:** Convert your logo and update the edge function! 🚀
