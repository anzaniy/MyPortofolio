---
title: "Musely"
description: "A Windows desktop widget that shows synced song lyrics for the track currently playing, always on top of other windows."
category: "System Dev"
kind: "individual"
role: "Solo Developer"
period: "2026"
tech: ["Rust", "Tauri v2", "TypeScript", "HTML", "CSS", "LRCLIB API"]
gallery:
  - "/images/projects/musely-1.png"
  - "/images/projects/musely-2.png"
  - "/images/projects/musely-3.png"
repo: "https://github.com/anzaniy/Musely"
order: 2
---

## Overview

Musely is a small Windows desktop widget that shows the lyrics of the song currently playing and stays above other windows (*always-on-top*). The widget reads the track title directly from Windows through GSMTC, fetches synced lyrics from LRCLIB, and highlights the line being sung. Everything runs locally without a Spotify login.

## Background

Song lyrics are usually only visible inside the music player app, so they are hidden the moment the user opens another app. Musely separates the lyrics from the player: a small widget floats in the corner of the screen, with a compact mode that shows only the lyric text when the cursor is not over the widget.

## My Role

- Designed the desktop app architecture with Tauri v2: a Rust backend for playback data and a web frontend for the widget interface.
- Implemented reading of the Windows media session (GSMTC) with polling and merging data from several sources.
- Integrated LRCLIB for synced lyrics along with an in-memory cache.
- Built the widget interface: song card, lyric lines, controls, and the compact mode on hover.
- Handled lyric synchronization and time offset adjustments stored in `localStorage`.
- Set up the transparent, undecorated, always-on-top Tauri window and the tray icon.

## Features

- **Synced lyrics**: the active line is highlighted and scrolls with the song position.
- **No Spotify login**: title and playback status are read from Windows GSMTC.
- **Playback controls**: previous, play/pause, and next directly from the widget.
- **Offset adjustment**: lyrics can be moved forward or backward in 100 ms steps, and the value is saved.
- **Compact mode**: the card and buttons hide when the cursor moves away, leaving outlined lyric text.
- **Always on top**: the widget stays visible when switching apps and can be hidden from the tray.

## Tech Stack

| Area | Technology |
| --- | --- |
| Desktop shell | Tauri v2 (Rust + WebView2) |
| Frontend | TypeScript, HTML, CSS |
| Playback source | Global System Media Transport Controls (GSMTC) |
| Lyrics source | LRCLIB |
| Distribution | Local build (NSIS installer) |

## How It Works

1. The Rust thread reads the Windows playback state every 500 ms and emits a `playback:update` event.
2. When the title, artist, or duration changes, the app fetches synced lyrics from LRCLIB and emits `lyrics:update`.
3. The frontend interpolates the song position between polls, corrects timing drift gradually, then picks the active line with a *binary search*.
4. Lyrics are cached in memory so the same song is not downloaded twice.
5. The idle state is only announced after three consecutive read failures so the display does not flicker.

## Notes

For now lyrics are only cached in memory, a global hotkey to show/hide the widget is not available yet, and album thumbnails are not fetched from GSMTC. The transparent area around the widget is also not *click-through* yet because hover mode needs mouse events.