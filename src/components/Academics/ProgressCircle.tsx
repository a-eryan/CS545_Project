import { useMemo, useEffect, useState } from "react";

interface ProgressCircleProps {
  percentage: number;
}

const ProgressCircle = ({ percentage }: ProgressCircleProps) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  const strokeDashoffset = useMemo(() => {
    return circumference * (1 - animatedPercentage / 100);
  }, [circumference, animatedPercentage]);

  useEffect(() => {
    const animation = requestAnimationFrame(() => {
      setAnimatedPercentage(percentage);
    });

    return () => cancelAnimationFrame(animation);
  }, [percentage]);

  return (
    <div className="relative w-30 h-25">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="stroke-current text-gray-200"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="stroke-current  text-[var(--color-accent)]"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 1s ease-in-out",
          }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute top-[60px] left-[60px]  transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-2xl font-semibold  text-[var(--color-accent)]">
          {percentage.toFixed()}%
        </span>
      </div>
    </div>
  );
};

export default ProgressCircle;
