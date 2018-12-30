import QRScanner from './QRScanner.html';

const app = new QRScanner({
	target: document.body,
});

window.app = app;

export default app;