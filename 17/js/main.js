// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д.

/**
 * Global env
 * Record: {}
 * Parent: null
 */

/**
 * [[Environment]] = Global env
 */

function func() {
    /**
     * func env
     * Record: {}
     * Parent: Global env
     */

    let sum = 0;

    /**
     * func env
     * Record: {sum: 0}
     * Parent: Global env
     */

    return num => console.log(sum += num)
}

/**
 * Global env
 * Record: {func: <function>}
 * Parent: null
 */

const sum = func();
/**
 * sum env
 * Record: {}
 * Parent: func env
 */

sum(3);
/**
 * sum env
 * Record: {num: 3}
 * Parent: func env
 */

/**
 * func env
 * Record: {sum: 3}
 * Parent: Global env
 */

sum(5);
/**
 * sum env
 * Record: {num: 5}
 * Parent: func env
 */

/**
 * func env
 * Record: {sum: 8}
 * Parent: Global env
 */

sum(20);
/**
 * sum env
 * Record: {num: 20}
 * Parent: func env
 */

/**
 * func env
 * Record: {sum: 28}
 * Parent: Global env
 */