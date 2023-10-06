const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("nl-brochure-3-col")
  .withLabel("Übersicht Promotionen")
  .withIcon(Icon.THREE_COLUMNS)
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("Titel")
      .withHtmlEditorConfig(
        require("../../../../../configs/editor/formatted-text")
      )
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("nl-brochure-3-bild-row")
      .withAllowedElements(require("../../elements/nl-brochure-3-bild-row"))
  );
