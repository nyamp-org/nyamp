# NYAMP — Not Your Average Music Player

> *"not yo average music player, bitch"*

A Linux music player that doesn't suck. Built with Electron + React + Tailwind.

---

## Features

- **Time-synced lyrics** — lyrics that actually follow the song
- **Gapless playback** — no awkward silence between tracks
- **yt-dlp integration** — paste a YouTube playlist URL and just vibe
- **Listen Together** — P2P sync so you can listen with friends in real time
- **Clean UI** — because most music players look like they were designed in 2003

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Electron |
| UI | React + Tailwind CSS |
| Language | TypeScript |
| Build | Webpack + Electron Forge |
| Media | yt-dlp |
| P2P sync | TBD |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- `yt-dlp` installed and in PATH (for YouTube support)

### Install

```bash
git clone https://github.com/nyamp-org/nyamp
cd nyamp
pnpm install
```

### Run

```bash
pnpm start
```

### Build

```bash
pnpm make
```

Produces a `.deb` and `.rpm` under `out/make/`.

## Contributing

This is a group project. If you're reading this you probably know who we are already.

1. Fork → branch → PR
2. Keep PRs focused — one thing at a time
3. Don't break gapless playback, it took forever to get right

## Team

| Handle | GitHub |
|--------|--------|
| xevrion | [@xevrion](https://github.com/xevrion) |
| Arman | [@kaihere14](https://github.com/kaihere14) |
| Chish | [@chishxd](https://github.com/chishxd) |
| Quantinium | [@quantinium3](https://github.com/quantinium3) |

## License

MIT
