# expensify-app
Budgeting Application:  
1. Add expenses
2. Edit expenses
3. Keep track of expenses

## Dependencies Installation
[Documentation to Moment](https://momentjs.com/)
```JavaScript
yarn add moment@latest
```
[Documentation to react-dates](https://github.com/airbnb/react-dates)
```JavaScript
yarn add react-dates@latest
```
[link to react-addons-shallow-compare](https://www.npmjs.com/package/react-addons-shallow-compare)
```JavaScript
yarn add react-addons-shallow-compare@latest
```

## Usage
```JavaScript
yarn run dev-server
```
## To run playground files, change entry path in the webpack.config:
```JavaScript
module.exports = {
    entry: './src/playground/reduxTest.js',
    }
``` 
 When changing entry point in webpack, close current server and:
```JavaScript - **Restart Your Server**
yarn run dev-server
```  
## Development

## Testing via Jest
> testing components / dom animation with enzyme and raf
```
yarn add enzyme@3.0.0 enzyme-adapter-react-16@1.0.0 raf@3.3.2
```

> Install locally 
```JavaScript
yarn add jest@latest
```
> Add the following to the package.json file and automatically watch for updates
```JavaScript
scripts": {
        "test": "jest --watch"
        }
```
> Add following plugin to .babelrc file
```JavaScript
"test": [
        "jest"
    ]
```
> Running test manually
```JavaScript
yarn test -- --watchAll
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Beta-23/expensify-app.git. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License



## Code of Conduct

Everyone interacting in the ad-chain project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/Beta-23/ad-chain/blob/master/CODE_OF_CONDUCT.md).