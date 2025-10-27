# AI RULES: Animal Adoption Platform

## Project Overview
You are building a modern, scalable web platform that connects animal shelters (canis/abrigos) with potential adopters. The platform has two main user types: shelters that manage their animals, and adopters who browse and apply for adoption.

## Tech Stack & Architecture

### Core Technologies
- React 18+ with TypeScript (strict mode enabled)
- React Router v6 for routing - routes MUST be defined in `src/App.tsx`
- Vite as build tool
- Tailwind CSS for all styling (NO inline styles, NO CSS modules)
- shadcn/ui components (pre-installed, DO NOT reinstall)
- Lucide React for icons
- Radix UI primitives (pre-installed via shadcn/ui)

### Project Structure
```
src/
├── App.tsx                 # Main app component with ALL routes
├── main.tsx               # Entry point
├── pages/                 # Page components (one per route)
│   ├── Index.tsx         # Landing page (default route)
│   ├── Catalog.tsx       # Animal catalog with filters
│   ├── AnimalProfile.tsx # Individual animal details
│   ├── ShelterProfile.tsx # Shelter public page
│   ├── HowToAdopt.tsx    # Adoption process info
│   ├── ForShelters.tsx   # Shelter registration info
│   ├── adopter/          # Authenticated adopter pages
│   │   ├── Dashboard.tsx
│   │   ├── Favorites.tsx
│   │   └── Applications.tsx
│   └── shelter/          # Authenticated shelter pages
│       ├── Dashboard.tsx
│       ├── Animals.tsx
│       ├── Applications.tsx
│       └── Profile.tsx
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components (DO NOT EDIT)
│   ├── layout/          # Layout components (Header, Footer, Sidebar)
│   ├── animal/          # Animal-related components (AnimalCard, AnimalGrid)
│   ├── shelter/         # Shelter-related components
│   ├── forms/           # Form components
│   └── shared/          # Shared utility components
├── lib/                 # Utilities and helpers
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
└── services/            # API calls and data fetching
```

## Critical Development Rules

### 1. Component Architecture
- **Pages** (`src/pages/`): Route-level components, orchestrate data fetching and layout
- **Components** (`src/components/`): Reusable, presentational, receive props
- ALWAYS update `src/pages/Index.tsx` when creating new features so users can see them
- Use composition over inheritance
- Keep components small and focused (single responsibility)
- Extract reusable logic into custom hooks (`src/hooks/`)

### 2. Styling Guidelines
- Use ONLY Tailwind CSS utility classes for styling
- NO inline styles, NO CSS modules, NO styled-components
- Use shadcn/ui components as base (button, card, dialog, etc.)
- DO NOT edit files in `src/components/ui/` - create new components if customization needed
- Responsive design: mobile-first approach using Tailwind breakpoints (sm:, md:, lg:, xl:)
- Use Tailwind's design tokens for consistency (colors, spacing, typography)

### 3. State Management
- Use React hooks (useState, useReducer, useContext) for local state
- Create custom hooks for shared logic
- Use URL state (React Router) for filters and pagination
- For complex state, use Context API or consider Zustand
- NEVER use localStorage or sessionStorage (not supported in Claude artifacts)

### 4. Data Fetching & APIs
- Create service functions in `src/services/` for API calls
- Use async/await for all async operations
- Implement proper loading states (skeleton screens preferred)
- Handle errors gracefully with error boundaries and user-friendly messages
- Use React Query or SWR for data fetching if complex caching needed

### 5. TypeScript Best Practices
- Define types in `src/types/` for domain models (Animal, Shelter, User, Application)
- Use interfaces for object shapes, types for unions/intersections
- Avoid `any` - use `unknown` if type is truly unknown
- Use strict null checks
- Export types that are used across multiple files

### 6. Performance Optimization
- Use React.memo() for expensive components that re-render frequently
- Implement lazy loading for routes: `const Page = lazy(() => import('./pages/Page'))`
- Use Intersection Observer API for scroll-triggered animations
- Optimize images: use appropriate formats (WebP), implement lazy loading
- Avoid unnecessary re-renders: useCallback, useMemo where appropriate
- Keep bundle size small: code splitting, tree shaking

### 7. Accessibility (a11y)
- Use semantic HTML elements (nav, main, article, section)
- Ensure all interactive elements are keyboard accessible
- Use proper ARIA labels when needed
- Maintain color contrast ratios (WCAG AA minimum)
- Implement focus management for modals and dialogs
- Test with screen readers

### 8. User Experience Patterns
- Show loading states for all async operations (skeletons > spinners)
- Provide feedback for user actions (toast notifications, success messages)
- Implement optimistic updates where appropriate
- Use debouncing for search inputs (300ms recommended)
- Add empty states with clear calls-to-action
- Implement infinite scroll or pagination for large lists

## Domain-Specific Guidelines

