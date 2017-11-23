export default {
	entry: 'dist/index.js', // target file for rollup to process;
	dest: 'dist/bundles/buildmotion-logging.umd.js', // location where processed scripts are saved
	sourceMap: true, // option adds a sourcemap inside the generated file
	format: 'umd', // 
    moduleName: 'buildmotionLogging',
    external: [ 'typescript-dotnet-commonjs/System/Compare' ],
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common',
	}
}
