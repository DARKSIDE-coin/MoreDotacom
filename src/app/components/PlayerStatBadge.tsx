interface PlayerStatBadgeProps {
  kda?: string;
  gpm?: number;
  xpm?: number;
  kills?: number;
  deaths?: number;
  assists?: number;
  compact?: boolean;
}

export function PlayerStatBadge({ kda, gpm, xpm, kills, deaths, assists, compact = false }: PlayerStatBadgeProps) {
  const calculatedKDA = kda || (kills !== undefined && deaths !== undefined && assists !== undefined
    ? ((kills + assists) / Math.max(deaths, 1)).toFixed(2)
    : '0.00');

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 text-xs font-mono">
        <span className="text-foreground">{calculatedKDA}</span>
        <span className="text-muted-foreground">KDA</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-muted/50 rounded border border-border">
      {/* KDA */}
      <div className="flex items-baseline gap-1">
        <span className="font-mono text-primary">{calculatedKDA}</span>
        <span className="text-xs text-muted-foreground uppercase tracking-wide">KDA</span>
      </div>

      {kills !== undefined && deaths !== undefined && assists !== undefined && (
        <>
          <div className="w-px h-4 bg-border"></div>
          <div className="flex items-center gap-1 text-xs font-mono">
            <span className="text-green-400">{kills}</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-accent">{deaths}</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-blue-400">{assists}</span>
          </div>
        </>
      )}

      {/* GPM */}
      {gpm !== undefined && (
        <>
          <div className="w-px h-4 bg-border"></div>
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-foreground">{gpm}</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">GPM</span>
          </div>
        </>
      )}

      {/* XPM */}
      {xpm !== undefined && (
        <>
          <div className="w-px h-4 bg-border"></div>
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-foreground">{xpm}</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">XPM</span>
          </div>
        </>
      )}
    </div>
  );
}
