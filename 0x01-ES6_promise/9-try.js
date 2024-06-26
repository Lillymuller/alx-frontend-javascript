export default function guardrail(mathFunction) {
  const arrary = [];

  try {
    arrary.push(mathFunction());
  } catch (err) {
    arrary.push(err.toString());
  } finally {
    arrary.push('Guardrail was processed');
  }
  return arrary;
}
