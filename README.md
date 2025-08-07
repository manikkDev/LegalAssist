# LegalAssist 🌾⚖️  
*Empowering Rural India with AI-Driven Legal Protection*

![Hero Banner](assets/legal-img-2.jpg)

## 🚀 Overview
A voice-enabled AI assistant that helps rural users verify legal documents (land deeds, insurance policies) against Indian laws. Key features:
- **Document Analysis**: Checks for legal compliance in uploaded files (PDF/images)
- **Voice Guidance**: Regional language support (Hindi/Telugu/etc.) with text-to-speech
- **Law Verification**: Explains relevant laws in simple terms
- **Scam Prevention**: Flags fraudulent clauses in property/insurance documents

## ✨ Why This Matters
- 73% of rural land disputes stem from document fraud (NCRB 2022)
- Only 12% of rural Indians understand legal documents (NSSO Survey)
- Saves users from costly legal battles by **preventing scams before they happen**

## 🛠️ Tech Stack
| Component       | Technology Used                          |
|-----------------|------------------------------------------|
| Frontend        | HTML/CSS/JS + Responsive Design          |
| Document Processing | Tesseract OCR + Bhasha (Indian languages) |
| AI Backend      | Python + RAG (Retrieval-Augmented Generation) |
| Voice           | Whisper STT + Google TTS/Bhashini        |
| Authentication  | Google OAuth                             |

## 🎯 Key Features
1. **Smart Document Scanner**  
   - Analyzes land deeds/insurance policies for legal compliance
2. **Regional Language Support**  
   - Voice interface in Hindi, Telugu, Marathi (expandable)
3. **Law Explorer**  
   - Simple explanations of key Indian laws (Registration Act, Stamp Act, etc.)
4. **Dark/Light Mode**  
   - Better accessibility in low-light rural areas

## 📸 Screenshots
| Feature Section | Laws Section |
|----------------|--------------|
| ![Feature](assets/feature-img.jpg) | ![Laws](assets/laws-image.jpg) |

## 🏗️ Setup Instructions
```bash
# Clone repository
git clone https://github.com/yourusername/LegalAssist.git

# Install dependencies (for backend)
pip install -r requirements.txt

# Run frontend
open index.html  # Or deploy on Netlify/Vercel
