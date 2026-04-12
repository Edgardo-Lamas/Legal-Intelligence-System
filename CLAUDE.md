# Legal Intelligence System — Proyecto

## Contexto del producto

Plataforma de formación en inteligencia artificial aplicada al ejercicio del derecho, orientada a abogados argentinos. Parte de un ecosistema mayor:

- **Legal Intelligence System** (este sitio) — Curso de formación, 10 módulos
- **Alcance Legal Penal** — Asistente IA especializado en CPP PBA (Ley 11.922)
- **Alcance Legal Civil-Familiar-Comercial** — Asistente IA gemelo, área civil
- **Studio Lamas** — Hub de marca personal, presenta el ecosistema completo

El objetivo es monetizar el curso ($150–400 USD) y los asistentes (suscripción mensual + acceso premium bundle).

---

## Stack técnico

- React 19 + Vite SPA
- react-router-dom v7, BrowserRouter con `basename="/Legal-Intelligence-System"`
- GitHub Pages (estático) — post-build script genera 36+ rutas como directorios con index.html
- CSS custom properties — design system "Legal Codex" (Playfair Display, Source Serif 4, DM Sans, JetBrains Mono)
- Gold `#c9a84c` como acento principal
- MCP server propio: `https://bwwlgfgjxslbavhfuhia.supabase.co/functions/v1/mcp-server`

### Convenciones de código
- Componentes en `src/components/NombreComponente/NombreComponente.jsx` + `.css`
- Páginas en `src/pages/ModuloPágina/ModuloPáginaM{n}U{n}.jsx`
- Estilos globales en `src/styles/`
- Al agregar rutas nuevas, actualizar `scripts/generate-routes.js` y `src/App.jsx`

---

## Diseño del ecosistema

```
STUDIO LAMAS (hub de marca)
    ├── Legal Intelligence System (formación)
    ├── Alcance Legal Penal (herramienta / CPP PBA)
    └── Alcance Legal Civil-Familiar-Comercial (herramienta / civil)
```

### Identidad visual por producto
| Producto | Acento | Tipografía |
|---|---|---|
| Legal Intelligence System | Gold `#c9a84c` | Playfair Display |
| Alcance Legal Penal | Rojo profundo `#8b1a1a` | Misma base |
| Alcance Legal Civil | Azul marino `#1a3a5c` | Misma base |
| Studio Lamas | Neutro, los tres colores | Misma base |

---

## Estructura del curso — 10 Módulos

> Estado: definición aprobada. Contenido a rellenar módulo por módulo.
> El contenido anterior (8 módulos) sirve de base — reusar lo que sigue siendo válido.

---

### MÓDULO 1 — La tríada: Claude, Gemini y ChatGPT
**Objetivo:** Que el abogado entienda las diferencias reales entre los tres modelos y sepa cuándo usar cada uno. Claude pasa a ser el tercer pilar desde la primera unidad.

| Unidad | Título | Estado |
|---|---|---|
| M1 U1 | Qué es la IA generativa y por qué cambia el ejercicio del derecho | existente — revisar |
| M1 U2 | ChatGPT: fortalezas, límites y configuración para trabajo jurídico | existente — actualizar |
| M1 U3 | Gemini 2025: investigación masiva y Deep Research | existente — reescribir |
| M1 U4 | Claude: razonamiento, proyectos y por qué lidera en análisis jurídico | nuevo |
| M1 U5 | La tríada en práctica: tabla de decisión por tarea | nuevo |

**Vínculos con el ecosistema:** M1 U4 menciona Alcance Legal como ejemplo de herramienta construida con Claude.

---

### MÓDULO 2 — Prompt Engineering para abogados
**Objetivo:** Dominar la comunicación con IA como habilidad profesional central.

