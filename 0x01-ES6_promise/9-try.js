export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const res = mathFunction();
    queue.push(res);
  } catch ({ name, message }) {
    queue.push(`${name}: ${message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
