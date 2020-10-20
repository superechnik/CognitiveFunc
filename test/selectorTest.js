require('app-module-path').addPath('../CognitiveFunc');
var lib = require('Lib/lib.js');

const assert = require('assert');describe('Responds to !Fi', () => {
 it('should not be null', () => {
        assert(lib.selector('!Fi') != null && lib.selector('!Fi') != 'dunno' && lib.selector != undefined);
    });
});

const assert2 = require('assert');describe('Responds to !xxx', () => {
 it('should be dunno', () => {
        assert2(lib.selector('!Foo') == 'dunno');
    });
});
