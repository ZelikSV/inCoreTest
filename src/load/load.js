const clientsBase = [];


export function load(){
    fetch('./clients.json')
  .then(response => response.json())
  .then(data => clientsBase.push(data)
  );
  return clientsBase;
}