const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: 'development',

    watch: true,

    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    module: {
        rules: [

            {
                test: /\.(png|jpeg|jpg|gif|svg)$/i,
                type: 'asset/resource'
            },

            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            },

        ]
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'images/[name]-[hash][ext]'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home',
            filename: 'index.html',
            template: './public/home.html'
        }),

        new HtmlWebpackPlugin({
            title: 'About us',
            filename: 'about_us.html',
            template: './public/about_us_page.html'
        }),

        new HtmlWebpackPlugin({
            title: 'Sermons',
            filename: 'sermons.html',
            template: './public/sermons_page.html'
        }),

        new HtmlWebpackPlugin({
            title: 'Blog',
            filename: 'blog.html',
            template: './public/blog_page.html'
        }),

        new HtmlWebpackPlugin({
            title: 'Blog post',
            filename: 'blog_post.html',
            template: './public/blog_post_page.html'
        }),

        new HtmlWebpackPlugin({
            title: 'Sermon event',
            filename: 'sermon_event.html',
            template: './public/sermon_event_page.html'
        }),

        new HtmlWebpackPlugin({
            title: 'Contact',
            filename: 'contact.html',
            template: './public/contact_page.html'
        }),

        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
};