| Unidad | Título | Estado |
|---|---|---|
| M2 U1 | El prompt como mandato jurídico: estructura y componentes | existente — ok |
| M2 U2 | Control de contexto y documentos largos | existente — ok |
| M2 U3 | Filtrado de jurisprudencia y doctrina con IA | existente — ok |
| M2 U4 | Redacción asistida: metodología y errores frecuentes | existente — ok |
| M2 U5 | Preparación de juicio e interrogatorios | existente — ok |
| M2 U6 | Razonamiento extendido: cuándo usar o1, o3 o Claude Extended Thinking | nuevo |
| M2 U7 | Biblioteca de prompts y Custom GPTs para el estudio | existente — ok |

---

### MÓDULO 3 — Práctica individual y modelo de negocio
**Objetivo:** Organizar la práctica con IA y replantear el modelo de honorarios.

| Unidad | Título | Estado |
|---|---|---|
| M3 U1 | Organización del estudio con IA: el sistema mínimo viable | existente — ok |
| M3 U2 | Contabilidad y gestión fiscal asistida | existente — ok |
| M3 U3 | Escritura persuasiva y comunicación digital | existente — ok |
| M3 U4 | Marketing legal y posicionamiento con IA | existente — ok |
| M3 U5 | Modelo de negocio con IA: cobrar por resultado, no por hora | nuevo |

---

### MÓDULO 4 — Gemini 2025: investigación jurídica a escala
**Objetivo:** Dominar Gemini 2.5 Pro para investigación documental masiva. Reescritura del M4 original.

| Unidad | Título | Estado |
|---|---|---|
| M4 U1 | Gemini 2.5 Pro: arquitectura, contexto 2M y Deep Research actualizado | reescribir |
| M4 U2 | Canvas y visualización de estructuras jurídicas | existente — actualizar |
| M4 U3 | Automatización y memoria jurídica | existente — actualizar |
| M4 U4 | Gemini + Google Workspace: integración en el flujo del estudio | nuevo |

---

### MÓDULO 5 — Claude: de Projects a agentes jurídicos
**Objetivo:** Claude como herramienta central del trabajo jurídico. Expandir el M6 original + agregar agentes.

| Unidad | Título | Estado |
|---|---|---|
| M5 U1 | Claude Projects: configuración avanzada para gestión de causas | existente (M6 U1) — expandir |
| M5 U2 | Extended Thinking: análisis jurídico complejo paso a paso | nuevo |
| M5 U3 | Artifacts: visualizaciones, tablas y documentos interactivos | nuevo |
| M5 U4 | Claude API: construir tu primer asistente sin ser programador | nuevo |
| M5 U5 | MCP servers: conectar Claude con tus propias fuentes jurídicas | nuevo |

**Vínculo clave:** M5 U4 y U5 toman como caso práctico los asistentes Alcance Legal.

---

### MÓDULO 6 — Ecosistema y automatización real
**Objetivo:** Conectar herramientas en flujos de trabajo reales. Reemplaza el M5 original abstracto.

| Unidad | Título | Estado |
|---|---|---|
| M6 U1 | El ecosistema IA del abogado argentino 2025 | reescribir M5 U1 |
| M6 U2 | n8n y Make: automatización sin código para el estudio | nuevo |
| M6 U3 | NotebookLM: base de jurisprudencia con IA | nuevo |
| M6 U4 | Perplexity y búsqueda jurídica verificable | nuevo |
| M6 U5 | Harvey, CoCounsel y herramientas IA jurídicas del mercado | nuevo |

---

### MÓDULO 7 — Agentes IA para el estudio jurídico
**Objetivo:** Diseñar sistemas multi-agente sin programar. Módulo nuevo, el más diferenciador.

| Unidad | Título | Estado |
|---|---|---|
| M7 U1 | Qué es un agente IA y cómo piensa un flujo agentico | nuevo |
| M7 U2 | Agente de investigación jurídica: de la consulta al informe | nuevo |
| M7 U3 | Agente de redacción: primer borrador al escrito final | nuevo |
| M7 U4 | Agente de seguimiento de causas y alertas procesales | nuevo |
| M7 U5 | Orquestación: múltiples agentes colaborando en un caso | nuevo |

---

