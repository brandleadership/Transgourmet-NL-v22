const path = require('path');

const {
    BuildConfig,
    ModuleConfig,
    WebpackConfigBuilder,
    Version,
    DesignType,
} = require('@bsi-cx/design-build');

const emailBuildConfig = new BuildConfig()
    .withName('Transgourmet Email')
    .withVersion('2.0.0')
    .withDesignType(DesignType.EMAIL)
    .withTargetVersion(Version.CX_1_3)
    .withRootPath(path.resolve(__dirname, 'templates', 'email'))
    .withPropertiesFilePath('properties.js')
    .withAdditionalFilesToCopy(
        {
            from: path.resolve(__dirname, 'resources', 'whitelabel'),
            to: 'img',
        },
        {
            from: path.resolve(
                __dirname,
                'resources',
                'whitelabel',
                'playstore'
            ),
            to: 'img/playstore',
        },
        {
            from: path.resolve(__dirname, 'templates', 'email', 'styles'),
            to: 'static/styles',
        },
        {
            from: path.resolve(
                __dirname,
                'templates',
                'email',
                'thumbnail.png'
            ),
            to: 'static/thumbnail.png',
        }
    );

module.exports = WebpackConfigBuilder.fromConfigs(
    emailBuildConfig
        .clone()
        .withName('TG-NL-cx-22.0-email-de')
        .withPropertiesFilePath('lang-de.js'),
    emailBuildConfig
        .clone()
        .withName('TG-NL-cx-22.0-email-fr')
        .withPropertiesFilePath('lang-fr.js'),
    emailBuildConfig
        .clone()
        .withName('TG-NL-cx-22.0-email-it')
        .withPropertiesFilePath('lang-it.js')
);
