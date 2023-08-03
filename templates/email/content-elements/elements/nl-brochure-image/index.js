const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("nl-brochure-image")
  .withLabel("Brochure Image")
  .withIcon(Icon.IMAGE)
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Link"),
    cx.part.image.withLabel("Image"));
