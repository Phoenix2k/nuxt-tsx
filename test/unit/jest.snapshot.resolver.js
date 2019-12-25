/**
 * Snapshot resolver
 * @link https://jestjs.io/docs/en/configuration.html#snapshotresolver-string
 */
module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace('__tests__', '__snapshots__') + snapshotExtension,
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath.replace('__snapshots__', '__tests__').slice(0, -snapshotExtension.length),
  testPathForConsistencyCheck: 'some/__tests__/example.test.js'
};
