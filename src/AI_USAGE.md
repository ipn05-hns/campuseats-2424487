# AI Usage Log

## Week 1
- Tool(s): Claude 3.5 Sonnet / Gemini
- What I asked for: Review JSX rules for closing tags and toFixed formatting.
- What I kept, changed or rejected, and why: Kept JSX fragment wrapper for App.jsx and proper class-to-className changes.
- One thing the AI got wrong and how I fixed it: AI initially suggested class instead of className, which I corrected.

## Week 2
- Tool(s): Gemini
- What I asked for: State management structure for cart arrays without mutating via push().
- What I kept, changed or rejected, and why: Used setCart((prev) => [...prev, item]) immutable pattern.
- One thing the AI got wrong and how I fixed it: AI initially used array index as key in map(), changed to unique item.id.

## Week 3
- Tool(s): Gemini
- What I asked for: AbortController pattern for useEffect and form validation handling.
- What I kept, changed or rejected, and why: Kept abort controller return cleanup function; custom validated strings without third party libraries.
- One thing the AI got wrong and how I fixed it: AI initially forgot to filter out items when qty reaches 0 in handleChangeQty, added .filter(l => l.qty > 0).