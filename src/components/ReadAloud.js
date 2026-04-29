import React, { useState, useEffect, useRef } from "react";

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function ReadAloud({ title, html }) {
  const [state, setState] = useState("idle"); // idle | playing | paused
  const utteranceRef = useRef(null);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis.cancel();
    };
  }, []);

  function handleClick() {
    if (typeof window === "undefined") return;
    const synth = window.speechSynthesis;

    if (state === "playing") {
      synth.pause();
      setState("paused");
      return;
    }

    if (state === "paused") {
      synth.resume();
      setState("playing");
      return;
    }

    synth.cancel();
    const text = `${title}. ${stripHtml(html)}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setState("idle");
    utterance.onerror = () => setState("idle");
    utteranceRef.current = utterance;
    synth.speak(utterance);
    setState("playing");
  }

  function handleStop() {
    if (typeof window !== "undefined") window.speechSynthesis.cancel();
    setState("idle");
  }

  const label = state === "playing" ? "Pause" : state === "paused" ? "Resume" : "Listen";

  return (
    <div className="flex items-center gap-3 mb-12">
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 transition-colors"
      >
        {state === "playing" ? (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
        {label}
      </button>

      {state !== "idle" && (
        <button
          onClick={handleStop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-400 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
          Stop
        </button>
      )}
    </div>
  );
}
