export default function LoadingProject() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-6 w-24 rounded bg-muted" />
      <div className="h-10 w-2/3 rounded bg-muted" />
      <div className="h-5 w-full rounded bg-muted" />
      <div className="h-5 w-5/6 rounded bg-muted" />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 pt-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-24 rounded-xl border bg-muted/20" />
        ))}
      </div>

      <div className="h-40 rounded-xl border bg-muted/20" />
      <div className="h-40 rounded-xl border bg-muted/20" />
    </div>
  );
}