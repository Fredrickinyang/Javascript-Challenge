values = () => {

    array = [1, 2, 1, 2, 3, 4, 3, 4, 'b', 's'];

    unique = [...new Set(array)];

    console.log(unique)
}
values();