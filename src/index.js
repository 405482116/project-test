/**
 * @description
 * Resolve the text block information
 * 
 * @param {Boolean} image  Has image dispaly.
 * @param {Number} dfRow   Default content text row line.
 * @param {Number} tcRow   T&C content text row line.
 * 
 * @returns {Object} { image: {Boolean}, dfRow: {Possible value nomarl|more|none}, tcRow: {Possible value nomarl|more|none}}
 */

export const resolveTextBlockInfo = (image, dfRow, tcRow) => {
    if (dfRow < 1 && tcRow < 1) {
        return { image, dfRow: 'none', tcRow: 'none', }
    }
    return image ? resolveHasImage(image, dfRow, tcRow) : resolveNoImage(image, dfRow, tcRow);
    // if (image) {
    //     if (dfRow === 1 && tcRow < 2) {
    //         return { image, dfRow: 'normal', tcRow: 'normal', }
    //     }
    //     if (dfRow === 2 && tcRow < 1) {
    //         return { image, dfRow: 'normal', tcRow: 'none', }
    //     }
    //     if (dfRow > 2) {
    //         return { image, dfRow: 'more', tcRow: 'none', }
    //     }
    //     if (dfRow < 1 && tcRow <= 2) {
    //         return { image, dfRow: 'none', tcRow: 'normal', }
    //     }
    //     if (dfRow < 1 && tcRow > 2) {
    //         return { image, dfRow: 'none', tcRow: 'more', }
    //     }
    //     if (dfRow <= 2 && tcRow >= 1) {
    //         return { image, dfRow: 'normal', tcRow: 'more', }
    //     }
    // } else {
    //     if (tcRow <= 0 && dfRow > 10) {
    //         return { image, dfRow: 'more', tcRow: 'none', }
    //     }
    //     if (tcRow <= 0 && dfRow <= 10) {
    //         return { image, dfRow: 'normal', tcRow: 'none', }
    //     }
    //     if (dfRow > 7 && tcRow > 3) {
    //         return { image, dfRow: 'more', tcRow: 'more', }
    //     }
    //     if (dfRow > 7 && tcRow <= 3) {
    //         return { image, dfRow: 'more', tcRow: 'normal', }
    //     }
    //     if (dfRow <= 7 && tcRow > 3) {
    //         return { image, dfRow: 'normal', tcRow: 'more', }
    //     }
    //     if (dfRow <= 7 && tcRow <= 3) {
    //         return { image, dfRow: 'normal', tcRow: 'normal', }
    //     }
    // }
}
const resolveHasImage = (image, dfRow, tcRow) => {
    if (dfRow === 1 && tcRow < 2) {
        return { image, dfRow: 'normal', tcRow: 'normal', }
    }
    if (dfRow === 2 && tcRow < 1) {
        return { image, dfRow: 'normal', tcRow: 'none', }
    }
    if (dfRow > 2) {
        return { image, dfRow: 'more', tcRow: 'none', }
    }
    if (dfRow < 1 && tcRow <= 2) {
        return { image, dfRow: 'none', tcRow: 'normal', }
    }
    if (dfRow < 1 && tcRow > 2) {
        return { image, dfRow: 'none', tcRow: 'more', }
    }
    if (dfRow <= 2 && tcRow >= 1) {
        return { image, dfRow: 'normal', tcRow: 'more', }
    }
}
const resolveNoImage = (image, dfRow, tcRow) => {
    if (tcRow <= 0 && dfRow > 10) {
        return { image, dfRow: 'more', tcRow: 'none', }
    }
    if (tcRow <= 0 && dfRow <= 10) {
        return { image, dfRow: 'normal', tcRow: 'none', }
    }
    if (dfRow > 7 && tcRow > 3) {
        return { image, dfRow: 'more', tcRow: 'more', }
    }
    if (dfRow > 7 && tcRow <= 3) {
        return { image, dfRow: 'more', tcRow: 'normal', }
    }
    if (dfRow <= 7 && tcRow > 3) {
        return { image, dfRow: 'normal', tcRow: 'more', }
    }
    if (dfRow <= 7 && tcRow <= 3) {
        return { image, dfRow: 'normal', tcRow: 'normal', }
    }
}