const path = require("path");

const {
  BuildConfig,
  ModuleConfig,
  WebpackConfigBuilder,
  Version,
  DesignType,
} = require("@bsi-cx/design-build");

const emailBuildConfig = new BuildConfig()
  .withName("Transgourmet Email")
  .withVersion("2.0.0")
  .withDesignType(DesignType.EMAIL)
  .withTargetVersion(Version.CX_1_3)
  .withRootPath(path.resolve(__dirname, "templates", "email"))
  .withPropertiesFilePath("properties.js");

module.exports = WebpackConfigBuilder.fromConfigs(
  emailBuildConfig
    .clone()
    .withName("TG-NL-cx-22.0-email-de")
    .withPropertiesFilePath("lang-de.js"),
  emailBuildConfig
    .clone()
    .withName("TG-NL-cx-22.0-email-fr")
    .withPropertiesFilePath("lang-fr.js"),
  emailBuildConfig
    .clone()
    .withName("TG-NL-cx-22.0-email-it")
    .withPropertiesFilePath("lang-it.js")
);
