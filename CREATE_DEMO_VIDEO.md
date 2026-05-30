# Creating a Demo Video for Math Tutor

Since we don't have video creation tools installed, here are the easiest ways to create a demo video:

## Option 1: macOS Screen Recording (Simplest)

### Steps:
1. **Open your Math Tutor**: https://deepak-mukunthu.github.io/MathTutor/
2. **Start recording**: Press `Cmd + Shift + 5`
3. **Select**: "Record Selected Portion" and drag around the app window
4. **Click Record** and go through the app:
   - Welcome screen (3 seconds)
   - Select a topic (2 seconds)
   - Answer a question correctly (5 seconds)
   - Answer one incorrectly to show hints (8 seconds)
   - View results (5 seconds)
5. **Stop recording**: Click the stop button in menu bar
6. **Save as**: `math-tutor-demo.mov`

### Convert to GIF:
```bash
# Install ffmpeg first
brew install ffmpeg

# Convert to GIF (optimized for web)
ffmpeg -i math-tutor-demo.mov -vf "fps=10,scale=600:-1:flags=lanczos" -c:v gif demos/demo.gif
```

---

## Option 2: Use Online Tools

### Loom (Free, Easy)
1. Install Loom: https://www.loom.com/
2. Record your screen while using the app
3. Download the video
4. Upload to your GitHub repo or YouTube

### CloudConvert (No Install)
1. Record with QuickTime or screen recording
2. Go to https://cloudconvert.com/mov-to-gif
3. Upload your video, convert to GIF
4. Download and add to `demos/demo.gif`

---

## Option 3: I'll Create One for You

If you'd like, you can:
1. **Record a screen recording** using QuickTime or `Cmd + Shift + 5`
2. **Save it** to the MathTutor folder
3. **Let me know** and I'll help you convert it to an optimized GIF or MP4

---

## What to Show in the Demo (30 seconds)

1. **Welcome Screen** (3s) - Show coach message and topics
2. **Select Topic** (2s) - Click on "Basic Arithmetic"
3. **First Question** (5s) - Show coach message, attempt tracker
4. **Correct Answer** (3s) - Type answer, show success feedback
5. **Wrong Answer** (8s) - Type wrong answer, show hint, try again
6. **Results Screen** (7s) - Show score, performance stats, review
7. **End** (2s) - Show final coaching message

---

## Optimal Settings

- **Resolution**: 1280x720 or 1920x1080
- **Frame rate**: 30fps for video, 10fps for GIF
- **Duration**: 20-40 seconds (keep it short!)
- **File size**: Under 10MB for GIF, under 50MB for video

---

## Where to Add It

Once you have the video/GIF:

### In README.md:
```markdown
## 🎥 Demo Video

![Math Tutor Demo](demos/demo.gif)

*Watch how the Math Tutor guides students through learning*
```

### Or link to YouTube:
```markdown
## 🎥 Demo Video

[![Math Tutor Demo](https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)
```

Let me know which option you'd prefer!
