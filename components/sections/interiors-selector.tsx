"use client";

export function InteriorsSelector() {
  return (
    <div aria-label="Available residence type preview states" className="visual-tabs" role="group">
      <span aria-current="true" className="visual-tab visual-tab--active">1 Bedroom · sample image</span>
      <button aria-describedby="two-bedroom-unavailable" className="visual-tab" disabled type="button">2 Bedrooms · unavailable</button>
      <p className="control-note" id="two-bedroom-unavailable">A second approved image and copy are not available yet.</p>
    </div>
  );
}
