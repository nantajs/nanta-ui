export function isProdMode(): boolean {
  return import.meta.env.PROD === 'prod' || import.meta.env.PROD === 'production';
}