//Türkçe Karakter destekli sıralama yapar, iki boyutlu diziler için uygulanabilir.
//Turkish character supported sorting, it can be applied for two-dimensional arrays.
Array.prototype.sirala = function (key) {
    return this.sort(function (a, b) {
        return a[key].localeCompare(b[key], 'tr', { sensitivity: 'base' });
    });
};
