import Link from 'next/link';

export default function Home() {
  return (
    <main className="wrap">
      <header className="hero">
        <h1>Thailand 2025 · Trip Assistant</h1>
        <p>כל מה שצריך לטיול — לו״ז, המלצות, בדיקות, עדכונים בזמן אמת.</p>
        <div className="cta">
          <Link href="/dashboard" className="btn">פתחו את הדשבורד</Link>
        </div>
      </header>

      <section className="grid">
        <Link href="/dashboard" className="card">
          <h3>Dashboard</h3>
          <p>מאקרו/מיקרו, עוגנים (טיסות, Halfmoon), מעקב 60/25/15.</p>
        </Link>

        <Link href="/suggest" className="card">
          <h3>Suggest</h3>
          <p>הזנת “פורמט הצעת פעילות”, שמירה ל-Supabase, חלופות ו-Tips.</p>
        </Link>

        <Link href="/review" className="card">
          <h3>Review</h3>
          <p>“הסוכן הבודק”: הצלבה, עדכניות, דירוג משוקלל ופסק-דין.</p>
        </Link>
      </section>

      <footer className="footer">
        <small>Made for Guy & Reut · Thailand 2025</small>
      </footer>

      <style jsx>{`
        .wrap { max-width: 980px; margin: 0 auto; padding: 24px; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
        .hero { text-align: center; padding: 36px 12px; background: linear-gradient(180deg,#f7fafc 0,#ffffff 100%); border-radius: 18px; box-shadow: 0 2px 12px rgba(0,0,0,.05); }
        h1 { margin: 0 0 8px; font-size: 28px; }
        p { margin: 0; color: #444; }
        .cta { margin-top: 18px; }
        .btn { background:#0ea5e9; color:#fff; padding:12px 18px; border-radius:12px; text-decoration:none; display:inline-block; transition:transform .06s ease, box-shadow .2s ease; box-shadow:0 6px 16px rgba(14,165,233,.35); }
        .btn:hover { transform: translateY(-1px); box-shadow:0 8px 22px rgba(14,165,233,.45); }

        .grid { display:grid; grid-template-columns: 1fr; gap:14px; margin:24px 0; }
        @media (min-width: 680px) { .grid { grid-template-columns: repeat(3,1fr); } }

        .card { background:#fff; border:1px solid #eee; border-radius:16px; padding:16px; text-decoration:none; color:inherit; transition: box-shadow .2s ease, transform .06s ease; }
        .card:hover { box-shadow:0 8px 24px rgba(0,0,0,.08); transform: translateY(-2px); }
        .card h3 { margin:0 0 6px; font-size:18px; }
        .card p { margin:0; color:#555; font-size:14px; }

        .footer { text-align:center; color:#777; margin-top:18px; }
      `}</style>
    </main>
  );
}
