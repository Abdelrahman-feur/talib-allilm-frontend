"use client";

import React, { useRef, useState, useEffect } from "react";

type OTPInputProps = {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  className?: string;
  inputClassName?: string;
  ariaLabel?: string;
  error?: string;
};

export default function OTPInput({
  length = 6,
  value,
  onChange,
  onComplete,
  onBlur,
  autoFocus = true,
  className = "",
  inputClassName = "w-10 h-10 focus:outline-primary md:w-10 md:h-10 lg:w-[55px] lg:h-[55px] 2xl:w-[88px] 2xl:h-[88px] text-center rounded-lg border bg-white",
  ariaLabel = "OTP input",
  error,
}: OTPInputProps) {
  const [internalValue, setInternalValue] = useState<string[]>(
    Array.from({ length }, () => "")
  );
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const controlled = typeof value === "string";

  useEffect(() => {
    if (controlled && typeof value === "string") {
      const arr = value.split("").slice(0, length);
      const padded = [
        ...arr,
        ...Array.from({ length: length - arr.length }, () => ""),
      ];
      setInternalValue(padded);
    }
  }, [value, length, controlled]);

  const getValueString = (arr: string[]) => arr.join("");

  useEffect(() => {
    if (!controlled && onChange) {
      onChange(getValueString(internalValue));
    }
    if (internalValue.every((ch) => ch !== "")) {
      onComplete?.(getValueString(internalValue));
    }
  }, [internalValue]); // eslint-disable-line

  useEffect(() => {
    if (autoFocus) {
      const first = inputsRef.current[0];
      first?.focus();
      first?.select?.();
    }
  }, [autoFocus]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const raw = e.target.value || "";
    const filtered = raw.replace(/[^a-zA-Z0-9]/g, ""); // ✅ أرقام + حروف فقط

    if (filtered.length === 0) {
      updateAt(idx, "");
      return;
    }

    if (filtered.length > 1) {
      const vals = filtered.split("");
      const next = [...internalValue];
      for (let i = 0; i < vals.length && idx + i < length; i++) {
        next[idx + i] = vals[i];
      }
      setInternalValue(next);
      const lastPos = Math.min(length - 1, idx + vals.length - 1);
      inputsRef.current[lastPos]?.focus();
      inputsRef.current[lastPos]?.select?.();
      return;
    }

    updateAt(idx, filtered);
    if (filtered && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
      inputsRef.current[idx + 1]?.select?.();
    }
  };

  const updateAt = (idx: number, ch: string) => {
    if (controlled) {
      const cur = value ?? "";
      const arr = cur.split("").slice(0, length);
      const padded = [
        ...arr,
        ...Array.from({ length: length - arr.length }, () => ""),
      ];
      padded[idx] = ch;
      onChange?.(getValueString(padded));
    } else {
      setInternalValue((prev) => {
        const next = [...prev];
        next[idx] = ch;
        return next;
      });
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    const key = e.key;

    if (key === "Backspace") {
      if (
        (controlled ? (value ?? "").charAt(idx) : internalValue[idx]) !== ""
      ) {
        updateAt(idx, "");
        return;
      }
      if (idx > 0) {
        updateAt(idx - 1, "");
        inputsRef.current[idx - 1]?.focus();
      }
    } else if (key === "ArrowLeft") {
      if (idx > 0) inputsRef.current[idx - 1]?.focus();
    } else if (key === "ArrowRight") {
      if (idx < length - 1) inputsRef.current[idx + 1]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").replace(/[^a-zA-Z0-9]/g, "");
    if (!paste) return;
    const chars = paste.split("");
    const next = controlled
      ? (() => {
          const cur = value ?? "";
          const arr = cur.split("").slice(0, length);
          const padded = [
            ...arr,
            ...Array.from({ length: length - arr.length }, () => ""),
          ];
          for (let i = 0; i < chars.length && idx + i < length; i++)
            padded[idx + i] = chars[i];
          onChange?.(getValueString(padded));
          return padded;
        })()
      : (() => {
          const cur = internalValue.slice();
          for (let i = 0; i < chars.length && idx + i < length; i++) {
            cur[idx + i] = chars[i];
          }
          setInternalValue(cur);
          return cur;
        })();

    const lastPos = Math.min(length - 1, idx + chars.length - 1);
    inputsRef.current[lastPos]?.focus();
    inputsRef.current[lastPos]?.select?.();
  };

  const renderInputs = () =>
    Array.from({ length }).map((_, i) => {
      const val = controlled
        ? (value ?? "").charAt(i) ?? ""
        : internalValue[i] ?? "";

      return (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          maxLength={1}
          value={val}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={(e) => handlePaste(e, i)}
          onBlur={onBlur} // ✅ important
          aria-label={`${ariaLabel} ${i + 1}`}
          className={`${inputClassName} ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-200 focus:border-primary focus:ring-primary"
          }`}
        />
      );
    });

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {renderInputs()}
      {error && <p className="text-red-500 text-sm ml-2">{error}</p>}
    </div>
  );
}
