type Slice = { label: string; value: number; color: string };

type PieChartProps = {
  data: Slice[];
  size?: number;
  title: string;
  className?: string;
};

export default function PieChart({ data, size = 200, title, className = '' }: PieChartProps) {
  const total = data.reduce((s, d) => s + d.value, 0);
  if (total === 0) return null;

  let acc = 0;
  const conicParts = data
    .map((d) => {
      const pct = (d.value / total) * 100;
      const start = acc;
      acc += pct;
      return `${d.color} ${start}% ${acc}%`;
    })
    .join(', ');

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <div
          className="rounded-full border-4 border-white shadow-lg"
          style={{
            width: size,
            height: size,
            background: `conic-gradient(${conicParts})`,
          }}
        />
      </div>
      <p className="mt-2 text-sm font-semibold text-gov-blue-dark">{title}</p>
      <ul className="mt-2 flex flex-wrap justify-center gap-3">
        {data.map((slice) => (
          <li key={slice.label} className="flex items-center gap-1.5 text-xs text-gray-600">
            <span
              className="inline-block w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: slice.color }}
            />
            <span>{slice.label} {slice.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
