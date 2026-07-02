"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/language-provider";

const SIGNATURE_HEIGHT = 86;

type SignaturePadProps = {
  onChange: (dataUrl: string) => void;
};

export function SignaturePad({ onChange }: SignaturePadProps) {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDrawing = useRef(false);
  const hasDrawn = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = container.clientWidth;
      canvas.width = width * dpr;
      canvas.height = SIGNATURE_HEIGHT * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${SIGNATURE_HEIGHT}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.strokeStyle = "#1f1f1f";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    };

    setupCanvas();
    window.addEventListener("resize", setupCanvas);
    return () => window.removeEventListener("resize", setupCanvas);
  }, []);

  const getPoint = (event: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();

    if ("touches" in event) {
      const touch = event.touches[0] ?? event.changedTouches[0];
      return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
    }

    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const saveSignature = () => {
    if (hasDrawn.current && canvasRef.current) {
      onChange(canvasRef.current.toDataURL("image/png"));
    }
  };

  const startDrawing = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    isDrawing.current = true;
    const ctx = canvasRef.current?.getContext("2d");
    const point = getPoint(event);
    ctx?.beginPath();
    ctx?.moveTo(point.x, point.y);
  };

  const draw = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing.current) return;
    event.preventDefault();

    const ctx = canvasRef.current?.getContext("2d");
    const point = getPoint(event);
    ctx?.lineTo(point.x, point.y);
    ctx?.stroke();
    hasDrawn.current = true;
  };

  const stopDrawing = () => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    saveSignature();
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
    hasDrawn.current = false;
    onChange("");
  };

  return (
    <div className="space-y-2">
      <div
        ref={containerRef}
        className="w-full border border-border bg-background"
        style={{ height: SIGNATURE_HEIGHT }}
      >
        <canvas
          ref={canvasRef}
          className="block cursor-crosshair touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>
      <p className="text-xs text-muted-foreground">{t.inschrijving.signatureHint}</p>
      <button type="button" onClick={clear} className="text-sm font-medium text-primary hover:underline">
        {t.inschrijving.signatureClear}
      </button>
    </div>
  );
}
