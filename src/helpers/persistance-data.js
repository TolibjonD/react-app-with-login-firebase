export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, data)
    } catch (error) {
        console.log(`An error occured with savind data: ${error}`);
        
    }
}