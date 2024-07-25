# Traffic Maps

## Project setup

Don't forget to set up [html-core](https://github.com/ScreenfeedDigitalSignage/html-core) with

```
git submodule update --init
```

And then you can run

```
yarn install
```

(You may also need to `cd core` and then run `yarn` one more time.)

### Compiles and hot-reloads for development

```
yarn vite
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Supported Options

// Table

| Parameter  | Values                    |
| ---------- | ------------------------- |
| animate    | true, false               |
| bgColor    | color                     |
| textColor  | color                     |
| logoColor  | color                     |
| fontFamily | string                    |
| bgPattern  | "dots", "circles", "none" |

There may also be sponsorText, introText, titleText, fallbackText, and logoUrl.
Maybe also skipIntro, and snapshot.
animationQuality and duration don't seem relevant. I suppose quality could matter for intro.
