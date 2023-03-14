function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Alexandro',
    lastName: 'Manihing'
};

const element = (
    <h1>
{formatName(user)}
    </h1>
);

function Tiga() {
    return (
        element
);
}

export default Tiga;