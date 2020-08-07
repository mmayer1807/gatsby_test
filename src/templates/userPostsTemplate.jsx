import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Axios from "axios";

class UserPostsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const userID = this.props.userID;

        Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
            .then((response) => {
                this.setState({ data: response.data });
            });

        return this.state;
    }

    handleSubmit(event) {
        console.log("submitted");
        /*
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));
        */
        Axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                title: 'Spaß',
                body: 'Spaß mit Zahlen',
                userID: 1
            }
        });
    }

    render() {
        const { data } = this.state;
        const { userID } = this.props;

        return (
            <Layout>
                <SEO title="Blog Posts" />
                <h1>Posts von User {userID}</h1>
                <ul>
                    {data.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
                <button name="submitButton" onClick={this.handleSubmit}>
                    Poste irgendetwas
                </button>
            </Layout>
        )
    }
}

export default ({ pageContext: { userID } }) => (
    <UserPostsComponent userID={userID} />
);