const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("nl-content-container")
  .withLabel("News")
  .withIcon(Icon.TEXT_WITH_IMAGE)
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Bild"),
    cx.part.formattedText
      .withLabel("Text")
      .withHtmlEditorConfig(
        require("../../../../../configs/editor/formatted-text")
      ),

    cx.part.link.withLabel("CTA Button")
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("button")
      .withAllowedElements(require("../../elements/nl-button"))
  );
