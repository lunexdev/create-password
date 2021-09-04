module.exports = function generate(length = new Number) {
    if(typeof length !== 'number') throw new Error('please enter number for type is length')
    const rand = () => Math.random().toString(36).substr(2);
    const pass = (length = 8) => (rand() + rand() + rand() + rand()).substr(0, length);
    return pass(length)
}