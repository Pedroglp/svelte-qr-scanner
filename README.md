# QRScanner

This is a simple QRScanner using `instascan` and Svelte.


## Get started

Install the dependencies...

```js
import QRScanner from 'QRScanner'
```

In html

```html
<QRScanner height="100px" width="100px" opts=.../>>
```

# Props

* width - Scanner video width.
* height - Scanner video height.
* cameras - List of cameras available.
* opts - instascan opts.

# Methods

* scan() - Manually activates scan
* stop() - Stops scanner
* changeCamera(camera) - Changes the current camera, if no paramaters passed it changes to the next available camera.

## Events

* scan - Fired when the Scanner reads a QR Code, returns the content as event payload.
* scannerStarted - Fired when 

