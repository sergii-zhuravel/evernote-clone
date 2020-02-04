export function get(url) {
  return fetch(url).then(response => response.json());
  // .then(data => console.log(data));
}

export function post(url, obj) {
  return fetch(url, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: "POST",
    body: JSON.stringify(obj)
  });
}

export function del(url) {
  fetch(url, {
    method: "DELETE"
  });
}
