// PokéAPI: "https://pokeapi.co/"

const base = "https://pokeapi.co/api/v2/";

/**
 * send() is last function for call API
 * @return `Json` If success
 * @return `undefined` If failure
 */
async function send({ method, path, data }) {
  const opts = { method, headers: {} };

  if (data) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${base}/${path}`, opts);
    return await response.json();
  } catch (err) {
    return undefined;
  }
}

/**
 * get() provide a HTTP Request by `GET`
 * @param `path` is `string`
 * @return `Json` If success
 * @return `undefined` If failure
 */
export function get(path) {
  return send({ method: "GET", path });
}

/**
 * post() provide a HTTP Request by `POST`
 * @param `path` is `string`
 * @param `data` is `object`, match in API acceptable
 * @return `Json` If success
 * @return `undefined` If failure
 */
export function post(path, data) {
  return send({ method: "POST", path, data });
}
