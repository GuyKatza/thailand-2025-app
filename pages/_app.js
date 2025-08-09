export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        html, body { padding:0; margin:0; background:#fafafa; }
        * { box-sizing: border-box; }
      `}</style>
    </>
  );
}
