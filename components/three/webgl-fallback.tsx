type WebGLFallbackProps = {
  label?: string;
};

export function WebGLFallback({ label = "Spatial preview" }: WebGLFallbackProps) {
  return (
    <div className="noise-overlay divider-grid relative flex min-h-[320px] items-end border border-line bg-fog/45 p-5 md:min-h-[420px]">
      <div className="relative z-10 grid gap-2 border border-line bg-paper/92 p-4 backdrop-blur-sm">
        <p className="eyebrow text-ink/58">3D fallback</p>
        <p className="max-w-xs text-sm leading-6 text-ink/76">
          {label}. If WebGL is unavailable, the site keeps the same structural emphasis without the interactive scene.
        </p>
      </div>
    </div>
  );
}
