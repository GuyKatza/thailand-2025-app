export default function Home() {
  return (
    <main style={{fontFamily:'system-ui, sans-serif', padding:'24px', lineHeight:1.5}}>
      <h1>Thailand 2025 – Trip Assistant</h1>
      <p>גרסת בסיס להפעלה ב‑Vercel. מכאן נפתח את המסכים והחיבורים ל‑Supabase.</p>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/suggest">Suggest</a></li>
        <li><a href="/review">Review</a></li>
      </ul>
    </main>
  );
}
