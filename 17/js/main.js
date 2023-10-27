// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д.

/**
 * 1
 * Global env
 * Record: {}
 * Parent: null
 */

/**
 * 3
 * [[Environment]] = Global env
 */

function func() {

    /**
     * 5
     * func env
     * Record: {}
     * Parent: Global env
     */

    let sum = 0;

    /**
     * 6
     * func env
     * Record: {sum: 0}
     * Parent: Global env
     */

    /**
     * 10
     * func env
     * Record: {sum: 3}
     * Parent: Global env
     */

    /**
     * 13
     * func env
     * Record: {sum: 8}
     * Parent: Global env
     */

    /**
     * 16
     * func env
     * Record: {sum: 16}
     * Parent: Global env
     */

    /**
     * 7
     * [[Environment]] = func env
     */

    return function(num) {

        /**
         * 9
         * anonymous env
         * Record: {num: 3}
         * Parent: func env
         */

        /**
         * 12
         * anonymous env
         * Record: {num: 5}
         * Parent: func env
         */

        /**
         * 15
         * anonymous env
         * Record: {num: 20}
         * Parent: func env
         */

        sum += num;

        return sum;
    }

}

/**
 * 4
 * Global env
 * Record: {func: <function>}
 * Parent: null
 */

const sum = func();

/**
 * 8
 * Global env
 * Record: {func: <function>, sum: <function>}
 * Parent: null
 */

const result1 = sum(3);

/**
 * 11
 * Global env
 * Record: {func: <function>, sum: <function>, result1: 3}
 * Parent: null
 */

const result2 = sum(5);

/**
 * 14
 * Global env
 * Record: {func: <function>, sum: <function>, result1: 3, result2: 8}
 * Parent: null
 */

const result3 = sum(20);

/**
 * 17
 * Global env
 * Record: {func: <function>, sum: <function>, result1: 3, result2: 8, result3: 28}
 * Parent: null
 */

console.log(result1);
console.log(result2);
console.log(result3);