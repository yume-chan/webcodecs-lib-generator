# Webcodecs lib generator

Similiar to https://github.com/dogben/TypeScript-WebCodecs-generator, this is another fork of https://github.com/microsoft/TypeScript-DOM-lib-generator to generate a d.ts for specified IDL.

## How does it work

1. TypeScript-DOM-lib-generator now uses [@w3c/webref](https://github.com/w3c/webref) as source of IDLs. w3c/webref has already included [`webcodecs.idl`](https://github.com/w3c/webref/blob/%40webref/idl%402.6.1/ed/idl/webcodecs.idl).
2. TypeScript-DOM-lib-generator then uses [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) to filter out exporimental features (have less then two browser engines support them).

So:

1. Only include `webcodecs.idl` when loading from @w3c/webref
2. Disable @mdn/browser-compat-data to preserve it
3. Several small tweaks to remove other non-needed types
