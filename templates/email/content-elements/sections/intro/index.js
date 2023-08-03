const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("nl-intro")
  .withLabel("Intro Formatted Text")
  .withIcon(Icon.TEXT)
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formattedText
      .withLabel("Formatted Text")
      .withHtmlEditorConfig(
        require("../../../../../configs/editor/formatted-text")
      )
  );