### Animal Catalog
- Implement efficient filtering (species, size, age, gender, location, shelter)
- Show animal cards in responsive grid (1 col mobile, 2-3 tablet, 4+ desktop)
- Display key info on cards: photo, name, age, size, shelter name
- Add favorite/heart icon with optimistic update
- Implement search with debounced API calls

### Shelter Dashboard
- Prioritize performance: virtualize large animal lists if needed
- Show actionable metrics (pending applications, total animals, adoptions this month)
- Implement drag-and-drop for photo upload
- Use optimistic updates when marking animals as adopted
- Add bulk actions for managing multiple animals

### Adoption Flow
- Multi-step form with progress indicator
- Save form state (in memory, not localStorage)
- Validate inputs in real-time with helpful error messages
- Show confirmation before submission
- Redirect to success page with next steps

### Authentication & Authorization
- Implement protected routes with redirect to login
- Show different UI based on user role (adopter vs shelter)
- Handle token refresh gracefully
- Implement "remember me" functionality (if backend supports)

## Animation Guidelines
- Use Framer Motion for complex animations
- Implement `prefers-reduced-motion` support
- Keep animations fast (150-300ms for micro-interactions)
- Use CSS transforms and opacity for performance
- Add stagger animations for lists (50-100ms delay between items)
- Implement scroll-triggered animations with Intersection Observer

## Error Handling
- Create error boundary component for catching React errors
- Show user-friendly error messages (avoid technical jargon)
- Implement retry mechanisms for failed API calls
- Log errors for debugging (console.error in development)
- Provide fallback UI when components fail

## Testing Considerations
- Write components to be easily testable (pure functions when possible)
- Separate business logic from UI components
- Use data-testid attributes for critical elements
- Mock API calls in tests
- Test error states and edge cases

## Security Best Practices
- Sanitize user inputs to prevent XSS
- Never store sensitive data in component state
- Implement CSRF protection if handling forms
- Use HTTPS for all API calls
- Validate data on both client and server

## Code Quality
- Use meaningful variable and function names (avoid abbreviations)
- Add comments for complex logic only (code should be self-documenting)
- Keep functions small (< 20 lines when possible)
- Extract magic numbers into named constants
- Use early returns to reduce nesting

## Common Patterns to Use

### Data Fetching Hook
```typescript
// Custom hook pattern for data fetching
export function useAnimals(filters: AnimalFilters) {
  const [data, setData] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    fetchAnimals(filters)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [filters]);
  
  return { data, loading, error };
}
```

### Protected Route Pattern
```typescript
// Wrap routes that require authentication
function ProtectedRoute({ children, role }: { children: React.ReactNode; role: 'adopter' | 'shelter' }) {
  const { user, loading } = useAuth();
  
  if (loading) return <LoadingSpinner />;
  if (!user) return <Navigate to="/login" />;
  if (user.role !== role) return <Navigate to="/" />;
  
  return <>{children}</>;
}
```

## Key Features Priority

### Phase 1 (MVP)
1. Landing page with featured animals
2. Animal catalog with basic filters
3. Animal profile page
4. Shelter public profile
5. Basic authentication (login/register)
6. Adopter dashboard with favorites
7. Shelter dashboard to add animals

### Phase 2
1. Application submission and management
2. Messaging system between adopters and shelters
3. Advanced filtering and search
4. Shelter verification process
5. Email notifications

### Phase 3
1. Animal matching algorithm
2. Success stories section
3. Donation system
4. Multi-language support
5. Analytics dashboard for shelters

## Performance Targets
- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3.5s
- Lighthouse Performance Score: > 90
- Bundle size: < 250kb gzipped (initial load)
- Images optimized: WebP format, responsive sizes

## DO NOT
- Edit shadcn/ui component files in `src/components/ui/`
- Use localStorage or sessionStorage (not supported)
- Create inline styles or CSS modules
- Forget to update routes in `src/App.tsx`
- Forget to update `src/pages/Index.tsx` when adding new features
- Use `any` type in TypeScript
- Create deeply nested component trees (max 3-4 levels)
- Implement features without considering mobile users

## ALWAYS
- Use TypeScript with proper types
- Keep all routes in `src/App.tsx`
- Update main page (`src/pages/Index.tsx`) to show new components
- Use Tailwind CSS for all styling
- Use shadcn/ui components as base
- Implement loading and error states
- Consider mobile-first responsive design
- Add proper TypeScript types for props and state
- Handle errors gracefully
- Optimize for performance
- Think about accessibility
- Test user flows end-to-end

## Success Criteria
The platform is successful when:
- Adopters can easily browse and find animals that match their preferences
- Shelters can efficiently manage their animals and applications
- The adoption process is clear and straightforward
- The platform is fast, accessible, and works on all devices
- Users feel emotionally connected to the cause through design and interactions