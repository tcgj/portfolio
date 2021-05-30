exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions
}) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.(vert|frag|glsl)/i,
                    loader: 'raw-loader',
                    exclude: /node_modules/
                }
            ]
        }
    })
}