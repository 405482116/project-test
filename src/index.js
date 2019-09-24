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

const NORMAL = 'normal';
const NONE = 'none';
const MORE = 'more';

const MAX_ALL_ROWS = 10;
const IMG_ROWS = 8;
const MIN_SECOND_ROWS_NO_IMG = 7;

/**
 * 
 * When has image(8 rows), content left 2 rows.
 * First display default content, then display T&C content.
 * Total 10 rows, T&C max 3 rows, Default expand other rows.
 * When content rows greater than limit rows then return MORE 
 * otherwise return NORMAL.
 * @param {boolean} image Has image or not
 * @param {int} dfRow Default row lines
 * @param {int} tcRow T&C row lines
 */
export const resolveTextBlockInfo = (image, dfRow, tcRow) => {
    if (image) {
        const objCSS = calcRowCSS(IMG_ROWS, 0, dfRow, tcRow);
        return { image, dfRow: objCSS.firstCSS, tcRow: objCSS.secondCSS}
    } else {
        const objCSS = calcRowCSS(0, MIN_SECOND_ROWS_NO_IMG, tcRow, dfRow);
        return { image, dfRow: objCSS.secondCSS, tcRow: objCSS.firstCSS}
    }
}

/**
 * Could export this function as main function
 * @param {int} imgRows Image row lines
 * @param {int} minSecondRows Min second row lines
 * @param {int} firstRows First row lines
 * @param {int} secondRows Second row lines 
 */
function calcRowCSS(imgRows, minSecondRows, firstRows, secondRows) {
    const maxTxtRows = MAX_ALL_ROWS - imgRows;
    const maxFirstRows = maxTxtRows - minSecondRows;
    const firstCSS = compareRowsToCSS(firstRows, maxFirstRows);
    const secondCSS = secondCalcRows(firstRows, secondRows, maxTxtRows, maxFirstRows);
    return { firstCSS, secondCSS}
}

function compareRowsToCSS(rows, limit) {
    if (limit < 1 || rows < 1) return NONE;
    return rows > limit ? MORE : NORMAL;
}

function secondCalcRows(firstRows, secondRows, maxAllRows, maxFirstRows) {
    const secondLimit = maxAllRows - Math.min(firstRows, maxFirstRows);
    return compareRowsToCSS(secondRows, secondLimit);
}
