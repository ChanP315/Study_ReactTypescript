export const ransdomStringGenerator = () => {
    const randomString = Array.from(Array(10), () => Math.floor(Math.random() * 36).toString(36)).join("");
    return randomString;
}; //orderNum 만들때 사용