### global setup

The following code was executed into command line with node v5.0.0:

```bash
npm init
```

... spam enter a ton of times ...


```bash
npm install browserify babel babel-cli gulp -g

```

### local setup

We then create src directory, and install some local packages:

```bash

npm install react react-dom
```


### Then we install babelify....


#### edit package.json

```javascript
// inserted into package.json ...
  "browserify": {
    "transform": [
      [
        "babelify",
        {
          "stage": 0
        }
      ]
    ]
  },
```


#### install babelify

```bash
npm install babelify --save-dev
```

#### last, install new babel dependencies

ran into some errors, ended up having to install additional babel dependencies due to the most recent update to v6.

```bash
npm install babel-plugin-transform-es2015-modules-commonjs babel-preset-react --save-dev
```

#### add .babelrc file
contents:
```javascript
{
  "presets": ["react"],
  "plugins": ["transform-react-jsx", "transform-es2015-modules-commonjs"]
}
```


now I can build using

```
gulp[enter]
```

:D

