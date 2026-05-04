/* Root app + Tweaks panel */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 285,
  "accentChroma": 0.22,
  "theme": "light",
  "showYears": 25,
  "compactMode": false
}/*EDITMODE-END*/;

function App() {
  const [theme, setTheme] = React.useState(TWEAK_DEFAULTS.theme);
  const [toastMsg, setToastMsg] = React.useState("");
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useReveal();
  useCardGlow();

  // Sync theme with html attribute
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Accent hue from tweaks
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", `oklch(${theme === "dark" ? 0.72 : 0.52} ${tweaks.accentChroma} ${tweaks.accentHue})`);
    root.style.setProperty("--accent-soft",
      theme === "dark"
        ? `oklch(0.28 ${Math.min(0.08, tweaks.accentChroma * 0.4)} ${tweaks.accentHue})`
        : `oklch(0.94 ${Math.min(0.04, tweaks.accentChroma * 0.2)} ${tweaks.accentHue})`);
  }, [tweaks.accentHue, tweaks.accentChroma, theme]);

  const showToast = (msg) => setToastMsg(msg);

  return (
    <>
      <ScrollProgress />
      <MouseBlob />
      <Nav theme={theme} setTheme={setTheme} />
      <Hero />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Rates />
      <FAQ />
      <Contact showToast={showToast} />
      <Footer />
      <Toast msg={toastMsg} onDone={() => setToastMsg("")} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme">
          <TweakRadio
            label="Appearance"
            value={theme}
            onChange={setTheme}
            options={[{ value: "light", label: "Light" }, { value: "dark", label: "Dark" }]}
          />
        </TweakSection>
        <TweakSection title="Accent color">
          <TweakSlider
            label="Hue"
            value={tweaks.accentHue}
            min={0} max={360} step={5}
            onChange={(v) => setTweak('accentHue', v)}
          />
          <TweakSlider
            label="Saturation"
            value={tweaks.accentChroma}
            min={0.04} max={0.28} step={0.02}
            onChange={(v) => setTweak('accentChroma', v)}
          />
          <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
            {[
              { name: "Indigo", h: 285, c: 0.22 },
              { name: "Violet", h: 310, c: 0.2 },
              { name: "Blue", h: 250, c: 0.2 },
              { name: "Teal", h: 180, c: 0.14 },
              { name: "Green", h: 155, c: 0.16 },
              { name: "Amber", h: 65, c: 0.16 },
              { name: "Red", h: 25, c: 0.2 },
            ].map((p) => (
              <button
                key={p.name}
                onClick={() => { setTweak('accentHue', p.h); setTweak('accentChroma', p.c); }}
                style={{
                  padding: "4px 10px",
                  fontSize: 11,
                  borderRadius: 999,
                  border: "1px solid var(--border)",
                  background: `oklch(0.6 ${p.c} ${p.h})`,
                  color: "white",
                  cursor: "pointer",
                }}
              >{p.name}</button>
            ))}
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
