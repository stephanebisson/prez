basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = false;

singleRun = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
