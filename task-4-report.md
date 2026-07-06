# Task 4 Report: Hero Section Styles

## Status: DONE

## What was done
Added hero section styles to `css/style.css` including:

- **Full-screen hero**: `min-height: 100vh` with flexbox centering
- **Background image**: `linear-gradient` overlay on `hero.jpg` with `center/cover no-repeat`
- **Centered content**: `.hero-content` with `max-width: 800px` and centered alignment
- **White text with text shadow**: Title and subtitle styled with `text-shadow` for readability
- **Fade-in animation**: `@keyframes fadeInUp` animation on `.hero-content`
- **Responsive styles**: Mobile adjustments for padding and font sizes

## Files modified
- `css/style.css` - Added 53 lines of hero section styles

## Commit created
```
1f71657 feat: add hero section with background image and animation
```

## Notes
- Hero background references `../img/hero.jpg` - user will need to add a real image
- The overlay uses 40% black (`rgba(0, 0, 0, 0.4)`) for text readability
- Animation triggers on page load with 1s ease transition
