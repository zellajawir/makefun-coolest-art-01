# Striking the Sun

A giant match lights the sun. This entry preserves the composition of the
user-selected artwork for the [make.fun coolest-art-01 bounty](https://make.fun/bounty/coolest-art-01).

## Run

Requires Node.js 22 with TypeScript execution enabled. On Node.js 22.17.1,
pass `--experimental-strip-types`; Node.js 22.18 or later enables it by default.
No packages, build step, credentials, or runtime network access are needed.

```sh
MAKEFUN_OUTPUT_DIR=./out node --experimental-strip-types main.ts
```

PowerShell:

```powershell
$env:MAKEFUN_OUTPUT_DIR = './out'
node --experimental-strip-types main.ts
```

Without MAKEFUN_OUTPUT_DIR, the destination is `/output/entry.png`.
The program creates the output directory and copies `submission.jpg` beside
`main.ts` byte for byte. It also works when launched from another directory.
The output filename is `entry.png`, but its contents are JPEG, as the rules allow.

## Artwork

`sun.png` is the untouched local original (1254 by 1254 pixels); it is ignored
by Git. `submission.jpg` is its 1024 by 1024 submission copy, 940,798 bytes.
Preparation used Pillow 12.3.0: proportional LANCZOS resizing, then JPEG quality
97, chroma subsampling disabled, and optimized encoding. There was no cropping,
recomposition, or intentional color adjustment. JPEG compression is lossy.
Pillow is only a preparation tool and is not used by the entry at runtime.

## Verification

The official kit is in the sibling `coolest-art-01-kit` directory. Before writing
code, its bundler found the original Codex session with `bundle --dry-run`.
Run the official offline checks from the kit, using absolute paths:

```sh
node cli/makefun.mjs bundle --repo <absolute-project-path> --out <outside-repo>/transcripts.tar.gz
node cli/makefun.mjs check --kit . --repo <absolute-project-path> --worktree --transcripts <outside-repo>/transcripts.tar.gz
```

This competition has no local art grade: the server judges submitted entries.
The offline worktree check does not establish repository ownership or replace
the checks performed at submission. No remote repository or submission is
created by this project.

### Local results

- Two executions passed on Node.js 22.17.1 from Adobe Creative Cloud Experience,
  using `--experimental-strip-types` and separate output directories, including
  a run from a different working directory. NODE_PATH and NODE_OPTIONS were
  removed from the test environments; no node_modules directory was present.
- Earlier checks on Node.js 24.11.1 also verified overwriting existing outputs.
- Both outputs decoded as complete 1024 by 1024 JPEG images and matched the
  submission asset byte for byte, at 940,798 bytes.
- Submission and both output SHA-256 values:
  `931c8c3310cd6a7b759bf0295a228bb22cbdbc586d7eed9f128209435b20a90f`.
- Original SHA-256 remained:
  `aaac6b2392e4bc6637d23b764600ab32e1d7d53194ea0aa62399a7d4d1f96625`.
- All 11 kit files matched the sizes and SHA-256 values in `kit.json`.
- The official worktree check passed, including the transcript checks for
  authorship, revisions, timing, and priced usage.

The Node.js 22 runtime is at
`C:\Program Files\Adobe\Adobe Creative Cloud Experience\libs\node.exe`.
Its only diagnostic in both runs was the expected experimental type-stripping
warning. The entry imports only `node:fs` and `node:path`, with no network calls
or additional dependencies. The live requirements endpoint was unreachable;
the offline check uses the supplied kit's policy. Test reports,
outputs, and the transcript bundle are outside the repository under the
system temporary directory's `coolest-art-verification` folder.

## License

MIT; see LICENSE.
