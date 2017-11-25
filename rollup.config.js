export default {
	entry: 'dist/index.js', // target file for rollup to process;
	dest: 'dist/bundles/buildmotion-logging.umd.js', // location where processed scripts are saved
	sourceMap: true, // option adds a sourcemap inside the generated file
	format: 'umd', // 
	moduleName: 'buildmotionLogging',
	external: ['@angular/core', '@angular/common'],
	globals: {
		'@angular/core': 'ng.core',
		'@angular/core/Injectable': 'ng.core/Injectable/prototype',
		'@angular/core/Optional': 'ng.core/Optional/prototype',
		'@angular/common': 'ng.common',
	}
}
