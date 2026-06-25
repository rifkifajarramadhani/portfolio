export function withBase(path = '') {
  const base = import.meta.env.BASE_URL
  const normalized = base.endsWith('/') ? base : `${base}/`
  if (!path) return normalized
  return `${normalized}${path.replace(/^\//, '')}`
}
