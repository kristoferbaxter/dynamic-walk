export function exported() {
  import('./import.mjs').then(module => module.method);
}