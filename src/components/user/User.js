const User = ({user, lift}) => {

    return (
        <div>
            <div>{user.id}.{user.name}</div>
            <button onClick={()=>lift(user)}>Post information</button>
        </div>
    );
};

export default User;