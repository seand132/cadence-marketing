// Server Component — no 'use client' directive
// Content passed to this component must always be server-controlled data (JSON.stringify output).
// User input must never be passed directly to the schema prop.

interface JsonLdProps {
  schema: Record<string, unknown>
  id?: string
}

export function JsonLd({ schema, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      suppressHydrationWarning
    >
      {JSON.stringify(schema)}
    </script>
  )
}
