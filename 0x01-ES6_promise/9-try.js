export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const res = mathFunction();
    queue.push(res);
  } catch ({ message }) {
    queue.push(message);
  }
  queue.push('Guardrail was processed');
  return queue;
}
