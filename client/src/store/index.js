import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#2D2C2D',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './Logo.png',
  fullDecal: './Logo.png',
});
export default state;