### MÓDULO 8 — Privacidad, ética y secreto profesional con IA
**Objetivo:** El módulo que desbloquea la compra. Aborda la principal objeción del abogado.

| Unidad | Título | Estado |
|---|---|---|
| M8 U1 | ¿ChatGPT entrena con mis datos? Qué pasa realmente con tu información | nuevo |
| M8 U2 | Secreto profesional y IA: marco legal argentino | nuevo |
| M8 U3 | Cómo usar IA con información sensible de clientes (sin riesgo) | nuevo |
| M8 U4 | Instancias privadas, Enterprise tiers y opciones locales | nuevo |
| M8 U5 | Ética profesional y IA: deontología en la era de los LLM | nuevo |

---

### MÓDULO 9 — Comunicación, posicionamiento y contenido
**Objetivo:** Construir presencia digital y autoridad de marca con IA. Expande M7 original.

| Unidad | Título | Estado |
|---|---|---|
| M9 U1 | IA para comunicación con clientes: claridad sin perder rigor | existente (M7 U1) — ok |
| M9 U2 | LinkedIn jurídico: estrategia de contenido con IA | nuevo |
| M9 U3 | Blog y SEO jurídico asistido por IA | nuevo |
| M9 U4 | Newsletter legal: automatización y segmentación | nuevo |
| M9 U5 | Video y voz: herramientas IA para abogados en cámara | nuevo |

---

### MÓDULO 10 — Tu sistema propio: construí y escalá
**Objetivo:** Cierre accionable. El estudiante sale con un plan concreto de 90 días y su primer herramienta propia.

| Unidad | Título | Estado |
|---|---|---|
| M10 U1 | Diagnóstico de tu práctica actual con IA | existente (M8 U1) — expandir |
| M10 U2 | Diseñá tu sistema mínimo viable | existente (M8 U1) — expandir |
| M10 U3 | Caso práctico: Alcance Legal como modelo de herramienta propia | nuevo |
| M10 U4 | Plan de 90 días: implementación paso a paso | nuevo |
| M10 U5 | Escalá: de usuario a arquitecto de IA jurídica | nuevo |

**Vínculo clave:** M10 U3 es el puente explícito con Alcance Legal Penal y Civil.

---

## Conteo de unidades

| Módulo | Unidades | Existentes | Nuevas |
|---|---|---|---|
| M1 | 5 | 3 | 2 |
| M2 | 7 | 6 | 1 |
| M3 | 5 | 4 | 1 |
| M4 | 4 | 3 | 1 |
| M5 | 5 | 1 | 4 |
| M6 | 5 | 1 | 4 |
| M7 | 5 | 0 | 5 |
| M8 | 5 | 0 | 5 |
| M9 | 5 | 1 | 4 |
| M10 | 5 | 2 | 3 |
| **Total** | **51** | **21** | **30** |

---

## Vínculos con el ecosistema — touchpoints a implementar

### Dentro del curso → Alcance Legal
- M1 U4: mencionar Alcance Legal como ejemplo de herramienta con Claude
- M5 U4 y U5: caso práctico con la arquitectura de Alcance Legal
- M10 U3: unidad dedicada a Alcance Legal como modelo

### Dentro de Alcance Legal → Curso
- Panel del widget: "Aprendé a construir herramientas como esta → [Legal Intelligence System]"
- Footer de respuesta: link al curso cuando la consulta supera el alcance del asistente

### Studio Lamas → Todo
- Hero: presenta los 3 productos como ecosistema
- CTA diferenciado: "Formarte" (→ LIS) / "Consultar" (→ Alcance Legal)

---

## Notas de desarrollo

- Al agregar módulos nuevos (M9, M10, etc.) crear páginas en `src/pages/` y rutas en `src/App.jsx` y `scripts/generate-routes.js`
- El ModuleGrid en Overview.jsx necesita actualizarse de 8 a 10 módulos cuando se agreguen
- La navegación (Navigation.jsx) necesita actualizarse con los nuevos módulos
- Mantener consistencia visual: cada módulo tiene su `--mod-color` y SVG illustration
