const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("nl-bild")
  .withLabel("Bild – Werbeanzeige")
  .withIcon(Icon.IMAGE)
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.plainText.withLabel("Bildunterschrift"),
    cx.part.image.withLabel("Bild")
  );
