# 📧 Newsletter Sign-up Form

A simple and modern newsletter subscription form component. The project is built with a focus on accessibility, semantic markup, and responsive design.

## 🎯 Features

- **Fully Responsive Design** — looks great on both mobile devices and desktop
- **Accessibility (A11y)** — correct semantics, ARIA attributes, screen reader support
- **Form Validation** — client-side email validation with clear error messages
- **Subtle Animation** — smooth state transitions without excessive animation
- **Optimization** — fast loading, optimized images and fonts

## 🎨 Design

### Color Palette
- **Text:** Dark Slate Grey `hsl(234, 29%, 20%)`
- **Background:** Charcoal Grey `hsl(235, 18%, 26%)`
- **Accent:** Tomato `hsl(4, 100%, 67%)`
- **Neutral:** Grey `hsl(231, 7%, 60%)`
- **White:** `hsl(0, 0%, 100%)`

### Typography
- **Font:** Roboto
- **Weights:** Regular (400), Bold (700)
- **Sizes:**
  - Heading: 2.5rem - 3.5rem
  - Body text: 1rem
  - Small text: 0.8125rem

## ⚙️ Technical Details

### HTML
- Semantic markup
- Proper heading structure
- ARIA attributes for accessibility:
  - `aria-labelledby` for sections
  - `aria-live` for error messages
  - `aria-required` for required fields
  - `aria-invalid` for validation states

### CSS
- Mobile-first approach
- Flexbox for layout
- Media queries for responsiveness
- Smooth transitions
- Responsive images via `<picture>`

### JavaScript
- Native form validation
- Form submission handling
- Redirect to success page

## 📱 Responsiveness

- **Mobile:** up to 768px — vertical layout
- **Tablet:** 768px - 1024px — adaptive layout
- **Desktop:** from 1024px — horizontal layout

## ♿ Accessibility

- Keyboard navigation support (Tab, Enter)
- Proper color contrast (WCAG AA)
- Alternative text for images
- Logical focus order
- Screen reader announcements

## 📝 Form Validation

The form checks:
- Presence of value in email field
- Correct email format (standard validation)
- Display of clear error messages
- Automatic focus on field when error occurs

## 🔧 Possible Improvements

If needed, you can add:
1. Integration with mailing services (Mailchimp, SendGrid)
2. localStorage persistence
3. CAPTCHA for bot protection
4. Submission analytics
5. Dark theme support

## 📄 License

This project is created for educational purposes. All images and design are provided by Frontend Mentor.

---

*Built with ❤️ for frontend development practice*