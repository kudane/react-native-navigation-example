// PokéAPI: "https://pokeapi.co/"

const base = "https://pokeapi.co/api/v2/";

async function send({ method, path, data }) {
  const opts = { method, headers: {} };

  if (data) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(data);
  }

  const response = await fetch(`${base}/${path}`, opts);
  const json = await response.text();
  try {
    return JSON.parse(json);
  } catch (err) {
    return json;
  }
}

export function get(path) {
  return send({ method: "GET", path });
}

export function post(path, data) {
  return send({ method: "POST", path, data });
}
