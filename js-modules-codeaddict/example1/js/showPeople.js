// Default exports.

const showPeople = (people) => {
    const newPeople = people.map((person) => {
        console.log(person);
        const {firstName, job} = person;
        return `<p>${firstName}: <strong>${job}</strong></>`
    }).join('');
    return newPeople;
};

export default showPeople