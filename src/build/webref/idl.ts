import { listAll as listAllCss } from "@webref/css";
import { listAll as listAllIdl } from "@webref/idl";
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

export async function getWebidls(): Promise<Map<string, string>> {
  const idl = await listAllIdl();
  const css = await listAllCss();

  const map = new Map<string, string>();
  for (const [key, file] of Object.entries(idl)) {
    if (key === 'webcodecs') {
      const text = await fs.readFile(path.resolve(url.fileURLToPath(import.meta.url), '..', '..', '..', '..', 'inputfiles', 'webcodecs.idl'), 'utf8');
      map.set(key, text);
    }
  }
  // for (const [key, data] of Object.entries(css)) {
  //   const properties = Object.keys(data.properties);
  //   if (properties.length) {
  //     addToStringMap(map, key, generateWebIdlFromCssProperties(properties));
  //   }
  // }
  return map;
}
