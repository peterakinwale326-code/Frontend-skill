# Import the original upstream source files into Frontend-skill

This package contains the 2,452 non-.git files from the supplied archive, preserving their
original relative folder structure under `vendor/original-sources/`. The existing root
`SKILL.md` is not replaced.

## Windows PowerShell

1. Extract this package.
2. Open PowerShell in the extracted `frontend-skill-upstream-import` folder.
3. Clone the repository branch (or open your existing clone):

   ```powershell
   git clone --branch mega-design-skill https://github.com/peterakinwale326-code/Frontend-skill.git
   ```

4. Copy the vendor folder into the cloned repository:

   ```powershell
   Copy-Item -Recurse -Force .\vendor .\Frontend-skill\vendor
   Copy-Item -Force .\IMPORT_UPSTREAM_SOURCES.md .\Frontend-skill\IMPORT_UPSTREAM_SOURCES.md
   ```

5. Commit and push:

   ```powershell
   Set-Location .\Frontend-skill
   git add vendor IMPORT_UPSTREAM_SOURCES.md
   git commit -m "Vendor original upstream design skill sources and assets"
   git push origin mega-design-skill
   ```

The original source files and assets are copied, not rewritten. Nested `.git` metadata
directories were excluded so upstream projects do not become nested Git repositories inside
this repository. All license, notice, attribution, and documentation files outside `.git`
are retained. Review each upstream license before redistributing the repository publicly.
