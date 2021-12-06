 /* Determine if either Cat A or Cat B will catch the mouse first. If both can catch the mouse
 at the same time, the Mouse will escape. */

/**
 * @param {number} x - Cat A's position.
 * @param {number} y - Cat B's position.
 * @param {number} z - Mouse's position.
 * @returns {string} Either who catches the mouse or mouse escapes.
 */

function catAndMouse(x, y, z) {
    const cat_A_distance = (z - x) < 0 ?  (z - x) * -1 : (z - x);
    const cat_B_distance = (z - y) < 0 ?  (z - y) * -1 : (z - y);

    if (cat_A_distance < cat_B_distance) {
        return 'Cat A'
    } else if (cat_A_distance > cat_B_distance) {
        return 'Cat B'
    } else if (cat_A_distance === cat_B_distance) {
        return 'Mouse C'
    }
}

