import { expect } from "chai";
import { resolveTextBlockInfo } from './index';

describe('Text should be work fine.', () => {
    let result = {};
    it('Should be return object for arguments true, 0, 2', () => {
        const start = new Date().getTime()
        console.time()
        result = resolveTextBlockInfo(true, 0, 2);
        console.timeEnd()
        expect(result).to.deep.equal({ image: true, dfRow: 'none', tcRow: 'normal', })
    });
    it('Should be return object for arguments true, 0, 3', () => {
        result = resolveTextBlockInfo(true, 0, 3);
        expect(result).to.deep.equal({ image: true, dfRow: 'none', tcRow: 'more', })
    });
    it('Should be return object for arguments true, 0, 0', () => {
        result = resolveTextBlockInfo(true, 0, 0);
        expect(result).to.deep.equal({ image: true, dfRow: 'none', tcRow: 'none', })
    });
    it('Should be return object for arguments true, 1, 1', () => {
        result = resolveTextBlockInfo(true, 1, 1);
        expect(result).to.deep.equal({ image: true, dfRow: 'normal', tcRow: 'normal', })
    });
    it('Should be return object for arguments true, 0, 1', () => {
        result = resolveTextBlockInfo(true, 0, 1);
        expect(result).to.deep.equal({ image: true, dfRow: 'none', tcRow: 'normal', })
    });
    it('Should be return object for arguments true, 1, 2', () => {
        result = resolveTextBlockInfo(true, 1, 2);
        expect(result).to.deep.equal({ image: true, dfRow: 'normal', tcRow: 'more', })
    });
    it('Should be return object for arguments true, 2, 0', () => {
        result = resolveTextBlockInfo(true, 2, 0);
        expect(result).to.deep.equal({ image: true, dfRow: 'normal', tcRow: 'none', })
    });
    it('Should be return object for arguments true, 2, 1', () => {
        result = resolveTextBlockInfo(true, 2, 1);
        expect(result).to.deep.equal({ image: true, dfRow: 'normal', tcRow: 'none', })
    });
    it('Should be return object for arguments true, 3, 0', () => {
        result = resolveTextBlockInfo(true, 3, 0);
        expect(result).to.deep.equal({ image: true, dfRow: 'more', tcRow: 'none', })
    });
    it('Should be return object for arguments true, 3, 1', () => {
        result = resolveTextBlockInfo(true, 3, 1);
        expect(result).to.deep.equal({ image: true, dfRow: 'more', tcRow: 'none', })
    });


    it('Should be return object for arguments false, 0, 0', () => {
        result = resolveTextBlockInfo(false, 0, 0);
        expect(result).to.deep.equal({ image: false, dfRow: 'none', tcRow: 'none', })
    });
    it('Should return false, normal, none when no image, df=10, tc=0', () => {
        result = resolveTextBlockInfo(false, 10, 0);
        expect(result).to.deep.equal({ image: false, dfRow: 'normal', tcRow: 'none', })
    });
    it('Should be return object for arguments false, 11, 0', () => {
        result = resolveTextBlockInfo(false, 11, 0);
        expect(result).to.deep.equal({ image: false, dfRow: 'more', tcRow: 'none', })
    });
    it('Should be return object for arguments false, 7, 3', () => {
        result = resolveTextBlockInfo(false, 7, 3);
        expect(result).to.deep.equal({ image: false, dfRow: 'normal', tcRow: 'normal', })
    });
    it('Should be return object for arguments false, 8, 3', () => {
        result = resolveTextBlockInfo(false, 8, 3);
        expect(result).to.deep.equal({ image: false, dfRow: 'more', tcRow: 'normal', })
    });
    it('Should be return object for arguments false, 8, 4', () => {
        result = resolveTextBlockInfo(false, 8, 4);
        expect(result).to.deep.equal({ image: false, dfRow: 'more', tcRow: 'more', })
    });
    it('Should be return object for arguments false, 7, 4', () => {
        result = resolveTextBlockInfo(false, 7, 4);
        expect(result).to.deep.equal({ image: false, dfRow: 'normal', tcRow: 'more', })
    });

});