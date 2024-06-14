webpack: (
  config,
  { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
) => {
  config.externals.push({
    fs: "browserify-fs",
  });
};
