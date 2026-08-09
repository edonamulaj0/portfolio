/**
 * Fixed ambient backdrop. Three slow-drifting colour fields behind a veil,
 * replacing the v1 hologram photo — pure CSS, no image payload, no WebGL.
 */
export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora__layer aurora__layer--one" />
      <div className="aurora__layer aurora__layer--two" />
      <div className="aurora__layer aurora__layer--three" />
      <div className="aurora__veil" />
      <div className="aurora__grain" />
    </div>
  );
}
