const divItems = document.getElementById(items);

const getItems = async () => {
    try {
        items = await fetch ('http://localhost:4000/items')
        console.log(items)
        divItems = items.map()
    }
    catch {
        console.log(error)
    } 
}