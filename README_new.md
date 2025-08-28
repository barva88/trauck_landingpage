# TRAUCK — Landing page

Proyecto de landing page para TRAUCK basado en una plantilla Tailwind CSS.

Contenido:
- `src/index.html` — HTML principal y contenido de la landing.
- `src/input.css` — archivo de entrada Tailwind.
- `src/output.css` — archivo CSS compilado (no es necesario commitearlo si usas la build).
- `src/img/` — imágenes y assets.

Cómo ejecutar localmente (recomendado):

1. Instala dependencias:

```powershell
npm install
```

2. Genera el CSS con Tailwind en modo watch:

```powershell
npm run dev
```

3. Abre `src/index.html` con un servidor estático. Ejemplo con Python:

```powershell
# desde el directorio del proyecto
Set-Location -LiteralPath .\src
python -m http.server 5175
# abrir http://localhost:5175/
```

Buenas prácticas:
- Mantén `node_modules/` fuera del repositorio (se ha añadido `.gitignore`).
- Usa `gh auth login` o SSH para autenticar cuando empujes a GitHub.

Licencia: (agrega la licencia del proyecto cuando decidas)
