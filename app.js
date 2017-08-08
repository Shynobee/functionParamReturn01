/**********exo 1*****************/
/**
 * représente une fonction d'alerte
 * @function test
 */

var one = function test() {
    //alert("on va binomé");
}
one();
/********exo 2*************/
/**
 * représente une fonction avec un console.log "hellooo ... its me ..."
 * @function hello
 */
var two = function hello() {
    console.log("hellooo ... its me ...");
    //  console.log(two()) infinite loop 
}
two();
console.log(two()) 

/********exo 3*********/
/**
 * représente une fonction retour sur le paramètre p qui vaut "hello"
 * @function dummyReturn
 * @param p
 */
var p = "hello";
var three = function dummyReturn(p) {
    //console.log("ici");
    return p;
}
var x = three(p);
console.log(x);
console.log(three()); //max call stack !?
three();

/********exo 4**********/
/**
 * représente une fonction retour "bar" puis un console.log de la fonction avec x en variable 
 * @function foo
 */
function foo() {
    return "bar";
}
var x = foo();
console.log(x);
console.log(foo()); //max call stack !?
foo();

/*******exo 5********/
/**
 * représente une fonction de retour avec nom en parametre qui est égale a "walid", puis un console.log de la fonction avec x en variable
 * @function helloWho
 * @param nom
 */
var nom = "walid";
function helloWho(nom) {
    return "hello" + " " + nom;
}
var x = helloWho(nom);
console.log(x);
console.log(helloWho(nom)); //max call stack !?
helloWho();

/************exo 6****************/
/**
 * représente une fonction avec n en parametre qui vaut 42, la fonction execute une condition if else sur le type de n qui retourne true ou false
 * @function isNumber
 * @param n
 */
var n = 42;
function isNumber(n) {
    if (typeof (n) === "number") {
        return true;
    } else {
        return false;
    }
}
var x = isNumber(n)
console.log(isNumber(n));
isNumber();

/**********exo 7***************/
/**
 * représente une fonction similaire a celle de l'exo 8 (voir au dessus) sauf quelle retourne l'inverse du parametre (ici false retourne true avec l'opérateur "!")
 * puis un console.log de la variable x est fait qui est égale a la fonction
 * @function contraire
 * @param b
 */
var b = false;
function contraire(b) {
    if (typeof(b) !== "boolean") {
        return new Error ("please pass boolean");
    } else {
        return !b
    }
}
var x = contraire(b)
console.log(x);
contraire();

/**********exo 8****************/
/**
 * représente une fonction qui prend p en parametre qui vaut 42, des condition if et else if sont mise en place pour ce que vaut p
 * puis un console.log est fait pour savoir ce qu'il vaut ainsi que sont contraitre (true/false)
 * @function isEmpty
 * @param p 
 */
var p = 42;
function isEmpty(p) {
    if (p === "") {
        console.log("ici");
        return true;
    } else if (Array.isArray(p) && p.length === 0) {
        return true;
    } else if (typeof(p) === "object" && Object.getOwnPropertyNames(p).length === 0) {
        return true;
    } else {
        return false;
    } 
}
isEmpty();
console.log(isEmpty(p));
var x = !isEmpty(p);
console.log(x);

/*********exo 9***********/
/**
 * représente une fonction qui prend en paramètre un selecteur css (s) et une classe (css), cette fonction va récupéré les classes css
 * sur les élément html puis en rajouté une qui est egale a css ("jose") puis les "pousser" dans un tableau afficher en console.log
 * @function addCSSClass  
 * @param s
 * @param css
 */
function addCSSClass(s, css) {
    var tab1 = [];
    document.querySelectorAll(s).forEach(function (elem) {
        elem.classList.contains(css);
        elem.classList.add(css);
        tab1.push(elem);
        console.log(elem)
    });
    return tab1;
}

window.onload = function () {
    console.log(addCSSClass(".music-genre", "jose"));
    /**********exo 10***************/
    /**
     * la derniere fonction qui n'en n'ait pas une mais juste un console.log qui combine les deux dernieres fonction,
     * et affiche si les classes on etait mise ainsi qu'un booléen pour confirmé 
     */
    console.log(isEmpty(addCSSClass(".music-genre", "jose")))
} 