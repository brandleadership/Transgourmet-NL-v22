// element.nl-text.label=Text – Überschrift
// element.nl-text.icon=heading
// element.nl-text.parts.plain-text[0].label=Lead
// element.nl-text.parts.formatted-text.label=Titel
// element.nl-text.parts.plain-text[1].label=Ausgabe
// element.nl-text.parts.formatted-text.html-editor-config=full

const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("nl-text-black")
  .withLabel("Überschrift")
  .withDescription("Schwarz")
  .withIcon(Icon.HEADING)
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("Titel")
      .withHtmlEditorConfig(
        require("../../../../../configs/editor/formatted-text")
      ),
    cx.part.plainText.withLabel("Ausgabe"),
    cx.part.plainText.withLabel("Lead")
  );
