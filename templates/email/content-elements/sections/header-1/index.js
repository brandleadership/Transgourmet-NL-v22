const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("header-transgourmet-prodega")
  .withLabel("Header TG & PR")
  .withIcon(Icon.TEXT)
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Preview Text"))
  .withDropzones(
    cx.dropzone
      .withDropzone("logo")
      .withAllowedElements(
        require("../../elements/nl-header-logo"),
        require("../../elements/nl-header-logo-transgourmet"),
        require("../../elements/nl-header-logo-transgourmet_prodega")
      ),
    cx.dropzone
      .withDropzone("nl-preheader")
      .withAllowedElements(require("../../elements/nl-preheader"))
  );
