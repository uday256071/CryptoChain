const cryptoHash = require('./crypto-hash');

describe('cryptoHash()',()=>{  

    it('generates a SHA-256 hashed output',()=>{
        expect(cryptoHash('uday')).toEqual('50f2e526cf41a5072ac8076f1e0b03e7b4d17e21853d24a685bac477bcebdca6')
    });
    it('produces the same hash with the same input arguments in any order',()=>{
        expect(cryptoHash('one','two','three')).toEqual(cryptoHash('three','one','two'));
    });
    it('produces a unique hash when properties have changed on an input',()=>{
        const foo={};
        let originalHash=cryptoHash(foo);
        foo['a']="a";
        expect(cryptoHash(foo)).not.toEqual(originalHash);
    });
});