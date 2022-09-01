import { animate, scroll } from "motion";

/**
 * In this demo, the circular progress indicator will start
 * when an <article /> element starts to leave the top of
 * the viewport and complete when it enters the bottom of the viewport.
 */

scroll(animate("#a-progress", { strokeDasharray: ["0,1", "1,1"] }), {
  target: document.getElementById("a-article")
});

scroll(animate("#b-progress", { strokeDasharray: ["0,1", "1,1"] }), {
  target: document.getElementById("b-article")
});
