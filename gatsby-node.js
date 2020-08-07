exports.createPages = async ({ actions: {createPage}}) => {
    const allUsers = ['1', '3'];

    // creates Pages that lists all posts of a particular user
    allUsers.forEach((userID) => {
        createPage({
            path: `/posts/user${userID}/`,
            component: require.resolve('./src/templates/userPostsTemplate.jsx'),
            context: {userID},
        });
    });
};
