const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("nl-header-logo-transgourmet")
  .withLabel("Logo Transgourmet")
  .withIcon(Icon.TEXT)
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Logo"));
