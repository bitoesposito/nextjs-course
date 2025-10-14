export default function UserProfilePage(props) {
    const { username } = props;
    return <h1>{username}</h1>
}

export async function getServerSideProps(context) {
    const { params, res, req } = context;

    return {
        props: {
            username: 'vito'
        }
    }
}