const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("header-prodega")
  .withLabel("Header Prodega")
  .withIcon(Icon.TEXT)
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Preview Text"))
  .withDropzones(
    cx.dropzone
      .withDropzone("logo-2")
      .withAllowedElements(
        require("../../elements/nl-header-logo"),
        require("../../elements/nl-header-logo-transgourmet"),
        require("../../elements/nl-header-logo-transgourmet_prodega")
      ),
    cx.dropzone
      .withDropzone("nl-preheader-2")
      .withAllowedElements(require("../../elements/nl-preheader"))
  );
