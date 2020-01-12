let iframe, container, explanation;

export async function bootstrap() {
  container = document.getElementById("challenge-one");
  container.style.width = "100%";
  container.style.height = "700px";

  iframe = document.createElement("iframe");
  iframe.innerHTML = `<fieldset><legend>Vanilla</legend></fieldset>`;
  iframe.setAttribute("src", "./src/challenge-one/index.html");
  iframe.style.width = `100%`;
  iframe.style.height = `659px`;
  iframe.style.display = "none";
  iframe.frameBorder = "0";

  container.appendChild(iframe);
}

export async function mount() {
  iframe.style.display = "block";
  container.style.display = "block";
}

export async function unmount() {
  iframe.style.display = "none";
  iframe.style.border = ``;
  container.style.display = "none";
  cleanupInspector();
}

function cleanupInspector() {
  container.style.border = ``;
  if (explanation) {
    container.removeChild(explanation);
    explanation = null;
  }
}
