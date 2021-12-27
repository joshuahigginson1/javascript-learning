const apiUrl = 'https://randomuser.me/api/';

const getUser = async () => {
    const response = await fetch(apiUrl);
    const responseData = await response.json();

    // Easier to destructure this line by line.
    const personObject = responseData.results[0];
    const {phone:personPhone, email:personEmail} = personObject;
    const personImg = personObject.picture.large;
    const personPassword = personObject.login.password;
    const { first:personFirstName, last:personLastName } = personObject.name;
    const personAge = personObject.dob.age;
    const {number:personHouseNumber, name:personHouseName} = personObject.location.street;

    return {
        personPhone,
        personEmail,
        personImg,
        personPassword,
        personAge,
        personName: `${personFirstName} ${personLastName}`,
        personAddress: `${personHouseNumber} ${personHouseName}`,
    }

}

export default getUser