function getName(arr) {
  return arr.map((i) => i.name).join(", ");
}

function getDomian(arr) {
  return arr.join(", ");
}

export { getName, getDomian };
